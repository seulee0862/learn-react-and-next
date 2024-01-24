import Header from './component/Header'
import './App.css'
import TodoEditor from './component/TodoEditor'
import TodoList from './component/TodoList'
import { useState } from 'react'
import { useRef } from 'react'

const mockData = [
  {
    id : 0,
    isDone : true,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content: "React 음악듣기",
    createdDate: new Date().getTime(),
  },
  {
    id : 2,
    isDone : true,
    content: "React 축구하기",
    createdDate: new Date().getTime(),
  },
]

function App() {
  
  const [todos, setTodos] = useState(mockData);

  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      createdDate : new Date().getTime()
    }

    setTodos(
      [...todos, newTodo]
    )
  }

  const onUpdate = (targetId) => {
      setTodos(
        todos.map((todo) =>
          todo.id === targetId
            ? { ...todo, isDone: !todo.isDone }
            : todo
            )
      );
  };
  
  const onDelete = (targetId) => {
    setTodos(
      todos.filter((todo) => todo.id !== targetId)
    );
  };

  return (
    <div className="App">
      <Header/>
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
