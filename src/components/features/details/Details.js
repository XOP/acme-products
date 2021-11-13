import {
  IconCalendarEvent,
  IconTag,
  IconArrowLeft,
  IconStar,
  IconStars,
  IconBookmarkOff,
  IconBookmark,
} from "@tabler/icons";

import Button from "choom/lib/components/button/Button";
import Flow from "choom/lib/components/layout/Flow";
import Divider from "choom/lib/components/divider/Divider";
import Heading from "choom/lib/components/heading/Heading";
import Icon from "choom/lib/components/icon/Icon";
import Loader from "choom/lib/components/loader/Loader";
import Media from "choom/lib/components/layout/Media";
import Modal from "choom/lib/components/modal/Modal";
import Picture from "choom/lib/components/picture/Picture";
import Space from "choom/lib/components/space/Space";
import Stack from "choom/lib/components/layout/Stack";

import { Splash } from "../../shared/splash/Splash";
import { Badge } from "../../shared/badge/Badge";

import styles from "./details.module.css";

const Details = ({
  id,
  title,
  details,
  price,
  year,
  imgSrc,
  category,
  attrFancy,
  attrRare,
  isSaved,
  onSave,
  isLoading,
  isError,
  isOpen,
  onClose = () => null,
}) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <section id={id} className={styles.root}>
        {isError && (
          <Splash>
            <Heading colorInherit level="5" as="div">
              ACME is experiencing meltdown... come back later
            </Heading>
          </Splash>
        )}

        {isLoading && (
          <Splash>
            <Loader />
          </Splash>
        )}

        {!isError && !isLoading && (
          <div className={styles.content}>
            <Space size="3" />

            <Heading level="3" as="h1" colorInherit mb="2">
              {title}
            </Heading>

            <div className={styles.media}>
              <div className={styles.media_image}>
                {imgSrc && (
                  <Picture
                    className={styles.picture}
                    src={imgSrc}
                    alt={title}
                    width="100%"
                    height="16rem"
                  />
                )}
              </div>
              <div className={styles.media_main}>
                <article>{details}</article>
                <Space size="1" />

                {(attrFancy || attrRare) && (
                  <Stack space="0.5">
                    {attrFancy && (
                      <Media
                        space="0.5"
                        align="center"
                        start={
                          <Badge title="Fancy!">
                            <IconStar />
                          </Badge>
                        }
                      >
                        This product is fancy!
                      </Media>
                    )}
                    {attrRare && (
                      <Media
                        space="0.5"
                        align="center"
                        start={
                          <Badge title="Rare!">
                            <IconStars />
                          </Badge>
                        }
                      >
                        This is a collectable!
                      </Media>
                    )}
                  </Stack>
                )}

                <Divider />

                <Heading as="div" level="5" align="left" colorInherit mb="1">
                  Estimated price: ${price}
                </Heading>

                <div>
                  <Button
                    fluid
                    iconStart={
                      <Icon size="regular">
                        {isSaved ? <IconBookmarkOff /> : <IconBookmark />}
                      </Icon>
                    }
                    onClick={() => {
                      onSave({
                        id, 
                        isSaved: !isSaved
                      });
                    }}
                  >
                    {isSaved ? "Unsave..." : "Save it!"}
                  </Button>
                </div>
              </div>
            </div>

            <Space size="2" />

            <Stack className={styles.details} space="0.5">
              {year && (
                <Media
                  start={
                    <Icon>
                      <IconCalendarEvent />
                    </Icon>
                  }
                >
                  Production start: {year}
                </Media>
              )}
              {category && (
                <Media
                  start={
                    <Icon>
                      <IconTag />
                    </Icon>
                  }
                >
                  Category: {category}
                </Media>
              )}
            </Stack>

            <Space size="2" />

            <Flow>
              <Button
                onClick={onClose}
                iconStart={
                  <Icon size="regular">
                    <IconArrowLeft />
                  </Icon>
                }
              >
                {isSaved ? "Back for more" : "Maybe next time"}
              </Button>
            </Flow>
          </div>
        )}
      </section>
    </Modal>
  );
};

export { Details };
