import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${Mobile({height: "20vh"})}
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: 0;
    padding: 10px;
    background-color: white;
    cursor: pointer;
    color: gray;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
  return <Container>
      <Image src={item.img} />
      <Info>
      <Title>{item.title}</Title>
      <Button>Shop Now</Button>
      </Info>
  </Container>;
};

export default CategoryItem;
