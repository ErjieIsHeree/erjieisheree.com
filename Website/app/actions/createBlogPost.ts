"use server";

import { createClient } from "@lib/supabase/server";
import { redirect } from "next/navigation";

export async function createBlogPost(formData: FormData) {
  const title = formData.get("title") as string;
  const subtitle = formData.get("subtitle") as string;
  const content = formData.get("content") as string;

  if (!title || !content) {
    throw new Error("Missing required fields");
  }

  const supabase = await createClient();

  const { error } = await supabase.from("blog").insert({
    title,
    subtitle,
    content,
  });

  if (error)
    throw new Error(error.message);
  else
    redirect("/admin");
}
