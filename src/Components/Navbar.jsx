import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Mobile } from "../Responsive"

const Container = styled.div`
    height: 60px;
    ${Mobile({height: "50px"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${Mobile({padding: "10px 0px"})}
`
const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${Mobile({display: "none"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Input = styled.input`
    border: 0;
    ${Mobile({width: "50px"})}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${Mobile({fontSize: "24px"})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${Mobile({flex: 2, justifyContent: "center"})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${Mobile({fontSize: "12px", marginLeft: "10px"})}
`

const Navbar = () => {
    return <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search style={{color:"gray",fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>DTALES.</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>;
};

export default Navbar;
