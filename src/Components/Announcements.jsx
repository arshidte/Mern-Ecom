import styled from 'styled-components';

const Container = styled.div`
    height: 28px;
    background-color: teal;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Announcements = () => {
  return <Container>
      Super Deal... Free delivery on orders above ₹300!!!
  </Container>;
};

export default Announcements;
