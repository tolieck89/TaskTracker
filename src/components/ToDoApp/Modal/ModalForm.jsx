import { useContext, useEffect } from "react";
import { ModalContext } from "../../providers/ModalProvider";
import { Input, Select, Form } from "antd";

const { TextArea } = Input;
const { Option } = Select;

export default function ModalForm() {
  const {
    comment, status, priority, assignee, handleChangeComment, handleChangeStatus, handleChangePrior, handleChangeAssignee, 
    taskToEdit, handleChangeIssue, issue, isModalOpen, handleChangeDescription, description, handleChangeTitle, title, mode, setTitle, setDescription, setStatus, setPriority, setIssue, setComment, setAssignee,
   } = useContext(ModalContext);

  useEffect(() => {
    if (!isModalOpen || !taskToEdit || mode !== "edit") return;
  
    setTitle(taskToEdit.title || "");
    setDescription(taskToEdit.description || "");
    setStatus(taskToEdit.status || "");
    setPriority(taskToEdit.priority || "");
    setIssue(taskToEdit.issue || "");
    setComment(taskToEdit.comment || "");
    setAssignee(taskToEdit.assignee || "");
  }, [taskToEdit, isModalOpen, mode]);
  
  
  return (
    <Form  layout="vertical">
      <Form.Item label="Summary">
        <Input
          value={title}
          onChange={handleChangeTitle}
          placeholder="Enter task title"
        />
      </Form.Item>

   <Form.Item label="Status"> 
  <Select
    value={status}
    onChange={handleChangeStatus}
    placeholder="Choose a status"
  > <Option value="" disabled='true'>Choose a status</Option> 
    <Option value="To do">To do</Option>
    <Option value="In progress">In Progress</Option>
    <Option value="Done">Done</Option>
    <Option value="On hold">On hold</Option>
    <Option value="Smoke test">Smoke test</Option>

  </Select>
</Form.Item>

      <Form.Item label="Priority">
        <Select value={priority} onChange={handleChangePrior} placeholder="Select priority">
          <Option value="" disabled='true'>Select priority</Option> 
          <Option value="Low">Low</Option>
          <Option value="Normal">Normal</Option>
          <Option value="Critical">Critical</Option>
          <Option value="Blocker">Blocker</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Issue type">
      <Select value={issue} onChange={handleChangeIssue} placeholder="Select issue type">
          <Option value="" disabled='true'>Select issue type</Option> 
          <Option value="Task">Task</Option>
          <Option value="Bug">Bug</Option>
          <Option value="Abusement">Poboi</Option>
          <Option value="Dismisal task">Dismisal task</Option>
        </Select>
      </Form.Item>
     
      <Form.Item label="Assignee">
      <Select value={assignee} onChange={handleChangeAssignee} placeholder="Select assignee">
          <Option value="" disabled='true'>Select assignee</Option> 
          <Option value="Gypsy's sister">Gypsy's sister</Option>
          <Option value="Behemoth">Behemoth</Option>
          <Option value="Clupea khabalka">Khabalka</Option>
          <Option value="Ugly freak">Ugly freak"</Option>
          <Option value="Tolieck the fabulous">Tolieck the fabulous</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Description">
        <TextArea
          value={description }
          onChange={handleChangeDescription}
          placeholder="Write here task body"
          rows={3}
        />
      </Form.Item>

      <Form.Item label="Comment">
        <TextArea
          value={comment}
          onChange={handleChangeComment}
          placeholder="Write your comment here"
          rows={2}
        />
      </Form.Item>

    </Form>
  );
}