import { AppRouteEnum } from '@core';
import { SidebarEnum } from '../enums';
import { ITREE } from '../interfaces';

export const THREE_DATA: ITREE[] = [
    {
        name: 'Авто',
        active: false,
        navigationName: SidebarEnum.Jewelry,
        children: [
            {
                navigationName: SidebarEnum.Jewelry,
                name: 'Легкові автомобілі',
            },
            {
                navigationName: SidebarEnum.Jewelry,
                name: 'Спецтехніка',
            },
            {
                navigationName: SidebarEnum.Jewelry,
                name: 'Причепи / будинки на колесах',
            },
        ]
    },
    {
        name: 'daasas',
        active: false,
        navigationName: SidebarEnum.Jewelry,
        children: [
            {
                navigationName: SidebarEnum.Jewelry,
                name: 'danydasssssssssssssssssssssssssssssssssssssssssssssssssssssa',
            },
        ]
    },
    {
        navigationName: SidebarEnum.Jewelry,
        name: 'dsadas',
    },
]
