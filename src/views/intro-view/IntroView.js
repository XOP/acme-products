import { Link } from "react-router-dom";

import { routeNames } from "../../routes";

const IntroView = () => {
  return (
    <div>
      Intro page
      <hr />
      <Link to={routeNames.LIST}>To List page</Link>
    </div>
  );
};

export { IntroView };
