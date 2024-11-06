import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useUserContext } from '../UserContext';

const Login = () => {
  const { registeredUsers } = useUserContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!registeredUsers[username] || registeredUsers[username].password !== password) {
      setError('Invalid username or password');
      setShowModal(true);
      return;
    }

    setSuccess('Login successful!');
    setShowModal(true);
    setTimeout(() => navigate('/dashboard'), 2000); // Redirect after 2 seconds to dashboard
  };

  const closeModal = () => {
    setShowModal(false);
    setError('');
    setSuccess('');
  };

  return (
    <Container>
      <Navbar>
        <NavBrand>AppName</NavBrand>
        <NavItems>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/login">Login</NavItem>
          <NavItem href="/register">Register</NavItem>
        </NavItems>
      </Navbar>
      <LoginContainer>
        <LoginCard>
          <h1>Login</h1>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
          <InputField
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
        </LoginCard>

        {showModal && (
          <ModalOverlay onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <h2>{error ? 'Error' : 'Success'}</h2>
              <p>{error || success}</p>
              <CloseButton onClick={closeModal}>Close</CloseButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </LoginContainer>
    </Container>
  );
};

// Styled Components for Layout and Design

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
  gap: 1.5rem;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #e67e22; /* Highlight color */
  }
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 2rem;
`;

const LoginCard = styled.div`
  background-color: #2c3e50; /* Darker Denim Blue */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 2rem;
  width: 400px;
  text-align: center;
  animation: fadeIn 1s ease-out;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #fff; /* White text for header */
  }
`;

const InputField = styled.input`
  background-color: #f0f0f0;
  border: none;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  width: 90%;
  transition: background-color 0.3s ease;

  &:focus {
    background-color: #ecf0f1;
  }
`;

const ErrorMessage = styled.div`
  color: #f0f0f0;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const SuccessMessage = styled.div`
  color: #f0f0f0;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const Button = styled.button`
  background-color: #4f6d97; /* Light Denim Blue */
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #3b4d72; /* Dark Denim Blue for hover effect */
    transform: translateY(-4px);
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
  background: #2c3e50; /* Darker Denim Blue for the modal */
  padding: 2rem;
  border-radius: 12px;
  width: 300px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 0;
    text-align: center;
    color: #fff; /* White text for the modal title */
  }

  p {
    margin: 1rem 0;
    text-align: center;
    font-size: 0.9rem;
    color: #fff; /* White text for the modal content */
  }
`;

const CloseButton = styled.button`
  background-color: #e67e22; /* Highlight color for Close button */
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
    background-color: #d35400; /* Darker orange for hover effect */
  }
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

export default Login;
