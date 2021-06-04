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

    resetForm: Action<StoreModel>;
}

const defaults = {
    logoPlacement: "center" as LogoPlacement,
    imagePlacement: "top" as ImagePlacement,
    title: "",
    titleFontSize: 72,
    useCustomImage: false,
    customImageUrl: "",
    selectedIcon: undefined,
    imageSize: 35,
    subheading: "",
    subheadingFontSize: 42,
    bodyParagraph: ""
}

export const store = createStore<StoreModel>({
    logoPlacement: defaults.logoPlacement,
    setLogoPlacement: action((state, payload) => {
        state.logoPlacement = payload;
    }),

    imagePlacement: defaults.imagePlacement,
    setImagePlacement: action((state, payload) => {
        state.imagePlacement = payload;
    }),

    title: defaults.title,
    setTitle: action((state, payload) => {
        state.title = payload;
    }),

    titleFontSize: defaults.titleFontSize,
    setTitleFontSize: action((state, payload) => {
        state.titleFontSize = payload;
    }),

    useCustomImage: defaults.useCustomImage,
    setUseCustomImage: action((state, payload) => {
        state.useCustomImage = payload;
    }),

    selectedIcon: defaults.selectedIcon,
    setSelectedIcon: action((state, payload) => {
        state.selectedIcon = payload;
    }),

    customImageUrl: defaults.customImageUrl,
    setCustomImageUrl: action((state, payload) => {
        state.customImageUrl = payload;
    }),

    imageSize: defaults.imageSize,
    setImageSize: action((state, payload) => {
        state.imageSize = payload;
    }),

    subheading: defaults.subheading,
    setSubheading: action((state, payload) => {
        state.subheading = payload;
    }),

    subheadingFontSize: defaults.subheadingFontSize,
    setSubheadingFontSize: action((state, payload) => {
        state.subheadingFontSize = payload;
    }),

    bodyParagraph: defaults.bodyParagraph,
    setBodyParagraph: action((state, payload) => {
        state.bodyParagraph = payload;
    }),

    resetForm: action(state => {
        state.logoPlacement = defaults.logoPlacement;
        state.imagePlacement = defaults.imagePlacement;
        state.title = defaults.title;
        state.titleFontSize = defaults.titleFontSize;
        state.selectedIcon = defaults.selectedIcon;
        state.imageSize = defaults.imageSize;
        state.useCustomImage = defaults.useCustomImage;
        state.customImageUrl = defaults.customImageUrl;
        state.subheading = defaults.subheading;
        state.subheadingFontSize = defaults.subheadingFontSize;
        state.bodyParagraph = defaults.bodyParagraph;
    })

});

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
