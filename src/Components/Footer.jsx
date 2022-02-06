import styled from "styled-components";
import { Facebook, Instagram, Mail, Phone, Room, Twitter } from "@material-ui/icons";
import { Mobile } from "../Responsive";

const Container = styled.div`
    display: flex;
    ${Mobile({flexDirection: "column"})}
`

const Left = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${Mobile({display: "none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListeItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${Mobile({backgroundColor: "#fff8f"})}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return <Container>
        <Left>
            <Logo>DTALES.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt itaque ipsam rem o
                ptio odio molestias earum, numquam officiis voluptatum dolor et totam recusandae, a
                d eveniet dolorum natus quos ut placeat.
                </Desc>
            <SocialContainer>
                <SocialIcon color="4267B2">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E1306C">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="1DA1F2">
                    <Twitter />
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful links</Title>
            <List>
                <ListeItem>
                    Home
                </ListeItem>
                <ListeItem>
                    Cart
                </ListeItem>
                <ListeItem>
                    Men Fashion
                </ListeItem>
                <ListeItem>
                    Women Fashion
                </ListeItem>
                <ListeItem>
                    Accessories
                </ListeItem>
                <ListeItem>
                    My Account
                </ListeItem>
                <ListeItem>
                    Order Tracking
                </ListeItem>
                <ListeItem>
                    Wishlist
                </ListeItem>
                <ListeItem>
                    Terms and Conditions
                </ListeItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem>
               <Room style={{marginRight:"10px"}} />Thuruthikadavil Store, Thrikkakara - Kochi, 676503
            </ContactItem>
            <ContactItem>
               <Phone style={{marginRight:"10px"}} />+91 9744 241 239
            </ContactItem>
            <ContactItem>
               <Mail style={{marginRight:"10px"}} />contact@dtales.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>;

};
export default Footer;
