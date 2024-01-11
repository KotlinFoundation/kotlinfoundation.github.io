import { createContext } from 'react';

import { MenuItems } from './MenuItem';

export type ToggleValue = boolean | undefined;

export type NavigationContextType = {
  menuItems: MenuItems;
  isOpen: boolean;
  toggle: (value?: ToggleValue) => void;
};

export const NavigationContext = createContext<NavigationContextType>(null as NavigationContextType);
