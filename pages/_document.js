import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <div id='overlays' />
          <Main />
          <NextScript />
          <div id='notifications' />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
