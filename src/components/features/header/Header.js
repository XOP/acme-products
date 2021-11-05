import Heading from "choom/lib/components/heading/Heading";
import Flex from "choom/lib/components/layout/Flex";
import Flow from "choom/lib/components/layout/Flow";
import FlexUnit from "choom/lib/components/layout/FlexUnit";
import Panel from "choom/lib/components/panel/Panel";

import { NavLink } from "../navlink/NavLink";

import { routeNames } from "../../../routes";

import styles from './header.module.css';

const Header = () => {
  return (
    <Panel as="header" position="relative" placement="top" padding="1" className={styles.root}>
      <Flex fluid align="start" justify="start">
        <FlexUnit fluid={false} grow={0}>
          <Heading level="4" as="h1" colorInherit align="left">
            ACME
          </Heading>
        </FlexUnit>
        <FlexUnit grow={1}>
          <Flow space="2" justify="end">
            <NavLink to={routeNames.INTRO}>Intro</NavLink>
            <NavLink to={routeNames.LIST}>Products</NavLink>
          </Flow>
        </FlexUnit>
      </Flex>
    </Panel>
  );
};

export { Header };
