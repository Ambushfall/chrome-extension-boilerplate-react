export const LS = {
    getAllItems: () => chrome.storage.local.get(),
    getItem: async key => (await chrome.storage.local.get(key))[key],
    setItem: (key, val) => chrome.storage.local.set({ [key]: val }),
    removeItems: keys => chrome.storage.local.remove(keys),
}, testingKey = "Testing", lastCheckedKey = "lastchecked";

if (typeof await LS.getItem(testingKey) === "undefined") await LS.setItem(testingKey, true);
if (typeof await LS.getItem(lastCheckedKey) === "undefined") await LS.setItem(lastCheckedKey, Date.now());

export const Testing = await LS.getItem(testingKey), lastchecked = await LS.getItem(lastCheckedKey);

export async function pruneStorage() {
    const remover = Date.now() - 2500000000;
    const key = "lastchecked";
    if (await LS.getItem(key) < remover) {
        await LS.setItem(key, Date.now());
    } else {
        const toRemove = Object.entries(await LS.getAllItems())
            .map(([k, v]) => v < remover && k)
            .filter(Boolean);
        if (toRemove.length) {
            await LS.removeItems(toRemove);
        }
    }
}