import '@/theme/index.css';

import type { AppProps } from 'next/app';
import ResponsiveNavBar from '../components/nav-components/responsive-nav-bar';
import { createGlobalStyle } from 'styled-components';

import AppLayout from '@/layouts/AppLayout';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    font-family: TTCommonsPro,ui-sans-serif,sans-serif;
    // font-size: 1.125rem;
    font-size: 16px;
    line-height: 1.5
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const navItems = [
    {
      id: '2', label: 'Campuses', subItems: [
        {
          id: '2.1',
          label: 'Amsterdam',
        },
        {
          id: '2.2',
          label: 'Rotterdam',
        },
      ]
    },
  ];

  return (
    <AppLayout>
      <GlobalStyle />
      <ResponsiveNavBar navItems={navItems} />
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
