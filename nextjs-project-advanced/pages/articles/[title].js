import Layout from '../../components/layout';
import styles from '../../styles/utils.module.css'
import { getAllArticleIds } from '../../lib/articles';

export default function Article({article}) {
  return ( 
    <Layout>
        <hr></hr>
        <h1>{article.title}</h1>
        <br />
        {article.content}
        <br />
        <h2 className={styles.fullArticle}><a href={article.url}>Full article --&gt;</a></h2>
    </Layout>
    ) 
}

export async function getStaticProps({ params }) {
    const url = 'https://newsapi.org/v2/top-headlines?' +
    `country=us&` +
    `q=${params.title}&` +
    'apiKey=6275cacf56ec4753bb874a791ca303ff';

    let req = new Request(url);
    let response = await fetch(req);
    let data = await response.json();

    return {
        props: {
            article : data.articles[0]
        },
    };
}

export async function getStaticPaths() {
    const paths = await getAllArticleIds();
    return {
      paths,
      fallback: false,
    };
  }