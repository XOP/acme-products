import { Chip, Icon } from "choom-react";

const Badge = ({ children, title }) => {
  return (
    <Chip title={title}>
      <Icon size="inherit">{children}</Icon>
    </Chip>
  );
};

export { Badge };
