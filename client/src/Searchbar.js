import { useState } from "react";
import { ScaleLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Searchbar = () => {
  // const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState(null);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = () => {
    fetch(`/search/artist/${encodeURI(value)}`)
      .then((res) => res.json())
      .then((res) => {
        setSearch(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledSearchPage>
      <h3>Search By Artist</h3>
      <StyledSearchArea>
        <StyledButton onClick={handleSubmit}>Search</StyledButton>{" "}
        <StyledInput
          type="text"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              handleSubmit(ev.target.value);
            }
          }}
        />
      </StyledSearchArea>
      {search === undefined && <p>No Artists Found</p>}
      {search && (
        <StyledSearchCard>
          {search.artist.map((item) => {
            return (
              <StyledSearchItem>
                <StyledArtistNavlink to={`/artist/setlists/${item.mbid}`} end>
                  {item.name}
                </StyledArtistNavlink>
                <p>{item.disambiguation}</p>
              </StyledSearchItem>
            );
          })}
        </StyledSearchCard>
      )}
    </StyledSearchPage>
  );
};

export default Searchbar;

const StyledLoader = styled(ScaleLoader)`
  position: absolute;
  top: 300px;
  left: 45%;
  z-index: 5;
`;

const StyledArtistNavlink = styled(NavLink)`
  text-decoration: none;
  padding: 4px;
  padding: 3px;
  font-size: 20px;

  &:link {
    text-decoration: none;
    color: #f5bb09;
  }

  &:visited {
    text-decoration: none;
    color: #f5bb09;
  }

  &:hover {
    background-color: #7375b6;
    color: #f5bb09;
    border-radius: 10px;
  }

  &.active {
    color: #f5bb09;
  }
`;

const StyledSearchPage = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 75vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 40px;

  h3 {
    color: #f95d9b;
  }
`;

const StyledSearchArea = styled.div`
  margin-bottom: 60px;
`;

const StyledSearchCard = styled.div``;

const StyledSearchItem = styled.div`
  border: 2px solid #f5bb09;
  box-shadow: 3px 4px 0px 0px #f5bb09;
  border-radius: 5px;
  margin: 10px;
  p {
    font-style: italic;
    font-size: 16px;
    padding-left: 40px;
  }
`;

const StyledInput = styled.input`
  box-shadow: 3px 4px 0px 0px #2fe1b9;
  margin: 10px;
  background-color: #161748;
  border: 3px solid #2fe1b9;
  border-radius: 5px;
  height: 50px;
  line-height: normal;
  color: #2fe1b9;
  display: block;
  width: 100%;
  box-sizing: border-box;
  user-select: auto;
  font-size: 16px;
  padding: 0 6px;
  padding-left: 12px;
  :focus {
    border: 3px solid #2fe1b9;
  }
  &:hover {
    background-color: #7375b6;
    color: #f5bb09;
    border-radius: 10px;
  }
`;

const StyledButton = styled.button`
  box-shadow: 3px 4px 0px 0px #2fe1b9;
  border-radius: 5px;
  background-color: #161748;
  color: #2fe1b9;
  border: 2px solid #2fe1b9;
  width: 100px;
  height: 40px;
  &:hover {
    background-color: #7375b6;
    color: #f5bb09;
    border-radius: 10px;
  }
`;
