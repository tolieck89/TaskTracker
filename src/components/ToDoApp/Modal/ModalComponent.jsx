import React from "react";
import { Modal} from "antd";
import { useContext } from "react";
import { ModalContext } from "../../providers/ModalProvider";
import ModalForm from "./ModalForm";
import ModalRead from "./ModalRead";
import "./modal.css";

export default function ModalComponent() {
    const { 
      isModalOpen, closeModal, createNewTask, taskToEdit, mode, } = useContext(ModalContext);

    return (
        <Modal
          title={
            !!taskToEdit 
              ? (mode === "read" ? "Task Details" : "Edit Task") 
              : "Create New Task"
          }
          open={isModalOpen}
          onOk={mode === "read" ? closeModal : createNewTask} 

          onCancel={closeModal}
          okText="OK"
          cancelText="Cancel"
          contentBg="green"
          сlassName="modal-dark"

        >  
          {mode==="read" ?  <ModalRead /> : <ModalForm />}
        </Modal>
      );
    }
      