import { useContext, useEffect } from "react";
import { AuthContext, ThemeContext, LanguageContext } from "../providers/context";
import LoginForm from "../LoginForm/LoginForm";
import Button from "./Button";
import ToDoApp from "../ToDoApp/ToDoApp";

export default function Content() {
  const { isAuth } = useContext(AuthContext); // 

  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
     useEffect(() => {
        document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
    
     
        return () => {
          document.body.className = ""; 
        };
      }, [theme]);

  return (
    <div className="content">

    <div>
        
      {isAuth ? <ToDoApp /> : <LoginForm />}
    </div>
    </div>
  );
}