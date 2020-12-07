import instance from "./instance";
import { makeObservable, observable, action } from "mobx";

class ShopStore {
  shops = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      shops: observable,
      loading: observable,
      fetchShops: action,
    });
  }

  fetchShops = async () => {
    const response = await instance.get("/shops");
    this.shops = response.data;
    this.loading = false;
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();
export default shopStore;
