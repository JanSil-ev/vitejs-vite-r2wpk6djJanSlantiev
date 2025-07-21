import classnames from "classnames";
import { MouseEventHandler, ReactNode } from "react";
import styles from "./styles.module.scss";

type ButtonProps = {
  title: string;
  buttonText: string;
  icon?: ReactNode;
  outline?: boolean;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ title, icon, outline, onClick }: ButtonProps) => {
  return (
    <button
      className={classnames(styles.button, { [styles.outline]: outline })}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {title}
    </button>
  );
};
