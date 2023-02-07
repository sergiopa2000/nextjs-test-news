export async function getAllArticleIds() {
  const url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'sortBy=popularity&' +
    'apiKey=6275cacf56ec4753bb874a791ca303ff';
  
  let req = new Request(url);
  
  let response = await fetch(req)

  let {articles} = await response.json();

  const paths = articles.map((article) => ({
    params: { "title": article.title },
  }))
  
    return paths;
}