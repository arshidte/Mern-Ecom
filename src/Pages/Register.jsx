import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
    url(https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    width: 40%;
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
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin:20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-weight: 500;
`

const Register = () => {
    return <Container>
        <Content>
            <Title>CREATE ACCOUNT</Title>
            <Form>
                <Input placeholder="Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="User Name" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Agreement>
                    By clicking Sign Up, you agree to our Terms, <b>Data Policy and Cookie Policy</b>.
                    You may receive SMS notifications from us and can opt out at any time.
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Content>
    </Container>;
};

export default Register;
