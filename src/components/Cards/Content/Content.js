import { useState } from "react";
import getDriverInfo from "../../../data/getDriverInfo";
import styles from "./Content.module.css";

const Content = (driver) => {

    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    const driverData = getDriverInfo(driver.data.Driver.code);
    const driverImage = driverData[0];
    const teamBG = driverData[1];
    console.log(teamBG)

    return (
            <span 
                className={`${styles.card} ${expanded ? styles.expanded : ''}`}
                style={{
                    background: `linear-gradient(to right, rgba(29, 29, 29, 0.733), var(${teamBG}))`
                }}
                onClick={handleClick}
            >
                <div className={styles.name}>{driver.data.Driver.familyName}</div>
                <div className={styles.team}>{driver.data.Constructors[0].name}</div>
                <div className={styles.image}><img src={driverImage} alt='' /></div>
                <div className={styles.number}>{driver.data.Driver.permanentNumber}</div>
                {/* <div className={`${expanded ? styles.points : styles.hidden}`}>{driver.data.points}</div> */}
            </span>
    )
};

export default Content;

