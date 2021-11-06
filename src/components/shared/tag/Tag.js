import Chip from "choom/lib/components/chip/Chip";
import Icon from "choom/lib/components/icon/Icon";
import Media from "choom/lib/components/layout/Media";

const Tag = ({ children, icon, title }) => {
  return (
    <Chip title={title}>
      <Media space="0.25" start={<Icon size="inherit">{icon}</Icon>}>
        {children}
      </Media>
    </Chip>
  );
};

export { Tag };
