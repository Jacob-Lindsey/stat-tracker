const getDriversByYear = async (year) => {
    const res = fetch(`https://ergast.com/api/f1/${year}/driverStandings.json`)
        .then(response => response.json());
    return res.data.MRData.StandingsTable;
};

export default getDriversByYear;