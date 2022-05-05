import type { NextPage } from 'next';
import { MainLayout } from '../components/layouts/MainLayout';
// import { Button } from "@nextui-org/react";
import { Dispatch, SetStateAction } from 'react';
interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}
const Home: NextPage<Props> = ({ darkMode, setDarkMode }) => {
  return (
    <MainLayout title="URBano" darkMode={darkMode} setDarkMode={setDarkMode} />
  );
};

export default Home;
