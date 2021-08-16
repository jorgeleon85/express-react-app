import { AnimalTable } from "./AnimalTable";
import { removeAnimal } from "../../services/animals.service";
import "./tableStyles.css";

const TableContainer = (props) => {
  const onDelete = async (id) => {
    await removeAnimal(id);
    props.refresh();
  };

  const onUpdate = (id, animal) => {
    props.setSelectedAnimal(animal);
    props.setShowForm(true);
  };

  return (
    <AnimalTable
      {...props}
      onDelete={onDelete}
      onUpdate={onUpdate}
    ></AnimalTable>
  );
};

export default TableContainer;
