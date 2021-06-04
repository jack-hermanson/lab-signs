import React from "react";
import "../../css/sign-preview.css";
import {useStoreState} from "../../store";
import {FontAwesomeIcon as FA} from "@fortawesome/react-fontawesome";
import bottomLogo from "../../images/center-logo.svg";
import leftLogo from "../../images/left-logo.svg";

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
                display: "grid",
                gridTemplateColumns: `auto ${logoPlacement === "left" && "1fr"}`
            }}>
                {renderLeftLogo()}
                <div style={{
                    display: "flex",
                    flexFlow: "column",
                    height: "100%"
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
                    {renderCollegeName()}
                </div>

            </div>
        </div>
    );

    function renderTitle() {
        return (
            <h1 style={{
                textAlign: logoPlacement,
                fontSize: titleFontSize,
                marginBottom: "1.6rem",
                marginTop: "0.5in"
            }}>{title}</h1>
        );
    }

    function renderImage() {
        return (
            <div style={{
                display: "flex",
                justifyContent: logoPlacement,
                marginBottom: "2rem"
            }}>
                {useCustomImage ? (
                    <img src={customImageUrl} style={{
                        width: `${imageSize}%`,
                        height: `${imageSize}%`,
                    }}/>
                ) : selectedIcon && (
                    <FA style={{
                        width: `${imageSize}%`,
                        height: "auto",
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
                marginBottom: 0,
                marginTop: "1rem"
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
                    <img src={bottomLogo}/>
                </div>
            );
        }
    }

    function renderLeftLogo() {
        if (logoPlacement === "left") {
            return (
                <div className="left-logo">
                    <img
                        src={leftLogo}
                        style={{
                            height: "100%"
                        }}
                    />
                </div>
            )
        }
    }

    function renderCollegeName() {
        if (logoPlacement === "left") {
            return (
                <div className="college-name">
                    <h1 className="chhs-text">College of Health<br/>and Human Sciences</h1>
                    <h2 className="csu-text">Colorado State University</h2>
                </div>
            )
        }
    }
}
