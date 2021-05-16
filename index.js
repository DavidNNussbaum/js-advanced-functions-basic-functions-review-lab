function saturdayFun(word = "roller-skate") {
    return`This Saturday, I want to ${word}!`
};

function mondayWork(word = "go to the office") {
    return`This Monday, I will ${word}.`
};

let wrapAdjective = function(flair = '*') {
    return function(word = 'special'){
      return `You are ${flair}${word}${flair}!`
    };
};

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
}

let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}
