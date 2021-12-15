import cn from "classnames";
import * as style from "./Person.module.css";
import {graphql, StaticQuery} from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const Person = ({ mascot = null, size= null, className = null, name, company }) => <StaticQuery
    query={graphql`
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
    `}
    render={({ images }) => {
        const file = images.edges.find(({node}) => node.relativePath === `persons/${name}.png`);

        return <div className={cn(style.person, 'vcard', className, {
            [style[`person_size_${size}`]]: Boolean(size),
        })}>
            <div className={cn(style.photoWrap, {
                [style[`photoWrap_mascot_${mascot}`]]: Boolean(mascot),
            })}>
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
    }}
/>;
