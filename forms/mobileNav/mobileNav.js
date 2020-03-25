
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") {
    return
  } else {
      switch(s) {
    case "Login":
      hmbMenu.hide()
      ChangeForm(loginCU)
      break
    case "Fav Foods":
      hmbMenu.hide()
      ChangeForm(favFoods)
      break
    case "Dessert Voting":
      hmbMenu.hide()
      ChangeForm(dessertVoting)
      break
    case "Describe Me":
      hmbMenu.hide()
      ChangeForm(describeYou)
      break
    case "AB Fav Exercises":
      hmbMenu.hide()
      ChangeForm(ABfavExercises)
      break
    }
 }
}
