import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

import { routeNames } from "../../routes";

import { fetchItems, itemsSelector, statusSelector } from "../../redux/slices/itemsSlice";
import { STATUS } from "../../redux/globals";

const ListView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const status = useSelector(statusSelector)
  const items = useSelector(itemsSelector);

  return (
    <div>
      List page
      <hr />
      <div>
        {(status === STATUS.loading || status === STATUS.init) && (
          <div>
            <h2>Shipment in progress...</h2>
          </div>
        )}
        {status === STATUS.idle &&
          !!items.length &&
          items.map(({ id, title }) => {
            
            return (
              <div key={id}>
                <Link to={id.toString()}>{title}</Link>
              </div>
            );
          })}
      </div>
      <hr />
      <Link to={routeNames.INTRO}>To Intro page</Link>
      <Outlet />
    </div>
  );
};

export { ListView };
