import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 16em;
  color: white;
`;

export const Logo = styled.h3`
  font-size: 2.3rem;
  font-family: "Poppins", sans-serif;
`;

export const RightLinks = styled.ul`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LinkContainer = styled.li`
  margin-right: 42px;
  cursor: pointer;
`;

export const Links = styled.a`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 500;

  /* border-bottom: 2px solid black; */
`;
