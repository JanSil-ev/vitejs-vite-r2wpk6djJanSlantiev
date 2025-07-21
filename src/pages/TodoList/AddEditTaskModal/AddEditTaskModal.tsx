import Close from "../../../assets/icons/close.svg?react";
import styles from "./styles.module.scss";
import Modal from "../../../components/Modal/Modal";
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";
import classNames from "classnames";
import { getPriorityText, Prioroty } from "../../../types";
import { MouseEventHandler, useState } from "react";
import { Task } from "../../../serverData/taskList";

type ModelProps = {
  title: string;
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  tasks: Task[];
  taskId: string;
  curentModalType: "add" | "edit";
  editTask: (id: string, title: string, priority: Prioroty) => void;
  addTask: (title: string, priority: Prioroty) => void;
};

export const AddEditTaskModal = ({
  title,
  buttonText,
  onClick,
  taskId,
  tasks,
  curentModalType,
  editTask,
  addTask,
}: ModelProps) => {
  const currentTask = tasks.find((item) => item.id === taskId);

  const [currentTitle, setCurrentTitle] = useState(
    curentModalType === "edit" && currentTask ? currentTask.title : ""
  );
  const [currentPriority, setCurrentPriority] = useState<Prioroty>(
    curentModalType === "edit" && currentTask
      ? currentTask.priority
      : Prioroty.HIGH
  );

  const setTaskHendler = (event) => {
    setCurrentTitle(event.target.value);
  };

  const addEditClick = () => {
    if (curentModalType === "edit") {
      editTask(taskId, currentTitle, currentPriority);
    } else {
      addTask(currentTitle, currentPriority);
    }
  };

  return (
    <Modal>
      <form>
        <div className={styles.addEditModal}>
          <div className="flx-between">
            <span className={styles.modalTitle}>{title}</span>
            <Close className="cp" onClick={onClick} />
          </div>
          <Input
            label="Задача"
            placeholder="Введите текст.."
            onChange={setTaskHendler}
            name="title"
            value={currentTitle}
          />
          <div className={styles.modalPriority}>
            <span>Приортитет</span>
            <ul className={styles.priorityButtons}>
              {[Prioroty.HIGH, Prioroty.MEDIUM, Prioroty.LOW].map(
                (priority) => (
                  <li
                    key={priority}
                    className={classNames(
                      styles[`${priority}`],
                      styles.priority,
                      {
                        [styles[`${priority}--selected`]]:
                          priority === currentPriority,
                      }
                    )}
                    onClick={() => setCurrentPriority(priority)}
                  >
                    {getPriorityText(priority)}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="flx-right mt-50">
            <Button title={buttonText} onClick={addEditClick} buttonText={""} />
          </div>
        </div>
      </form>
    </Modal>
  );
};
