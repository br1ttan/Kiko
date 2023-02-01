import { SidebarEnum } from '../enums/sidebar.enum';

export interface ITREE {
    readonly name: string;
    active?: boolean;
    readonly navigationName?: SidebarEnum;
    readonly children?: ITREE[];
}
