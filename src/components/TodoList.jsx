import React from "react";
import { useState } from "react";
import data from './data.json'


export default function TodoList() {
  const [taskList, setTaskList] = useState(data);
  const [newTask, setNewTask] = useState();

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleChangeCheck = (e) => {
    setNewTask(e.target.checkBox)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObject = {"task": newTask, "status": false, "id": taskList.length + 1}
    setTaskList([...taskList, newObject])
    setNewTask("")
  }

  const deleteTask = (id) => {
    const deleteTk = [...taskList].filter(elem => elem.id !== id)
    setTaskList(deleteTk)
  }

  console.log(taskList)

  return (
    <div>
      <label>Add new task</label>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {taskList.map(elem => {
        return (
          <div key={elem.id}>
            <p> {elem.task} </p>
            <input type="checkbox" value={elem.status} onChange={handleChangeCheck} />
            <button onClick={()=>deleteTask(elem.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}