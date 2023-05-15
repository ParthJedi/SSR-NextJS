async function Article({ params }: any) {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const article = await res.json();

  return (
    <>
      <div>Article {id}</div>
    </>
  );
}

export default Article;
