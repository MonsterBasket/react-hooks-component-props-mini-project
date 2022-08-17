import Article from "./Article";
/* eslint no-undef: "off"*/

function ArticleList({data}) {
  return (
    <main className="ArticleList">
        {data.map((item) => <Article key={item.id} title={item.title} date={item.date} preview={item.preview} minutes={item.minutes}/>)}
    </main>
  );
}

export default ArticleList;
  