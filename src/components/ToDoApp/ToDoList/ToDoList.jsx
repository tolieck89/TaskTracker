import { useContext, useEffect} from "react";
import { ModalContext } from "../../providers/ModalProvider";
import './ToDoList.css';
import {ThemeContext, LanguageContext} from "../../providers/context";

export default function ToDoList() {
    const { todos, settodos, setTaskToEdit, showModal, viewTask, setMode } = useContext(ModalContext);
    const { theme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);

    const handleDelete = (index) => {
      const updatedTodos = todos.filter((_, i) => i !== index);
      settodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };
  
    useEffect(() => {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        try {
          const parsedTodos = JSON.parse(storedTodos);
          if (Array.isArray(parsedTodos)) {
            settodos(parsedTodos);
          } else {
            settodos([]);
          }
        } catch (error) {
          console.error("Помилка парсингу todos:", error);
          settodos([]);
        }
      } }, []);
  
    return (
        <div className="todo-list">
      
          <div className={theme === 'light' ? 'todo-list-header todo-list-header-light' : 'todo-list-header todo-list-header-dark'}>
            <div className="todo-item-id">{language==="EN" ? "Task ID" : "№"}</div>
            <div className="todo-item-task">{language==="EN" ? "Task" : "Завдання"}</div>
            <div className="todo-item-status">{language==="EN" ? "Status" : "Статус"}</div> 
            <div className="todo-item-priority">{language==="EN" ? "Priority" : "Пріоритет"}</div>
            <div className="todo-item-assignee">{language==="EN" ? "Assignee" : "Виконавець"}</div>
            <div className="todo-item-comment">{language==="EN" ? "Comment" : "Коментар виконавця"}</div> 
            <div className="todo-list-header-item">{language==="EN" ? "Actions" : "Дії"}</div> 

            
          </div> 
      
          {Array.isArray(todos) && todos.length > 0 && todos.map((taska, index) => {
            let classItem = "todo-item";
            if (index % 2 === 0) {
              classItem += " todo-item-even";
              theme === 'light' ? classItem += " todo-item-even-light" : classItem += " todo-item-even-dark";
            } else {
              classItem += " todo-item-odd";
              theme === 'light' ? classItem += " todo-item-odd-light" : classItem += " todo-item-odd-dark";

            }
      
            return (
              <div key={index} className={classItem}>
                <div className="todo-item-id">{index + 1}</div>
                <div className="todo-item-task">{taska.title}</div>
                <div className="todo-item-status">{taska.status}</div>
                <div className="todo-item-priority">{taska.priority}</div> 
                <div className="todo-item-assignee">{taska.assignee}</div>
                <div className="todo-item-comment">{taska.comment}</div>
      
                <div className="actions">
                  <button className="todo-item-button" title="Edit task" onClick={() => {setMode('edit');setTaskToEdit(taska); showModal();}}>🖊</button>
                  <button className="todo-item-button" title="Delete task" onClick={() => handleDelete(index)}>✂</button>
                  <button className="todo-item-button" title="Open the task" onClick={() => {setMode('read');viewTask(taska);}}>👁️</button>
                </div>
              </div>
            );
          })}
        </div>
      );
      }
      