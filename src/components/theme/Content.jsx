import { useContext, useEffect } from "react";
import { AuthContext, ThemeContext, LanguageContext } from "../providers/context";
import {useSelector } from 'react-redux'
import LoginForm from "../LoginForm/LoginForm";
import ToDoApp from "../ToDoApp/ToDoApp";

export default function Content() {
  const { isAuth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext); 
  const { language } = useContext(LanguageContext);

  const selectedTask = useSelector((state) => state.tasksState.selectedTask);
console.log("🧠 selectedTask:", selectedTask);


  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
    return () => {
      document.body.className = "";
    };
  }, [theme]);

  return (
    <div className={`content ${theme}`}>
      {isAuth ? <ToDoApp /> : <LoginForm />}
    </div>
  );
}
