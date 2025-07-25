import { Table, Button, Tag } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTask,
  toggleTaskCompletion,
  setSelectedTask,
} from "../../../redux/actions/tasksActions";

export default function ToDoList() {
  const tasks = useSelector((state) => state.tasksState.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTaskCompletion(id));
  };

  const handleOpen = (task) => {
    dispatch(setSelectedTask(task));
  };

  const columns = [
    {
      title: "Задача",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <span
          style={{ cursor: "pointer" }}
          onClick={() => handleOpen(record)}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Статус",
      dataIndex: "completed",
      key: "completed",
      render: (completed) =>
        completed ? (
          <Tag color="green">✅ Виконано</Tag>
        ) : (
          <Tag color="blue">⏳ Не виконано</Tag>
        ),
    },
    {
      title: "Дії",
      key: "actions",
      render: (_, task) => (
        <>
          <Button
            onClick={() => handleToggle(task.id)}
            style={{ marginRight: 8 }}
          >
            {task.completed ? "↩️" : "✅"}
          </Button>
          <Button danger onClick={() => handleDelete(task.id)}>
            ❌
          </Button>
        </>
      ),
    },
  ];

  return (
    <Table
      dataSource={tasks.map((task) => ({ ...task, key: task.id }))}
      columns={columns}
      pagination={false}
      locale={{ emptyText: "Немає задач" }}
    />
  );
}
