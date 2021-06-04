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

    customImageUrl: string;
    setCustomImageUrl: Action<StoreModel, string>;

    imageSize: number;
    setImageSize: Action<StoreModel, number>;

    subheading: string;
    setSubheading: Action<StoreModel, string>;

    subheadingFontSize: number;
    setSubheadingFontSize: Action<StoreModel, number>;

    bodyParagraph: string;
    setBodyParagraph: Action<StoreModel, string>;
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

    titleFontSize: 72,
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

    customImageUrl: "",
    setCustomImageUrl: action((state, payload) => {
        state.customImageUrl = payload;
    }),

    imageSize: 32,
    setImageSize: action((state, payload) => {
        state.imageSize = payload;
    }),

    subheading: "",
    setSubheading: action((state, payload) => {
        state.subheading = payload;
    }),

    subheadingFontSize: 42,
    setSubheadingFontSize: action((state, payload) => {
        state.subheadingFontSize = payload;
    }),

    bodyParagraph: "",
    setBodyParagraph: action((state, payload) => {
        state.bodyParagraph = payload;
    })

});

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;