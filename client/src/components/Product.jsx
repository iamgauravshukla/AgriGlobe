import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #c8dbbe3f;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
    box-shadow: 0px 0px 2px 1px #c8dbbe;
`

const Image = styled.img`
    height: 75%;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 15px;
    background-color: #81bc50;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    color: #fff;
    &:hover{
        background-color: #67843b;
        transform: scale(1.1);
    }
`
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    

`
const Title = styled.h3`
    padding: 10px 0px;
    font-weight: 400;
`
const Price = styled.p`
    font-size: 14px;
`

const Product = ({item}) => {
  return (
    <Container>
         <Image src = {item.img}/>
         <Info>
            <Icon>
                <ShoppingCartOutlinedIcon/>
            </Icon>
            <Icon>
                <SearchOutlinedIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
         </Info>
         <ProductInfo>
            <Title>{item.title}</Title>
            <Price>{item.price}</Price>
         </ProductInfo>

    </Container>
  )
}

export default Product