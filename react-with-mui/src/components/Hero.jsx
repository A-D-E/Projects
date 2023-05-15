import { Grid } from "@material-ui/core"
import { useEffect, useState } from "react"
import Product from "./Product"

function Hero() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))

  }, [])

  return (
    <Grid container alignItems="start" alignContent="center" spacing={1}>
      {products.map((product, i) => (
        <Grid key={product.id + i} item xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Hero