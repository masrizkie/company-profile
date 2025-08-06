"use client";
import { useState } from "react";

export default function CreateBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Blog Created: ${title}`);
  };

  return (
    <div className="max-w-lg mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Create Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="w-full border p-2 rounded" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className="w-full border p-2 rounded" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
