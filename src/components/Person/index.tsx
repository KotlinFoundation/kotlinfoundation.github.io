import cn from "classnames";
import * as style from "./Person.module.css";
import {graphql, useStaticQuery} from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export function Person({size = null, className = null, name, company}) {
    const { images }= useStaticQuery(graphql`
      query {
        images: allFile(filter: {relativePath: {glob: "persons/*.png"}}) {
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

    const file = images.edges.find(({node}) => node.relativePath === `persons/${name}.png`);

    const classes = cn(style.person, 'vcard', className, {
        [style[`person_size_${size}`]]: Boolean(size),
    });

    return (
        <div className={classes}>
            <div className={style.photoWrap}>
                <GatsbyImage
                    className={style.photo}
                    image={file.node.childImageSharp.gatsbyImageData}
                    alt={`${name}'s face.`}
                />
            </div>
            <p className={style.info}>
                <span className={cn('ktl-h4', 'n')}>{name}</span>
                <span className={cn('ktl-text-2', 'org')}>{company}</span>
            </p>
        </div>
    );
}
