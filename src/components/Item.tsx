import "./Item.css";

export interface ItemProps {
  title: string;
  description: string;
  done: boolean;
}

export const Item = ({ title, description, done }: ItemProps) => {
  return (
    <div className={done ? "done" : ""}>
      <p className="title-name">{title}</p>
      <p className="title-text">{description}</p>
    </div>
  );
};
