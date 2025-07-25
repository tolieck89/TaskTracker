import { useDispatch } from "react-redux";
import { setSelectedTask } from "../../redux/slices/tasksSlice";
import NewTodo from "./NewTodo/NewTodo";
import ToDoList from "./ToDoList/ToDoList";
import ModalComponent from "./Modal/ModalComponent"; 

export default function ToDoApp() {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(setSelectedTask({
      id: Date.now().toString(),
      title: "",
      status: "",
      priority: "",
      issue: "",
      comment: "",
      assignee: "",
      description: "",
      completed: false,
      mode: "edit", 
    }));
  };

  return (
    <div>
      <h3>Мої задачі на сьогодні</h3>

      {/* <button onClick={handleAddClick} className="add-task-button">
        ➕ Додати задачу
      </button> */}

      <NewTodo />
      <ToDoList />
      <ModalComponent />
    </div>
  );
}
