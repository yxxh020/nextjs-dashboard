'use server';
import { userSchema } from '@/src/utils/schema';
import { checkUserExists } from '@/src/services/auth';

export async function formAction(prevState: any, formData: FormData) {
  const validatedFields = userSchema.safeParse({
    // loginId: formData.get('loginId'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    password: formData.get('password'),
    passwordConfirm: formData.get('passwordConfirm'),
    agree: formData.get('agree'),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: validatedFields.error.flatten().fieldErrors,
    };
  }
}
