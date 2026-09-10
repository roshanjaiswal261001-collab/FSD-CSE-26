import Item from "./Items"

const ItemStore = () => {
    const itemData=[
    {image:'',title:'ReactJS',price:500},
    {image:'',title:'VueJS',price:400},
    {image:'',title:'Angular',price:600},
    {image:'',title:'NodeJS',price:700},
    {image:'',title:'ExpressJS',price:300},
    {image:'',title:'MongoDB',price:800},
  ]
  return (
    <div className="home">
       {
        itemData.map((i,index)=>{
          return <Item key={index} props={i}/>
        })
      }
    </div>
  )
}
export default ItemStore
