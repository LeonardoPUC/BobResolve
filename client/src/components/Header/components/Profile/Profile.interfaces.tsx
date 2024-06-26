export interface IProfileItem {
    id: number
    name: string
    email: string
    trialPeriod: boolean
    trialPeriodEndDate: string
    trialPeriodStartDate: string
    acceptedTerms: boolean
    AcceptedTermsDate: Date
}

export interface IContainer {
    color: string
}

export interface IProfile {
    color: string
}