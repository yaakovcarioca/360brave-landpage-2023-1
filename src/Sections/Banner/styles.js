import styled from "styled-components";

export const Container = styled.div`
    background-color: #0F124D;
    width: 100%;
    height: 100vh;
`;

export const Logo = styled.text`
    margin-right: 100px;

    font-weight: 700;
    font-size: 40px;
    line-height: 47px;

    color: white;
`;

export const Header = styled.div`
    position: absolute;
    margin-left: 120px;
    margin-top: 40px;
    margin-right: 124px;
    display: flexbox;
    justify-content: center;
    justify-content: space-between;
    justify-items: center;

    > ul {
        margin-right: 207px;

        font-weight: 500;
        font-size: 16px;
        line-height: 19px;

        color: white;

        list-style-type: none;

        display: flex;

        justify-content: space-around;
        justify-content: center;
        justify-items: center;

        > li {
            flex-direction: column;
            justify-items: center;
            justify-content: space-around;
        }
    }
`;