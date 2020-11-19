import axios from "axios";
import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";

class FunkoStore {
  funkos = [];

  constructor() {
    makeObservable(this, {
      funkos: observable,
      fetchFunkos: action,
      createFunko: action,
      deleteFunko: action,
      updateFunko: action,
    });
  }

  fetchFunkos = async () => {
    const response = await axios.get("http://localhost:8000/funkos");
    this.funkos = response.data;
  };
  updateFunko = (updatedFunko) => {
    const funko = this.funkos.find((funko) => funko.id === updatedFunko.id);
    for (const key in funko) funko[key] = updatedFunko[key];
    funko.slug = slugify(funko.name);
  };

  createFunko = (newFunko) => {
    newFunko.id = this.funkos[this.funkos.length - 1].id + 1;
    newFunko.slug = slugify(newFunko.name);
    this.funkos.push(newFunko);
  };

  deleteFunko = (funkoid) => {
    this.funkos = this.funkos.filter((funko) => funkoid !== funko.id);
  };
}

const funkoStore = new FunkoStore();
funkoStore.fetchFunkos();
export default funkoStore;
