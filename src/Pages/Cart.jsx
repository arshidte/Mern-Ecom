import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Announcements from '../Components/Announcements';
import Footer from '../Components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { Mobile } from '../Responsive';


const Container = styled.div``

const Content = styled.div`
    padding: 20px;
    ${Mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    border: ${props=>props.type === "filled" && "none"};
    color: ${props=>props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    ${Mobile({display: "none"})}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${Mobile({flexDirection: "column"})}
`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${Mobile({flexDirection: "column"})}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductID = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.span`
    font-size: 24px;
    margin: 5px;
    ${Mobile({margin: "5px 15px"})}
`
const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 200;
    ${Mobile({marginBottom: "20px"})}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Cart = () => {
  return <Container>
      <Navbar />
      <Announcements />
      <Content>
          <Title>YOUR BAG</Title>
          <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
              <TopTexts>
                  <TopText>Shopping Bag (2)</TopText>
                  <TopText>Your Wishlist (0)</TopText>
              </TopTexts>
              <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
              <Info>
                  <Product>
                      <ProductDetail>
                          <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                          <Details>
                              <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                              <ProductID><b>ID:</b> JTS340</ProductID>
                              <ProductColor color="black"/>
                              <ProductSize><b>Size:</b> 34</ProductSize>

                          </Details>
                      </ProductDetail>
                      <PriceDetail>
                          <ProductAmountContainer>
                              <Add />
                              <ProductAmount>2</ProductAmount>
                              <Remove/>
                          </ProductAmountContainer>
                          <ProductPrice>₹ 699</ProductPrice>
                      </PriceDetail>
                  </Product>
                  <Hr />
              </Info>
              <Summary>
                  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                      <SummaryItem>
                          <SummaryItemText>Subtotal</SummaryItemText>
                              <SummaryItemPrice>₹ 699</SummaryItemPrice>
                      </SummaryItem>
                      <SummaryItem>
                          <SummaryItemText>Estimated Shipping</SummaryItemText>
                              <SummaryItemPrice>₹ 40</SummaryItemPrice>
                      </SummaryItem>
                      <SummaryItem>
                          <SummaryItemText>Shipping Discount</SummaryItemText>
                              <SummaryItemPrice>-₹ 40</SummaryItemPrice>
                      </SummaryItem>
                      <SummaryItem type="total">
                          <SummaryItemText>Total</SummaryItemText>
                              <SummaryItemPrice>₹ 699</SummaryItemPrice>
                      </SummaryItem>
                      <Button>CHECKOUT NOW</Button>
              </Summary>
          </Bottom>
      </Content>
      <Footer />
  </Container>;
};

export default Cart;
