import 'isomorphic-fetch';

const newsURL = 'https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=658cf0e4f41d48a29fd424f03ea549e8';
const navDOM = document.querySelector('.content-table');
const contentDOM = document.querySelector('.news');
const articlesPromise = fetch(newsURL);
const articleID = 'article-';

const createNode = (element) => document.createElement(element);
const append = (parent, el) => parent.appendChild(el);
const createNavItemDOM = (articleItem, index) => {
  const li = createNode('li');
  const anchor = createNode('a');
  anchor.innerText = `${articleItem.title}`;
  anchor.href = `#${articleID}${index}`;
  append(li, anchor);
  return li;
};

const createContentItemDOM = (articleItem, index) => {
  const article = createNode('article');
  const title = createNode('h3');
  const anchor = createNode('a');
  const date = createNode('span');
  const author = createNode('span');
  const description = createNode('p');

  anchor.innerText = `${articleItem.title}`;
  anchor.href = `${articleItem.url}`;
  date.innerText = `Published: ${new Date(articleItem.published_date).toLocaleDateString()}`;
  author.innerText = `${articleItem.byline}`;
  description.innerText = `${articleItem.abstract}`;
  article.id = `${articleID}${index}`;
  append(title, anchor);
  append(article, title);
  append(article, date);
  append(article, author);
  append(article, description);
  return article;
};

articlesPromise.then((response) => response.json())
  .then((data) => {
    const ul = createNode('ul');
    const articleNavList = data.results.map(createNavItemDOM);
    const articleContentList = data.results.map(createContentItemDOM);
    articleNavList.map((articleNavItem) => append(ul, articleNavItem));
    articleContentList.map((articleContentItem) => append(contentDOM, articleContentItem));
    append(navDOM, ul);
  })
  .catch((error) => console.error('Error requesting articles', error));
