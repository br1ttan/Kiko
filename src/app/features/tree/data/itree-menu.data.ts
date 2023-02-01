import { AppRouteEnum } from '@core';
import { SidebarEnum } from '../enums';
import { ITREE } from '../interfaces';

export const THREE_DATA: ITREE[] = [
    {
        name: 'Авто',
        active: false,
        navigationName: SidebarEnum.Jewelery,
        children: [
            {
                navigationName: SidebarEnum.Jewelery,
                name: 'Легкові автомобілі',
            },
            {
                navigationName: SidebarEnum.Jewelery,
                name: 'Спецтехніка',
            },
            {
                navigationName: SidebarEnum.Jewelery,
                name: 'Причепи / будинки на колесах',
            },
        ]
    },
    {
        name: 'daasas',
        active: false,
        navigationName: SidebarEnum.Jewelery,
        children: [
            {
                navigationName: SidebarEnum.Jewelery,
                name: 'danydasssssssssssssssssssssssssssssssssssssssssssssssssssssa',
            },
        ]
    },
    {
        navigationName: SidebarEnum.Jewelery,
        name: 'dsadas',
    },
]
