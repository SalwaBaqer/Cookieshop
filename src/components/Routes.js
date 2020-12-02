import { observer } from "mobx-react";
//from React
import { Route, Switch } from "react-router";

//Components
import FunkoList from "./FunkoList";
import ShopList from "./ShopList";
import FunkoDetail from "./FunkoDetail";
import ShopDetail from "./ShopDetail";
import Home from "./Home";
import funkoStore from "../stores/funkoStore";
const Routes = () => {
  return (
    <Switch>
      <Route path="/shops/:shopSlug">
        <ShopDetail />
      </Route>
      <Route path="/shops">
        <ShopList />
      </Route>
      <Route path="/funkos/:funkoSlug">
        <FunkoDetail />
      </Route>

      <Route path="/funkos">
        <FunkoList funkosprop={funkoStore.funkos} />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
