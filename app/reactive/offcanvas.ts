import Offcanvas from '~/components/common/offcanvas.vue';

const offcanvasList = reactive<InstanceType<typeof Offcanvas>[]>([]);

export const offcanvasAdd = (offcanvasComponent: any): void => {
    offcanvasComponent && offcanvasList.push(offcanvasComponent);
};

export const offcanvasToggle = (name: string) => {
    offcanvasList.forEach((item: InstanceType<typeof Offcanvas>) => {
        if (item.props.name === name) {
            item.proxy.visible = !item.proxy.visible;
        } else {
            item.proxy.visible = false;
        }
    });
};
