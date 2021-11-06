import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import {routeNames} from '../../routes';

import { statusSelector, modalToggle, itemSelector } from "../../redux/slices/itemsSlice";
import { STATUS } from "../../redux/globals";

import { Details } from "../../components/features/details/Details";

const ItemView = () => {
  const { item: id } = useParams();

  const status = useSelector(statusSelector);
  const item = useSelector((state) => itemSelector(state, id));

  const isLoading =
    status === STATUS.loading ||
    status === STATUS.init;

  const isError = status === STATUS.error;

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCache(movie));
  // }, [dispatch, movie]);

  const navigate = useNavigate();

  const handleModalClose = () => {
    dispatch(modalToggle(false));
    navigate(routeNames.LIST);
  };

  return (
    <Details
      id={id}
      {...item}
      isLoading={isLoading}
      isError={isError}
      isOpen={true}
      onClose={handleModalClose}
    />
  );
};

export { ItemView };
