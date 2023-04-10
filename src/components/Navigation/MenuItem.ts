export type MenuItemOnly = 'desktop' | 'mobile';

export type MenuItem = {
  url: string;
  title: string;
  only?: MenuItemOnly;
};

export type MenuItems = MenuItem[];

export function isPlatformOnly(item: MenuItem, only: MenuItemOnly) {
  return item.only !== undefined ? only === item.only : true;
}
