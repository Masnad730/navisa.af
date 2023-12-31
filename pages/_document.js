import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='stylesheet' type='text/css' href='/font/flaticon.css' />
          {/*<link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
          />*/}

          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,600;0,700;1,400&display=swap'
            rel='stylesheet'
          />

          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap'
            rel='stylesheet'
          />

          <link rel='shortcut icon' href='/images/favicon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
