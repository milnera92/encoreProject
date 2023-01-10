import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";
const mapsKey = process.env.REACT_APP_MAPS;

const Map = ({ lat, lng }) => {
  const center = { lat: lat, lng: lng };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: mapsKey,
  });

  if (!isLoaded) {
    return <StyledLoader color={"#36d7b7"} />;
  }
  return (
    <StyledMap>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerStyle={{
          width: "800px",
          height: "400px",
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </StyledMap>
  );
};

export default Map;

const StyledMap = styled.div`
  border: 3px solid #2fe1b9;
  margin: 10px;
`;

const StyledLoader = styled(ScaleLoader)`
  position: absolute;
  top: 300px;
  left: 45%;
  z-index: 5;
`;
