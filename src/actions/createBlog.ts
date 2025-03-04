"use server";

import { redirect } from "next/navigation";

export const createBlog = async (data: FormData) => {
  const blogData = Object.fromEntries(data.entries());
  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });
  const postedData = await res.json();

  if (postedData) {
  }
  redirect(`/blogs/${postedData.id}`);
  return postedData;
};
