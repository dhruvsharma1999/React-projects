import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onClickReminder }) => {
  //   const [reminder, setReminder] = useState(task.reminder);
  return (
    <div
      className={`task ${!task.reminder ? "" : "reminder"}`}
      //   className="task"
      onDoubleClick={() => onClickReminder(task.id)}
    >
      <h3>
        {task.text}

        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
