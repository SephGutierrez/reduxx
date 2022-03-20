export const ApiList = ({ list }) => 
<ul>
  {list.map(article =>
    <li key={article.id}>
      <Article article={article} />
    </li>
  )}
</ul>

const Article = ({ article }) =>
  <a href={article.url}>{article.title}</a>

export const Search = ({ value, onSearch, children }) =>
<div>
  {children} <input
    value={value}
    onChange={event => onSearch(event.target.value)}
    type="text"
  />
</div>
