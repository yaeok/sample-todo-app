const SignInPage: React.FC = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray-200'>
      <section className='lg:w-1/4 bg-white rounded-md shadow-md p-8 flex flex-col justify-center space-y-12'>
        <h3 className='text-2xl font-bold text-center'>ログイン画面</h3>
        <form className='space-y-2'>
          <section className='space-y-1'>
            <label className='text-sm'>メールアドレス</label>
            <input
              type='text'
              className='block w-full p-2 border rounded-sm shadow-sm focus:ring focus:ring-opacity-50'
            />
          </section>
          <section className='space-y-1'>
            <label className='text-sm'>パスワード</label>
            <input
              type='password'
              className='block w-full p-2 border rounded-sm shadow-sm focus:ring focus:ring-opacity-50'
            />
          </section>
        </form>
        <section className='space-y-4 flex flex-col items-center'>
          <button className='w-full py-2 text-white bg-indigo-500 rounded-sm hover:bg-indigo-600'>
            ログイン
          </button>
        </section>
      </section>
    </div>
  )
}

export default SignInPage
