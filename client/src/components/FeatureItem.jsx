import styled from 'styled-components'
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 50vh;
    position: relative;
    flex: 30%;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #00000058;

`
const Title = styled.h1`
    color: white;
    font-size: 25px;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: 2px solid #fff;
    padding: 10px;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    `
const FeatureItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Browse</Button>
        </Info>
    </Container>
  )
}

export default FeatureItem