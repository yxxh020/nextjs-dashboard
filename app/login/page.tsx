'use client';

import { useFormState } from 'react-dom';
import { formAction } from './actions';

export default function Page() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(formAction, initialState);

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        action={dispatch}
        className="flex h-fit w-fit min-w-[400px] flex-col justify-center rounded-lg bg-gray-100 p-10"
      >
        <label className="flex flex-col">
          아이디:
          <input
            type="text"
            name="loginId"
            className="mt-1 rounded border-gray-50"
            placeholder="아이디를 입력해주세요"
          />
          {state.errors?.loginId && (
            <div className="mt-1 text-sm text-red-500">
              {state.errors.loginId}
            </div>
          )}
        </label>

        <label className="mt-4 flex flex-col">
          연락처:
          <input
            type="text"
            name="phone"
            className="mt-1 rounded border-gray-50"
            placeholder="전화번호를 입력해 주세요"
          />
          {state.errors?.phone && (
            <div className="mt-1 text-sm text-red-500">
              {state.errors.phone}
            </div>
          )}
        </label>

        <label className="mt-4 flex flex-col">
          이메일:
          <input
            type="email"
            name="email"
            className="mt-1 rounded border-gray-50"
            placeholder="test@test.com"
          />
          {state.errors?.email && (
            <div className="mt-1 text-sm text-red-500">
              {state.errors.email}
            </div>
          )}
        </label>

        <label className="mt-4 flex flex-col">
          비밀번호:
          <input
            type="password"
            name="password"
            className="mt-1 rounded border-gray-50"
            placeholder="비밀번호를 입력해 주세요"
          />
          {state.errors?.password && (
            <div className="mt-1 text-sm text-red-500">
              {state.errors.password}
            </div>
          )}
        </label>

        <label className="mt-4 flex flex-col">
          비밀번호 확인:
          <input
            type="password"
            name="passwordConfirm"
            className="mt-1 rounded border-gray-50"
            placeholder="비밀번호를 한번 더 입력해 주세요"
          />
          {state.errors?.passwordConfirm && (
            <div className="mt-1 text-sm text-red-500">
              {state.errors.passwordConfirm}
            </div>
          )}
        </label>

        <div className="mt-4 flex flex-col">
          <p>약관동의:</p>
          <div className="mt-1 flex items-center">
            <label className="mr-4 flex items-center">
              <input type="radio" name="agree" value="Y" className="mr-1" />
              동의
            </label>
            <label className="flex items-center">
              <input type="radio" name="agree" value="N" className="mr-1" />
              동의하지 않음
            </label>
          </div>
          {state.errors?.agree && (
            <div className="mt-1 text-sm text-red-500">
              {state.errors.agree}
            </div>
          )}
        </div>

        <div className="mt-6 flex w-full justify-end">
          <button
            type="submit"
            className="rounded bg-blue-500 px-3 py-1.5 text-white"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
