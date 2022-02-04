import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { popularProducts } from '../Data';

const Container = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    `

const Products = () => {
    return <Container>
        {popularProducts.map((item) => (
            <Product item={item} key={item.id} />
        ))}
    </Container>;
};

export default Products;
