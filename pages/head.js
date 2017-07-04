import Head from 'next/head'

export default props => (
  <Head>
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet" />
    <style>
      {`
        body {
          overflow: hidden;
          background-color: #222;
          font-family: Source Code Pro, monospace;
        }
      `}
    </style>
  </Head>
)