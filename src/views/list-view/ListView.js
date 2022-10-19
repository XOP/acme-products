import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { forceCheck } from "react-lazyload";

import { Heading, Flow, Loader } from "choom-react";

import {
  fetchItems,
  filteredItemsSelector,
  statusSelector,
  itemSaveToggle,
} from "../../redux/slices/itemsSlice";
import { STATUS } from "../../redux/globals";

import { Dashboard } from "../../components/features/dashboard/Dashboard";
import { Grid, GridUnit } from "../../components/shared/grid/Grid";
import { Product } from "../../components/features/product/Product";
import { Splash } from "../../components/shared/splash/Splash";

const ListView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const status = useSelector(statusSelector);
  const items = useSelector(filteredItemsSelector);

  useEffect(() => {
    forceCheck();
  }, [items]);

  const navigate = useNavigate();

  const handleSave = ({ id, isSaved }) => {
    dispatch(itemSaveToggle({ id, isSaved }));
  };

  return (
    <div>
      <div>
        {(status === STATUS.loading || status === STATUS.init) && (
          <Splash>
            <Flow>
              <Loader />
            </Flow>
            <br />
            <Heading as="div" level="5">
              Shipment incoming...
            </Heading>
          </Splash>
        )}

        {status === STATUS.idle && <Dashboard />}

        {status === STATUS.idle && (
          <Grid>
            {!!items.length &&
              items.map(
                ({
                  id,
                  title,
                  year,
                  imgSrc,
                  price,
                  category,
                  attrFancy,
                  attrRare,
                  isSaved,
                }) => {
                  return (
                    <GridUnit key={id}>
                      <Product
                        id={id}
                        year={year}
                        imgSrc={imgSrc}
                        price={price}
                        category={category}
                        attrFancy={attrFancy}
                        attrRare={attrRare}
                        isSaved={isSaved}
                        onClick={() => {
                          navigate(id);
                        }}
                        onSave={handleSave}
                      >
                        {title}
                      </Product>
                    </GridUnit>
                  );
                }
              )}
          </Grid>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export { ListView };
