/* eslint-disable */
import { BUTTON_TYPE, STATUS_CARD_TYPE } from "../../constants/enum";
import PageTitle from "../../components/shared/PageTitle/PageTitle";
import FlexRow from "./../../components/shared/FlexRow/FlexRow";
import PageSubTitle from "./../../components/shared/PageSubTitle/PageSubTitle";
import { DateRange } from "rsuite/esm/DateRangePicker";
import { useState } from "react";
import ICONS from "../../assets";
import { useQuery } from "../../services/useQuery";
import useAccessKeyStore from "../../stores/accessKey";
import GenericCard from "../shared/GenericCard/GenericCard";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import Button from "../shared/Button/Button";
import Loading from "../shared/Loading/Loading";
import { useAxios } from "../../services/useAxios";
import { IProfileItem } from "../Header/components/Profile/Profile.interfaces";
import { ModalCredential } from "./DashboardComponent.styles";
import { useTour } from "@reactour/tour";

const DashboardComponent = () => {
  const [dateRange, setDateRange] = useState<DateRange>();
  const [showTermsModal, setShowTermsModal] = useState(true);
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const userId = useAccessKeyStore(
    (state) => state.userCredentials.userId
  ).toString();

  const user: IProfileItem = useQuery({
    id: "get-user",
    url: "/User/GetById",
    filters: {
      id: userId,
    },
  }).data?.data;

  return (
    <>
      {/* {dashboard.isFetching && !dashboard.data?.data && (
        <>
          <Loading />
        </>
      )} */}
      {/* {dashboard.data?.data && ( */}
        <>
          <PageTitle title="Dashboard" children=""></PageTitle>
          <PageSubTitle subTitle="Geração" />
          <FlexRow>
            <FlexRow inner={true}>
              <GenericCard
                icon={ICONS.currencyDollar}
                type={STATUS_CARD_TYPE.GREY}
                topText={"Economia total"}
                bottomText={ "_" }
                leftText={"R$"}
              />
              <GenericCard
                icon={ICONS.energy}
                type={STATUS_CARD_TYPE.GREY}
                topText={"Total de energia gerada"}
                bottomText={"_"}
                rightText={"K"}
              />
            </FlexRow>
            <FlexRow inner={true}>
              <GenericCard
                icon={ICONS.ecoProtect}
                type={STATUS_CARD_TYPE.GREY}
                topText={"Carbono evitado"}
                bottomText={"_"}
                rightText={"ton"}
              />
              <GenericCard
                icon={ICONS.trees}
                type={STATUS_CARD_TYPE.GREY}
                topText={"Árvores cultivadas"}
                bottomText={"_"}
              />
            </FlexRow>
          </FlexRow>
        </>
      {/* )} */}
    </>
  );
};
export default DashboardComponent;
