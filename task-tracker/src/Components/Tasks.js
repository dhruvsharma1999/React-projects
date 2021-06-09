import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onClickReminder, reminder }) => {
  return (
    <>
      {tasks.map((task) => (
        //passing each task as a seperate component and passing
        //each task as prop to the Task Component
        <Task
          key={task.id}
          onDelete={onDelete}
          task={task}
          onClickReminder={onClickReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
