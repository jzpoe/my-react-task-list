import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { TaskList } from './components/TaskList'

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
        <Header />
        <TaskList />
        
        
      </div>
      
  )
}

export default App