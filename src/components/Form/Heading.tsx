import React from "react";
import {Col, FormGroup, Row, Label, Input} from "reactstrap";
import {FormSectionTitle} from "./FormSectionTitle";
import {FontSizeInput} from "./FontSizeInput";

export const Heading: React.FC = () => {
    return (
        <FormGroup>
            <FormSectionTitle title="Heading" />
            <Row>
                {renderTitle()}
                {renderFontSize()}
            </Row>
        </FormGroup>
    );

    function renderTitle() {
        const id = "title-input";
        return (
            <Col>
                <Label for={id} className="form-label">Title</Label>
                <Input id={id} type="text" />
            </Col>
        );
    }

    function renderFontSize() {
        return (
            <Col>
                <FontSizeInput id="title-font-size-input" min={18} max={36} />
            </Col>
        );
    }
}