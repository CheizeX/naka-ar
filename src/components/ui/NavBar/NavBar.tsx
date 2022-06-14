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
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export const NavBar: FC<INavBarProps> = ({ darkMode, setDarkMode }) => {
  const dispatch = useAppDispatch();

  const { data, status } = useSession();
  console.log('[data]', data);
  console.log('[status]', status);

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
        {status === 'authenticated' ? (
          <>
            <BiUserCircle size={40} />
            <MdOutlineAccountBalanceWallet size={40} />
            <Link href="/api/auth/sigout">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
                style={{
                  border: '2px solid #fff',
                  padding: '10px',
                  margin: '5px',
                  borderRadius: '5px',
                }}>
                Sign Out
              </a>
            </Link>
          </>
        ) : (
          <>
            <Link href="/api/auth/login">
              <a
                style={{
                  border: '2px solid #fff',
                  padding: '10px',
                  margin: '5px',
                  borderRadius: '5px',
                }}>
                Login
              </a>
            </Link>
            <Link href="/api/auth/signin">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
                style={{
                  border: '2px solid #fff',
                  padding: '10px',
                  margin: '5px',
                  borderRadius: '5px',
                }}>
                Sign In
              </a>
            </Link>
          </>
        )}

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
