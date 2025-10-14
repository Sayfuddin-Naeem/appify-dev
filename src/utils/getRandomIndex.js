
function getRandomIndex(limit){
    const indexes = [];

    while(indexes.length < limit){
        const index = Math.floor(Math.random() * limit);
        if(!indexes.includes(index)){
            indexes.push(index);
        }
    }
    return indexes;
}

export default getRandomIndex;