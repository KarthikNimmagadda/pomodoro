import { useState } from 'react';
import './App.css';
import AvailableTaskList from './Tasks/AvailableTaskList';
import TaskInput from './Tasks/TaskInput/TaskInput';

function App() {
    const defaulttasks = [
      {
          "id": "1",
          "name": "Write report",
          "favoritism": 75,
          "urgency": 50,
          "completionTime": 30
      },
      {
          "id": "2",
          "name": "Meeting with team",
          "favoritism": 30,
          "urgency": 80,
          "completionTime": 40
      },
      {
          "id": "3",
          "name": "Grocery shopping",
          "favoritism": 60,
          "urgency": 20,
          "completionTime": 60
      },
      {
          "id": "4",
          "name": "Gym workout",
          "favoritism": 90,
          "urgency": 30,
          "completionTime": 20
      },
      {
          "id": "5",
          "name": "Call with client",
          "favoritism": 40,
          "urgency": 90,
          "completionTime": 10
      }
    ];

  const [tasks,setTasks] = useState([])

  const onSaveTaskData = (taskData) => {
    debugger
    setTasks((prevTasks) => {
      return [...prevTasks, taskData]
    })
  }

  return (
    <div className="App">
      <TaskInput onSaveTaskData={onSaveTaskData}/>
      <AvailableTaskList tasks={tasks}/>
    </div>
  );
}

export default App;
