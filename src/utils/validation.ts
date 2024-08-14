import { z } from 'zod';
import { checkUserExists } from '../services/auth';

export const loginIdSchema = () =>
  z
    .string()
    .min(1, { message: '아이디를 입력해 주세요.' })
    .refine(
      //아이디 중복 체크
      async (id) => {
        const result = await checkUserExists(id);
        if (result.code !== 200) {
          return true;
        }
      },
      {
        message: '이미 사용중인 아이디 입니다',
      },
    );

export const nameSchema = () =>
  z.string().min(1, { message: '이름을 입력해 주세요.' });

export const emailSchema = () =>
  z.string().email({ message: '유효한 이메일 주소를 입력해 주세요' });

export const phoneSchema = () =>
  z
    .string()
    .refine((val) => val.startsWith('010'), {
      message: '올바른 번호를 입력해 주세요',
    })
    .refine((val) => val.length === 11, {
      message: '전화번호 11자리를 입력해 주세요',
    });

export const passwordSchema = () =>
  z
    .string()
    .min(8, { message: '비밀번호는 최소 8자리 이상이어야 합니다.' })
    .regex(
      /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,15}$/,
      {
        message: '비밀번호는 소문자, 숫자, 특수문자의 조합이어야 합니다.',
      },
    );

export const agreeSchema = () =>
  z.enum(['Y', 'N']).refine((val) => val === 'Y', {
    message: '약관에 동의해 주세요.',
  });

export const passwordConfirmSchema = () =>
  z.string().min(1, { message: '비밀번호 확인을 입력해 주세요.' });
