import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background: blue;
  color: white;
`;

function App() {
  return (
    <div className="App">
      <Header>Hello World</Header>
    </div>
  );
}

export default App;
