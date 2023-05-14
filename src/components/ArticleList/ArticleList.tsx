import ArticleCard from "../ArticleCard/ArticleCard";
export default function ArticleList({ posts }: any): JSX.Element {
  return (
    <div>
      {posts.length &&
        posts.map((post: any) => {
          return (
            <>
              <ArticleCard post={post} />
            </>
          );
        })}
    </div>
  );
}
