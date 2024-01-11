import Button from '@rescui/button';
import { CloseIcon, HamburgerIcon } from '@rescui/icons';
import cn from 'classnames';
import { useCallback, useContext } from 'react';
import { NavigationContext } from '../../../Navigation';

import * as style from './pane-mobile.module.css';

type PaneMobileProps = {
  className?: string;
  sidebar?: boolean;
  children?: JSX.Element;
};

export function PaneMobile({ className = null, sidebar = false, children = null }: PaneMobileProps) {
  const { toggle } = useContext(NavigationContext);
  const isClose = sidebar;

  const onIconClick = useCallback(() => {
    if (isClose) {
      toggle(false);
    } else {
      toggle();
    }
  }, [isClose, toggle]);

  return (
    <div className={cn(className, style.pane)}>
      {children}
      <Button
        aria-label="toggle menu"
        mode="clear"
        className={style.trigger}
        onClick={onIconClick}
        icon={isClose ? <CloseIcon /> : <HamburgerIcon />}
        iconPosition="left"
      />
    </div>
  );
}
