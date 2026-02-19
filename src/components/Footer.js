import styled from "styled-components";

const FooterContainer = styled.div`
  text-align: end;
  margin-top: 50px;
`;

function Footer() {
  return (
    <FooterContainer>
      &copy; 2022~{new Date().getFullYear()} Made by Chingo
    </FooterContainer>
  );
}

export default Footer;
