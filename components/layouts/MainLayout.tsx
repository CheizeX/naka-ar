import { Dispatch, FC, SetStateAction } from 'react';
import Head from 'next/head';
import { Main } from '../ui';

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
        <title>{title || `URBano`}</title>
        <meta
          name="author"
          content="Matías Gallego, Ramiro Cortés y Ezequiel Rivas"
        />
        <meta name="description" content={`${title} - URBano Argentina`} />
        <meta name="keywords" content={`${title}, URBano`} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main darkMode={darkMode} setDarkMode={setDarkMode} />
      {children}
    </>
  );
};
