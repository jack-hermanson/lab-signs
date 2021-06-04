import React, {useState} from "react";
import "../../css/form.css";
import {Button, Col, Container, Row} from "reactstrap";
import {Orientation} from "./Orientation";
import {Heading} from "./Heading";
import {Image} from "./Image";
import {Body} from "./Body";
import {useStoreActions} from "../../store";
import {PrintModal} from "./PrintModal";

export const FormContainer: React.FC = () => {

    const reset = useStoreActions(actions => actions.resetForm);
    const [showPrintModal, setShowPrintModal] = useState(false);

    return (
        <div
            id="form"
            onSubmit={e => {
                e.preventDefault();
                setShowPrintModal(true);
            }}
        >
            <div className="sticky-top pt-3">
                <Container fluid>
                    <Row>
                        <Col>
                            <h2 className="border-bottom mb-3">Lab Signs</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <form onReset={() => reset()}>
                                <Orientation/>
                                <Heading/>
                                <Image/>
                                <Body/>
                                <Row className="mt-4 mb-1">
                                    <Col>
                                        <div className="bottom-buttons">
                                            <Button type="submit" color="primary">Print to PDF</Button>
                                            <Button type="reset" color="secondary">Reset</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
            {renderPrintModal()}
        </div>
    );

    function renderPrintModal() {
        if (showPrintModal) {
            return (
                <PrintModal isOpen={showPrintModal} setIsOpen={setShowPrintModal} />
            );
        }
    }
}
