import { AnimalForm } from "./AnimalForm";
import { updateAnimal, addAnimal } from "../../services/animals.service";
import "./formStyles.css";

const FormContainer = (props) => {
  const onFormSubmit = async (formData) => {
    if (formData.id !== "") {
      await updateAnimal(formData.id, formData);
    } else {
      await addAnimal(formData);
    }
    props.refresh();
    props.setShowForm(false);
  };

  const onFormCancel = async () => {
    props.setShowForm(false);
  };

  return (
    <AnimalForm
      animal={props.selectedAnimal}
      onFormSubmit={onFormSubmit}
      onFormCancel={onFormCancel}
    />
  );
};

export default FormContainer;
