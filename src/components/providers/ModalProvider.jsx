import { createContext, useState, useEffect, } from "react";

export const ModalContext = createContext(false);

export default function ModalProvider({ children }) {
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [issue, setIssue] = useState("");
  const [comment, setComment] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [data, setData] = useState(null); 
  const [title, setTitle] = useState("");
  const [todos, settodos] = useState("");
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [mode, setMode] = useState("create"); 

  const viewTask = (task) => {
    setTaskToEdit(task); 
    setMode("read"); 
    showModal(); 
  };
  
    useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      settodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createNewTask = () => {
    if (taskToEdit) {
      const updatedTodos = todos.map((todo) =>
        todo.id === taskToEdit.id
          ? {
              ...todo, title, description, status, priority, issue, comment, assignee, }
          : todo                      
      );
      settodos(updatedTodos);        
    } else {
     
      const newTask = {
        id: Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
        title,
        description,
        status,
        priority,
        issue,
        comment,
        assignee,
      };
      settodos([...todos, newTask]); 
    }
    setIsModalOpen(false);
  };
  
  const handleChangeTitle = (e) =>  setTitle(e.target.value);
  const handleChangePrior = (value) => setPriority(value);
  const handleChangeStatus = (value) => setStatus(value);
  const handleChangeIssue = (value) => setIssue(value);
  const handleChangeComment = (e) => setComment(e.target.value);
  const handleChangeAssignee = (value) => setAssignee(value);
  const handleChangeTask = (value) => setFormData(value);
  const handleChangeDescription = (e) => setDescription(e.target.value);

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    settodos(updatedTodos);
  };

  const showModal = () => {
    setIsModalOpen(true);
  
    if (mode === "create") {
      setTitle("");
      setDescription("");
      setStatus("");
      setPriority("");
      setIssue("");
      setComment("");
      setAssignee("");
    }
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setTaskToEdit(null);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen, showModal, closeModal, createNewTask, handleChangePrior, handleChangeStatus, handleChangeIssue, handleChangeComment,
        handleChangeAssignee, handleChangeTask, formData, status, priority, issue, comment, assignee, handleDelete, setTaskToEdit,
        taskToEdit, setData, data, handleChangeDescription, description, setDescription, handleChangeTitle, todos, settodos, 
        viewTask, mode, setMode, setTitle, title, setStatus, setPriority, setIssue, setComment, setAssignee,
        setFormData, setTaskToEdit, handleChangeTask, handleChangeTitle, handleChangeDescription,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
