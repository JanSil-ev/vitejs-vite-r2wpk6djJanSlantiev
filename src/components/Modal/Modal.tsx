import styles from "./styles.module.scss";

export const Modal = ({ children }: {children : React.ReactNode}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
};

export default Modal;
