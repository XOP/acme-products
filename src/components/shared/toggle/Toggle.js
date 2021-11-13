import Heading from "choom/lib/components/heading/Heading";
import Icon from "choom/lib/components/icon/Icon";
import Media from "choom/lib/components/layout/Media";
import Switch from "choom/lib/components/switch/Switch";

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
