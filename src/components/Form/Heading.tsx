import React from "react";
import {Col, FormGroup, Row, Label, Input} from "reactstrap";
import {FormSectionTitle} from "./FormSectionTitle";

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
        const id = "title-font-size-input";
        return (
            <Col>
                <Label for={id} className="form-label">Font Size</Label>
                <Input min={18} max={36} type="range" id={id} />
            </Col>
        );
    }
}