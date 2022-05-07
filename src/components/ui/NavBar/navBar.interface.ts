import { Dispatch, SetStateAction } from 'react';

export interface INavBarProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}
