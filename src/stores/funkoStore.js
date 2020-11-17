import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";

import funkos from "../funkos";

class FunkoStore {
  funkos = funkos;

  constructor() {
    makeObservable(this, {
      funkos: observable,
      createFunko: action,
      deleteFunko: action,
      updateFunko: action,
    });
  }

  updateFunko = (updatedFunko) => {
    const funko = this.funkos.find((funko) => funko.id === updatedFunko.id);
    for (const key in funko) funko[key] = updatedFunko[key];
    funko.slug = slugify(funko.name);
  };

  createFunko = (newFunko) => {
    newFunko.id = funkos[funkos.length - 1].id + 1;
    newFunko.slug = slugify(newFunko.name);
    this.funkos.push(newFunko);
  };

  deleteFunko = (funkoid) => {
    this.funkos = this.funkos.filter((funko) => funkoid !== funko.id);
  };
}

const funkoStore = new FunkoStore();
export default funkoStore;
