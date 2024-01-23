import Header from './component/Header'
import './App.css'
import TodoEditor from './component/TodoEditor'
import TodoList from './component/TodoList'

function App() {
  
  return (
    <div className="App">
      <Header/>
      <TodoEditor/>
      <TodoList />
    </div>
  )
}

export default App
