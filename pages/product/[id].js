import React from 'react'

function Product({product}) {
    console.log(product)
  return (
    <div>
      <div className="container center-align">
            <h3>{product.name}</h3>
            <img src={product.images[0]} style={{width:'30%'}} />
            <h5>RS {product.price}</h5> 
            <p  className="left-align">
              {product.description}
            </p>
            
           
        </div>
    
    </div>
  )
}

export default Product

export async function getServerSideProps({params:{id}}) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json()
    return {
      props: {product:data}
    }
  }