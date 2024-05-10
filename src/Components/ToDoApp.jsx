import "../App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import ListCompnnets from "./ListCompnnets";
const InitialState = [
  {
    id: uuid(),
    task: "work the asignment",
    isComplete: false,
    timeTemp: Date.now(),
  },
];

const ToDoApp = () => {
  const [searchText, setSearchText] = useState("Write Todo");
  const [todoData, setTodoData] = useState(InitialState);

  function inputHandler(e) {
    setSearchText(e.target.value);
  }

  function removeList(id) {
    const updateData = todoData.filter((task) => {
      return task.id !== id;
    });

    setTodoData(updateData);
  }

  const List = () => {
    setTodoData([
      ...todoData,
      {
        id: uuid(),
        task: searchText,
        isComplete: false,
        timeTemp: Date.now(),
      },
    ]);
    setSearchText("");
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-2xl font-bold mt-8 mb-4">TodoList</h1>
      <div className="flex justify-center mb-4">
        <input
          className="h-12 w-full md:w-1/3 bg-slate-400 rounded-md px-4 text-2xl"
          type="text"
          placeholder="Add a new todo..."
          value={searchText}
          onChange={inputHandler}
        />
      </div>
      <div className="flex justify-center mb-4">
        <button className="h-14 w-32 bg-green-600 rounded-md" onClick={List}>
          Add
        </button>
      </div>
      <div className="w-full md:w-2/3 mx-auto">
        <ol className="list-decimal text-black font-extrabold  text-lg">
          {todoData.length === 0
            ? "Please Add Todo ... "
            : todoData.map((List) => (
                  <>
                  <ListCompnnets todoData={todoData} List={List} removeList={removeList}  searchText={searchText} key={List.id} />
                  </>
              ))}
        </ol>
      </div>
    </div>
  );
};

export default ToDoApp;
