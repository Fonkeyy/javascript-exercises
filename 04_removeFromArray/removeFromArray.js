const removeFromArray = function(arr, ...toRemove) {
    let filteredArr = [];
    arr.forEach((element) => {
        if (!toRemove.includes(element)) {
            filteredArr.push(element);
        }
    });
    return filteredArr;
};
  



/*     return filteredArr.concat(arr.filter(j => j !== toRemove));
}   */
   
   
   
   
    /*for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == toRemove) {
            arr.splice(i, 1);
        } else if (toRemove.length > 1) {
            for (let j = 1; j <= toRemove.length; i++) {
                if (arr[i] == toRemove[j]) {
                    arr.splice(i, 1);
                }
            }
        } else return arr;
    }
    return arr;
};*/
   
   
   
   
   
   
    

   
   
     /*for (let i = 0;  i <=arr.length; i++) {
        if (arr[i] == ()) {
            arr[i].shift;
        }
        
    }
    return arr;
}*/
  
  
  
  
    /* for (let i = 0; i <= arr.length; i++) {
        if (toRemove.length > 1) {
            for (let j = 0; j <= toRemove.length; i++) {
                if (arr[i] == toRemove[j]) {
                    arr.splice(i, 1);
                }
            }
        } else if (arr[i] == toRemove) {
            arr.splice(i, 1);
        }
    }
    return arr;
};*/
    


// Do not edit below this line
module.exports = removeFromArray;

/*if (arr[i] == [...toRemove]) {
    arr.splice(i, 1);*/