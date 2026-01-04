"use server";

import { createClient } from "@/app/_lib/supabase/server";

export async function createDevlogPost(formData: FormData) {
  const supabase = await createClient();

  const title = formData.get("title") as string;
  const subtitle = formData.get("subtitle") as string;
  const content = formData.get("content") as string;

  if (!title || !content) {
    throw new Error("Missing required fields");
  }

  const { error } = await supabase.from("devlog").insert({
    title,
    subtitle,
    content,
  });

  if (error) {
    throw new Error(error.message);
  }
}
