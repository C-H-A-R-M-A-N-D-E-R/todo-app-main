import { iconCheck, iconCross } from "../../assets";
import { PropsInterface } from "../../interfaces";
import { Draggable } from "@hello-pangea/dnd";

const List = (props: PropsInterface.ListProps) => {
  return (
    <>
      {props.data.map((todo, index) => (
        <Todo
          key={todo._id}
          index={index}
          toggleActive={props.toggleActive}
          removeTodo={props.removeTodo}
          {...todo}
        />
      ))}
    </>
  );
};

const Todo = (props: PropsInterface.TodoProps) => {
  const bgCheck = props.active && "bg-gradient-to-r from-p-b to-p-p";
  const onCheck = () => {
    props.toggleActive(props._id);
  };

  const onRemove = () => {
    props.removeTodo(props._id);
  };

  return (
    <Draggable draggableId={props._id} key={props._id} index={props.index}>
      {(provided) => (
        <li
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="group flex items-center gap-4 bg-dt-vddb py-5 px-4 border-b-[1px] border-b-dt-vdgb"
        >
          <div>
            <button
              onClick={onCheck}
              className={`flex justify-center items-center rounded-full h-6 w-6 border-[1px] border-dt-vdgb ${bgCheck}`}
            >
              <Check active={props.active} />
            </button>
          </div>
          <p className="w-full text-dt-lgb2">{props.text}</p>
          <button onClick={onRemove} className="group-hover:block hidden">
            <img src={iconCross} alt="Cross" />
          </button>
        </li>
      )}
    </Draggable>
  );
};

const Check = (props: PropsInterface.CheckProps) => {
  if (props.active) {
    return <img src={iconCheck} alt="Check" />;
  }
  return null;
};

export default List;
