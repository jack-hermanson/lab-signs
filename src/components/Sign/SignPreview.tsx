import React from "react";
import "../../css/sign-preview.css";
import {useStoreState} from "../../store";

export const SignPreview: React.FC = () => {

    const title = useStoreState(state => state.title);
    const titleFontSize = useStoreState(state => state.titleFontSize);
    const logoPlacement = useStoreState(state => state.logoPlacement);

    return (
        <div id="sign-preview">
            {renderTitle()}
        </div>
    );

    function renderTitle() {
        return (
            <h1 style={{
                textAlign: logoPlacement,
                fontSize: titleFontSize
            }}>{title}</h1>
        );
    }
}