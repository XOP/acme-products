import Picture from "choom/lib/components/picture/Picture";

import styles from './logo.module.css';

const Logo = () => {
  return (
    <Picture
      className={styles.root}
      aspectRatio="1:1"
      width="15vw"
      src="https://res.cloudinary.com/wdybih/image/upload/f_auto,q_auto/v1636151378/favicons/android-chrome-512x512_h8yite.png"
    />
  );
};

export { Logo };
