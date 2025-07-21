import styles from "./styles.module.scss";
import Add from "../../assets/icons/add.svg?react";
import { Button } from "../../components/Button/Button";
import { taskList } from "../../serverData/taskList";
import { TaskCard } from "./TaskCard/TaskCard";
import { DeleteModal } from "./DeleteModal/DeleteModal";
import { AddEditTaskModal } from "./AddEditTaskModal/AddEditTaskModal";
import { useState } from "react";
import { Prioroty, Status } from "../../types";

export const TodoList = () => {
  const [isShowAddEditModal, setIsShowAddEditModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [currentModalType, setCurrentModalType] = useState<"add" | "edit">(
    "add"
  );
  const [tasks, setTasks] = useState(taskList);
  const [currentTaskId, setCurrentTaskId] = useState<string>("");

  const changeButtonAdd = () => {
    setCurrentModalType("add");
    setIsShowAddEditModal(!isShowAddEditModal);
  };

  const changeButtonEdit = () => {
    setCurrentModalType("edit");
    setIsShowAddEditModal(!isShowAddEditModal);
  };
  const changeButtonDelete = () => setIsShowDeleteModal(!isShowDeleteModal);

  const removeTask = (id: string) => {
    const filterTasks = tasks.filter((t) => t.id !== id);
    setTasks(filterTasks);
    setIsShowDeleteModal(false);
  };

  const editTask = (id: string, title: string, priority: Prioroty) => {
    const newTasks = tasks.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          priority,
          title,
        };
      } else {
        return t;
      }
    });
    setTasks(newTasks);
    setIsShowAddEditModal(false);
  };

  const addTask = (title: string, priority: Prioroty) => {
    const newTask = {
      id: Math.random().toString(),
      title,
      priority,
      status: Status.TODO,
      progress: 0,
    };
    setTasks([newTask, ...tasks]);
    setIsShowAddEditModal(false);
  };

  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.topTitle}>
          <h2>Список задач</h2>
          <Button
            title="Добавить задачу"
            buttonText="Добавить"
            icon={<Add />}
            onClick={changeButtonAdd}
          />
        </div>
        <div className={styles.taskContainer}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onClickDelete={() => {
                setCurrentTaskId(task.id);
                changeButtonDelete();
              }}
              onClickEdit={() => {
                changeButtonEdit();
                setCurrentTaskId(task.id);
              }}
            />
          ))}
        </div>
      </div>
      {isShowAddEditModal && (
        <AddEditTaskModal
          title={
            currentModalType === "add"
              ? "Добавить задачу"
              : "Редактировать задачу"
          }
          buttonText={currentModalType === "add" ? "Добавить" : "Редактировать"}
          onClick={
            currentModalType === "add" ? changeButtonAdd : changeButtonEdit
          }
          tasks={tasks}
          taskId={currentTaskId}
          curentModalType={currentModalType}
          editTask={editTask}
          addTask={addTask}
        />
      )}
      {isShowDeleteModal && (
        <DeleteModal
          onClickDelete={() => {
            removeTask(currentTaskId);
          }}
          onClickCancel={changeButtonDelete}
          title="Удалить задачу?"
        />
      )}
    </>
  );
};
