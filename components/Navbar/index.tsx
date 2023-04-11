import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <h1>Flower Culture</h1>
      <div className={styles.navMenu}>
        <Link href="/">Home</Link>
        <Link href="/products">Shop</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  )
}