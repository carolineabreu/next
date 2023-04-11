import { Divider } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./Footer.module.css";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Divider colorScheme="blackAlpha" />
      <div className={styles.container}>
        <Link href="/">
          <h1>Flower Culture</h1>
        </Link>
        <Link href="/contact" className={styles.contact}>Contact Us</Link>
        <p>© 2023 Flower Culture. All rights reserved.</p>
      </div>
    </footer>
  )
}