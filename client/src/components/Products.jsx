import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"
const Container = styled.div`
    padding: 20px;
`

const ProductRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Title = styled.h2`
    padding: 30px;
    text-align: center;
    font-weight: 500;
`
const Products = () => {
  return (
    <Container>
        <Title>Buy Pesticides and Fertilizers Online</Title>
        <ProductRow>
            {
                popularProducts.map((item)=>(
                    <Product item = {item} key={item.id}/>
                ))
            }
        </ProductRow>
    </Container>
  )
}

export default Products