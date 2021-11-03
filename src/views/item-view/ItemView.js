import { Link, useParams } from "react-router-dom";

import { routeNames } from "../../routes";

const ItemView = () => {
  const { item : id } = useParams();

  return (
    <div>
      Item page number {id}
      <hr />
      <Link to={routeNames.INTRO}>To Intro page</Link>
      <br />
      <Link to={routeNames.LIST}>To List page</Link>
    </div>
  );
};

export { ItemView };
