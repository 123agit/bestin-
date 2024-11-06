import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const registeredUsers = {
  testUser: { email: 'test@example.com', password: 'password123' },
};

const Homepage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Placeholder login logic
    navigate('/login');
  };

  const closeModal = () => {
    setShowModal(false);
    setError('');
  };

  return (
    <Container>
      <Navbar>
        <NavBrand>AppName</NavBrand>
        <NavItems>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/register">Register</NavItem>
          <NavItem to="/login">Login</NavItem>
        </NavItems>
      </Navbar>
      <Content>
        <Title>Web Application Security Assessment Tool</Title>
        <Description>
          Discover and analyze the security of your web applications.
        </Description>
        <ButtonContainer>
          <StyledLink to="/register">
            <Button>Register</Button>
          </StyledLink>
          <LoginButton onClick={handleLogin}>Login</LoginButton>
        </ButtonContainer>

        {showModal && (
          <ModalOverlay onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <h2>Error</h2>
              <p>{error}</p>
              <CloseButton onClick={closeModal}>Close</CloseButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </Content>
      <Footer>
        <FooterText>&copy; 2024 AppName. All rights reserved.</FooterText>
      </Footer>
    </Container>
  );
};

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #3b4d72, #4f6d97); /* Denim Blue Gradient */
  color: #fff;
  font-family: 'Roboto', sans-serif;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50; /* Darker Denim Blue */
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavBrand = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #e67e22; /* Highlight color */
  }
`;

const Content = styled.div`
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  animation: fadeIn 1s ease-out;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  color: #ecf0f1;
  animation: fadeIn 1s ease-out;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  animation: fadeIn 1s ease-out;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #fff;
  color: #3b4d72;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-4px);
    background-color: #ecf0f1;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const LoginButton = styled(Button)`
  background-color: #e67e22;
  color: #fff;

  &:hover {
    background-color: #d35400;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  width: 300px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 0;
    text-align: center;
  }

  p {
    margin: 1rem 0;
    text-align: center;
    font-size: 0.9rem;
  }
`;

const CloseButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Footer = styled.footer`
  background-color: #2c3e50;
  color: #fff;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;

const FadeInAnimation = styled.div`
  animation: fadeIn 1s ease-out;
`;

const GlobalStyle = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Homepage;
