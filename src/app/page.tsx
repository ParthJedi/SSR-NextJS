export default async function Home() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=8"
  );
  if (!res.ok) throw "Error loading posts";
  const posts = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Getting started with Next.js V13</h1>
        <p>Hello, Next.js!</p>
      </div>
      <div>
        {posts.length &&
          posts.map((post: any) => {
            return (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            );
          })}
        <h3></h3>
      </div>
    </main>
  );
}
