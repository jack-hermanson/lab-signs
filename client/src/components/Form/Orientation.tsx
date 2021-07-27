import React from "react";
import { Col, FormGroup, Row, Label, Input } from "reactstrap";
import { FormSectionTitle } from "./FormSectionTitle";
import { useStoreActions, useStoreState } from "../../store";
import { LogoPlacement } from "../../models/LogoPlacement";
import { ImagePlacement } from "../../models/ImagePlacement";

export const Orientation: React.FC = () => {
    const logoPlacement = useStoreState(state => state.logoPlacement);
    const setLogoPlacement = useStoreActions(
        actions => actions.setLogoPlacement
    );
    const imagePlacement = useStoreState(state => state.imagePlacement);
    const setImagePlacement = useStoreActions(state => state.setImagePlacement);

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
                <Label for={id} className="form-label">
                    CHHS Logo Placement
                </Label>
                <Input
                    value={logoPlacement}
                    id={id}
                    type="select"
                    onChange={e =>
                        setLogoPlacement(e.target.value as LogoPlacement)
                    }
                >
                    <option value="center">Center</option>
                    <option value="left">Left</option>
                </Input>
            </Col>
        );
    }

    function renderImagePlacement() {
        const id = "image-placement-input";
        return (
            <Col>
                <Label for={id} className="form-label">
                    Image Placement
                </Label>
                <Input
                    id={id}
                    type="select"
                    value={imagePlacement}
                    onChange={e =>
                        setImagePlacement(e.target.value as ImagePlacement)
                    }
                >
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                </Input>
            </Col>
        );
    }
};
