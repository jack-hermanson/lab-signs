import React from "react";
import "../../css/form.css";
import {Col, Container, Row} from "reactstrap";
import {Orientation} from "./Orientation";
import {Heading} from "./Heading";
import {Image} from "./Image";

export const FormContainer: React.FC = () => {
    return (
        <div id="form">
            <Container fluid className="mt-3">
                <Row>
                    <Col>
                        <h2 className="border-bottom mb-3">Lab Signs</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <form>
                            <Orientation />
                            <Heading />
                            <Image />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}