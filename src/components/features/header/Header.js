import { Heading, Flex, Flow, FlexUnit, Panel } from "choom-react";

import { Shell } from "../../shared/shell/Shell";

import { routeNames } from "../../../routes";

import { NavLink } from "../navlink/NavLink";

import styles from "./header.module.css";

const Header = () => {
  return (
    <Panel
      as="header"
      position="relative"
      placement="top"
      padding="0"
      className={styles.root}
    >
      <Shell space="1">
        <Flex fluid align="start" justify="start">
          <FlexUnit fluid={false} grow={0}>
            <Heading level="4" as="h1" colorInherit align="left">
              <NavLink to={routeNames.INTRO} modPlain>
                ACME
              </NavLink>
            </Heading>
          </FlexUnit>
          <FlexUnit grow={1}>
            <Flow space="2" justify="end">
              <NavLink to={routeNames.INTRO}>Intro</NavLink>
              <NavLink to={routeNames.LIST}>Products</NavLink>
            </Flow>
          </FlexUnit>
        </Flex>
      </Shell>
    </Panel>
  );
};

export { Header };
