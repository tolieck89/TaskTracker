import { useSelector, useDispatch } from "react-redux";
import { updateTask, setSelectedTask} from "../../../redux/actions/tasksActions";
import { Button } from "antd";

export default function ModalRead() {
  const selectedTask = useSelector((state) => state.tasksState.selectedTask);
  const dispatch = useDispatch();

  if (!selectedTask) return null;

  const handleEdit = () => {
    dispatch(setSelectedTask({ ...selectedTask, mode: "edit" }));
  };

  return (
    <div className="modal-read">
      <Button type="primary" onClick={handleEdit}>
        ✏️ Edit this task
      </Button>

      <h2>Task Details</h2>
      <p><strong>Title:</strong> {selectedTask.title}</p>
      <p><strong>Status:</strong> {selectedTask.status}</p>
      <p><strong>Priority:</strong> {selectedTask.priority}</p>
      <p><strong>Assignee:</strong> {selectedTask.assignee}</p>
      <p><strong>Description:</strong> {selectedTask.description}</p>
      <p><strong>Comment:</strong> {selectedTask.comment}</p>
    </div>
  );
}
