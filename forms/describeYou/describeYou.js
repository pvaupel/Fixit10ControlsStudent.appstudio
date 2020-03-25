
btnFaveExercises.onclick=function(){
  ChangeForm(favExercises)
}


rdbDescriptions.onchange=function(){
  if (rdbDescriptions.value == 0) {
        lblResult.value = `I would agree that you are an 'optimistic' person too!`
      } else if (rdbDescriptions.value == 1) { 
        lblResult.value = `I would agree that you are a 'pessimistic' person too!`
      } else if (rdbDescriptions.value == 2) { 
        lblResult.value = `I would agree that you are a 'trusting' person too!`
      } else if (rdbDescriptions.value == 3) { 
        lblResult.value = `I would agree that you are an 'envious' person too!`
      } 
}
