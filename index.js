// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
]
function superbowlWin(arrayOfObjects){
    const winOb = arrayOfObjects.find(ob => ob.result === 'W')
    if (winOb){
        return winOb.year;
    } else {
        return undefined;
    }
     
}

console.log(superbowlWin(record))

