import { Modal } from "antd";
import ModalForm from "./ModalForm";
import ModalRead from "./ModalRead";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedTask } from "../../../redux/slices/tasksSlice";

export default function ModalComponent() {
  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.tasksState.selectedTask);

  const handleClose = () => dispatch(setSelectedTask(null));

  if (!selectedTask) return null;

  const isEdit = selectedTask.mode === "edit";
  const isCreate = selectedTask.mode === "create";

  return (
    <Modal
      open={!!selectedTask}
      onCancel={handleClose}
      footer={null}
      title={isCreate ? "Нова задача" : isEdit ? "Редагування" : "Задача"}
    >
      {isCreate || isEdit ? <ModalForm /> : <ModalRead />}
    </Modal>
  );
}
