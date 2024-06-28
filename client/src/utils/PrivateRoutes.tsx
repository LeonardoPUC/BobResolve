/* eslint-disable */
import { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { Container, FlexContainer } from "../App.styles";
import Menu from "../components/Header/components/Menu/Menu";
import Header from "../components/Header/Header";
import GreyBackground from "../components/shared/GreyBackground/GreyBackground";
import useAccessKeyStore from "../stores/accessKey";
import { IProfileItem } from "../components/Header/components/Profile/Profile.interfaces";
import { useQuery } from "../services/useQuery";

const PrivateRoutes = () => {
  const auth = {
    token: useAccessKeyStore((state) => state.userCredentials.accessKey),
  };
  const userId = useAccessKeyStore(
    (state) => state.userCredentials.userId
  ).toString();

  const user: IProfileItem = useQuery(
    {
      id: 'get-user',
      url: `/usuario/${userId}`,
      filters: {}
    }
  ).data

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    if (user) {
      setMenuOpen(true);
    }
  });

  const handleMenuOpen = () => setMenuOpen((prev) => !prev);

  if (auth.token)
  {
    return (
    <>
      <Header />
      <FlexContainer>
        <Menu open={menuOpen} handleMenuOpen={handleMenuOpen} />
        <Container open={menuOpen}>
          <div>
            <Outlet />
          </div>
        </Container>
      </FlexContainer>
      <GreyBackground open={menuOpen && window.innerWidth <= 990} />
    </> )
  } else
  {
    return (<Navigate to="/" />)
  }
};

export default PrivateRoutes;
