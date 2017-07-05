import Head from 'next/head'

export default props => (
  <Head>
    <meta name="theme-color" content="#222222"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:200" rel="stylesheet" />
    <style>
      {`
        body {
          overflow: hidden;
          background-color: #ffefd5;
          font-family: Source Code Pro, monospace;
          font-weight: 200;
        }
      `}
    </style>
  </Head>
)