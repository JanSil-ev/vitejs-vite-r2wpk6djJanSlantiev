import { ReactNode } from "react";
import { Button } from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal";
import styles from "./styles.module.scss";

type DeleteModalProps = {
  icon?: ReactNode;
  outline?: boolean;
  disabled?: boolean;
  onClickDelete: () => void;
  onClickCancel: () => void;
};

export const DeleteModal = ({
  onClickDelete,
  onClickCancel,
}: DeleteModalProps) => {
  return (
    <Modal>
      <div className={styles.deleteModal}>
        <p>Точно удалить задачу?</p>
        <div className={styles.deleteModal__actions}>
          <Button title="Удалить" onClick={onClickDelete} buttonText={""} />
          <Button
            title="Выйти"
            outline
            onClick={onClickCancel}
            buttonText={""}
          />
        </div>
      </div>
    </Modal>
  );
};
