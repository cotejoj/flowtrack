import React, { useState } from "react";
import "./TaskList.css";

type TaskStatus = "todo" | "pending" | "done" | "backlog";

type Task = {
  id: string;
  text: string;
};

type TaskMap = {
  [key in TaskStatus]: Task[];
};

const generateId = () => crypto.randomUUID();

export default function TaskList() {
  const [taskInput, setTaskInput] = useState<string>("");
  const [tasks, setTasks] = useState<TaskMap>({
    todo: [
      { id: generateId(), text: "Task 1" },
      { id: generateId(), text: "Task 2" },
    ],
    pending: [],
    done: [],
    backlog: [],
  });

  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const [dragSource, setDragSource] = useState<TaskStatus | null>(null);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskInput.trim()) return;

    const newTask: Task = { id: generateId(), text: taskInput.trim() };
    setTasks((prev) => ({
      ...prev,
      todo: [...prev.todo, newTask],
    }));
    setTaskInput("");
  };

  const handleDragStart = (task: Task, source: TaskStatus) => {
    setDraggedTask(task);
    setDragSource(source);
  };

  const handleDrop = (target: TaskStatus) => {
    if (!draggedTask || !dragSource) return;

    setTasks((prev) => {
      const newSource = prev[dragSource].filter((t) => t.id !== draggedTask.id);
      const newTarget = [...prev[target], draggedTask];

      return {
        ...prev,
        [dragSource]: newSource,
        [target]: newTarget,
      };
    });

    setDraggedTask(null);
    setDragSource(null);
  };

  const handleDelete = (taskId: string, column: TaskStatus) => {
    setTasks((prev) => ({
      ...prev,
      [column]: prev[column].filter((task) => task.id !== taskId),
    }));
  };

  const handleEdit = (
    e: React.FocusEvent<HTMLSpanElement>,
    taskId: string,
    column: TaskStatus
  ) => {
    const newText = e.target.innerText.trim();
    setTasks((prev) => ({
      ...prev,
      [column]: prev[column].map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      ),
    }));
  };

  const renderColumn = (title: string, key: TaskStatus) => (
    <div
      className={`task-column ${key}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => handleDrop(key)}
    >
      <h2>{title}</h2>
      <ul>
        {tasks[key].map((task) => (
            <li
            key={task.id}
            draggable
            onDragStart={() => handleDragStart(task, key)}
            className={key === "done" ? "task-item done-task" : "task-item"}
            >
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleEdit(e, task.id, key)}
              className="editable"
            >
              {task.text}
            </span>
            <button
              className="delete-btn"
              onClick={() => handleDelete(task.id, key)}
              title="Delete task"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <form className="task-form" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter new task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button type="submit">Add to To Do</button>
      </form>

      <div className="task-container">
        {renderColumn("To Do", "todo")}
        {renderColumn("Pending", "pending")}
        {renderColumn("Done", "done")}
        {renderColumn("Backlog", "backlog")}
      </div>
    </div>
  );
}
