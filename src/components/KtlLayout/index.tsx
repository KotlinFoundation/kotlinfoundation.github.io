import cn from "classnames";
import '@jetbrains/kotlin-web-site-ui/out/components/layout/index.css';
import * as styles from "./ktlLayout.module.css";

export function KtlLayout({ className=null, center=true, spacing=false, addExtraSpace=false, ...props }) {
    return <div {...props}
        className={cn(className, 'ktl-layout', {
            'ktl-layout--center': center,
            'ktl-layout--spacing': spacing,
            [styles.extraSpace]: addExtraSpace,
        })}
    />;
}