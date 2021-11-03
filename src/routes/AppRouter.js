import { Route, Routes } from "react-router-dom";

import { IntroView } from "../views/intro-view/IntroView";
import { ListView } from "../views/list-view/ListView";
import { ItemView } from "../views/item-view/ItemView";

import { routeNames } from ".";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routeNames.INTRO} element={<IntroView />} />
      <Route path={`${routeNames.LIST}/*`} element={<ListView />}>
        <Route path={routeNames.ITEM} element={<ItemView />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
