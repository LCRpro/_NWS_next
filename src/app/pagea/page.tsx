// Server Component
async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  }
  
  export default async function PostsPage() {
    const posts = await getPosts();
  
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Liste des posts</h1>
        <ul className="space-y-2">
          {posts.slice(0, 5).map((post: any) => (
            <li key={post.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  