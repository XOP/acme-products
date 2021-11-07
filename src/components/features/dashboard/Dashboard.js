import {} from "@tabler/icons";

import Button from "choom/lib/components/button/Button";
import Flow from "choom/lib/components/layout/Flow";
import FlexUnit from "choom/lib/components/layout/FlexUnit";
import Heading from "choom/lib/components/heading/Heading";
import Icon from "choom/lib/components/icon/Icon";
import Media from "choom/lib/components/layout/Media";
import Panel from "choom/lib/components/panel/Panel";
import Select from "choom/lib/components/select/Select";
import SelectOption from "choom/lib/components/select/SelectOption";
import Space from "choom/lib/components/space/Space";
import Stack from "choom/lib/components/layout/Stack";

import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <Panel as="section" position="relative" placement="top" padding="1">
        <Flow space="1">
          <FlexUnit>
            <Select value="1">
              <SelectOption value="1">One</SelectOption>
            </Select>
          </FlexUnit>
          <FlexUnit>
            <Select value="2">
              <SelectOption value="2">Two</SelectOption>
            </Select>
          </FlexUnit>
        </Flow>
      </Panel>
      <Space size="1" />
    </>
  );
};

export { Dashboard };
