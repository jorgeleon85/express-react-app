import { useState } from "react";
import { useAnimals } from "./services/animals.service";
import "./App.css";

import TableContainer from "./components/Table/TableContainer";
import FormContainer from "./components/Form/FormContainer";
import withSearch from "./components/Search/withSearch";
import AddAnimal from "./components/Table/AddAnimal";

function App() {
  const { data, hasError, isLoading, refresh } = useAnimals();
  const [selectedAnimal, setSelectedAnimal] = useState({});
  const [showForm, setShowForm] = useState(false);

  const TableWithSearch = withSearch(TableContainer);

  return (
    <div className="App">
      {showForm && (
        <FormContainer
          selectedAnimal={selectedAnimal}
          setShowForm={setShowForm}
          refresh={refresh}
        ></FormContainer>
      )}
      <TableWithSearch
        data={data}
        hasError={hasError}
        isLoading={isLoading}
        setSelectedAnimal={setSelectedAnimal}
        setShowForm={setShowForm}
        refresh={refresh}
      ></TableWithSearch>
      <AddAnimal
        setSelectedAnimal={setSelectedAnimal}
        setShowForm={setShowForm}
      />
    </div>
  );
}

export default App;
