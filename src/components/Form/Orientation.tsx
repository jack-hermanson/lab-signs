import React from "react";
import {Col, FormGroup, Row, Label, Input} from "reactstrap";
import {FormSectionTitle} from "./FormSectionTitle";

export const Orientation: React.FC = () => {
    return (
        <FormGroup>
            <FormSectionTitle title="Orientation" />
            <Row>
                {renderLogoPlacement()}
                {renderImagePlacement()}
            </Row>
        </FormGroup>
    );

    function renderLogoPlacement() {
        const id = "logo-placement-input";
        return (
            <Col>
                <Label for={id} className="form-label">CHHS Logo Placement</Label>
                <Input id={id} type="select">
                    <option>Left</option>
                    <option>Center</option>
                </Input>
            </Col>
        );
    }

    function renderImagePlacement() {
        const id = "image-placement-input";
        return (
            <Col>
                <Label for={id} className="form-label">Image Placement</Label>
                <Input id={id} type="select">
                    <option>Top</option>
                    <option>Bottom</option>
                </Input>
            </Col>
        );
    }
}