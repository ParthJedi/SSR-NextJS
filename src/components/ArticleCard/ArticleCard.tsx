import Link from "next/link";

function ArticleCard({ post }: any): JSX.Element {
  return (
    <>
      {post && (
        <>
          {
            <Link href="/post/[id]" as={`/post/${post.id}`}>
              <div
                key={post.id}
                style={{
                  marginTop: "1em",
                  textAlign: "center",
                  backgroundColor: "darkgrey",
                  color: "white",
                }}
              >
                <h3 style={{ fontWeight: "bold" }}>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            </Link>
          }
        </>
      )}
    </>
  );
}

export default ArticleCard;
