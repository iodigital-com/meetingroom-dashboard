/* eslint-disable @next/next/no-sync-scripts */
import '@/theme/index.css';

import type { AppProps } from 'next/app';
import ResponsiveNavBar from '../components/nav-components/responsive-nav-bar';
import styled from 'styled-components';

import AppLayout from '@/layouts/AppLayout';
import Head from 'next/head';

const Body = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: TTCommonsPro, ui-sans-serif, sans-serif;
  font-size: 1rem;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const navItems = [
    {
      id: '2',
      label: 'Campuses',
      subItems: [
        {
          id: '2.1',
          label: 'Amsterdam',
        },
        {
          id: '2.2',
          label: 'Rotterdam',
        },
      ],
    },
  ];

  return (
    <AppLayout>
      <Head>
        <title>Meeting Room Webapp</title>
        <link rel="icon" type="image/x-icon" href="/io.svg" />
        <meta
          name="description"
          content="Welcome to iO meeting room app where you can see available meeting rooms in real time"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Meeting Room Webapp" />
        <meta
          property="og:description"
          content="Welcome to iO meeting room app where you can see available meeting rooms in real time"
        />
        <meta property="og:image" content="/io.svg" />
      </Head>
      <Body>
        <ResponsiveNavBar navItems={navItems} />
        <Component {...pageProps} />
        {/* <script src="utils/zoom.js" /> */}
      </Body>
    </AppLayout>
  );
}

export default MyApp;
