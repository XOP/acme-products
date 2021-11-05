import { useNavigate } from "react-router";
import { IconArrowRight } from "@tabler/icons";

import Button from "choom/lib/components/button/Button";
import Flow from "choom/lib/components/layout/Flow";
import Heading from "choom/lib/components/heading/Heading";
import Icon from "choom/lib/components/icon/Icon";
import Space from "choom/lib/components/space/Space";

import { Logo } from "../../components/features/logo/Logo";
import { Splash } from "../../components/shared/splash/Splash";

import { routeNames } from "../../routes";

const IntroView = () => {
  const navigate = useNavigate();

  return (
    <Splash>
      <Flow>
        <Logo />
      </Flow>

      <Space size="2"></Space>

      <Heading level="2" as="h2" align="center">
        Yes, we probably can!
      </Heading>

      <Space size="2"></Space>

      <Heading level="5" as="h3" align="center">
        Great products for great occasions made easy
      </Heading>

      <Space size="2"></Space>

      <Flow>
        <Button
          size="big"
          iconEnd={
            <Icon size="inherit">
              <IconArrowRight />
            </Icon>
          }
          onClick={() => {navigate(routeNames.LIST)}}
        >
          Find out more
        </Button>
      </Flow>
    </Splash>
  );
};

export { IntroView };
