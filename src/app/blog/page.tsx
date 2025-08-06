export default function BlogListPage() {
  const blogs = [
    { title: "First Blog", excerpt: "This is the first blog", author: "Admin", date: "2025-07-27" },
    { title: "Second Blog", excerpt: "Another article", author: "Admin", date: "2025-07-28" }
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Blog List</h1>
      {blogs.map((blog, i) => (
        <div key={i} className="border p-4 rounded">
          <h2 className="text-xl font-semibold">{blog.title}</h2>
          <p>{blog.excerpt}</p>
          <p className="text-sm text-gray-600">By {blog.author} - {blog.date}</p>
        </div>
      ))}
    </div>
  );
}
