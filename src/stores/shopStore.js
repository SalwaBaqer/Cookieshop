import axios from "axios";
import { makeObservable, observable, action } from "mobx";

class ShopStore {
  shops = [];

  constructor() {
    makeObservable(this, {
      shops: observable,
      fetchShops: action,
    });
  }

  fetchShops = async () => {
    const response = await axios.get("http://localhost:8000/shops");
    this.shops = response.data;
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();
export default shopStore;
