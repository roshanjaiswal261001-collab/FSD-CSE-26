import { createRoot } from "react-dom/client";
import image from "./road.jpeg";
function Book() {
  return (
    <div className="book">
     <img src={image} width="100" height="100" alt="Book cover" />
     <h3> Title : ReactJs</h3>
        <h3> Price :₹465</h3>
        <button>Add to Cart</button>
    </div>
  );
}
function App() {
  return (
    <div>
        <h1>
            <center> My Book Store</center>
        </h1>
        <div className="bookstore">
         <Book />
          <Book />
        <Book />
        </div>
    </div>
  );
}
const parent = document.getElementById("root");
const root = createRoot(parent);
root.render(<App />);
