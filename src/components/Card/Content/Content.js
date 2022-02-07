import { useState } from "react";
import getDriverImage from "../../../data/getDriverImage";
import styles from "./Content.module.css";

const Content = (driver) => {

    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    return (
            <span className={`${styles.card} ${expanded ? styles.expanded : ''}`} onClick={handleClick}>
                <div className={styles.name}>{driver.data.Driver.familyName}</div>
                <div className={styles.team}>{driver.data.Constructors[0].name}</div>
                <div className={styles.image}><img src={`${getDriverImage(driver.data.Driver.code)}`} alt='' /></div>
                <div className={styles.number}>{driver.data.Driver.permanentNumber}</div>
                {/* <div className={`${expanded ? styles.points : styles.hidden}`}>{driver.data.points}</div> */}
            </span>
    )
};

export default Content;