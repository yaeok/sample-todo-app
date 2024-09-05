'use client'

import { AuthRepository } from '../../../feature/infrastracture/repository/auth'

const SignUpPage: React.FC = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value
    const authRepository = new AuthRepository()
    authRepository.createUserWithEmailAndPassword(email, password)
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray-200'>
      <section className='lg:w-1/4 bg-white rounded-md shadow-md p-8 flex flex-col justify-center space-y-4'>
        <h3 className='text-2xl font-bold text-center'>新規登録画面</h3>
        <form className='space-y-4' onSubmit={onSubmit}>
          <section className='space-y-2'>
            <section className='space-y-1'>
              <label className='text-sm'>ユーザ名</label>
              <input
                type='text'
                className='block w-full p-2 border rounded-sm shadow-sm focus:ring focus:ring-opacity-50'
              />
            </section>
            <section className='space-y-1'>
              <label className='text-sm'>メールアドレス</label>
              <input
                type='text'
                id='email'
                className='block w-full p-2 border rounded-sm shadow-sm focus:ring focus:ring-opacity-50'
              />
            </section>
            <section className='space-y-1'>
              <label className='text-sm'>パスワード</label>
              <input
                type='password'
                id='password'
                className='block w-full p-2 border rounded-sm shadow-sm focus:ring focus:ring-opacity-50'
              />
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
