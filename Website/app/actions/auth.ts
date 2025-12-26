"use server";

import { SignupFormSchema, FormState } from "@/app/lib/auth/validation";
import { updateSession } from "../lib/auth/session";

export async function login(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Validar usuario y crear token de sesion
  const user;

  await updateSession(user);
  redirect("/admin");
}
