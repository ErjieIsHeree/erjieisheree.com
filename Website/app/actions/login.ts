"use server";

import { redirect } from "next/navigation";
import { FormState } from "@/app/lib/auth/schema";
import { createSession } from "../lib/auth/session";

export async function Login(state: FormState, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  let isValid = true;

  const errors: FormState["errors"] = {};

  if (email != "erjie.xia@gmail.com" || password != "1234") {
    errors.email = [""];
    errors.password = ["Invalid email or password"];
    isValid = false;
  }

  if (!email) {
    errors.email = ["Missing email"];
    errors.password = [""];
  }
  if (!password) {  
    errors.password = ["Missing password"];
  }

  if (!isValid) {
    return { errors };
  }

  const user = "1";
  await createSession(user);
  redirect("/admin");
}
