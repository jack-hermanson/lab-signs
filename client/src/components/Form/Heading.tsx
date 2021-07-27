import React from "react";
import { Col, FormGroup, Row, Label, Input } from "reactstrap";
import { FormSectionTitle } from "./FormSectionTitle";
import { FontSizeInput } from "./FontSizeInput";
import { useStoreActions, useStoreState } from "../../store";

export const Heading: React.FC = () => {
    const title = useStoreState(state => state.title);
    const setTitle = useStoreActions(actions => actions.setTitle);

    const titleFontSize = useStoreState(state => state.titleFontSize);
    const setTitleFontSize = useStoreActions(
        actions => actions.setTitleFontSize
    );

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
                <Label for={id} className="form-label" value={title}>
                    Title
                </Label>
                <Input
                    id={id}
                    type="text"
                    onChange={e => setTitle(e.target.value)}
                />
            </Col>
        );
    }

    function renderFontSize() {
        return (
            <Col>
                <FontSizeInput
                    id="title-font-size-input"
                    min={48}
                    max={100}
                    value={titleFontSize}
                    set={size => setTitleFontSize(size)}
                />
            </Col>
        );
    }
};
