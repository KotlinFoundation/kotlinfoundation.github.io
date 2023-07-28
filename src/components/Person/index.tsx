import {HTMLAttributes, ReactNode} from "react";
import cn from "classnames";
import {graphql, useStaticQuery} from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";

import * as style from "./Person.module.css";

export type PersonProps = {
    className?: string,
    avatar?: boolean | 'asIdle',
    variation: number,
    size?: 'xl',
    xlWidth?: 'wide' | 'ultra-wide',
    name: ReactNode,
    company: ReactNode,
} & HTMLAttributes<HTMLDivElement>;

export function Person({ className, avatar, variation, size, xlWidth, name, company, ...props }: PersonProps) {
    const textCn = useTextStyles();
    const { images }= useStaticQuery(graphql`
      query {
        images: allFile(filter: {relativePath: {glob: "persons/*.{png,jpg}"}}) {
          edges {
            node {
              relativePath
                name
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
            }
          }
        }
    `);

    const file = images.edges.find(
        ({node}) =>
            [`persons/${name}.jpg`, `persons/${name}.png`].includes(node.relativePath)
    );

    const classes = cn(style.person, 'vcard', className, {
        [style.personAvatar]: Boolean(avatar),
        [style.personAvatarIdle]: avatar === 'asIdle',
        [style[`person_size_${size}`]]: Boolean(size),
        [style[`person_size_xl_${xlWidth}`]]: size === 'xl' && Boolean(xlWidth),
        [style[`person_variation_${variation}`]]: Boolean(variation),
    });

    return (
        <div className={classes} {...props}>
            <div className={style.photoWrap} >
                <GatsbyImage
                    className={style.photo}
                    image={file.node.childImageSharp.gatsbyImageData}
                    alt={`${name}'s face.`}
                />
            </div>
            <p className={style.info}>
                <span className={cn('ktl-h4', 'n')}>{name}</span>
                <span className={cn(textCn('ktl-text-2'), 'org')}>{company}</span>
            </p>
        </div>
    );
}
