import {memo, useState} from "react";
import cn from "classnames";
import {graphql, useStaticQuery} from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {useTextStyles} from "@jetbrains/kotlin-web-site-ui/out/components/typography";

import * as style from "./Person.module.css";

export function Person({avatar = false, position = null, size = null, className = null, name, company, onHover}) {
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
        [style.personAvatar]: avatar,
        [style[`person_size_${size}`]]: Boolean(size),
        [style[`person_position_${position}`]]: Boolean(position),
    });

    return (
        <div className={classes}>
            <div className={style.photoWrap} onMouseLeave={onHover}>
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

export const PurePerson = memo(Person);