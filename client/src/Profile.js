import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <StyledLoader color={"#36d7b7"} />;
  }

  return (
    isAuthenticated && (
      <StyledProfile>
        <h2>{user.name}</h2>
        <p>{user.nickname}</p>
      </StyledProfile>
    )
  );
};

export default Profile;

const StyledProfile = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const StyledLoader = styled(ScaleLoader)`
  position: absolute;
  top: 300px;
  left: 45%;
  z-index: 5;
`;
