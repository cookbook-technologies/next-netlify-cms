import Head from 'next/head';
//@ts-ignore
import { attributes, react as HomeContent } from '../content/home.md';

export default function Home(): JSX.Element {
  const { title, cats } = attributes as {
    title: string;
    cats: {
      name: string;
      description: string;
    }[];
  };
  return (
    <div className="container">
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
