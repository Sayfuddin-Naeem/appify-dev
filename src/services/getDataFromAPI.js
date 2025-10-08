
const getDataFromAPI = async () => {
    const apiUrl = "/api/tickets.json";
    const res = await fetch(apiUrl);

    return res.json();
};

export default getDataFromAPI;