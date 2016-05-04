import Dispatcher from 'utils/Dispatcher';

class StoreRepository {
	constructor() {
		this.stores = {};
		this.dispatcher = Dispatcher;
	}

	register(Store) {
		let deserializedState;

		try {
			deserializedState = window.SERIALIZED_STORE_CACHE[this.storeInstanceName(Store.name)];
		} catch (e) {
			deserializedState = {};
		}

		let store = new Store(deserializedState);

		store.dispatcher = Dispatcher;
		store.dispatchToken = this._registerDispatcher(store);
		this.stores[this.storeInstanceName(Store.name)] = store;

		return this;
	}

	_registerDispatcher(store) {
		return store.dispatcher.register((action) => {
			store._dispatch(action);
		});
	}

	getStore(storeName) {
		return this.stores[storeName];
	}

	getRegisteredStores() {
		return this.stores;
	}

	bindStoreUsages() {
		for (let _store in this.stores) {
			if (this.stores.hasOwnProperty(_store) && this.stores[_store].use) {
				this.stores[_store].use.forEach((store) => {
					this.stores[_store][store] = this.getStore(store);
				});
			}
		}
	}

	storeInstanceName(storeName) {
		return `${storeName.charAt(0).toLowerCase()}${storeName.slice(1)}`;
	}
}

export default new StoreRepository();
