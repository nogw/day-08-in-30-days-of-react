import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    margin-bottom: 20px;
  }

  input, button {
    width: 200px;
    margin: 10px;
    outline: none;
  }

  input {
    border: none;
    background-color: #e1e1e1;
    padding: 10px;
    border-radius: 4px;
  }

  button {
    border:none;
    background-color: #e2ea;;
    font-weight: 500;
    font-size: 15px;
    margin-top: 20px;
    color: #e1e1e1;
    padding: 10px;
    border-radius: 4px;
  }
`;
