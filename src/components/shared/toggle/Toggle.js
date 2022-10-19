import { Heading, Icon, Media, Switch } from "choom-react";

const Toggle = ({ children, checked, icon, onChange }) => {
  return (
    <Media
      space="0.5"
      align="center"
      start={<Icon>{icon}</Icon>}
      end={<Switch checked={checked} onChange={onChange} />}
    >
      <Heading as="label" level="6" align="left" colorInherit>
        {children}
      </Heading>
    </Media>
  );
};

export { Toggle };
