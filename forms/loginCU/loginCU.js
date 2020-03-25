//shortcut to favFoods
btnFavFoods.onclick=function(){
  ChangeForm(favFoods)
}

req1 = ""

btnLogin.onclick=function(){
  req1 = Ajax("http://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inpNetId.value + "&j_password=" + inpPassword.value)
  
  if (req1.status == 200) {
        lblResponse.hidden = false
        lblResponse.value = "Your LDAP return code was " + req1.responseText
      } else {
        lblResponse.hidden = false
        lblResponse.value = "Error: " + req1.status;
  }
  
  if (req1.responseText ==1) {
        ChangeForm(favFoods)
      } else {
        inpNetId.value = ""
        inpPassword.value = ""
        lblResponse.value = `These login credentials were not valid. Please try again!`
  }
}
