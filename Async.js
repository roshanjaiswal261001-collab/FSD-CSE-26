function register(){
    
    setTimeout(()=>{
    console.log("register here")
    },10000)
}
function login(){
   setTimeout(()=>{
console.log("login here")
   },5000)
}
function getData(){
   setTimeout(()=>{
console.log("fetch data from D8")
   },4000)
}
function displayData(){
   setTimeout(()=>{
console.log("View user data")
   },6000)
}
register();
login();
getData();
displayData();
console.log("Call Another application");
