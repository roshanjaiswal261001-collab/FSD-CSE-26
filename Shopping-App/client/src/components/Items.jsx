import "./Items.css"
import"../assets/react.svg"
const Items = (props) => {
  return (
    <div className="Card">
      <img src={Image} width="100" height="100px" alt="Item Image" />
      <h2>Title : {props.title}</h2>
      <h3>Price: ₹{props.price}</h3>
      <button className="btn">Add to Cart</button>
    </div>
  )
}

export default Items
