
function formatNumber(num){
    if(typeof num !== 'number'){
        throw new TypeError(`${num} is not a valid number. Please give a valid number.`);
    }

    const billions = 1_000_000_000;
    const millions = 1_000_000;
    const thousands = 1_000;

    if(num === null || num === undefined){
        return "0";
    }
    if(num >= billions){
        return (num / billions).toFixed(1).replace(/\.0$/, "") + "B";
    }
    else if(num >= millions){
        return (num / millions).toFixed(1).replace(/\.0$/, "") + "M";
    }
    else if(num >= thousands){
        return (num / thousands).toFixed(1).replace(/\.0$/, "") + "K";
    }
    else{
        return num.toString();
    }
}

export default formatNumber;