export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center space-y-8 pt-12'>
      <section>
        <h1 className='text-lg font-bold'>この画面はホームページです</h1>
      </section>
      <section className='flex flex-col space-y-4'>
        <div>
          <h2 className='text-md font-semibold'>
            この画面は以下の技術で開発されています。
          </h2>
        </div>
        <div className='flex flex-row justify-between'>
          <div>
            <h3 className='text-md font-semibold'>バックエンド</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Prisma</li>
            </ul>
          </div>
          <div>
            <h3 className='text-md font-semibold'>フロントエンド</h3>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
        <button className='px-4 py-2 bg-indigo-400 rounded-md text-white font-bold'>
          アラート
        </button>
      </section>
    </main>
  )
}
