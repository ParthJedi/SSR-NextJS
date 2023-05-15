import Link from "next/link";

export default async function Article({ params }: any) {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const article = await res.json();

  return (
    <>
      <h1>{article.title}</h1>
      <div>
        <p>{article.body}</p>
      </div>
      <Link href="/">
        <span>&larr; Go Back</span>
      </Link>
    </>
  );
}
