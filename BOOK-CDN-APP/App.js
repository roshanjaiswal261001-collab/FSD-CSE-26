
import Book from "./Book.js";
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
export default App;