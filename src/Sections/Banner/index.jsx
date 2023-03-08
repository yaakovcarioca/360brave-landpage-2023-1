import { Container, Logo, Header } from "./styles";

export function Banner() {
    return(
        <Container>
            <Header>
                <Logo>360 Brave</Logo>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
                <a href="mailto:#">SAY HI</a>
            </Header>
        </Container>
    );
};