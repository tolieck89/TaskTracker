import { useContext, useEffect } from "react";
import { ModalContext } from "../../providers/ModalProvider";
import { Button } from "antd";

export default function ModalRead() {
  const { taskToEdit, isModalOpen, setMode } = useContext(ModalContext);

  useEffect(() => {
    if (!isModalOpen || !taskToEdit) return;
  }, [taskToEdit, isModalOpen]);

  if (!taskToEdit) {
    return <div>Loading...</div>;
  }

  return (
    <div className="modal-read">
      <Button 
        type="primary" 
        onClick={() => setMode("edit")} 
      >✏️ Edit this task
      </Button>

      <h2>Task Details</h2>
      <p><strong>Title:</strong> {taskToEdit.title}</p>
      <p><strong>Status:</strong> {taskToEdit.status}</p>
      <p><strong>Priority:</strong> {taskToEdit.priority}</p>
      <p><strong>Assignee:</strong> {taskToEdit.assignee}</p>
      <p><strong>Description:</strong> {taskToEdit.description}</p>
      <p><strong>Comment:</strong> {taskToEdit.comment}</p>
    </div>
  );
}
