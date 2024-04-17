import React from 'react'
import Card from '../card/Card'
// import n1 from '../images/n1.jpg'
// // import n2 from '../images/n2.jpg'
// import n3 from '../images/n3.jpg'
// import n4 from '../images/n4.jpg'
// import n5 from '../images/n5.jpg'
// import n6 from '../images/n6.jpg'
// import n7 from '../images/n7.jpg'
// import n8 from '../images/n8.jpg'
import { useState, useEffect} from 'react'
import axios from 'axios'
const newcollection = ({addToCart}) => {
  const [item, setItem]=useState([]);
  useEffect(()=>{
    axios.get("https://dummyjson.com/products").then((res)=>{
      setItem(res.data.products);
    })
  },[])
  return (
    <>
    <div className="container2">
      <div className="featured-section">
        <h1 className="featured-title">Featured Products</h1>
        <h3 className="featured-subtitle">Winter collection new modern design</h3>
      </div>
      <div className="card-container">
        {item.slice(9,17).map((prod)=>(
          <Card
            key={prod.id}
            id={prod.id}
            item={prod}
            addToCart={addToCart}
                      />        ))}
        
        
      </div>
    </div>
    </>
  )
}

export default newcollection
