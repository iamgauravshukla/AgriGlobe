import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #dcebd3;
`
const Title = styled.h2`
    font-size: 60px;
    margin: 20px;
`
const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 18px;
    outline: none;
`
const Button = styled.button`
    flex: 1;
    border: none;
    cursor: pointer;
    color: #fff;
    background-color: #07a207;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>
            Newsletter
        </Title>
        <Description>Get updates for latest news in Agriculture and Info of government schemes.</Description>
        <InputContainer>
            <Input placeholder="Your Email..."/>
            <Button>
                <SendIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter