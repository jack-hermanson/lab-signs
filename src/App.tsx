import React from "react";
import "./css/main.css";
import {FormContainer} from "./components/Form/FormContainer";
import {SignPreview} from "./components/Sign/SignPreview";

export const App: React.FC = () => {
    return (
        <div className="main-container">
            <FormContainer />
            <SignPreview />
        </div>
    );
}