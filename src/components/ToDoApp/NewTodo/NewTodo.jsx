import { useDispatch } from "react-redux";
import { setSelectedTask } from "../../../redux/actions/tasksActions";
import { Button } from "antd";

export default function NewTodo() {
  const dispatch = useDispatch();

  const handleOpenCreateModal = () => {
    dispatch(setSelectedTask({ mode: "create" }));
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <Button type="primary" onClick={handleOpenCreateModal}>
        ➕ Створити задачу
      </Button>
    </div>
  );
}
