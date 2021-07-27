import React from "react";
import "./css/main.css";
import { FormContainer } from "./components/Form/FormContainer";
import { SignPreview } from "./components/Sign/SignPreview";
import { store } from "./store";
import { StoreProvider } from "easy-peasy";

export const App: React.FC = () => {
    return (
        <div className="main-container">
            <StoreProvider store={store}>
                <FormContainer />
                <SignPreview />
            </StoreProvider>
        </div>
    );
};
