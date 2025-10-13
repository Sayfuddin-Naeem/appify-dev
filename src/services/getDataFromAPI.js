
const getDataFromAPI = async () => {
    const apiUrl = "/api/apps.json";
    const res = await fetch(apiUrl);

    return res.json();
};

export default getDataFromAPI;