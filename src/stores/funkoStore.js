import instance from "./instance";
import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";

class FunkoStore {
  funkos = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      funkos: observable,
      loading: observable,
      fetchFunkos: action,
      createFunko: action,
      deleteFunko: action,
      updateFunko: action,
    });
  }
  getFunkosById = (funkoId) =>
    this.funkos.find((funko) => funko.id === funkoId);

  fetchFunkos = async () => {
    const response = await instance.get("http://localhost:8000/funkos");
    this.funkos = response.data;
    this.loading = false;
  };
  updateFunko = async (updatedFunko) => {
    try {
      await instance.put(`/funkos/${updatedFunko.id}`, updatedFunko);

      const funko = this.funkos.find((funko) => funko.id === updatedFunko.id);
      for (const key in funko) funko[key] = updatedFunko[key];
      funko.slug = slugify(funko.name);
    } catch (error) {
      console.error("FunkoStore -> updateFunko -> error", error);
    }
  };

  createFunko = async (newFunko, shop) => {
    try {
      const response = await instance.post(
        `/shops/${shop.id}/funkos`,
        newFunko
      );

      this.funkos.push(response.data);
      shop.funkos.push({ id: response.data.id });
    } catch (error) {
      console.error("error");
    }
  };

  deleteFunko = async (funkoid) => {
    try {
      await instance.delete(`/funkos/${funkoid}`);
      this.funkos = this.funkos.filter((funko) => funkoid !== funko.id);
    } catch (error) {
      console.error("error");
    }
  };
}

const funkoStore = new FunkoStore();
funkoStore.fetchFunkos();
export default funkoStore;
