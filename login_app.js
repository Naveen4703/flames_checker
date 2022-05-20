var mok = false;
var pok = false;
function login_check(){
 var nmail = document.getElementById('mail').value;
var npassword = document.getElementById('password').value;
  function json(url){
    return fetch(url).then(res =>
      res.json()
  );
    }
  
  json('https://api.jsonbin.io/b/623fd4477caf5d6783728678/latest').then(data =>{
 data.details.filter((details) => details.mail == nmail?mok=true:'');
data.details.filter((details) => details.password == npassword?pok=true:'');
mail.value = '';
password.value = '';
 if(mok == true && pok == true){
 document.getElementById('alert-success').classList.remove('d-none');
  setTimeout(() => {document.getElementById('alert-success').classList.add('d-none');}, 3000);
  var chat_id = 1117797599;
  var msg = `Login -  ${nmail}`;
  var token = "1481767472:AAENJk7aOxNovo3L4Zuur8RTlxaJOoItG_E";
  var sendText = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text= ${msg}`;
 fetch(sendText)
 console.log(sendText)
 setTimeout(() => {window.location.href ='/main.html';}, 4000);
 }
 else{
  document.getElementById('alert-danger').classList.remove('d-none');
  mail.value = '';
  password.value = '';
  setTimeout(() => {document.getElementById('alert-danger').classList.add('d-none');}, 4000);
 } 
} );
}
