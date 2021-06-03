import {createStore, createTypedHooks, action, Action} from "easy-peasy";
import {LogoPlacement} from "./models/LogoPlacement";
import {ImagePlacement} from "./models/ImagePlacement";

interface StoreModel {
    logoPlacement: LogoPlacement;
    setLogoPlacement: Action<StoreModel, LogoPlacement>;

    imagePlacement: ImagePlacement;
    setImagePlacement: Action<StoreModel, ImagePlacement>;

    title: string;
    setTitle: Action<StoreModel, string>;

    titleFontSize: number;
    setTitleFontSize: Action<StoreModel, number>;

    useCustomImage: boolean;
    setUseCustomImage: Action<StoreModel, boolean>;
}

export const store = createStore<StoreModel>({
    logoPlacement: "center",
    setLogoPlacement: action((state, payload) => {
        state.logoPlacement = payload;
    }),

    imagePlacement: "top",
    setImagePlacement: action((state, payload) => {
        state.imagePlacement = payload;
    }),

    title: "",
    setTitle: action((state, payload) => {
        state.title = payload;
    }),

    titleFontSize: 27,
    setTitleFontSize: action((state, payload) => {
        state.titleFontSize = payload;
    }),

    useCustomImage: false,
    setUseCustomImage: action((state, payload) => {
        state.useCustomImage = payload;
    }),
});

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
