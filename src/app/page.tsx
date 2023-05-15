import ArticleList from "@/components/ArticleList/ArticleList";

export default async function Home() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=8"
  );
  if (!res.ok) throw "Error loading posts";
  const articles = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Getting started with Next.js V13</h1>
        <p>Hello, Next.js!</p>
      </div>
      <div>{articles.length && <ArticleList articles={articles} />}</div>
    </main>
  );
}
