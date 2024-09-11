export type CardProps = {
  title: string
  description: string
}

const Card: React.FC<CardProps> = ({ title, description }: CardProps) => {
  return (
    <section className='bg-white rounded-md shadow-md p-8 flex flex-col justify-center space-y-4'>
      <h1 className='text-2xl font-bold text-center'>{title}</h1>
      <p className='px-2'>{description}</p>
    </section>
  )
}

export default Card
