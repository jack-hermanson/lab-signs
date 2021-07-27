import React, { useState } from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { FormSectionTitle } from "./FormSectionTitle";
import { FontSizeInput } from "./FontSizeInput";
import { useStoreActions, useStoreState } from "../../store";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import { converter } from "../../utils/markdown";

export const Body: React.FC = () => {
    const subheading = useStoreState(state => state.subheading);
    const setSubheading = useStoreActions(actions => actions.setSubheading);

    const subheadingFontSize = useStoreState(state => state.subheadingFontSize);
    const setSubheadingFontSize = useStoreActions(
        actions => actions.setSubheadingFontSize
    );

    const bodyParagraph = useStoreState(state => state.bodyParagraph);
    const setBodyParagraph = useStoreActions(
        actions => actions.setBodyParagraph
    );

    const [editorTab, setEditorTab] = useState<"write" | "preview">("write");

    return (
        <FormGroup>
            <FormSectionTitle title="Body" />
            <Row className="mb-3">
                {renderSubheading()}
                {renderFontSize()}
            </Row>
            <Row>{renderParagraphInput()}</Row>
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
        return (
            <Col>
                <Label className="form-label">Paragraph</Label>
                <ReactMde
                    value={bodyParagraph}
                    onChange={txt => setBodyParagraph(txt)}
                    selectedTab={editorTab}
                    onTabChange={setEditorTab}
                    maxEditorHeight={100}
                    generateMarkdownPreview={markdown => {
                        return Promise.resolve(converter.makeHtml(markdown));
                    }}
                />
            </Col>
        );
    }
};
