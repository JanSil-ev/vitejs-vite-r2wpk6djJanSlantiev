export enum Prioroty {
  LOW = "low", // Низкий
  MEDIUM = "medium", // Средний
  HIGH = "high", // Высокий
}

export enum Status {
  TODO = "todo", // Сделать
  PROGRESS = "progress", // В прогрессе
  DONE = "done", // Сделано
}

export const getPriorityText = (priority: Prioroty): string => {
  switch (priority) {
    case Prioroty.HIGH:
      return "Высокий";
    case Prioroty.MEDIUM:
      return "Средний";
    case Prioroty.LOW:
      return "Низкий";
    default:
      return priority;
  }
};

export const getStatusText = (status: Status): string => {
  switch (status) {
    case Status.DONE:
      return "Сделано";
    case Status.PROGRESS:
      return "В прогрессе";
    case Status.TODO:
      return "Сделать";
    default:
      return status;
  }
};
