import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import "./index.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  //task setting state
  const [tasks, setTasks] = useState([]);

  //Setting useEffect hook for fetching the data from the localhost server
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTask();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //Fetch task from local host
  const fetchTask = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  // add a task
  const addTask = async (newTask) => {
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTaskWithID = { id, ...newTask };
    // setTasks([...tasks, newTaskWithID]);

    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = res.json();

    setTasks([...Tasks, data]);
  };

  //delte a task
  const deleteTask = async (id) => {
    //dont' show the task in the task state whose id are not similar to id of delete task func called in Task componenet
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onClickReminder = async (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const formControlHandeler = () => {
    setShowForm(!showForm); // toggeling the initial state of show form state component
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker" //Passing title prop to set the title of header component
        onToggle={formControlHandeler} //passing onToggle prop, which is calling formControlHandeler on click
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
