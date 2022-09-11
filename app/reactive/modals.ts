import Modal from '~/components/common/modal.vue';

const modalsList = reactive<InstanceType<typeof Modal>[]>([]);

export const modalAdd = (modalInstance: any): void => {
    modalInstance && modalsList.push(modalInstance);
};

export const modalToggle = (name: string): void => {
    modalsList.forEach((item: InstanceType<typeof Modal>) => {
        if (item.props.name === name) {
            item.proxy.visible = !item.proxy.visible;
        } else {
            item.proxy.visible = false;
        }
    });
};
