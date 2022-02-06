import React from 'react';
import Navbar from '../Components/Navbar';
import Announcements from '../Components/Announcements';
import NewsLetter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { Mobile } from '../Responsive';

const Container = styled.div`
    
`
const Content = styled.div`
    padding: 50px;
    display: flex;
    ${Mobile({padding: "10px", flexDirection:"column"})}
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${Mobile({height: "40vh"})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${Mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.div`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    ${Mobile({width: "100%"})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${Mobile({width: "100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
  return <Container>
      <Navbar />
      <Announcements />
      <Content>
          <ImageContainer>
              <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/> 
          </ImageContainer>
          <InfoContainer>
              <Title>Denim Jumpsuit</Title>
              <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
            </Desc>
              <Price>₹799</Price>
              <FilterContainer>
              <Filter>
              <FilterTitle>Color</FilterTitle>
                  <FilterColor color="black"/>
                  <FilterColor color="brown"/>
                  <FilterColor color="blue"/>
                  <FilterColor color="gray"/>
              </Filter>
              <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                  </FilterSize>
              </Filter>
          </FilterContainer>
          <AddContainer>
              <AmountContainer>
                  <Remove />
                  <Amount>1</Amount>
                  <Add />
              </AmountContainer>
              <Button>ADD TO CART</Button>
          </AddContainer>
          </InfoContainer>
      </Content>
      <NewsLetter />
      <Footer />
  </Container>;
};

export default Product;
