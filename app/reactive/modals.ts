const modalsList = reactive<any>([]);

export const modalAdd = (modalInstance: any): void => {
    modalInstance && modalsList.push(modalInstance);
};

export const modalToggle = (name: string): void => {
    modalsList.forEach((item: any) => {
        if (item.props.name === name) {
            item.proxy.visible = !item.proxy.visible;
        } else {
            item.proxy.visible = false;
        }
    });
};
