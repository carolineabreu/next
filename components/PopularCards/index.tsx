import { Card } from "@chakra-ui/react";
import Image from "next/image";
import basket1 from "../../public/assets/basket1.jpg";
import basket2 from "../../public/assets/basket2.jpg";
import basket3 from "../../public/assets/basket3.jpg";
import bouquet1 from "../../public/assets/bouquet1.jpg";
import bouquet2 from "../../public/assets/bouquet2.jpg";
import bouquet3 from "../../public/assets/bouquet3.jpg";
import potted1 from "../../public/assets/potted1.jpg";
import potted2 from "../../public/assets/potted2.jpg";
import potted3 from "../../public/assets/potted3.jpg";
import vase1 from "../../public/assets/vase1.jpg";
import vase2 from "../../public/assets/vase2.jpg";
import vase3 from "../../public/assets/vase3.jpg";
import styles from "./popularCards.module.css";

export default function PopularCards() {
  return (
    <div className={styles.container}>
      <div className={styles.rows}>
        <Card maxW='sm' className={styles.card}>
          <Image src={vase1} alt="" className={styles.image} />
          <p className={styles.name}>Orange Rose Vase</p>
          <p className={styles.price}>from <b>$24.50</b></p>
        </Card>
        <Card maxW='sm' className={styles.card}>
          <Image src={bouquet1} alt="" className={styles.image} />
          <p className={styles.name}>Bouquet Pink Rose</p>
          <p className={styles.price}>from <b>$24.50</b></p>
        </Card>
        <Card maxW='sm' className={styles.card}>
          <Image src={basket1} alt="" className={styles.image} />
          <p className={styles.name}>Basket of Roses</p>
          <p className={styles.price}>from <b>$24.50</b></p>
        </Card>
        <Card maxW='sm' className={styles.card}>
          <Image src={potted1} alt="" className={styles.image} />
          <p className={styles.name}>Peperomia Potted</p>
          <p className={styles.price}>from <b>$24.50</b></p>
        </Card>
      </div>
      <div className={styles.rows}>
        <Card maxW='sm' className={styles.card}>
          <Image src={bouquet2} alt="" className={styles.image} />
          <p className={styles.name}>Bouquet Pink and White Flowers</p>
          <p className={styles.price}>from <b>$24.50</b></p>
        </Card>
        <Card maxW='sm' className={styles.card}>
          <Image src={basket2} alt="" className={styles.image} />
          <p className={styles.name}>Basket of Sunflowers</p>
          <p className={styles.price}>from <b>$24.50</b></p>
        </Card>
        <Card maxW='sm' className={styles.card}>
          <Image src={potted2} alt="" className={styles.image} />
          <p className={styles.name}>Ficus Potted</p>
          <p className={styles.price}>from <b>$24.50</b></p>
        </Card>
        <Card maxW='sm' className={styles.card}>
          <Image src={vase2} alt="" className={styles.image} />
          <p className={styles.name}>Red Tulips Vase</p>
          <p className={styles.price}>from <b>$24.50</b></p>
        </Card>
      </div>
      <div className={styles.rows}>
        <Card maxW='sm' className={styles.card}>
          <Image src={potted3} alt="" className={styles.image} />
          <p className={styles.name}>Devil´s ivy Suspense Vase</p>
          <p className={styles.price}>from <b>$24.50</b></p>
        </Card>
        <Card maxW='sm' className={styles.card}>
          <Image src={basket3} alt="" className={styles.image} />
          <p className={styles.name}>Basket of Roses</p>
          <p className={styles.price}>from <b>$24.50</b></p>
        </Card>
        <Card maxW='sm' className={styles.card}>
          <Image src={bouquet3} alt="" className={styles.image} />
          <p className={styles.name}>Red Roses Bouquet</p>
          <p className={styles.price}>from <b>$24.50</b></p>
        </Card>
        <Card maxW='sm' className={styles.card}>
          <Image src={vase3} alt="" className={styles.image} />
          <p className={styles.name}>Mixed Flowers Vase</p>
          <p className={styles.price}>from <b>$24.50</b></p>
        </Card>
      </div>
    </div>
  )
}