import classNames from "classnames";
import DeleteIcon from "../../../assets/icons/delete.svg?react";
import EditIcon from "../../../assets/icons/edit.svg?react";
import styles from "./styles.module.scss";
import { CircularProgressBar } from "../../../components/CircularProgressBar/CircularProgressBar";
import {
  getPriorityText,
  getStatusText,
  Prioroty,
  Status,
} from "../../../types";

type TaskCardProps = {
  task: {
    id: string;
    title: string;
    priority: Prioroty;
    status: Status;
    progress: number;
  };
  onClickEdit: () => void;
  onClickDelete: () => void;
};

export const TaskCard = ({
  task,
  onClickEdit,
  onClickDelete,
}: TaskCardProps) => {
  const { title, priority, status, progress } = task;

  return (
    <div className={styles.taskCard}>
      <div className="flex w-100">
        <span className={styles.taskTitle}>Задача</span>
        <span className={styles.task}>{title}</span>
      </div>
      <div className="flex">
        <span className={styles.priorityTitle}>Приоритет</span>
        <span
          className={classNames(
            styles[`priority--${priority}`],
            styles.priority
          )}
        >
          {getPriorityText(priority)}
        </span>
      </div>
      <div className={styles.taskStatusWrapper}>
        <button
          className={classNames(styles[`status--${status}`], styles.status)}
        >
          {getStatusText(status)}
        </button>
      </div>
      <div className={styles.progress}>
        <CircularProgressBar
          strokeWidth={2}
          sqSize={24}
          percentage={progress}
        />
      </div>
      <div className={styles.actions}>
        <EditIcon className="mr-20 cp" onClick={onClickEdit} />
        <DeleteIcon className="cp" onClick={onClickDelete} />
      </div>
    </div>
  );
};
