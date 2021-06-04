import React from "react";
import "../../css/sign-preview.css";
import {useStoreState} from "../../store";
import {FontAwesomeIcon as FA} from "@fortawesome/react-fontawesome";
import bottomLogo from "../../images/center-logo.svg";

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

    const bodyParagraph = useStoreState(state => state.bodyParagraph);

    return (
        <div style={{marginTop: "1em", marginRight: "1em"}}>
            <div id="sign-preview" style={{
                width: "8.5in",
                height: "11in",
                display: "flex",
                flexFlow: "column"
            }}>
                {renderTitle()}
                {imagePlacement === "top" && (
                    renderImage()
                )}
                {renderSubheading()}
                {renderBodyParagraph()}
                {imagePlacement === "bottom" && (
                    renderImage()
                )}
                {renderBottomLogo()}
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
                    }}/>
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
                textAlign: logoPlacement,
                marginBottom: 0
            }}>{subheading}</h3>
        );
    }

    function renderBodyParagraph() {
        return (
            <p style={{
                fontSize: "2rem",
                textAlign: logoPlacement,
                marginTop: "1rem"
            }}>
                {bodyParagraph}
            </p>
        );
    }

    function renderBottomLogo() {
        if (logoPlacement === "center") {
            return (

                <div className="bottom-logo">
                    <img src={bottomLogo} />
                </div>

            )
        }
    }
}
