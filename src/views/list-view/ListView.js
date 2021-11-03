import { Link, Outlet } from "react-router-dom";

import { routeNames } from "../../routes";

const ListView = () => {
  const items = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  return (
    <div>
      List page
      <hr />
      {items.map(({ id }) => {
        return (
          <span key={id}>
            <Link to={id.toString()}>Item {id}</Link> |
          </span>
        );
      })}
      <hr />
      <Link to={routeNames.INTRO}>To Intro page</Link>

      <Outlet />
    </div>
  );
};

export { ListView };
