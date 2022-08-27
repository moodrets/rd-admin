export class RDToast {
	#canvas = null;
	#classNames = {
		canvas: 'rd-toast-canvas',
		item: 'rd-toast-item',
		container: 'rd-toast-container',
	};
	constructor(options) {
		this.settings = {
			icon: '',
			type: 'info',
			position: 'bottom-right',
			customToastClass: '',
			duration: 5000,
			hideOnClick: false,
			...options,
		};
		this.init();
	}

	show(text = '', options = {}) {
		const localOptions = { ...this.settings, ...options };
		const existContainer = this.#canvas.querySelector(
			`.${this.#classNames.container}.position-${localOptions.position}`
		);
		const toast = this.#createToast(text, { ...this.settings, ...localOptions });

		if (existContainer) {
			existContainer.append(toast);
			return;
		}

		const toastContainer = this.#createContainer({ ...this.settings, ...localOptions });
		toastContainer.append(toast);
		this.#canvas.append(toastContainer);
	}

	#createContainer(options) {
		const toastContainer = document.createElement('div');
		toastContainer.classList.add(this.#classNames.container, `position-${options.position}`);
		return toastContainer;
	}

	#createToast(text, options) {
		const toast = document.createElement('div');
		const toastClassList = [this.#classNames.item, `type-${options.type}`, 'show'];
		options.customToastClass && toastClassList.push(`${options.customToastClass}`);
		toast.classList.add(...toastClassList);
		toast.innerHTML = `<span>${text}</span>`;
		options.icon && toast.insertAdjacentHTML('afterbegin', options.icon);
		const timeout = setTimeout(() => {
			toast.remove();
		}, options.duration);
		options.hideOnClick &&
			toast.addEventListener('click', (e) => {
				clearTimeout(timeout);
				toast.remove();
			});
		return toast;
	}

	init() {
		this.#canvas = document.createElement('div');
		this.#canvas.classList.add(this.#classNames.canvas);
		document.body.append(this.#canvas);
	}
}
