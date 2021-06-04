import React from "react";
import {Col, FormGroup, Input, Label, Row} from "reactstrap";
import {FormSectionTitle} from "./FormSectionTitle";
import {FontSizeInput} from "./FontSizeInput";
import {useStoreActions, useStoreState} from "../../store";

export const Body: React.FC = () => {

    const subheading = useStoreState(state => state.subheading);
    const setSubheading = useStoreActions(actions => actions.setSubheading);

    const subheadingFontSize = useStoreState(state => state.subheadingFontSize);
    const setSubheadingFontSize = useStoreActions(actions => actions.setSubheadingFontSize);

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
                <Input
                    value={subheading}
                    type="text"
                    id={id}
                    onChange={e => setSubheading(e.target.value)}
                />
            </Col>
        );
    }

    function renderFontSize() {
        return (
            <Col>
                <FontSizeInput
                    id="subheading-font-size-input"
                    min={36}
                    max={64}
                    value={subheadingFontSize}
                    set={setSubheadingFontSize}
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
