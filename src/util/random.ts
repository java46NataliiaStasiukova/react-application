import lifeGameConfig from '../config/lifeGameConfig.json'

export function getRandomNumber(min: number, max: number): number {
    if(min > max){
    [min, max] = [max, min];
    }
    return min + Math.round(Math.random() * (max - min));
}
export function getRandomMatrix(columns: number, rows: number, min: number, max: number): number[][]{
    const res: number[][] = new Array<number[]>();
    columns = columns + 2;
    rows = rows + 2;
    for(let i = 0; i < rows; i++){
        res[i] = [];
        for(let j = 0; j < columns; j++){
            res[i][j] = getRandomNumber(min, max);
            if(i === 0 || i === (rows-1) || j === 0 || j ===(columns-1)) res[i][j] = 0
        }
    }
    return res;
}
