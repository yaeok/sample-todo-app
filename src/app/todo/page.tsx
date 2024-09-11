'use client'

import React from 'react'

import Card from '@/components/Card'
import Header from '@/components/Header'

import { Todo, todoList } from '../../../data/todo'

const TodoListPage: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([])
  React.useEffect(() => {
    const fetchTodos = async () => {
      setTodos(todoList)
    }
    fetchTodos()
  }, [])
  return (
    <>
      <Header />
      <main className='flex flex-col items-center space-y-8 py-12'>
        <section className='text-center py-20'>
          <h1 className='text-4xl font-bold'>一覧画面</h1>
        </section>
        <section className='grid grid-cols-4 gap-4'>
          {todos.map((todo) => (
            <Card
              key={todo.todoId}
              title={todo.title}
              description={todo.description}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default TodoListPage
