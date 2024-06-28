/* eslint-disable */
import { STATUS_CARD_TYPE } from "../../constants/enum";
import PageTitle from "../../components/shared/PageTitle/PageTitle";
import FlexRow from "./../../components/shared/FlexRow/FlexRow";
import PageSubTitle from "./../../components/shared/PageSubTitle/PageSubTitle";
import ICONS from "../../assets";
import { useQuery } from "../../services/useQuery";
import useAccessKeyStore from "../../stores/accessKey";
import GenericCard from "../shared/GenericCard/GenericCard";
import StatusCard from "../shared/StatusCard/StatusCard";
import { IProfileItem } from "../Header/components/Profile/Profile.interfaces";

const DashboardComponent = () => {

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
                topText={"Orçamentos"}
                bottomText={ "_" }
                leftText={"R$"}
              />
              <GenericCard
                icon={ICONS.energy}
                type={STATUS_CARD_TYPE.GREY}
                topText={"Total de oçamentos gerados"}
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
          <FlexRow>
            <StatusCard icon={ICONS.solarPanel} type={STATUS_CARD_TYPE.NORMAL} hyperlink={true} topText={"Online"} bottomText={"Servico"} />
          </FlexRow>
        </>
      {/* )} */}
    </>
  );
};
export default DashboardComponent;
