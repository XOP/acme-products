import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

import Heading from "choom/lib/components/heading/Heading";
import Flow from "choom/lib/components/layout/Flow";
import FlexUnit from "choom/lib/components/layout/FlexUnit";
import Loader from "choom/lib/components/loader/Loader";

import {
  fetchItems,
  itemsSelector,
  statusSelector,
} from "../../redux/slices/itemsSlice";
import { STATUS } from "../../redux/globals";

import { Splash } from "../../components/shared/splash/Splash";
import { Product } from "../../components/features/product/Product";

import styles from "./grid.module.css";

const ListView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const status = useSelector(statusSelector);
  const items = useSelector(itemsSelector);

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
        {status === STATUS.idle && (
          <section className={styles.root}>
            {!!items.length &&
              items.map(
                ({ id, title, year, price, category, attrFancy, attrRare }) => {
                  return (
                    <FlexUnit
                      grow="1"
                      fluid
                      justify="stretch"
                      align="stretch"
                      className={styles.item}
                    >
                      <Product
                        key={id}
                        year={year}
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
                    </FlexUnit>
                  );
                }
              )}
          </section>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export { ListView };
