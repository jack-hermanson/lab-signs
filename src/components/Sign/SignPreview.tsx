import React from "react";
import "../../css/sign-preview.css";
import {useStoreState} from "../../store";
import {FontAwesomeIcon as FA} from "@fortawesome/react-fontawesome";

export const SignPreview: React.FC = () => {

    const title = useStoreState(state => state.title);
    const titleFontSize = useStoreState(state => state.titleFontSize);

    const logoPlacement = useStoreState(state => state.logoPlacement);

    const useCustomImage = useStoreState(state => state.useCustomImage);
    const selectedIcon = useStoreState(state => state.selectedIcon);
    const customImageUrl = useStoreState(state => state.customImageUrl);
    const imageSize = useStoreState(state => state.imageSize);
    const imagePlacement = useStoreState(state => state.imagePlacement);

    const subheading = useStoreState(state => state.subheading);
    const subheadingFontSize = useStoreState(state => state.subheadingFontSize);

    return (
        <div style={{marginTop: "1em", marginRight: "1em"}}>
            <div id="sign-preview" style={{
                width: "8.5in",
                height: "11in"
            }}>
                {renderTitle()}
                {imagePlacement === "top" && (
                    renderImage()
                )}
                {renderSubheading()}
                {imagePlacement === "bottom" && (
                    renderImage()
                )}
            </div>
        </div>
    );

    function renderTitle() {
        return (
            <h1 style={{
                textAlign: logoPlacement,
                fontSize: titleFontSize,
                marginBottom: "1.6rem"
            }}>{title}</h1>
        );
    }

    function renderImage() {
        return (
            <div style={{
                display: "flex",
                justifyContent: logoPlacement
            }}>
                {useCustomImage ? (
                    <img src={customImageUrl} style={{
                        width: `${imageSize}%`,
                        height: `${imageSize}%`
                    }} />
                ) : selectedIcon && (
                    <FA style={{
                        width: `${imageSize}%`,
                        height: `${imageSize}%`
                    }} icon={selectedIcon}/>
                )}
            </div>
        );
    }

    function renderSubheading() {
        return (
            <h3 style={{
                fontSize: subheadingFontSize,
                textAlign: logoPlacement
            }} >{subheading}</h3>
        )
    }
}
