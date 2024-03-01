export const injectDynamicSaga = (nameKey, saga, store) => {
    if (!store.dynamicSagas[nameKey]) {
        store.dynamicSagas[nameKey] = true;
        sagaMiddleware.run(saga);
    }
};
