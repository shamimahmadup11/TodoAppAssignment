



import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const ListCompnnets = ({ List, removeList, updateHours }) => {
  const [count, setCount] = useState(List.timeTemp);

  useEffect(() => {
    setCount(List.timeTemp);
  }, [List.timeTemp]);

  const increment = () => {
    const updatedCount = count + 1;
    setCount(updatedCount);
    updateHours(List.id, updatedCount);
  };

  const decrement = () => {
    if (count > 0) {
      const updatedCount = count - 1;
      setCount(updatedCount);
      updateHours(List.id, updatedCount);
    } else {
      removeList(List.id);
    }
  };

  return (
    <div>
      <div
        key={List.id}
        className="flex justify-center items-center space-x-4 mb-2"
      >
        <li className=" bg-slate-400 rounded-md p-3 flex-1">{List.task}</li>
        <div className="bg-slate-400 rounded-md p-3 flex-1">{count} hours...</div>
        <button
          className="h-8  w-16 bg-green-600 rounded-md"
          onClick={increment}
          title="Increment"
        >
          +
        </button>
        <button
          className="h-8  w-16 bg-red-600 rounded-md"
          onClick={decrement}
          title="Decrement"
        >
          -
        </button>
        <button
          className="h-8  w-24 bg-red-600 rounded-md"
          onClick={() => removeList(List.id)}
          title="Delete Todo"
        >
          Remove
        </button>
        <input type="checkbox" className="h-6 w-6" />
      </div>
    </div>
  );
};

ListCompnnets.propTypes = {
  List: PropTypes.object.isRequired,
  removeList: PropTypes.func.isRequired,
  updateHours: PropTypes.func.isRequired,
};

export default ListCompnnets;
