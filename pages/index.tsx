import CategoryCards from "@/components/CategoryCards"
import PopularCards from "@/components/PopularCards"
import { Button } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import heroImage from "../public/anders-jilden-O85h02qZ24w-unsplash.jpg"
import styles from "./home.module.css"

export default function Home() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div className={styles.containerText}>
          <h1>Make flowers your culture</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ut dolorum perferendis iure velit?</p>
          <Link href="/products">
            <Button>Shop Now</Button>
          </Link>
        </div>
        <Image src={heroImage} alt="Cherry Blossom" className={styles.containerImg} />
      </div>
      <div className={styles.category}>
        <h1>Explore By Category</h1>
        <CategoryCards />
      </div>
      <div className={styles.popular}>
        <h2>Most Popular</h2>
        <PopularCards />
      </div>
    </div>
  )
}
