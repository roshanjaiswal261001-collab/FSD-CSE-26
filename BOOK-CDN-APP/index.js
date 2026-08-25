function Book(props){
    const image=React.createElement("img",{src:props.image,width:"100px",height:"100px"},null);
    const title=React.createElement("h2",{style:{color:"blue"}},"Title: " + props.title);
    const price=React.createElement("h2",{style:{color:"green"}},"Price: " + props.price+ "/-");
    const btn= React.createElement("button",{style:{color:"blue"}},"Add To Cart");

    const div= React.createElement("div",{className:"book"},[image,title,price,btn]);
return div;
}
const bookdata=[
    {image:"",tittle:"ReactJS",price:450},
     {image:"",tittle:"NodeJS",price:539},
      {image:"",tittle:"ExpresJS",price:250},
       {image:"",tittle:"ReactJS",price:450},
     {image:"",tittle:"NodeJS",price:539},
      {image:"",tittle:"ExpresJS",price:250},
]
function App(){
    const bookstore= bookdata.map((b)=>{
        return Book(b);
})
const div= React.createElement("div",{className:"bookstore"},[...bookstore]

)
return div;
}

const parent= document.getElementById("root");
const root= ReactDOM.createRoot(parent);
root.render(App());