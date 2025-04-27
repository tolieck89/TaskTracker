import { useContext, useEffect } from "react";
import { ModalContext } from "../../providers/ModalProvider";
import { Button } from "antd";
import "../ToDoList/ToDoList.css";
import {ThemeContext, LanguageContext} from "../../providers/context";


export default function NewTodo() {
 
  const {
    showModal, handleChangePrior, handleChangeStatus, handleChangeIssue, handleChangeComment, handleChangeAssignee, handleChangeTask,
    setMode, taskToEdit, handleChangeTitle, handleChangeDescription,} = useContext(ModalContext);
    const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    if (taskToEdit) {
      handleChangeTitle({ target: { value: taskToEdit.title } });
      handleChangeDescription({ target: { value: taskToEdit.description } });
      handleChangeTask({ target: { value: taskToEdit.task } });
      handleChangeStatus(taskToEdit.status);
      handleChangePrior(taskToEdit.priority);
      handleChangeIssue(taskToEdit.issue);
      handleChangeComment({ target: { value: taskToEdit.comment } });
      handleChangeAssignee(taskToEdit.assignee);
    }
  }, [taskToEdit]);

  return (
    <>
        <Button type="primary" onClick={() => {setMode("create");showModal()}} className={theme === 'light' ? 'create_task create_task-light' : 'create_task create_task-dark'}>{language==="EN" ? "Add a new task" : "Додати нову задачу"}</Button>
    </>
  );
}
