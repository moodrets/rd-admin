const offcanvasList = reactive<any[]>([]);

export const offcanvasAdd = (offcanvasComponent: any): void => {
    offcanvasComponent && offcanvasList.push(offcanvasComponent);
};

export const offcanvasToggle = (name: string) => {
    offcanvasList.forEach((item: any) => {
        if (item.props.name === name) {
            item.proxy.visible = !item.proxy.visible;
        } else {
            item.proxy.visible = false;
        }
    });
};
