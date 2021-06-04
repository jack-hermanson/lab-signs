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
                {selectedIcon && (
                    <FA style={{
                        width: `${imageSize}%`,
                        height: `${imageSize}%`
                    }} icon={selectedIcon} />
                )}
            </div>
        )
    }
}
