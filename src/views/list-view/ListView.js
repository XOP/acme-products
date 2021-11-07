import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

import Heading from "choom/lib/components/heading/Heading";
import Flow from "choom/lib/components/layout/Flow";
import Loader from "choom/lib/components/loader/Loader";

import {
  fetchItems,
  filteredItemsSelector,
  statusSelector,
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

  const navigate = useNavigate();

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
                }) => {
                  return (
                    <GridUnit key={id}>
                      <Product
                        year={year}
                        imgSrc={imgSrc}
                        price={price}
                        category={category}
                        attrFancy={attrFancy}
                        attrRare={attrRare}
                        onClick={() => {
                          navigate(id);
                        }}
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
