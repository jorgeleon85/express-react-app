import { useState } from "react";

export const AnimalForm = ({ animal = {}, onFormSubmit, onFormCancel }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    species: "",
  });

  const isNew = formData.id === "";

  if (formData.id !== animal.id) {
    setFormData({ ...animal });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(formData);
  };

  const onChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <div className="AnimalForm">
      <div className="modal-overlay" id="modal-overlay"></div>
      <div className="modal" id="modal">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            {isNew ? <h2>Add new Animal</h2> : <h2>Update Animal</h2>}
            <label className="form-label" htmlFor="nameInput">
              Name:
            </label>
            <input
              id="nameInput"
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="ageInput">
              Age:
            </label>
            <input
              id="ageInput"
              type="text"
              name="age"
              required
              pattern="[0-9]*"
              value={formData.age}
              onChange={onChange}
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="speciesInput">
              Species:
            </label>
            <textarea
              id="speciesInput"
              name="species"
              required
              value={formData.species}
              onChange={onChange}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="form-button btn btn-primary">
              Save
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onFormCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
