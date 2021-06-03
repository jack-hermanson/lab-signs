import {createStore, createTypedHooks, action, Action} from "easy-peasy";
import {LogoPlacement} from "./models/LogoPlacement";
import {ImagePlacement} from "./models/ImagePlacement";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

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

    selectedIcon: IconDefinition | undefined;
    setSelectedIcon: Action<StoreModel, IconDefinition | undefined>;
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

    selectedIcon: undefined,
    setSelectedIcon: action((state, payload) => {
        state.selectedIcon = payload;
    }),
});

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
