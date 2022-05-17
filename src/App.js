import './App.css';
import TaskList from './components/TaskList'

function App() {

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const d = new Date()
  let day = days[d.getDay()]

  return (
    <div className="App">
      <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title /><g id="todolist"><path d="M20.5,4H18V2.5a.5.5,0,0,0-1,0V4H7V2.5a.5.5,0,0,0-1,0V4H3.5A1.5,1.5,0,0,0,2,5.5v15A1.5,1.5,0,0,0,3.5,22h17A1.5,1.5,0,0,0,22,20.5V5.5A1.5,1.5,0,0,0,20.5,4ZM21,20.5a.5.5,0,0,1-.5.5H3.5a.5.5,0,0,1-.5-.5V5.5A.5.5,0,0,1,3.5,5H6v.5a.5.5,0,0,0,1,0V5H17v.5a.5.5,0,0,0,1,0V5h2.5a.5.5,0,0,1,.5.5Z" /><path d="M10.5,10h-5a.5.5,0,0,0,0,1h5a.5.5,0,0,0,0-1Z" /><path d="M18.15,8.15,15.5,10.79,13.85,9.15a.49.49,0,0,0-.7.7l2,2a.48.48,0,0,0,.7,0l3-3a.49.49,0,1,0-.7-.7Z" /><path d="M10.5,17h-5a.5.5,0,0,0,0,1h5a.5.5,0,0,0,0-1Z" /><path d="M18.15,15.15,15.5,17.79l-1.65-1.64a.49.49,0,0,0-.7.7l2,2a.48.48,0,0,0,.7,0l3-3a.49.49,0,1,0-.7-.7Z" /></g></svg>
      </div>
      <div className="date">
        <p>Enjoy your {day}&#127867;</p>
      </div>
      <TaskList />
    </div>
  );
}

export default App;
