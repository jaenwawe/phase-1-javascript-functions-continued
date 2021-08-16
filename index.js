function razzle(lawyer="Billy", target="'em") {
    console.log(`${lawyer} razzle-dazzles ${target}!`);
  }

  const satFun = "run";
  razzle();
  saturdayFun (satFun);

  function saturdayFun (word = "roller-skate"){
  
    return `This Saturday, I want to ${word}!`;
  }


  const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`
  }

  // function(baseNumber){ return baseNumber + 3 })(2);


  const array = (
    function(thingToAdd) {
      const base = 3;
      return [
        function() { return base + thingToAdd; },
        function() { return base; }
      ];
    }
  )(2)

  console.log(array[0])
  console.log(array[1])

  console.log(array[0]())
  console.log(array[1]())
  
  
  
  function wrapAdjective (flair) {

  if(flair == null)
  return (single = "special", flair = 
      "*") =>  { return `You are ${flair}${single}${flair}!`}

  if (flair == "||")
  return (single = "a dedicated programmer", flair = "||") =>  { return `You are ${flair}${single}${flair}!`}
  }

