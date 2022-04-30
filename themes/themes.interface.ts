import { Dispatch, SetStateAction } from "react";

export enum Themes {
  LIGHT = "light",
  DARK = "dark",
}
export interface ThemeInterface {
  currentTheme: Themes;
  setCurrentTheme: Dispatch<SetStateAction<Themes>>;
}
