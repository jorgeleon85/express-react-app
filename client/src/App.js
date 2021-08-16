import { useState } from "react";
import { useAnimals } from "./services/animals.service";
import "./App.css";

import TableContainer from "./components/Table/TableContainer";
import FormContainer from "./components/Form/FormContainer";
import SearchForm from "./components/Search/SearchForm";
import AddAnimal from "./components/Table/AddAnimal";

function App() {
  const { data, hasError, isLoading, refresh } = useAnimals();
  const [selectedAnimal, setSelectedAnimal] = useState({});
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <SearchForm data={data}>
        {(filteredData) => {
          return (
            <>
              {showForm && (
                <FormContainer
                  selectedAnimal={selectedAnimal}
                  setShowForm={setShowForm}
                  refresh={refresh}
                ></FormContainer>
              )}
              <TableContainer
                data={filteredData}
                hasError={hasError}
                isLoading={isLoading}
                setSelectedAnimal={setSelectedAnimal}
                setShowForm={setShowForm}
                refresh={refresh}
              ></TableContainer>
              <AddAnimal
                setSelectedAnimal={setSelectedAnimal}
                setShowForm={setShowForm}
              />
            </>
          );
        }}
      </SearchForm>
    </div>
  );
}

export default App;
