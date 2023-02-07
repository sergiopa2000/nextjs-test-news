import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home({articles}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Im Balle Valletas testing, im always testing</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingXl}>Blog</h2>
        <ul className={utilStyles.list}>
          {articles.map((article) => (
            <li className={utilStyles.listItem} key={article.publishedAt}>
              <p className={utilStyles.lightText}>{article.author}</p>
              <h3 className={utilStyles.articleTitle}><Link href={`/articles/${article.title}`}>{article.title}</Link></h3>
              <p className={utilStyles.articleDate}>{article.publishedAt}</p>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}

export async function getStaticProps() {
  var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'sortBy=popularity&' +
          'apiKey=6275cacf56ec4753bb874a791ca303ff';

  var req = new Request(url);

  let response = await fetch(req);
  let data = await response.json();

  return {
    props: {
      articles : data.articles
    },
  };
}

// export async function getServerSideProps(context) {
//   console.log("On each request");
//   return {
//     props: {
//       data : "asda"
//     },
//   };
// }