export function getStatistic(courses: any[], field: string){
    
    if(courses[0] === undefined){
        return {min: 0, max: 0, average: 0}
    }
    const coursesCost = courses.map(c => c[field])
    const max: number = Math.max(...coursesCost);
    const min: number = Math.min(...coursesCost);
    const average: number = Math.round((courses.reduce((res, cur) => res += cur[field], 0))/courses.length)
    return {min, max, average};
}