import { FC, useEffect } from 'react';
import useLocalStorage from '../../../hooks/use-local-storage';
import { useAppDispatch } from '../../../redux/hook/hooks';
import {
  setCurrentTheme,
  Theme,
} from '../../../redux/slices/current-theme/current-theme';
import {
  StyledNavBar,
  StyledRightSideOfNavBar,
  StyledToggleDrakMode,
} from './navBar.styled';
import { BsMoon, BsSun } from 'react-icons/bs';
import { GiEvilTower } from 'react-icons/gi';
import { BiUserCircle } from 'react-icons/bi';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { INavBarProps } from './navBar.interface';

export const NavBar: FC<INavBarProps> = ({ darkMode, setDarkMode }) => {
  const dispatch = useAppDispatch();

  const [currentThemeInLs, setCurrentThemeInLs] = useLocalStorage(
    'currentTheme',
    '',
  );

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
    setCurrentThemeInLs(`${!darkMode ? 'dark' : ''}`);
    dispatch(setCurrentTheme(darkMode ? Theme.LIGHT : Theme.DARK));
  };

  useEffect(() => {
    if (currentThemeInLs) {
      if (currentThemeInLs === 'dark') {
        setDarkMode(true);
        dispatch(setCurrentTheme(Theme.DARK));
      } else {
        setDarkMode(false);
        dispatch(setCurrentTheme(Theme.LIGHT));
      }
    }
  }, [currentThemeInLs, dispatch, setDarkMode]);

  return (
    <StyledNavBar>
      <span>
        <GiEvilTower />
        URBano
      </span>
      <StyledRightSideOfNavBar>
        <BiUserCircle size={40} />
        <MdOutlineAccountBalanceWallet size={40} />
        <StyledToggleDrakMode
          onClick={handleThemeChange}
          darkMode={darkMode}
          setDarkMode={setDarkMode}>
          {darkMode ? <BsSun /> : <BsMoon />}
        </StyledToggleDrakMode>
      </StyledRightSideOfNavBar>
    </StyledNavBar>
  );
};
