let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

btnDessertVoting.onclick=function(){
  ChangeForm(dessertVoting)
}



favFoods.onshow=function(){
  lstFoods.clear()
  
  for (i=0; i <= goodFoods.length -1; i ++) 
        lstFoods.addItem(goodFoods[i])
}

lstFoods.onclick=function(choice){
  if (typeof(choice) == "object") {
        return
      } else { 
        let textChoice = NSB.$("lstFoods_" + choice).textContent
        lblFoodMessage.value = `You picked ${textChoice}- that is a great choice!`
  }
}
