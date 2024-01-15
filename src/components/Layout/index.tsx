import '@rescui/typography/lib/font-jb-sans-auto.css';
import '@jetbrains/kotlin-web-site-ui/out/components/typography/index.css';
import '@jetbrains/kotlin-web-site-ui/out/components/grid/index.css';
import '@jetbrains/kotlin-web-site-ui/out/components/cta-block/index.css';
import cn from 'classnames';
import { ReactNode } from 'react';
import './typography.css';
import './heading.css';
import { ContactUs } from '../ContactUs';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Markdown } from '../Markdown';
import { SEO } from '../Seo';
import * as styles from './layout.module.css';
import { LocationContext } from './locationContext';

export enum LayoutSize {
  Regular = 'regular',
  Narrow = 'narrow',
  Wide = 'wide',
}

interface MDLayoutProps {
  title?: string;
  layout?: LayoutSize;
  contactUs?: boolean;
}

export interface BaseLayoutProps {
  location: Location;
  children: null | ReactNode;
  socialImage?: string;
}

type MarkdownLayoutProps = BaseLayoutProps & {
  pageContext?:
    | undefined
    | {
        frontmatter?: MDLayoutProps;
      };
};

type LayoutProps = BaseLayoutProps & MDLayoutProps;

export function Layout({ children, location, title, layout, socialImage = null, contactUs }: LayoutProps) {
  const content =
    layout === LayoutSize.Wide ? (
      children
    ) : (
      <RegularLayout className={LayoutSize.Narrow === layout && styles.narrow}>{children}</RegularLayout>
    );

  return (
    <LocationContext.Provider value={location}>
      <SEO title={title} image={socialImage} />
      <Header />
      <div className={styles.layout}>
        {content}
        {contactUs && <ContactUs />}
        <Footer />
      </div>
    </LocationContext.Provider>
  );
}

type RegularLayoutProps = {
  className?: string;
  children: ReactNode;
};

function RegularLayout({ className, children }: RegularLayoutProps) {
  return <div className={cn(className, 'ktl-layout ktl-layout--center ktl-layout--spacing')}>{children}</div>;
}

export function MarkdownLayout({ children, ...props }: LayoutProps) {
  return (
    <Layout {...props}>
      <Markdown>{children}</Markdown>
    </Layout>
  );
}

export function PageMarkdownLayout({ pageContext, ...props }: MarkdownLayoutProps) {
  const title = pageContext?.frontmatter?.title;
  const layout = pageContext?.frontmatter?.layout ?? LayoutSize.Narrow;
  const contact = pageContext?.frontmatter?.contactUs ?? false;

  return <MarkdownLayout {...props} title={title} layout={layout} contactUs={contact} />;
}

export default PageMarkdownLayout;
