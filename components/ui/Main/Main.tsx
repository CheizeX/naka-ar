import React, { Dispatch, FC, SetStateAction } from "react";
import { FirstSection } from "../FirstSection/FirstSection";
import { useAppSelector } from "../../../redux/hook/hooks";
import { StyledMain } from "./main.styled";
import { ThemeInterface } from "../../../themes/themes.interface";
import { NavBar } from "../NavBar/NavBar";
interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}
export const Main: FC<Props> = ({ darkMode, setDarkMode }) => {
  return (
    <StyledMain darkMode={darkMode}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <FirstSection />
    </StyledMain>
  );
};
