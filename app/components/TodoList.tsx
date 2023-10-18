import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className='overflow-x-auto '>
      <table className='table base-100'  >
        <thead >
          <tr >
            <th className="font-bold text-lg">Tasks</th>
            <th className="font-bold text-lg">Action</th>
          </tr>
        </thead>
        <tbody  >
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
