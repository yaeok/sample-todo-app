import Card from '@/components/Card'
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
        <section className='flex space-x-4'>
          <Card title='タイトル1' description='説明1' />
        </section>
      </main>
    </>
  )
}

export default Home
