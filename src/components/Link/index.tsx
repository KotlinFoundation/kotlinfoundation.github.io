import { useTextStyles } from '@rescui/typography';
import { LinkParams } from '@rescui/typography/lib/create-text-cn';
import cn from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import { AnchorHTMLAttributes, useMemo } from 'react';
import { useSiteURL } from '../../utlis/hooks';
import * as styles from './link.module.css';

function checkExternal(link, base = null) {
  const url = new URL(link, base);
  const baseUrl = new URL(base || '');

  return !(url.hostname === '' || url.hostname === baseUrl.hostname);
}

type IProps = LinkParams & {
  standalone?: boolean;
  activeClassName?: string;
};

export function Link({
  className,
  hardness = null,
  standalone = false,
  external = null,
  mode = null,
  ...props
}: IProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const base = useSiteURL();
  const textCn = useTextStyles();

  const { href } = props;

  const isExternal = useMemo(() => checkExternal(href, base), [href, base]);

  const externalDecorator = useMemo(
    () => (typeof external === 'boolean' ? external : isExternal),
    [external, isExternal]
  );

  const linkClassName = textCn('rs-link', {
    external: externalDecorator,
    mode: standalone ? 'standalone' : mode || 'classic',
    hardness: hardness || 'hard',
  });

  const commonProps = {
    ...props,
    className: cn(className, linkClassName),
  };

  if (isExternal || href.startsWith('mailto:')) {
    return <a target="_blank" rel="noopener noreferrer" {...commonProps} />;
  }

  return <GatsbyLink to={href} {...commonProps} />;
}

type LinkStandaloneProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkStandalone = (props: LinkStandaloneProps) => (
  <Link {...props} className={styles.typeStandalone} standalone={true} />
);
