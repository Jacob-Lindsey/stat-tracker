export default function fetchData(setData) {
    fetch('https://ergast.com/api/f1/2021/driverStandings.json')
        .then(response => response.json())
        .then(data => setData(data.MRData.StandingsTable));
};