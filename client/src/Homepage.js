import styled from "styled-components";

const Homepage = ({ Profile, Searchbar }) => {
  return (
    <StyledHomepage>
      <Searchbar />
    </StyledHomepage>
  );
};

export default Homepage;

const StyledHomepage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;
