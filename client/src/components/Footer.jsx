import styled from "styled-components"
import LogoImg from "../img/agriGlobe.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailIcon from '@mui/icons-material/Mail';
import Mail from "@mui/icons-material/Mail";

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.img`
    width: 180px;
    height: 60px ;
`
const Desc = styled.div`
    margin: 20px 0px;
`
const Center = styled.div`
    padding: 20px;
    flex: 1;
    margin-top: 25px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`

const Right = styled.div`
    padding: 20px;
    margin-top: 25px;
    flex: 1;
`
const SocialContainer = styled.div`
    display: flex;

`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    max-width: 70%;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo src={LogoImg}/>
            <Desc>
            Agri Globe is an all-in-one Website and Mobile App which provides some very useful facilities to farmers.
            Farmers can learn about different type of Crop Cultivation process or Farming Suggestions, Potential pest control process in their own regional language. 
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Quick Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Shop</ListItem>
                <ListItem>Weather Report</ListItem>
                <ListItem>Market Price</ListItem>
                <ListItem>Soil Testing</ListItem>
                <ListItem>Pest Control</ListItem>
                <ListItem>Farming Suggestion</ListItem>
                <ListItem>Loan/Subsidy</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <LocationOnIcon style={{marginRight: "10px"}}/> Alpha-II, Greater Noida, UP
            </ContactItem>
            <ContactItem>
                <PhoneInTalkIcon style={{marginRight: "10px"}}/> +91 1234567890
            </ContactItem>
            <ContactItem>
                <Mail style={{marginRight: "10px"}}/> help@agriglobe.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer