function Book(){
    const image=React.createElement("img",{src:"",width:"100px",height:"100px"},null);
    const title=React.createElement("h2",{color:"blue"},"Title: ReactJS");
    const price=React.createElement("h2",{color:"green"},"Price: 450");
    const btn= React.createElement("button",{color:"blue"},"Add To Cart");

    const div= React.createElement("div",{className:"book"},[image,title,price,btn]);
return div;
}

const parent= document.getElementById("root");
const root= ReactDOM.createRoot(parent);
root.render(Book());