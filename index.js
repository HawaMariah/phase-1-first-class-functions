function receivesAFunction(receives) {
  receives();
}

function returnsANamedFunction() {
    return function namedFunction() {
    
      };
}

const returnsAnAnonymousFunction = function(){
    return function(){}
}
