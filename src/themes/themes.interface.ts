import { Dispatch, SetStateAction } from 'react';
import { Theme } from '../redux/slices/current-theme/current-theme';

export interface ThemeInterface {
  currentTheme: Theme.LIGHT | Theme.DARK;
  setCurrentTheme: Dispatch<SetStateAction<Theme>>;
}
