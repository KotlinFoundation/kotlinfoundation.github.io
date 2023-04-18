const {join, relative, resolve} = require("path");
const { stat, readFile, writeFile } = require('fs').promises;
const path = require("path");
const {createHash} = require("crypto");
const { sync } = require('glob');
const {createFilePath} = require("gatsby-source-filesystem");

const MD_EXTS = ['md', 'mdx'];
const postTemplate = resolve(`./src/components/Post/index.tsx`);
const layoutTemplate = resolve(`./src/components/Layout/index.tsx`);

function isBlogPost(url) {
    const match = url.match(/^\/news\/(.*)$/);
    return match ? Boolean(match[1]) : false;
}

exports.onCreateBabelConfig = ({actions}) => {
    actions.setBabelPreset({
        name: 'babel-preset-gatsby',
        options: {
            reactRuntime: 'automatic', // remove required import React in TSX
        },
    });
};

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions
    const { componentPath } = page;

    if (MD_EXTS.some(ext => componentPath.endsWith(`.${ext}`))) {
        deletePage(page);

        const isPost = isBlogPost(page.path);
        const component = isPost ? postTemplate : layoutTemplate;

        createPage({
            ...page,
            component: `${component}?__contentFilePath=${componentPath}`,
        });
    }
}


exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (["Mdx", "MarkdownRemark"].some(type => node.internal.type === type)) {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: 'isPost',
            node,
            value: isBlogPost(value)
        });

        createNodeField({
            name: 'contentRelativePath',
            node,
            value: relative(join(__dirname, 'src'), node.fileAbsolutePath || node.internal.contentFilePath)
        });

        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
}

exports.onPostBuild = async () => {
    const publicPath = path.join(__dirname, 'public');
    const files = sync(`${publicPath}/**/*.{html,js}`);
    const hash = createHash(`sha256`)
        .update(Date.now().toString())
        .digest(`hex`);

    return Promise.all(
        files.map(async file => {
            const stats = await stat(file);
            if (stats.isFile()) {
                console.log(
                    `[onPostBuild] Replacing page-data.json references in the following files:${file}...`
                );

                const content = await readFile(file, 'utf8');
                const result = content
                    .replace(/page-data.json/g, `page-data.json?${hash}`)
                    .replace(/app-data.json/g, `app-data.json?${hash}`);
                await writeFile(file, result, 'utf8');
            }
        })
    );
};
