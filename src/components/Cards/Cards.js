import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Content from './Content/Content';
import styles from './Cards.module.css';

const Cards = () => {

  const [year, setYear] = useState(2021);

  /* const { isLoading, error, data } = useQuery("driver-list", () =>
    fetch(`https://ergast.com/api/f1/${year}/driverStandings.json`)
      .then((res) => res.json())); */

  async function fetchDriversByYear() {
    const {data} = await axios.get(`https://ergast.com/api/f1/${year}/driverStandings.json`);
    return data;
  };

  const { isLoading, error, data } = useQuery(["driver-list", year], fetchDriversByYear);

  const handleDecrement = () => {
    setYear((year) => year - 1);
  };

  const handleIncrement = () => {
    setYear((year) => year + 1);
  };
      
  const content = 
    isLoading 
      ? <h1 className={styles.title}>"Loading..."</h1> 
    : error
      ? <h1 className={styles.title}>"Error getting data"</h1>
    : 
      <>
        <div className={styles.yearNavigation}>
          <span onClick={handleDecrement}>&lt;</span>
          <h1 className={styles.title}>{data.MRData.StandingsTable.season}</h1>
          <span onClick={handleIncrement}>&gt;</span>
        </div>
        
        {
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((driver,index) => (
            <Content data={driver} key={index} />
          ))
        }
      </>

  return (
    <div className={styles.wrapper}>
      {content}
    </div>
  );
};

export default Cards;
