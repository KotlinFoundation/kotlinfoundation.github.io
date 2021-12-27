import {FC} from "react";
import Layout, {LayoutProps} from "./index";

export const Markdown : FC<LayoutProps> = ({ children, ...props }) => <Layout {...props}>
    <div className="ktl-offset-top-xl ktl-offset-bottom-xl">
        {children}
    </div>
</Layout>

export default Markdown;
