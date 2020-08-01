function analyze(arr){
    return {
        average: arr.reduce((acc, cur) => {
            return acc + cur;
        }) / arr.length,

        length: arr.length,

        max: arr.reduce((acc, cur) => {
            if (cur > acc){
                acc = cur;
            }
            return acc;
        }, 0),
        
        min: arr.reduce( (acc, cur) => (cur < acc ? cur : acc)),
    }
}

module.exports = analyze;