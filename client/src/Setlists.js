import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
import Map from "./Map";

const Setlists = () => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const [setlistsData, setSetlistsData] = useState(null);

  const artistId = params.id;

  useEffect(() => {
    fetch(`/artist/setlists/${artistId}`)
      .then((res) => res.json())
      .then((res) => {
        setSetlistsData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [artistId]);

  if (isLoading) {
    return <StyledLoader color={"#36d7b7"} />;
  }

  return (
    <StyledSetlistsPage>
      {!setlistsData && <p>No Shows Found</p>}
      {setlistsData && (
        <div>
          <h1>Recent Performances</h1>
          {setlistsData.setlist.map((item) => {
            return (
              <StyledShowCard>
                <p>{item.eventDate}</p>
                <StyledSetlistNavlink to={`/setlist/${item.id}`} end>
                  Go to Setlist
                </StyledSetlistNavlink>
                <StyledSetlistNavlink to={`/artist/${item.artist.name}`} end>
                  Go to artist
                </StyledSetlistNavlink>
                <p>{item.venue.name}</p>
                <p>
                  {item.venue.city.name}, {item.venue.city.state}
                </p>
                <p>{item.venue.city.country.name}</p>

                <Map
                  lat={item.venue.city.coords.lat}
                  lng={item.venue.city.coords.long}
                />
              </StyledShowCard>
            );
          })}
        </div>
      )}
    </StyledSetlistsPage>
  );
};

export default Setlists;

const StyledSetlistsPage = styled.div`
  h1 {
    color: #f95d9b;
    text-align: center;
  }
`;

const StyledLoader = styled(ScaleLoader)`
  position: absolute;
  top: 300px;
  left: 45%;
  z-index: 5;
`;

const StyledShowCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
  margin: 8px;
`;

const StyledSetlistNavlink = styled(NavLink)`
  background-color: #161748;
  border: 2px solid #f95d9b;
  text-decoration: none;
  margin: 6px;
  padding: 8px;
  font-size: 20px;
  box-shadow: 3px 4px 0px 0px #f95d9b;
  border-radius: 5px;

  &:link {
    text-decoration: none;
    color: #f95d9b;
  }

  &:visited {
    text-decoration: none;
    color: #f95d9b;
  }

  &:hover {
    background-color: #7375b6;
    color: #f5bb09;
    border-radius: 10px;
  }

  &.active {
    color: #f95d9b;
  }
`;
