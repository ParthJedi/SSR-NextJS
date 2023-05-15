import ArticleCard from "../ArticleCard/ArticleCard";
export default function ArticleList({ articles }: any): JSX.Element {
  return (
    <div>
      {articles.length &&
        articles.map((article: any) => {
          return (
            <>
              <ArticleCard article={article} />
            </>
          );
        })}
    </div>
  );
}
