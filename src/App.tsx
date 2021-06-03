import React from "react";
import "./css/main.css";
import {FormContainer} from "./components/Form/FormContainer";

export const App: React.FC = () => {
    return (
        <div className="main-container">
            <FormContainer />
            <div style={{backgroundColor: "red"}}>
                One
            </div>
        </div>
    );
}