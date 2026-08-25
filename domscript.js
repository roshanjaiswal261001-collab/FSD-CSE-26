
// function addParagraph(){
//   const para=document.createElement("p");
//   para.innerHTML="This is new paragraph";
//   para.style.color='red';
//   const parent= document.getElementsById("para");
//   parent.appendChild(para);
       

// }
function addParagraph() {
    let p = document.createElement("p");

    p.innerText = "This is a new paragraph.";
 p.style.color='red';
    document.getElementById("para").appendChild(p);
}
function removeParagraph() {
    const parent = document.getElementById("para");
    const child = document.querySelector("p");
    parent.removeChild(child);
}
function removeAllParagraph() {
    const parent = document.getElementById("para");
    const children = parent.querySelectorAll("p");
    for (const child of children) {
        parent.removeChild(child);
    }
   
}