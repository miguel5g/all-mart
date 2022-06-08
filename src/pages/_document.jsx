import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
      </Head>

      <body className="bg-zinc-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
