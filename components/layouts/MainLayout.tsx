import { Dispatch, FC, SetStateAction } from "react";
import Head from "next/head";
import { Main } from "../ui";

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
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Main darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
    </>
  );
};
