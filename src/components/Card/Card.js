import { useEffect, useState } from 'react'
import fetchData from '../../utils/fetchData'
import styles from './Card.module.css'

const Card = () => {

  const [data, setData] = useState(); 

  useEffect(() => {
    fetchData(setData);
  },[setData]);

  return (

    <div className={styles.wrapper}>
      <h1 className={styles.title}>{data.season}</h1>
      {
        data.StandingsLists[0].DriverStandings.map((driver,index) => (
          <span className={styles.card} key={index}>
            <div className={styles.result}>{driver.position}</div>
            <div className={styles.name}>{driver.Driver.givenName} {driver.Driver.familyName}</div>
            <div className={styles.points}>{driver.points}</div>
            <div className={styles.wins}>{driver.wins}</div>
            <div className={styles.number}>{driver.Driver.permanentNumber}</div>
          </span>
        ))
      }
      
    </div>
  )
}

export default Card
