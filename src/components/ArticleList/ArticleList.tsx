
export default function ArticleList({posts}: any): JSX.Element {

  return (
    <div>{
        posts.length && posts.map((post: any) => {
            return (
                <div key={post.id} style={{marginTop: "1em", textAlign: "center"}}>
                  <h3 style={{fontWeight: "bold"}}>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              );
        })
    }</div>
  )
}