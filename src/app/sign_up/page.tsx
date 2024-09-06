'use client'

import { useForm } from 'react-hook-form'

import { AuthRepository } from '../../../feature/infrastracture/repository/auth'

interface SignUpForm {
  username: string
  email: string
  password: string
}

const SignUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>()

  const onSubmit = async (data: SignUpForm) => {
    const { email, password } = data
    const authRepository = new AuthRepository()
    await authRepository.createUserWithEmailAndPassword(email, password)
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray-200'>
      <section className='lg:w-1/4 bg-white rounded-md shadow-md p-8 flex flex-col justify-center space-y-4'>
        <h3 className='text-2xl font-bold text-center'>新規登録画面</h3>
        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
          <section className='space-y-2'>
            <section className='space-y-1'>
              <label className='text-sm'>ユーザ名</label>
              <input
                type='text'
                id='username'
                {...register('username')}
                className='block w-full p-2 border rounded-sm shadow-sm focus:ring focus:ring-opacity-50'
              />
            </section>
            <section className='space-y-1'>
              <label className='text-sm'>メールアドレス</label>
              <input
                type='text'
                id='email'
                {...register('email', {
                  required: '未入力です',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'メールアドレスの形式が正しくありません',
                  },
                  maxLength: {
                    value: 50,
                    message: 'メールアドレスは50文字以内で入力してください',
                  },
                })}
                className='block w-full p-2 border rounded-sm shadow-sm focus:ring focus:ring-opacity-50'
              />
              {errors.email && (
                <p className='mx-2 text-sm text-red-500'>
                  {errors.email.message}
                </p>
              )}
            </section>
            <section className='space-y-1'>
              <label className='text-sm'>パスワード</label>
              <input
                type='password'
                id='password'
                {...register('password', {
                  required: '未入力です',
                  minLength: {
                    value: 8,
                    message: '8文字以上で入力してください',
                  },
                  maxLength: {
                    value: 50,
                    message: '50文字以下で入力してください',
                  },
                  validate: {
                    combination: (value) =>
                      /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/.test(value) ||
                      '大文字英字と数字をそれぞれ1文字以上含めてください',
                  },
                })}
                className='block w-full p-2 border rounded-sm shadow-sm focus:ring focus:ring-opacity-50'
              />
              {errors.password && (
                <p className='mx-2 text-sm text-red-500'>
                  {errors.password.message}
                </p>
              )}
            </section>
          </section>
          <section className='space-y-4 flex flex-col items-center'>
            <button
              type='submit'
              className='w-full py-2 text-white bg-indigo-500 rounded-sm hover:bg-indigo-600'
            >
              新規登録
            </button>
          </section>
        </form>
      </section>
    </div>
  )
}

export default SignUpPage
