import {FC, ReactNode} from "react";

import "@rescui/typography/lib/font-inter.css";
import "@jetbrains/kotlin-web-site-ui/dist/typography.css";
import "@jetbrains/kotlin-web-site-ui/dist/grid.css";
import "@jetbrains/kotlin-web-site-ui/dist/ctaBlock.css";

import * as styles from "./layout.module.css";

import { SEO } from "../Seo";
import { Header } from "../Header";
import { Footer } from "../Footer";

export interface LayoutProps {
    title: string;
    children: null | ReactNode;
    whiteHeader?: boolean;
}

export const Layout: FC<LayoutProps> = ({
    title,
    children,
    whiteHeader = false,
}) => {
    return (
        <>
            <SEO title={title} />
            <Header whiteBg={whiteHeader} />

            <div className={styles.layout}>
                {children}

                <Footer/>
            </div>
        </>
    );
};

export default Layout;
