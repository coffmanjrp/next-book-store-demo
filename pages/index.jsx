import Head from 'next/head';
import { booksData } from '../data';
import { Book, Cart } from '../components';

export default function Home() {
  return (
    <div className="page_container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex, nofollow" />
        <title>Next Book Store Demo</title>
      </Head>

      <main>
        <h1>
          <a
            href="https://www.shoeisha.co.jp/campaign/award/result/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ITエンジニア本大賞2022
          </a>
        </h1>
        {Object.entries(booksData).map(([id, { ...data }], index) => (
          <Book key={index} id={id} data={data} />
        ))}
        <Cart />
      </main>
    </div>
  );
}
