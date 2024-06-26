interface ILink {
    title: string
    href: string
}

export interface IBreadcrumb {
    current: string
    links: ILink[]
    powerStationId?: string
}