import cn from 'classnames';

export function cls(props, ...classes: cn.ArgumentArray) {
  return { ...props, className: cn(props.className, ...classes) };
}
