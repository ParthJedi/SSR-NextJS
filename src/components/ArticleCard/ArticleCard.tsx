import Link from "next/link";

function ArticleCard({ article }: any): JSX.Element {
  return (
    <>
      {article && (
        <>
          {
            <Link
              href={{
                pathname: "/article/[id]",
                query: article.id,
              }}
              as={`/article/${article.id}`}
            >
              <div
                key={article.id}
                style={{
                  marginTop: "1em",
                  textAlign: "center",
                  backgroundColor: "darkgrey",
                  color: "white",
                }}
              >
                <h3 style={{ fontWeight: "bold" }}>{article.title} &rarr;</h3>
                <p>{article.body}</p>
              </div>
            </Link>
          }
        </>
      )}
    </>
  );
}

export default ArticleCard;
