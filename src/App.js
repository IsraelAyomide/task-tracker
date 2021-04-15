import Header from './components/Header'
//import React from 'react' class based component
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
])
//Toggle Add Task
const [showAddTask, setShowAddTask] = useState(false)
//AddTask
const addTask = (task) =>{
const id = Math.floor(Math.random() * 1000) + 1
const newTask = {id, ...task}
setTasks([...tasks, newTask])
}
//Delete Task
const deleteTask = (id) => {
 setTasks(tasks.filter((task) => task.id !== id))

}
//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
     {showAddTask && <AddTask onAddTask = {addTask}/>} 
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : 'No Task Computed'}
    </div>
  )
}

export default App
// class App extends React.Component {
//   state = {  }
//   render() { 
//     return ( <h1>Hello From a Class</h1> );
//   }
// }
 
// export default App; (class based component)
