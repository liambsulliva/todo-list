import { useState } from "react"
import "./styles.css"
export default function App() {

  const [textEntry, setEntry] = useState("");
  const [dateEntry, setDate] = useState("");
  const [tasks, setTasks] = useState([]);
  
  function doSubmit(e) {
    e.preventDefault(); /* Stop Default HTML Behavior */
    setTasks(() => {
      return [...tasks, {id: crypto.randomUUID(), title: textEntry, date: dateEntry}];
    });
  }

  function toggleComplete(id) {
    setTasks(taskList => {
      return taskList.filter(task => task.id !== id);
    })
  }

  return <>
    <form onSubmit={doSubmit} className='add-reminder-form'>
      <div className="form-rows">
        <label htmlFor="item" className="inputLabel">I need to... </label>
        <input value={textEntry} onChange={e => setEntry(e.target.value)} type="text" className="entry"></input>
        <label htmlFor="date" className="inputLabel"> by </label>
        <input value={dateEntry} onChange={e => setDate(e.target.value)} type="text" className="entry"></input>
      </div>
      <button className="add-btn">Add</button>
    </form>
    <h1 className="title">To-Do 📖</h1>
    <ul className="list">
      {tasks.map(t => {
         return <li key={t.id}>
          <label>
            <p>{t.title}</p>
            <input onChange={() => toggleComplete(t.id)} type="checkbox" checked={t.complete}></input>
          </label>
          <p>{t.date}</p>
          </li>
      })}
    </ul>
  </>
}