import { useState } from "react";
import getDriverInfo from "../../../data/getDriverInfo";
import getTeamInfo from "../../../data/getTeamInfo";
import styles from "./Content.module.css";

const Content = (driver) => {

    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    const driverImage = getDriverInfo(driver.data.Driver.code);
    const teamBG = getTeamInfo(driver.data.Constructors[0].constructorId);

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
                <div className={styles.points}>{driver.data.points}</div>
                {/* <div className={`${expanded ? styles.points : styles.hidden}`}>{driver.data.points}</div> */}
            </span>
    )
};

export default Content;

