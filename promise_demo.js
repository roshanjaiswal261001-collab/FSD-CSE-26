function register(){
    return new Promise((resolve , reject)=>{

   
    setTimeout(()=>{
    console.log("register here")
    },10000)
    resolve();
     })
}
function login(){
      return new Promise((resolve , reject)=>{
   setTimeout(()=>{
console.log("login here")
resolve();
   },5000)
    })
}
function getData(){
     return new Promise((resolve , reject)=>{
   setTimeout(()=>{
console.log("fetch data from D8")
resolve();
   },4000)
     })
}
function displayData(){
   setTimeout(()=>{
console.log("View user data")

   },6000)
}
register(
    ()=>{
        login(
            ()=>{
                getData(
                    ()=>{
                        displayData();
                    })
            }
        )
    });
    register()
   
     .then(login)
      .then(getData)
       .then(displayData)
        .catch((err)=>{
            console.log("Error",err)
        });
console.log("Call Another application");
