import useData from "./useData";
import request from "./request";

const baseUrl = "http://localhost:3030";

// Hooks

export const useAnimals = () => {
  return useData(`${baseUrl}/animal`, { method: "GET" });
};

// Regular CRUD operations: POST/PUT/DELETE

const catchError = () => {
  alert("There was a problem saving the data to the server");
};

export const addAnimal = (animal) => {
  return request(`${baseUrl}/animal`, { method: "POST" }, animal).catch(
    catchError
  );
};

export const updateAnimal = (id, animal) => {
  return request(`${baseUrl}/animal/${id}`, { method: "PUT" }, animal).catch(
    catchError
  );
};

export const removeAnimal = (id) => {
  return request(`${baseUrl}/animal/${id}`, { method: "DELETE" }).catch(
    catchError
  );
};
