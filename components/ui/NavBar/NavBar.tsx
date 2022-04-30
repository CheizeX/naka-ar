import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import useLocalStorage from "../../../hooks/use-local-storage";
import { useAppDispatch, useAppSelector } from "../../../redux/hook/hooks";
import {
  setCurrentTheme,
  Theme,
} from "../../../redux/slices/current-theme/current-theme";
import { StyledNavBar } from "./navBar.styled";
import Switch from "../shared/Switch/Switch";
// import { WiDaySunny } from "react-icons/wi";
import { BsMoon, BsSun } from "react-icons/bs";

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const NavBar: FC<Props> = ({ darkMode, setDarkMode }) => {
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector(
    (state) => state.ui.currentThemeReducer
  );

  const [isDark, setIsDark] = useState(false);

  const [currentThemeInLs, setCurrentThemeInLs] = useLocalStorage(
    "currentTheme",
    ""
  );

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
    setCurrentThemeInLs(`${!darkMode ? "dark" : ""}`);
    dispatch(setCurrentTheme(darkMode ? Theme.LIGHT : Theme.DARK));
  };

  useEffect(() => {
    if (currentThemeInLs) {
      if (currentThemeInLs === "dark") {
        setDarkMode(true);
        dispatch(setCurrentTheme(Theme.DARK));
      } else {
        setDarkMode(false);
        dispatch(setCurrentTheme(Theme.LIGHT));
      }
    }
  }, []);

  return (
    <StyledNavBar>
      <span>Naka</span>
      <Switch
        onChange={handleThemeChange}
        checked={darkMode}
        gradientStart='#f093fb'
        gradientEnd='#f5576c'
        backgroundColor='#37373777'>
        <BsSun color='yellow' />
        <BsMoon color='aquamarine' />
      </Switch>
      <span>Moto</span>
    </StyledNavBar>
  );
};
