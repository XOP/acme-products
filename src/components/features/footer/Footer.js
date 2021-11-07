import Jabber from "jabber";

import Panel from "choom/lib/components/panel/Panel";
import Flow from "choom/lib/components/layout/Flow";

import { FootLink } from "../footlink/FootLink";

import styles from "./footer.module.css";

const linksData = (() => {
  let amount = 10;
  let values = [];

  const jabber = new Jabber();

  while (amount-- > 0) {
    const link = {
      title: jabber
        .createParagraph(Math.max(2, Math.ceil(Math.random() * 3)))
        .slice(0, -2),
      href: `http://${jabber.createWord(10)}.${jabber.createWord(3)}`,
    };

    values.push(link);
  }

  return values;
})();

const Footer = () => {
  return (
    <Panel
      as="footer"
      position="static"
      placement="bottom"
      padding="1"
      className={styles.root}
    >
      <div className={styles.content}>
        <p>ACME company is well represented by the following brands:</p>
        <Flow wrap space="0.5">
          {linksData.map((link) => {
            return (
              <FootLink key={link.href} href={link.href} title={link.title}>
                {link.title}
              </FootLink>
            );
          })}
        </Flow>
        <p>
          From{" "}
          <FootLink href="https://www.acme.com/catalog/acme.html">
            ACME
          </FootLink>{" "}
          with ♥︎ |{" "}
          <FootLink href="https://github.com/XOP" title="XOP">
            XOP
          </FootLink>
          , 2021
        </p>
      </div>
    </Panel>
  );
};

export { Footer };
