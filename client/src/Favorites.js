import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";
import { useAuth0 } from "@auth0/auth0-react";
import Map from "./Map";

const Favorites = () => {
  const [setlists, setSetlists] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth0();

  useEffect(() => {
    fetch(`/get-favorites`)
      .then((res) => res.json())
      .then((res) => {
        setSetlists(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  if (isLoading) {
    return <StyledLoader color={"#36d7b7"} />;
  }
  return (
    <StyledFavoritesPage>
      {setlists.map((item) => {
        if (item.data.user === user.nickname) {
          return (
            <StyledBody>
              <h2>{item.data.setlistData.artist.name}</h2>
              <p>{item.data.setlistData.eventDate}</p>
              <p>{item.data.setlistData.venue.name}</p>
              <ol>
                {item.data.setlistData.sets.set[0].song.map((item) => {
                  return (
                    <li>
                      {item.name} {item.info}
                    </li>
                  );
                })}
              </ol>

              <Map
                lat={item.data.setlistData.venue.city.coords.lat}
                lng={item.data.setlistData.venue.city.coords.long}
              />
            </StyledBody>
          );
        }
      })}
    </StyledFavoritesPage>
  );
};

export default Favorites;

const StyledLoader = styled(ScaleLoader)`
  position: absolute;
  top: 300px;
  left: 45%;
  z-index: 5;
`;

const StyledBody = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
  margin: 8px;

  h2 {
    color: #f95d9b;
  }
`;

const StyledFavoritesPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;
