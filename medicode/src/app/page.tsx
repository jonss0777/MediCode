import Image from "next/image";
import styles from "./page.module.css";
import medicode_logo from "./images/medicode.jpeg"

import ImageCarousel from "./ImageCarousel"


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <ImageCarousel></ImageCarousel>
            
      </main>
      <footer className={styles.footer}>
       
      
      </footer>
    </div>
  );
}
