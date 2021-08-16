const TableRow = ({ data, onUpdate, onDelete }) => {
  return (
    <div className="TableRow AnimalItem">
      <div className="TableCell AnimalItem__name">{data.name}</div>
      <div className="TableCell AnimalItem__age">{data.age}</div>
      <div className="TableCell AnimalItem__species">{data.species}</div>
      <div className="TableCell AnimalItem__actions">
        <button
          className="TableButton btn btn-primary"
          onClick={() => onUpdate(data.id, data)}
        >
          Update
        </button>
        <button
          className="TableButton btn btn-primary"
          onClick={() => onDelete(data.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TableRow;
