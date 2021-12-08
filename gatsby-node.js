exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPreset({
        name: 'babel-preset-gatsby',
        options: {
            reactRuntime: 'automatic', // remove required import React in TSX
        },
    });
}
