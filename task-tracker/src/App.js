import React, { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import "./index.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  //task setting state
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ]);

  // add a task
  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTaskWithID = { id, ...newTask };
    setTasks([...tasks, newTaskWithID]);
  };

  //delte a task
  const deleteTask = (id) => {
    //dont' show the task in the task state whose id are not similar to id of delete task func called in Task componenet
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onClickReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const formControlHandeler = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onToggle={formControlHandeler}
        showForm={showForm}
      />
      {showForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onClickReminder={onClickReminder}
        />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
