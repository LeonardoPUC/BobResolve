/* eslint-disable */
import { Container, SubContainer, UserItems, User, TrialPeriodDate, CardPeriodDate } from './UserCard.styles'
import Avatar from '../Avatar/Avatar'
import { HiOutlineUser } from 'react-icons/hi'
import { FiLogOut } from 'react-icons/fi'
import Profile from '../Profile/Profile'
import useAccessKeyStore from '../../../../stores/accessKey'
import { useQuery } from '../../../../services/useQuery'
import { IProfileItem } from '../Profile/Profile.interfaces'
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { COLORS } from '../../../../constants/enum'

const UserCard = () => {
  const removeKey = useAccessKeyStore((state) => state.removeCredentials)
  const key = useAccessKeyStore(state => state.userCredentials.accessKey)

  const userId = useAccessKeyStore(state => state.userCredentials.userId).toString()

  const user: IProfileItem = useQuery(
    {
      id: 'get-user',
      url: '/User/GetById',
      filters: {
        id: userId
      }
    }
  ).data?.data

  const logout = () => {
    removeKey()
    window.location.href = process.env.REACT_APP_BASE_URL || ''
  }

  const TrialPeriod: React.FC<{ trialPeriodEndDate: string; trialPeriod: boolean }> = ({ trialPeriodEndDate, trialPeriod }) => {

    if (!trialPeriod) {
      return null
    }

    const today = new Date()
    const endPeriodDate = new Date(trialPeriodEndDate)

    const timeDiff = endPeriodDate.getTime() - today.getTime()
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24))

    return (
      <TrialPeriodDate>Seu acesso expira em: {daysRemaining} dias</TrialPeriodDate>
    )
  }

  return (
    <Container>
      <SubContainer>
        <User>
          <Avatar />
          <Profile color={COLORS.DARK_GREY} />
        </User>
        <hr />
        <UserItems>
          <div>
            <HiOutlineUser />
          </div>
          <FiLogOut />
          <a onClick={logout}>Sair</a>
        </UserItems>
      </SubContainer>

    </Container>
  )
}

export default UserCard