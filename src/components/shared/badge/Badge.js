import Chip from "choom/lib/components/chip/Chip";
import Icon from "choom/lib/components/icon/Icon";

const Badge = ({ children, title }) => {
  return (
    <Chip title={title}>
      <Icon size="inherit">{children}</Icon>
    </Chip>
  );
};

export { Badge };
