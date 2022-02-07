import { useQuery } from 'react-query';
import Content from './Content/Content';
import styles from './Cards.module.css';

const Cards = () => {

  const { isLoading, error, data } = useQuery("driver-list", () =>
    fetch('https://ergast.com/api/f1/2021/driverStandings.json')
      .then((res) => res.json()));
      
  const content = 
    isLoading 
      ? <h1 className={styles.title}>"Loading..."</h1> 
    : error
      ? <h1 className={styles.title}>"Error getting data"</h1>
    : 
      <>
        <h1 className={styles.title}>{data.MRData.StandingsTable.season}</h1>
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
