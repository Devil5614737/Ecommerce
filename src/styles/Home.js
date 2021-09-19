import styled from "styled-components";

export const Headers = styled.header`
  background: url("https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80");
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    z-index: -1;
  }
`;

export const Section = styled.section`
  margin-top: 112px;
  margin-left: 167px;
  color: white;
`;

export const Heading = styled.h1`
  font-size: 7rem;
  width: 90%;
  line-height: 1.1;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const SubHeading = styled.p`
  font-size: 2.4rem;
  margin-bottom: 11px;
  width: 74%;
  color:#958F8F;
`;

export const Buttons = styled.div`
  margin-top: 12px;
`;

export const Button = styled.button`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5em 0.8em;
  margin-right: 12px;
  color: ${(props) => (props.white ? "#000" : "#fff")};
  background: ${(props) => (props.white ? "#fff" : "#474545")};
  border: none;
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.white ? "#000" : "#fff")};
    color: ${(props) => (props.white ? "#fff" : "#000")};
    transition: all 0.2s ease-in-out;
  }
`;
