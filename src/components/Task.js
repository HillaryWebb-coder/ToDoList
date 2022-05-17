import React, { useState } from 'react'
import { motion } from "framer-motion";

export default function Task(props) {

  const [completed, setCompleted] = useState(props.task.isCompleted)

  const updateTask = (e) => {
    setCompleted(e.target.value)
    props.removeTask(props.task.id)
  }

  return (
    <motion.div className="task" ref={props.ref} initial={true} animate={{ opacity: [0, 1], }} whileHover={{ scale: 1.03 }} transition={{duration: .5, ease:'easeIn'}}>
      <input type="checkbox" value={props.task.isCompleted} onChange={updateTask} />
      <p>{props.task.text}</p>
    </motion.div>
  )
}
