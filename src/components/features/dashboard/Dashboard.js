import { useSelector, useDispatch } from "react-redux";

import { IconStars, IconStar, IconBookmark } from "@tabler/icons";

import Flow from "choom/lib/components/layout/Flow";
import FlexUnit from "choom/lib/components/layout/FlexUnit";
import Heading from "choom/lib/components/heading/Heading";
import Panel from "choom/lib/components/panel/Panel";
import Select from "choom/lib/components/select/Select";
import SelectOption from "choom/lib/components/select/SelectOption";
import Space from "choom/lib/components/space/Space";

import { Toggle } from "../../shared/toggle/Toggle";

import {
  rareAttrSelector,
  fancyAttrSelector,
  categorySelector,
  savedFilterSelector,
  rareToggle,
  fancyToggle,
  savedToggle,
  categoryChange,
  savedItemsAmountSelector,
  itemCategoriesSelector,
  itemsAmountSelector,
  filteredItemsAmountSelector,
} from "../../../redux/slices/itemsSlice";

const Dashboard = () => {
  const isFancyAttr = useSelector(fancyAttrSelector);
  const isRareAttr = useSelector(rareAttrSelector);
  const isSavedFilter = useSelector(savedFilterSelector);
  const currentCategory = useSelector(categorySelector);
  const categories = useSelector(itemCategoriesSelector);

  const totalAmount = useSelector(itemsAmountSelector);
  const savedAmount = useSelector(savedItemsAmountSelector);
  const filteredAmount = useSelector(filteredItemsAmountSelector);

  const dispatch = useDispatch();

  const handleFancy = (val) => dispatch(fancyToggle(val));
  const handleRare = (val) => dispatch(rareToggle(val));
  const handleCategory = (val) => dispatch(categoryChange(val));
  const handleSaved = (val) => dispatch(savedToggle(val));

  let filterMessage = "";

  if (filteredAmount === 0) {
    filterMessage = "ACME hasn't produced matching items... yet";
  } else if (totalAmount === filteredAmount) {
    filterMessage = `ACME catalogue counts ${totalAmount} items:`;
  } else {
    const s = filteredAmount > 1 ? "s" : "";

    filterMessage = `Groovy! We found ${filteredAmount} matching item${s}!`;
  }

  return (
    <>
      <Panel as="section" position="relative" placement="top" padding="1">
        <Flow wrap space="2">
          <FlexUnit>
            <Flow wrap={false} space="2">
              <FlexUnit fluid>
                <Toggle
                  icon={<IconStar />}
                  checked={isFancyAttr}
                  onChange={handleFancy}
                >
                  Fancy
                </Toggle>
              </FlexUnit>
              <FlexUnit fluid>
                <Toggle
                  icon={<IconStars />}
                  checked={isRareAttr}
                  onChange={handleRare}
                >
                  Rare
                </Toggle>
              </FlexUnit>
            </Flow>
          </FlexUnit>
          <FlexUnit basis="50%">
            <Flow wrap={false} space="2">
              {savedAmount > 0 && (
                <FlexUnit fluid>
                  <Toggle
                    icon={<IconBookmark />}
                    checked={isSavedFilter}
                    onChange={handleSaved}
                  >
                    Saved
                  </Toggle>
                </FlexUnit>
              )}
              <FlexUnit fluid>
                <Select value={currentCategory} onChange={handleCategory}>
                  {categories.map((cat) => {
                    return (
                      <SelectOption key={cat} value={cat}>
                        {cat === "placeholder" ? "All categories" : cat}
                      </SelectOption>
                    );
                  })}
                </Select>
              </FlexUnit>
            </Flow>
          </FlexUnit>
        </Flow>
      </Panel>
      <Space size="1" />
      {filterMessage && (
        <Heading as="div" level="4" mb="1.5">
          {filterMessage}
        </Heading>
      )}
    </>
  );
};

export { Dashboard };
