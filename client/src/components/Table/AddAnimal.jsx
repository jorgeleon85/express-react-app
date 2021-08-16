const AddAnimal = (props) => {
  const handleAdd = () => {
    props.setSelectedAnimal({
      id: "",
      name: "",
      species: "",
      age: 0,
    });
    props.setShowForm(true);
  };

  return (
    <div className="footer-actions">
      <button className="btn btn-primary" onClick={handleAdd}>
        Add animal
      </button>
    </div>
  );
};

export default AddAnimal;
