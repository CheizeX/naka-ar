import { Dispatch, FC, SetStateAction } from "react";
import Head from "next/head";
// import { Button, CssBaseline } from "@nextui-org/react";
import { Main, NavBar } from "../ui";
import { Theme } from "../../redux/slices/current-theme/current-theme";

interface Props {
  title?: string;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const MainLayout: FC<Props> = ({
  children,
  title,
  setDarkMode,
  darkMode,
}) => {
  return (
    <>
      <Head>
        <title>{title || `Nakamoto AR`}</title>
        <meta name='author' content='Matías Gallego y Ezequiel Rivas' />
        <meta
          name='description'
          content={`${title} - Fundación Nakamoto Argentina`}
        />
        <meta
          name='keywords'
          content={`${title}, Nakamoto, fundación, crypto, bitcoin`}
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Main darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
    </>
  );
};
