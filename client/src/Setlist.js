import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";
import { useAuth0 } from "@auth0/auth0-react";
import Map from "./Map";
import YouTube from "react-youtube";
import { NavLink } from "react-router-dom";

const Setlist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const [setlistData, setSetlistData] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const { user, isAuthenticated } = useAuth0();
  const [searchTerm, setSearchTem] = useState(null);
  const setlistId = params.id;

  useEffect(() => {
    fetch(`/setlist/${setlistId}`)
      .then((res) => res.json())
      .then((res) => {
        setSetlistData(res.data);
        setIsLoading(false);

        setSearchTem(
          res.data.artist.name +
            " live" +
            " " +
            res.data.venue.city.name +
            " " +
            res.data.eventDate
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setlistId]);

  const addFavorite = () => {
    fetch(`/post-favorite`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: user.nickname, setlistData }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data + "Success!");
      });
  };

  useEffect(() => {
    fetch(`/get-videos/${searchTerm}`)
      .then((res) => res.json())
      .then((res) => {
        setVideoData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchTerm]);

  if (isLoading) {
    return <StyledLoader color={"#36d7b7"} />;
  }
  return (
    <StyledBody>
      {setlistData && (
        <div>
          <StyledArtistLink to={`/artist/${setlistData.artist.name}`} end>
            {setlistData.artist.name}
          </StyledArtistLink>
          <p>{setlistData.venue.name}</p>
          <p>
            {setlistData.venue.city.name}, {setlistData.venue.city.state}
          </p>
          <p>{setlistData.eventDate}</p>
        </div>
      )}
      <h2>Set List</h2>

      {setlistData.sets.set.length > 0 && (
        <ol>
          {setlistData.sets.set[0].song.map((item) => {
            return (
              <li>
                {item.name} {item.info}
              </li>
            );
          })}
        </ol>
      )}
      {setlistData && isAuthenticated && (
        <form>
          <StyledSaveButton onClick={addFavorite}>
            {" "}
            Save Setlist
          </StyledSaveButton>
        </form>
      )}
      <Map
        lat={setlistData.venue.city.coords.lat}
        lng={setlistData.venue.city.coords.long}
      />

      <h1>Videos</h1>

      {videoData &&
        videoData.items.map((item) => {
          return (
            <div>
              <YouTube videoId={item.id.videoId} />
            </div>
          );
        })}
    </StyledBody>
  );
};

export default Setlist;

const StyledBody = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
  margin: 8px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: 20px;
  h2 {
    color: #f95d9b;
  }
`;

const StyledLoader = styled(ScaleLoader)`
  position: absolute;
  top: 300px;
  left: 45%;
  z-index: 5;
`;

const StyledArtistLink = styled(NavLink)`
  background-color: #161748;
  border: 2px solid #f5bb09;
  text-decoration: none;
  color: #f5bb09;
  margin: 2px;
  padding: 3px;
  font-size: 20px;
  box-shadow: 3px 4px 0px 0px #f5bb09;
  border-radius: 5px;

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

const StyledSaveButton = styled.button`
  background-color: #161748;
  border: 2px solid #f5bb09;
  text-decoration: none;
  color: #f5bb09;
  margin: 2px;
  padding: 3px;
  font-size: 20px;
  box-shadow: 3px 4px 0px 0px #f5bb09;
  border-radius: 5px;

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
