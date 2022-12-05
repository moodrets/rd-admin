import { Component, ViewEncapsulation } from '@angular/core'

interface MainMenuItem {
    path: string
    iconName: string
    title: string
    addPath?: string
    addIcon?: string
}

@Component({
    selector: 'admin-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class MainMenuComponent {
    public links: MainMenuItem[] = [
        {
            path: '/pages',
            iconName: 'web',
            addPath: '/pages/create',
            title: 'Страницы',
        },
        {
            path: '/menus',
            iconName: 'view_headline',
            addPath: '/menus/create',
            title: 'Меню',
        },
        {
            path: '/blocks',
            iconName: 'widgets',
            addPath: '/blocks/create',
            title: 'Блоки (данные страниц)',
        },
        {
            path: '/users',
            iconName: 'account_box',
            addPath: '/users/create',
            title: 'Пользователи',
        },
        {
            path: '/users/groups',
            iconName: 'group',
            addPath: '/users/groups/create',
            title: 'Группы пользователей',
        },
        {
            path: '/forms',
            iconName: 'art_track',
            title: 'Формы',
            addPath: '/forms/create',
        },
        {
            path: '/modules',
            iconName: 'settings_input_component',
            title: 'Модули',
            addPath: '/modules/create',
        },
        {
            path: '/requests',
            iconName: 'assignment',
            title: 'Заявки',
        },
        {
            path: '/settings',
            iconName: 'settings',
            title: 'Настройки',
        },
        {
            path: '/help',
            iconName: 'help',
            title: 'Справка',
        },
    ]
}
