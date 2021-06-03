import React from "react";
import "../../css/form.css";
import {Button, Col, Container, Row} from "reactstrap";
import {Orientation} from "./Orientation";
import {Heading} from "./Heading";
import {Image} from "./Image";
import {Body} from "./Body";

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
                            <Body />
                            <Row className="mt-4">
                                <Col>
                                    <div className="bottom-buttons">
                                        <Button type="submit" color="primary">Save</Button>
                                        <Button type="reset" color="secondary">Reset</Button>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}