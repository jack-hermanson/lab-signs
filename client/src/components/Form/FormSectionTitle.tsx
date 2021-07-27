import React from "react";
import { Col, Row } from "reactstrap";

interface Props {
    title: string;
}

export const FormSectionTitle: React.FC<Props> = ({ title }) => {
    return (
        <Row>
            <Col>
                <h4>{title}</h4>
            </Col>
        </Row>
    );
};
