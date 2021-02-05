import { Collection } from './../models/Collection';

export abstract class CollectionView<T, K> {
	constructor(public parent: Element, public collection: Collection<T, K>) {}

	abstract renderItem(model: T, itemParent: Element): void;

	render(): void {
		// this.parent.innerHTML = '';

		const el = document.createElement('template');

		this.collection.models.forEach((model) => {
			const wrapper = document.createElement('div');
			this.renderItem(model, wrapper);
			el.content.append(wrapper);
		});

		this.parent.append(el.content);
	}
}
