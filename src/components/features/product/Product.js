import {
  IconCalendarEvent,
  IconTag,
  IconBookmark,
  IconStar,
  IconStars,
} from "@tabler/icons";

import Heading from "choom/lib/components/heading/Heading";
import Button from "choom/lib/components/button/Button";
import Card from "choom/lib/components/card/Card";
import FlexUnit from "choom/lib/components/layout/FlexUnit";
import Picture from "choom/lib/components/picture/Picture";
import Space from "choom/lib/components/space/Space";
import Support from "choom/lib/components/layout/Support";

import { Badge } from "../../shared/badge/Badge";
import { Tag } from "../../shared/tag/Tag";

import styles from "./product.module.css";

const imgSrc =
  "https://res.cloudinary.com/wdybih/image/upload/w_400,f_auto,q_auto:eco,dpr_2/v1634935614/samples/ecommerce/accessories-bag.jpg";

const Product = ({
  children: title,
  year,
  category,
  attrFancy,
  attrRare,
  isSaved,
  onClick,
  onSave,
}) => {
  return (
    <Card padding="1" className={styles.root}>
      <Support>
        <FlexUnit grow="1" fluid>
          <Picture src={imgSrc} width="100%" height="10rem" />
          <Heading level="5" as="h2" colorInherit align="left" mb="1" mt="0.5">
            {title}
          </Heading>
          <div className={styles.badges}>
            {
              attrFancy && <Badge title="Fancy!"><IconStar /></Badge>
            }
            {
              attrRare && <Badge title="Rare!"><IconStars /></Badge>
            }
          </div>
        </FlexUnit>

        {/* <Icon size="inherit">
          <IconBookmark />
        </Icon>
         */}
        <div>
          <Tag icon={<IconCalendarEvent />} title={`Production year: ${year}`}>{year}</Tag>
          <Tag icon={<IconTag />} title={`Category: ${category}`}>{category}</Tag>
        </div>
        <Space size="1"></Space>
        <Button onClick={onClick} fluid>
          Discover Price
        </Button>
      </Support>
    </Card>
  );
};

export { Product };
