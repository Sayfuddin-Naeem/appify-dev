
export function getDataFromLS(place){
    const location = `${place.toLowerCase()}Data`;
    let data = JSON.parse(localStorage.getItem(location)) || [];

    return data;
};


export const setDataToLS = (curData, place) => {
    const location = `${place.toLowerCase()}Data`;
    const dataFromLs = getDataFromLS(place);
    const hasCurData = dataFromLs.find(elm => elm.id === curData.id);
    
    if(!hasCurData){
        dataFromLs.push(curData);
    }

    
    try {
        localStorage.setItem(location, JSON.stringify(dataFromLs));
        // console.log("from setData", dataFromLs);
        return true;

    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            console.error('Local storage quota exceeded. Please clear some data.');
        } else {
            console.error(`Error saving to local storage: ${e}`);
        }

        return false;
    }
};

export function removeDataFromLS(id, place){
    const location = `${place.toLowerCase()}Data`;
    id = parseInt(id);

    const dataFromLs = getDataFromLS(place);
    const updatedData = dataFromLs.filter(elm => elm.id !== id);

    localStorage.setItem(location, JSON.stringify(updatedData));

    return true;
}

export function countDataLS(place){
    return getDataFromLS(place).length;
}

export function hasDataLS(id, place){
    const hasCurData = getDataFromLS(place).find(elm => elm.id === id);

    return hasCurData ? true : false;
}