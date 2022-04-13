import { getRandomMatrix } from "../util/random";

export default class LifeMatrix {
    constructor(private _numbers: number[][]) {
    }
    get numbers() {
        return this._numbers
    }
    nextStep(): number[][] {
        //TODO write an implementation of the life game algorithm
        //reminder: firstly create copy for updating cells based on the previous matrix
    const res: number[][] = new Array<number[]>();
    for(let i = 0; i < this._numbers.length; i++){  
        res.push(this._numbers[i].slice())
    }
    for(let i = 1; i < this._numbers.length-1; i++){
        for(let j = 1; j < this._numbers.length-1; j++){
            let count: number = 0;
            count = res[i-1][j-1] + res[i-1][j] + res[i-1][j+1] + res[i+1][j-1] + res[i+1][j] + res[i+1][j+1] + res[i][j-1] + res[i][j +1];
            if(res[i][j] === 1 && (count < 2 || count > 3)) this._numbers[i][j] = 0;
            if(res[i][j] === 0 && count == 3) this._numbers[i][j] = 1; 
        }
    }
    return res;
    }
}
