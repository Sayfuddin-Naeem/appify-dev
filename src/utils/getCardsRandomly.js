import getRandomIndex from "./getRandomIndex";

function getCardsRandomly(data, limit = 0, isFilter = false){
    if(isFilter){
        data = data.filter(elm => elm.ratingAvg > 4.5);
    }

    if(!limit){
        limit = data.length;
    }

    const indexes = getRandomIndex(limit);
    // console.log(indexes)
    const cards = [];
    for(let i = 0; i < limit; i++){
        const index = indexes[i];
        cards.push(data[index.toString()]);
    }

    return cards;
}

export default getCardsRandomly;