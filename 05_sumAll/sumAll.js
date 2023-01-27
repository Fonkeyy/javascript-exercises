const sumAll = function(startArg, finishArg) {
arr = [];
if (((startArg  || finishArg) < 0) || (!Number.isInteger(startArg) || !Number.isInteger(finishArg))) {
    return 'ERROR';
} else if (startArg > finishArg) {
    const temp = startArg;
    startArg = finishArg;
    finishArg = temp;
    for (let i = startArg; i <= finishArg; i++) {
        arr.push(i);
  }
 } else {
    for (let i = startArg; i <= finishArg; i++) {
        arr.push(i);
};
}
return arr.reduce((sum, item) => sum + item); 
};

// Do not edit below this line
module.exports = sumAll;
