import { Card } from "@chakra-ui/react";
import Image from "next/image";
import data from "../../data.json";
import styles from "./popularCards.module.css";

export default function PopularCards() {
  return (
    <div className={styles.container}>
      {data.map((currentData) => {
        return (
          <>
            <Card maxW='sm' className={styles.card}>
              <Image src={currentData.image} alt={currentData.name} className={styles.image} width={296} height={296} />
              <p className={styles.name}>{currentData.name}</p>
              <p className={styles.price}>from <b>{currentData.price}</b></p>
            </Card>
          </>
        )
      })}
    </div>
  )
}