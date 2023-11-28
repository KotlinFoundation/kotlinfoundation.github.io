import cn from 'classnames';
import { useCallback, useRef } from 'react';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import * as styles from './sidebar-popup.module.css';

type SidebarPopupProps = {
  className?: string;
  classNameContent?: string;
  children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
};

export function SidebarPopup({
  className = null,
  classNameContent = null,
  children,
  isOpen,
  onClose,
}: SidebarPopupProps) {
  const ref = useRef(null);

  const onToggleClick = useCallback(
    (e) => {
      if (e.currentTarget == e.target) {
        onClose();
      }
    },
    [onClose]
  );

  const classes = cn(className, styles.popup, { [styles.close]: !isOpen });

  const disableProps: {
    tabIndex?: number;
    role?: string;
  } = {};

  if (!isOpen) {
    disableProps.tabIndex = -1;
    disableProps.role = 'none';
  }

  return (
    <div className={classes} onClick={onToggleClick} {...disableProps}>
      {isOpen && <RemoveScrollBar />}
      <div ref={ref} className={cn(classNameContent, styles.content)}>
        {children}
      </div>
    </div>
  );
}
