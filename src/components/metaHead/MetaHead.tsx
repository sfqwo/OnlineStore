import React from 'react';
import Head from 'next/head';
// import icon180 from '@assets/image/favicon/apple-touch-icon.png';
// import icon32 from '@assets/image/favicon/favicon-32x32.png';
// import icon16 from '@assets/image/favicon/favicon-16x16.png';
// import iconsvg from '@assets/image/favicon/safari-pinned-tab.svg';

export const MetaHead: React.FC<{
    title: string,
    description: string
}> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    {/* <link rel="apple-touch-icon" sizes="180x180" href={icon180.src} />
    <link rel="icon" type="image/png" sizes="32x32" href={icon32.src} />
    <link rel="icon" type="image/png" sizes="16x16" href={icon16.src} />
    <link rel="mask-icon" href={iconsvg.src} color="#E95D2A" />
    <meta name="msapplication-TileColor" content="#E95D2A" /> */}
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
);

