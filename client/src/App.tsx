import { Form, List, Attribution } from "./components";
import { useFetched, mutates } from "./hooks";
import { iconSun } from "./assets";
import { TodoInterface } from "./interfaces";
import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd";

const App = () => {
  const { data, isLoading, isError, refetch } = useFetched(
    "todo",
    "http://localhost:5000/todos"
  );
  const { mutate: post } = mutates.usePost();
  const { mutate: patch } = mutates.usePatch();
  const { mutate: update } = mutates.useUpdate();
  const { mutate: remove } = mutates.useRemove();

  const addTodo = (todo: TodoInterface.NewTodo) => {
    post(todo, { onSuccess: () => refetch() });
  };

  const toggleActive = (todoID: string) => {
    patch(todoID, { onSuccess: () => refetch() });
  };

  const removeTodo = (id: string) => {
    remove(id, { onSuccess: () => refetch() });
  };

  const updateTodo = (todo: TodoInterface.Todo[]) => {
    update(todo, { onSuccess: () => refetch() });
  };

  const onDragEnd = (results: DropResult) => {
    const { source, destination, type } = results;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group" && data) {
      const newData = [...data.data];
      const [item] = newData.splice(source.index, 1);
      newData.splice(destination.index, 0, item);
      updateTodo(newData);
    }
  };

  return (
    <>
      <header className="flex justify-between items-center mb-6">
        <h1 className="uppercase text-4xl text-dt-lgb2 tracking-widest">
          Todo
        </h1>
        <button>
          <img src={iconSun} alt="Sun" />
        </button>
      </header>

      <main>
        <Form addTodo={addTodo} />
        {isLoading ? (
          <h1>Loading...</h1>
        ) : isError ? (
          <h1>There's an error</h1>
        ) : (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="root" type="group">
              {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                  <List
                    data={data?.data}
                    toggleActive={toggleActive}
                    removeTodo={removeTodo}
                  />
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </main>

      <footer>
        <Attribution />
      </footer>
    </>
  );
};

export default App;
