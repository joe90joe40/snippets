import storeRepository from 'utils/StoreRepository';

import RoutingStore from 'stores/RoutingStore';
import ContentStore from 'stores/ContentStore';

storeRepository
	.register(RoutingStore)
	.register(ContentStore);

export function useStore(storeName) {
	return storeRepository.getStore(storeName);
}
