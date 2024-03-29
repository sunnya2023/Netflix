import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const Headers = styled.header`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/bg.jpg");
  background-size: cover;
  background-position: center;
  padding: 10px 8%;
  position: relative;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;
const Logo = styled.img`
  width: 150px;
  cursor: pointer;
`;
const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const LeftBtn = styled.button`
  background: #e50915;
  color: #fff;
  padding: 7px 20px;
  font-size: 12px;
  border-radius: 4px;

  &:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 7px;
    background: transparent;
    border: 1px solid #fff;
    svg {
      margin-top: -5px;
      /* margin-left: 5px; */
    }
  }
`;
const HeaderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  /* margin-top: 100px; */
  color: #fff;
`;
const HeaderTitle = styled.h1`
  font-size: 50px;
  line-height: 70px;
  font-weight: 600;
  max-width: 650px;
`;
const HeaderSub = styled.h3`
  font-weight: 600;
  margin: 20px;
`;
const HeaderText = styled.p``;
const Signup = styled.p`
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  overflow: hidden;
  gap: 5px;
`;
const SignupInput = styled.input`
  flex: 1;
  padding: 15px 30px;
`;
const SignupBtn = styled.button`
  background: #e40915;
  color: white;
  font-size: 16px;
  padding: 15px 30px;
`;
export default function Header() {
  return (
    <Headers>
      <Nav>
        <Logo src="/logo.svg" alt="로고" />
        <NavLeft>
          <LeftBtn>
            English
            <FontAwesomeIcon icon={faSortDown} />
          </LeftBtn>
          <LeftBtn>Sign In</LeftBtn>
        </NavLeft>
      </Nav>
      <HeaderContent>
        <HeaderTitle>Unlimited movies, TV shows and more</HeaderTitle>
        <HeaderSub>Watch anywhere. Cancel anytime</HeaderSub>
        <HeaderText>
          Ready to watch? Enter your email to create or restart your membership.
        </HeaderText>
        <Signup>
          <SignupInput type="email" placeholder="Email address" required />
          <SignupBtn type="submit">Get strated</SignupBtn>
        </Signup>
      </HeaderContent>
    </Headers>
  );
}
