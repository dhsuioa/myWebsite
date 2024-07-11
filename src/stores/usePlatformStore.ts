import { defineStore } from 'pinia';
import { useQuasar } from 'quasar';

export const usePlatformStore = defineStore('platform', () => {
    const $q = useQuasar();
    const isDesktop = $q.platform.is.desktop;

    return {
        isDesktop
    };
});
