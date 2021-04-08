function validation(){

  const signup_name = document.getElementById('signup-name').value;
  const signup_pw = document.getElementById('signup-pw').value;
  const signup_cpw = document.getElementById('signup-cpw').value;
  const signup_mobile = document.getElementById('signup-mobile').value;
  const signup_email = document.getElementById('signup-email').value;
  //const signup_bday = document.getElementById('signup-bday').value;

  const validEmailIdRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(signup_name === ""){
    alert('** Please fill the Full-Name field **')
    return false;
  }
  if((signup_name.length <= 2) || (signup_name.length > 20)) {
    alert('** Full-Name length must be between 2 and 20 **')
    return false;
  }
  if(!isNaN(signup_name)){
    alert(' ** Only characters are allowed in Full-Name**')
    return false;
  }

  if(signup_mobile === ""){
    alert('** Please fill the Mobile-Number field **')
    return false;
  }
  if(isNaN(signup_mobile)){
    alert('** Mobile Number contains only digits **')
    return false;
  }
  if(signup_mobile.length !== 10){
    alert('** Mobile Number must be 10 digits only **')
    return false;
  }


  if(signup_email === ""){
    alert('** Please fill the Email-Id field **')
    return false;
  }
  if(!signup_email.match(validEmailIdRegex)){
    alert('** Not a valid Email-Id format **')
    return false; 
  }
  


  if(signup_pw === ""){
    alert('** Please fill the Password field **')
    return false;
  }
  if((signup_pw.length <= 8) || (signup_pw.length > 20)) {
    alert('** Passwords lenght must be between 8 and 20 **')
    return false;
  }
  if(signup_cpw == ""){
    alert('** Please fill the Conform-Password field **')
    return false;
  }
  if(signup_pw !== signup_cpw){
    alert('** Password does not match the Confirm Password **')
    return false;
  }

  alert('Registration Successful !!!');
}