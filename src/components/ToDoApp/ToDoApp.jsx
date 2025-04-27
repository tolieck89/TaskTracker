import React from "react";
import NewTodo from "./NewTodo/NewTodo";
import ToDoList from "./ToDoList/ToDoList";
import ModalProvider from "../providers/ModalProvider";
import ModalComponent from "./Modal/ModalComponent";
import { useContext, useEffect } from "react";
import { ThemeContext, LanguageContext } from "../providers/context";


export default function ToDoApp() {
  const {theme} = useContext(ThemeContext); 
  const {language} = useContext(LanguageContext);
  
 

  return (
    <div>
      <h3>{language==='EN' ? "My tasks for today" : "Мої задачі на сьогодні"}</h3>

      <ModalProvider>
          <NewTodo />
          <ToDoList />
       
          <ModalComponent /> 
      </ModalProvider>
    </div>
  );
}