/* eslint-disable */
import { useQuery } from "../../services/useQuery";
import useAccessKeyStore from "../../stores/accessKey";
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
        
    </>
  );
};
export default DashboardComponent;
