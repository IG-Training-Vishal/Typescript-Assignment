export function randomInRange(min: number, max: number):number{
    return Math.floor(Math.random()*(max-min))+min;
}

export function shuffleArray(arr:any[]): any[]{
    return arr.sort(() => {
        return Math.random() - 0.5;
    });
}

export function valueToArray(value:any): any[] {
    if(Array.isArray(value)) {
        return value;
    } else {
        return value??[value];
    }
}