"use server";

import { createClient } from "@lib/supabase/server";

export async function createProjectPost(formData: FormData) {
  const supabase = await createClient();

  const title = formData.get("title") as string;
  const subtitle = formData.get("subtitle") as string;
  const link = formData.get("link") as string;

  if (!title || !link) {
    throw new Error("Missing required fields");
  }

  const { error } = await supabase.from("project").insert({
    title,
    subtitle,
    link,
  });

  if (error) {
    throw new Error(error.message);
  }
}
