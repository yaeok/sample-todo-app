import Header from '@/components/Header'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className='flex flex-col items-center space-y-8 pt-12'>
        <section className='text-center py-20'>
          <h1 className='text-4xl font-bold'>Todoリスト</h1>
          <p className='mt-4'>自作のTodoリストサービスです。</p>
        </section>
      </main>
    </>
  )
}

export default Home
