import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";

const Artist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const [artistData, setArtistData] = useState(null);

  const artistId = params.id;
  // console.log(artistId)

  useEffect(() => {
    fetch(`/artist-info/${artistId}`)
      .then((res) => res.json())
      .then((res) => {
        setArtistData(res.data);
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
    <StyledWrapper>
      {artistData && (
        <StyledArtistPage>
          <h1>{artistData._embedded.attractions[0].name}</h1>
          <StyledArtisImage
            src={artistData._embedded.attractions[0].images[0].url}
          />
          <h2>Socials</h2>
          {artistData._embedded.attractions[0].externalLinks.wiki && (
            <StyledSocalLink
              href={
                artistData._embedded.attractions[0].externalLinks.wiki[0].url
              }
            >
              Wikipedia
            </StyledSocalLink>
          )}
          {artistData._embedded.attractions[0].externalLinks.spotify && (
            <StyledSocalLink
              href={
                artistData._embedded.attractions[0].externalLinks.spotify[0].url
              }
            >
              Spotify
            </StyledSocalLink>
          )}
          {artistData._embedded.attractions[0].externalLinks.twitter && (
            <StyledSocalLink
              href={
                artistData._embedded.attractions[0].externalLinks.twitter[0].url
              }
            >
              Twitter
            </StyledSocalLink>
          )}
          {artistData._embedded.attractions[0].externalLinks.youtube && (
            <StyledSocalLink
              href={
                artistData._embedded.attractions[0].externalLinks.youtube[0].url
              }
            >
              Youtube
            </StyledSocalLink>
          )}
          {artistData._embedded.attractions[0].externalLinks.facebook && (
            <StyledSocalLink
              href={
                artistData._embedded.attractions[0].externalLinks.facebook[0]
                  .url
              }
            >
              Facebook
            </StyledSocalLink>
          )}
          {artistData._embedded.attractions[0].externalLinks.itunes && (
            <StyledSocalLink
              href={
                artistData._embedded.attractions[0].externalLinks.itunes[0].url
              }
            >
              iTunes
            </StyledSocalLink>
          )}
          {artistData._embedded.attractions[0].externalLinks.instagram && (
            <StyledSocalLink
              href={
                artistData._embedded.attractions[0].externalLinks.instagram[0]
                  .url
              }
            >
              Instagram
            </StyledSocalLink>
          )}
        </StyledArtistPage>
      )}
    </StyledWrapper>
  );
};

export default Artist;

const StyledLoader = styled(ScaleLoader)`
  position: absolute;
  top: 300px;
  left: 45%;
  z-index: 5;
`;

const StyledArtisImage = styled.img`
  border-radius: 100px;
  width: 200px;
`;

const StyledSocalLink = styled.a`
  text-decoration: none;

  &:link {
    color: #f95d9b;
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
    color: #f95d9b;
  }

  &:hover {
    color: #f5bb09;
    text-decoration: none;
  }

  &:active {
    color: #f95d9b;
    text-decoration: none;
  }
`;

const StyledArtistPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;

  h2 {
    border-bottom: 2px solid #2fe1b9;
  }
`;

const StyledWrapper = styled.div`
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
