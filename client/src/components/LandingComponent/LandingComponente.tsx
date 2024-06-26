/* eslint-disable */
import styled from "styled-components"
import { BUTTON_TYPE, COLORS } from '../../constants/enum'
import Button from '../shared/Button/Button'

export const ContainerVideo = styled.div`
    width: "100%";
    height: "100%";
    margin-top: 20px;
    margin-bottom": 20px;
    text-align: center;
`

const LandingComponent = () => {
    return (
        <div>
            <Button buttonType={BUTTON_TYPE.PRIMARY} onClick={() => window.location.href = '/login'} text='LOGIN' />
        </div>
    )
}

export default LandingComponent