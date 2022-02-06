import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
    url(https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${Mobile({width: "75%"})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-weight: 500;
    margin-bottom: 10px;
`
const Link = styled.a`
  font-size: 12px;
  margin:5px 0px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
    return <Container>
        <Content>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Name" />
                <Input placeholder="Password" />
                <Button>CREATE</Button>
                <Link>Forget Password</Link>
                <Link>Create new Account</Link>
            </Form>
        </Content>
    </Container>;
};

export default Login;
