import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Content from './Content/Content';
import styles from './Cards.module.css';

const Cards = () => {

  const [year, setYear] = useState(2021);

  async function fetchDriversByYear() {
    const {data} = await axios.get(`https://ergast.com/api/f1/${year}/driverStandings.json`);
    return data;
  };

  const { isLoading, error, data } = useQuery(["driver-list", year], fetchDriversByYear);

  const handleDecrement = () => {
    setYear((year) => year - 1);
  };

  const handleIncrement = () => {
    if (year === 2021) {
      return;
    }
    setYear((year) => year + 1);
  };
      
  const content = 
    isLoading 
      ? <h1 className={styles.title}>Loading...</h1> 
    : error
      ? <h1 className={styles.title}>Error getting data</h1>
    : 
      <>
        <div className={styles.yearNavigationWrapper}>
          <span className={styles.year} onClick={handleDecrement}>{year-1}</span>
          <div className={styles.yearNavigation}>
            <span className={styles.year} onClick={handleDecrement}>&lt;</span>
            <div className={styles.title}>{data.MRData.StandingsTable.season}</div>
            <span className={styles.year} onClick={handleIncrement}>&gt;</span>
          </div>
          <span className={`${styles.year} ${year === 2021 ? styles.disabled : ''}`} onClick={handleIncrement}>{year+1}</span>
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