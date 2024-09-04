import { z } from 'zod';
import {
  emailSchema,
  phoneSchema,
  passwordSchema,
  agreeSchema,
  passwordConfirmSchema,
  loginIdSchema,
} from './validation';



export const userSchema = z
  .object({
    // loginId: loginIdSchema(),
    // name: nameSchema(),
    email: emailSchema(),
    phone: phoneSchema(),
    password: passwordSchema(),
    agree: agreeSchema(),
    passwordConfirm: passwordConfirmSchema(),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    console.log('super refine================');
    if (password !== passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치하지 않습니다.',
        path: ['passwordConfirm'],
      });
      //   ctx.addIssue({
      //     code: z.ZodIssueCode.custom,
      //     message: '비밀번호가 일치하지 않습니다.',
      //     path: ['password'],
      //   });
    }
  });
//   .refine((data) => data.password === data.passwordConfirm, {
//     path: ['passwordConfirm'],
//     message: '비밀번호가 일치하지 않습니다.',
//   });

