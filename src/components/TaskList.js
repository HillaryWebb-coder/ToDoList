import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
// import Fade from 'react-reveal/Fade'
import TodoForm from './TodoForm'
import Task from './Task'

export default function TaskList() {
  // const nodeRef = React.useRef(null);
  const [tasks, setTasks] = useState([])

  const addTask = task => {
    if (!task) {
      return
    } else {
      const newTasks = [...tasks, task];
      setTasks(newTasks);
    }
  }

  const removeTask = id => {
    const updatedTasks = [...tasks].filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }

  return (
    <div className="main">
      <TodoForm addTask={addTask} />
      <section className="tasks">
          {
            tasks.map((task) => (
              <Task key={task.id} task={task} removeTask={removeTask} />
            ))
          }
      </section>
    </div>
  )
}
