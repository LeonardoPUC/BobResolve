/* eslint-disable */
import { useState } from "react";
import {
  Container,
  RightContainer,
  List,
  LeftContainer,
  VerticalLine,
  UserCardContainer,
} from "./Navbar.styles";
import Avatar from "../Avatar/Avatar";
import Profile from "../Profile/Profile";
import UserCard from "../UserCard/UserCard";
import Button from "../../../shared/Button/Button";
import {
  BsQuestionSquare,
  BsReverseLayoutTextWindowReverse,
} from "react-icons/bs";
import { BUTTON_TYPE, COLORS } from "../../../../constants/enum";
import useAccessKeyStore from "../../../../stores/accessKey";

const Navbar = () => {
  const [cardNote, setCardNote] = useState<boolean>(false);
  const [userCard, setUserCard] = useState<boolean>(false);

  const onMouseEnter = (loadCard: string) => {
    if (loadCard === "loadUserCard") {
      setUserCard(true);
    } else if (loadCard === "loadCardNote") {
      setCardNote(true);
    }
  };

  const onMouseLeave = () => {
    setUserCard(false);
    setCardNote(false);
  };

  const key = useAccessKeyStore(
    (state) => state.userCredentials.accessKey
  ).toString();
  const userId = useAccessKeyStore(
    (state) => state.userCredentials.userId
  ).toString();

  const redirectHelpCenter = () => {
    window.open(`${process.env.REACT_APP_BASE_URL}help-center`, "_blank");
  };

  return (
    <Container>
      <>
        <VerticalLine />
        <LeftContainer>
          <Button
            buttonType={BUTTON_TYPE.BORDER_BLUE}
            icon={BsQuestionSquare}
            text="Central de ajuda"
            onClick={redirectHelpCenter}
            className="centralAjuda"
          />
        </LeftContainer>
      </>
      <RightContainer>
        <List>
          <UserCardContainer
            onMouseEnter={() => onMouseEnter("loadUserCard")}
            onMouseLeave={() => onMouseLeave()}
          >
            <Avatar />
            {userCard && <UserCard />}
          </UserCardContainer>
          <Profile color={COLORS.DARK_GREY} />
        </List>
      </RightContainer>
    </Container>
  );
};

export default Navbar;
