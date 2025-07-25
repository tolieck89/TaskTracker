import { useSelector, useDispatch } from "react-redux";
import { Input, Select, Form } from "antd";
import { useEffect, useState } from "react";
import { updateTask, setSelectedTask, addTask} from "../../../redux/actions/tasksActions";


const { TextArea } = Input;
const { Option } = Select;

export default function ModalForm() {
  // const selectedTask = useSelector((state) => state.tasksState.selectedTask);
  // const dispatch = useDispatch();

  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.tasksState.selectedTask);
  const mode = selectedTask?.mode;


  const [formData, setFormData] = useState({
    title: "",
    status: "",
    priority: "",
    issue: "",
    comment: "",
    assignee: "",
    description: "",
  });

  useEffect(() => {
    if (selectedTask) {
      setFormData({
        title: selectedTask.title || "",
        status: selectedTask.status || "",
        priority: selectedTask.priority || "",
        issue: selectedTask.issue || "",
        comment: selectedTask.comment || "",
        assignee: selectedTask.assignee || "",
        description: selectedTask.description || "",
      });
    }
  }, [selectedTask]);

  const handleChange = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (!selectedTask) return null;

  return (
    <Form layout="vertical">
      <Form.Item label="Summary">
        <Input
          value={formData.title}
          onChange={(e) => handleChange("title")(e.target.value)}
          placeholder="Enter task title"
        />
      </Form.Item>

      <Form.Item label="Status">
        <Select
          value={formData.status}
          onChange={handleChange("status")}
          placeholder="Choose a status"
        >
          <Option value="To do">To do</Option>
          <Option value="In progress">In Progress</Option>
          <Option value="Done">Done</Option>
          <Option value="On hold">On hold</Option>
          <Option value="Smoke test">Smoke test</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Priority">
        <Select
          value={formData.priority}
          onChange={handleChange("priority")}
          placeholder="Select priority"
        >
          <Option value="Low">Low</Option>
          <Option value="Normal">Normal</Option>
          <Option value="Critical">Critical</Option>
          <Option value="Blocker">Blocker</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Issue type">
        <Select
          value={formData.issue}
          onChange={handleChange("issue")}
          placeholder="Select issue type"
        >
          <Option value="Task">Task</Option>
          <Option value="Bug">Bug</Option>
          <Option value="Abusement">Poboi</Option>
          <Option value="Dismisal task">Dismisal task</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Assignee">
        <Select
          value={formData.assignee}
          onChange={handleChange("assignee")}
          placeholder="Select assignee"
        >
          <Option value="Gypsy's sister">Gypsy's sister</Option>
          <Option value="Behemoth">Behemoth</Option>
          <Option value="Clupea khabalka">Clupea khabalka</Option>
          <Option value="Ugly freak">Ugly freak</Option>
          <Option value="Tolieck the fabulous">Tolieck the fabulous</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Description">
        <TextArea
          value={formData.description}
          onChange={(e) => handleChange("description")(e.target.value)}
          placeholder="Write here task body"
          rows={3}
        />
      </Form.Item>

      <Form.Item label="Comment">
        <TextArea
          value={formData.comment}
          onChange={(e) => handleChange("comment")(e.target.value)}
          placeholder="Write your comment here"
          rows={2}
        />
      </Form.Item>
      <Form.Item>
  <button
    type="button"
  onClick={() => {
  if (!formData.title.trim()) return;

  if (selectedTask?.mode === "create") {
    const newTask = {
      ...formData,
      id: Date.now(),
      completed: false,
    };
    dispatch(addTask(newTask));
  } else {
    dispatch(updateTask({ ...selectedTask, ...formData }));
  }

  dispatch(setSelectedTask(null));
}}


  >
    💾 Save
  </button>
  
</Form.Item>

    </Form>
  );
}
