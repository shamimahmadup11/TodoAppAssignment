
import PropTypes from "prop-types";

const ListCompnnets = ({ List, removeList }) => {
    
 
  return (
    <div>
      <div
        key={List.id}
        className="flex justify-center items-center space-x-4 mb-2"
      >
        <li className=" bg-slate-400 rounded-md p-3 flex-1">{List.task}</li>
        <button
          className="h-14 w-28 bg-red-600 rounded-md"
          onClick={() => removeList(List.id)}
          title="Delete Todo"
        >
          Remove
        </button>
        <button
          className="h-14 w-28 bg-red-600 rounded-md"
          onClick={() => removeList(List.id)}
          title="Edit Todo"
        >
          Edit
        </button>
        <input type="checkbox" className="h-6 w-6" />
      </div>
    </div>
  );
};

ListCompnnets.propTypes = {
  List: PropTypes.object,
  removeList: PropTypes.func,
};

export default ListCompnnets;
