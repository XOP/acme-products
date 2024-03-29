import {
  IconCalendarEvent,
  IconTag,
  IconBookmark,
  IconBookmarkOff,
  IconStar,
  IconStars,
  IconCoin,
} from "@tabler/icons";

import LazyLoad from "react-lazyload";

import {
  Heading,
  Button,
  Card,
  Flow,
  FlexUnit,
  Icon,
  Picture,
  Space,
  Support,
} from "choom-react";

import { Badge } from "../../shared/badge/Badge";
import { Tag } from "../../shared/tag/Tag";

import styles from "./product.module.css";

const Product = ({
  id,
  children: title,
  year,
  imgSrc,
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
          <LazyLoad offset={150} height="12rem">
            <Picture src={imgSrc} width="100%" height="12rem" />
          </LazyLoad>
          <Heading level="5" as="h2" colorInherit align="left" mb="1" mt="0.5">
            {title}
          </Heading>
          <div className={styles.badges}>
            {attrFancy && (
              <Badge title="Fancy!">
                <IconStar />
              </Badge>
            )}
            {attrRare && (
              <Badge title="Rare!">
                <IconStars />
              </Badge>
            )}
          </div>
        </FlexUnit>

        <div>
          <Tag icon={<IconCalendarEvent />} title={`Production year: ${year}`}>
            {year}
          </Tag>
          <Tag icon={<IconTag />} title={`Category: ${category}`}>
            {category}
          </Tag>
        </div>
        <Space size="1"></Space>

        <Flow>
          <FlexUnit grow={0}>
            <Button
              isIcon
              onClick={() => {
                onSave({
                  id,
                  isSaved: !isSaved,
                });
              }}
            >
              <Icon size="regular">
                {isSaved ? <IconBookmarkOff /> : <IconBookmark />}
              </Icon>
            </Button>
          </FlexUnit>
          <Button
            onClick={onClick}
            fluid
            iconEnd={
              <Icon size="regular">
                <IconCoin />
              </Icon>
            }
          >
            Check Price
          </Button>
        </Flow>
      </Support>
    </Card>
  );
};

export { Product };
