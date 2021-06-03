import React from "react";
import {Col, FormGroup, Input, Label, Row} from "reactstrap";
import {FormSectionTitle} from "./FormSectionTitle";
import {FontSizeInput} from "./FontSizeInput";

export const Body: React.FC = () => {
    return (
        <FormGroup>
            <FormSectionTitle title="Body" />
            <Row className="mb-3">
                {renderSubheading()}
                {renderFontSize()}
            </Row>
            <Row>
                {renderParagraphInput()}
            </Row>
        </FormGroup>
    );

    function renderSubheading() {
        const id = "subheading-input";
        return (
            <Col>
                <Label for={id} className="form-label">
                    Subheading
                </Label>
                <Input type="text" id={id} />
            </Col>
        );
    }

    function renderFontSize() {
        return (
            <Col>
                <FontSizeInput
                    id="subheading-font-size-input"
                    min={14}
                    max={24}
                    value={20}
                    set={e => {}}
                />
            </Col>
        );
    }

    function renderParagraphInput() {
        const id = "paragraph-input"
        return (
            <Col>
                <Label for={id} className="form-label">Paragraph</Label>
                <Input id={id} type="textarea" />
            </Col>
        );
    }
}
