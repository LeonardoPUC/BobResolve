/* eslint-disable */
import { TourProvider } from "@reactour/tour"
import Button from "../Button/Button"
import { BUTTON_TYPE } from "../../../constants/enum"
import { ITourPage } from "./TourPage.interface"

const TourPage = (props: ITourPage) => {
    return (
        <TourProvider
            steps={props.steps}
            startAt={0}
            showBadge={false}
            showDots={false}
            styles={{
                popover: (base) => ({
                    ...base,
                    borderRadius: 4,
                }),
                maskArea: (base) => ({ ...base, rx: 2 }),
                maskWrapper: (base) => ({ ...base }),
                badge: (base) => ({ ...base, right: 'auto', left: '-0.8125em' }),
                controls: (base) => ({ ...base, marginTop: 16 }),
                close: (base) => ({ ...base, left: 'auto', right: 8, top: 8 }),
            }}
            prevButton={({ currentStep, setCurrentStep, steps }) => {
                const first = currentStep === 0
                return (
                    <>
                        <Button
                            buttonType={first ? BUTTON_TYPE.DISABLED : BUTTON_TYPE.PRIMARY}
                            disabled={first}
                            onClick={() => {
                                if (first) {
                                    setCurrentStep((s) => steps!.length - 1)
                                } else {
                                    setCurrentStep((s) => s - 1)
                                }
                            }}
                            text="Anterior" />
                    </>
                )
            }}
            nextButton={({
                currentStep,
                stepsLength,
                setIsOpen,
                setCurrentStep,
                steps,
            }) => {
                const last = currentStep === stepsLength - 1
                return (
                    <>
                        <Button
                            buttonType={BUTTON_TYPE.PRIMARY}
                            onClick={() => {
                                if (last) {
                                    setIsOpen(false)
                                } else {
                                    setCurrentStep((s) => (s === steps!.length - 1 ? 0 : s + 1))
                                }
                            }}
                            text={last ? 'Concluir' : 'Próximo'} />
                    </>
                )
            }}
        >
            {props.component}
        </TourProvider>
    )
}
export default TourPage