import cn from "classnames";
import '@jetbrains/kotlin-web-site-ui/out/components/layout/index.css';

export function KtlLayout({ className=null, center=true, spacing=false, ...props }) {
    return <div {...props}
        className={cn('ktl-layout', {
            'ktl-layout--center': center,
            'ktl-layout--spacing': spacing,
        })}
    />;
}