import {createStore, createTypedHooks, action, Action} from "easy-peasy";

interface StoreModel {
    logoPlacement: "left" | "center";
}

export const store = createStore<StoreModel>({
    logoPlacement: "center",
});

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
