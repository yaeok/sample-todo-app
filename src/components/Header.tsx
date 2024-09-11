import NextLink from 'next/link'

const Header: React.FC = () => {
  return (
    <header className='w-full bg-yellow-300 text-black p-6 flex justify-between items-center fixed top-0 z-50'>
      <h1 className='text-2xl font-bold'>ToDoリスト</h1>
      <nav>
        <ul className='flex space-x-4'>
          <li>
            <p className='hover:text-gray-300 text-sm md:text-base'>
              お問い合わせ
            </p>
          </li>
          <li>
            <NextLink href='/sign_up'>
              <p className='hover:text-gray-300 text-sm md:text-base'>
                新規登録
              </p>
            </NextLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
