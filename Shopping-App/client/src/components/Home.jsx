import Items from "./Items"


const Home = () => {
  const Itemsdata = [
   {Image: "", title: "ReactJs", price: 456},
   {Image: "", title: "VueJs", price: 345},
   {Image: "", title: "Angular", price: 567},
   {Image: "", title: "NodeJs", price: 678},
   {Image: "", title: "Js", price: 178},
   {Image: "", title: "Maths", price: 218},
   {Image: "", title: "Java", price: 418},
  ];
  return (
    <div className="home">
      {Itemsdata.map((item, index) => {
        return <Items key={index} props={item} />;
      })}
    </div>
  )
}

export default Home
