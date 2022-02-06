import React from 'react';
import styled from 'styled-components';
import Announcements from '../Components/Announcements';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';
import { Mobile } from '../Responsive';

const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.p`
    margin: 20px;
    ${Mobile({width: "0px 20px", display: "flex", flexDirection: "column"})}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${Mobile({marginRight: "0px"})}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${Mobile({margin: "10px 0px"})}
`
const Option = styled.option`

`

const ProductList = () => {
  return <Container>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterContainer>
          <Filter>
              <FilterText>Filter Items:</FilterText>
              <Select>
                  <Option disabled selected>Color</Option>
                  <Option >Red</Option>
                  <Option >Yellow</Option>
                  <Option >White</Option>
                  <Option >Black</Option>
                  <Option >Blue</Option>
              </Select>
              <Select>
                  <Option disabled selected>Size</Option>
                  <Option >XS</Option>
                  <Option >S</Option>
                  <Option >M</Option>
                  <Option >L</Option>
                  <Option >XL</Option>
                  <Option >XXL</Option>
              </Select>
          </Filter>
          <Filter>
              <FilterText>Sort Items:</FilterText>
              <Select>
                  <Option selected>Newest</Option>
                  <Option>Price (Lowest first)</Option>
                  <Option>Price (Highest first)</Option>
              </Select>
          </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
  </Container>;
};

export default ProductList;
