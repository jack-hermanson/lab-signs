import React from "react";
import "../../css/sign-preview.css";
import { useStoreState } from "../../store";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import bottomLogo from "../../images/center-logo.svg";
import leftLogo from "../../images/left-logo.svg";
import { converter } from "../../utils/markdown";

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
        <div className="sign-container">
            <div
                id="sign-preview"
                style={{
                    width: "8.5in",
                    height: "11in",
                    display: "grid",
                    gridTemplateColumns: `auto ${
                        logoPlacement === "left" ? "1fr" : ""
                    }`,
                }}
            >
                {renderLeftLogo()}
                <div
                    style={{
                        display: "flex",
                        flexFlow: "column",
                        height: "100%",
                    }}
                >
                    {renderTitle()}
                    {imagePlacement === "top" && renderImage()}
                    {renderSubheading()}
                    {renderBodyParagraph()}
                    {imagePlacement === "bottom" && renderImage()}
                    {renderBottomLogo()}
                    {renderCollegeName()}
                </div>
            </div>
        </div>
    );

    function renderTitle() {
        return (
            <h1
                className="sign-title"
                style={{
                    textAlign: logoPlacement,
                    fontSize: titleFontSize,
                }}
            >
                {title}
            </h1>
        );
    }

    function renderImage() {
        if (selectedIcon || (useCustomImage && customImageUrl.length)) {
            return (
                <div
                    style={{
                        display: "flex",
                        justifyContent: logoPlacement,
                        marginBottom: "1.6rem",
                    }}
                >
                    {useCustomImage && customImageUrl.length ? (
                        <img
                            alt="Missing or invalid URL"
                            src={customImageUrl}
                            style={{
                                width: `${imageSize}%`,
                                height: `${imageSize}%`,
                            }}
                        />
                    ) : (
                        selectedIcon &&
                        !useCustomImage && (
                            <FA
                                style={{
                                    width: `${imageSize}%`,
                                    height: "auto",
                                }}
                                icon={selectedIcon}
                            />
                        )
                    )}
                </div>
            );
        }
    }

    function renderSubheading() {
        return (
            <h3
                style={{
                    fontSize: subheadingFontSize,
                    textAlign: logoPlacement,
                    marginBottom: 0,
                    marginTop: "1rem",
                    fontWeight: 600,
                }}
            >
                {subheading}
            </h3>
        );
    }

    function renderBodyParagraph() {
        return (
            <div
                dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(bodyParagraph),
                }}
                style={{
                    fontSize: "2rem",
                    textAlign: logoPlacement,
                    marginTop: "1rem",
                    marginBottom: `${
                        imagePlacement === "bottom" ? "3rem" : ""
                    }`,
                }}
            ></div>
        );
    }

    function renderBottomLogo() {
        if (logoPlacement === "center") {
            return (
                <div className="bottom-logo">
                    <img alt="logo" src={bottomLogo} />
                </div>
            );
        }
    }

    function renderLeftLogo() {
        if (logoPlacement === "left") {
            return (
                <div className="left-logo">
                    <img
                        alt="logo"
                        src={leftLogo}
                        style={{
                            height: "100%",
                        }}
                    />
                </div>
            );
        }
    }

    function renderCollegeName() {
        if (logoPlacement === "left") {
            return (
                <div className="college-name">
                    <h1 className="chhs-text">
                        College of Health
                        <br />
                        and Human Sciences
                    </h1>
                    <h2 className="csu-text">Colorado State University</h2>
                </div>
            );
        }
    }
};
