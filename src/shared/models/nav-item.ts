export interface INavItem {
    name: string,
    path: string,
    icon?: string,
    active?: boolean,
    children?: INavItem[]
}