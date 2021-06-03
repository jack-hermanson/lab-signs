import React, {useState} from "react";
import {
    faAddressCard,
    faBullhorn,
    faCalendarAlt,
    faChalkboardTeacher,
    faCommentDots,
    faDesktop,
    faDoorClosed,
    faDoorOpen,
    faEnvelope,
    faExclamationTriangle,
    faFile,
    faIdCardAlt,
    faLaptop,
    faPrint, faQuestion, faTimes, faUser
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon as FA} from "@fortawesome/react-fontawesome";
import {Col, FormGroup, Row, Label, Input} from "reactstrap";
import {FormSectionTitle} from "./FormSectionTitle";

export const Image: React.FC = () => {

    const [showUrlInput, setShowUrlInput] = useState(false);

    return (
        <FormGroup>
            <FormSectionTitle title="Image" />
            <Row>
                {showUrlInput ? (
                    renderImageUrl()
                ) : renderIcon()}
            </Row>
            <Row>
                {renderSize()}
            </Row>
        </FormGroup>
    );

    function renderIcon() {
        return (
            <Col>
                <Label className="form-label">
                    Icon
                    <a
                        className="small ms-2"
                        href="#"
                        onClick={() => {
                            setShowUrlInput(true);
                            setTimeout(() => {
                                document.getElementById("image-url-input")?.focus();
                            }, 10);
                        }}
                    >
                        [Use custom image]
                    </a>
                </Label>
                <Row>
                    <Col>
                        <ul className="icon-options rounded mb-1">
                            <li><FA icon={faIdCardAlt} /></li>
                            <li><FA icon={faBullhorn} /></li>
                            <li><FA icon={faCalendarAlt} /></li>
                            <li><FA icon={faChalkboardTeacher} /></li>
                            <li><FA icon={faCommentDots} /></li>
                            <li><FA icon={faDesktop} /></li>
                            <li><FA icon={faLaptop} /></li>
                            <li><FA icon={faUser} /></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul className="icon-options rounded">
                            <li><FA icon={faDoorClosed} /></li>
                            <li><FA icon={faDoorOpen} /></li>
                            <li><FA icon={faEnvelope} /></li>
                            <li><FA icon={faExclamationTriangle} /></li>
                            <li><FA icon={faFile} /></li>
                            <li><FA icon={faPrint} /></li>
                            <li><FA icon={faTimes} /></li>
                            <li><FA icon={faQuestion} /></li>
                        </ul>
                    </Col>
                </Row>
            </Col>
        );
    }

    function renderSize() {
        const id="image-size-input";
        return (
            <Col>
                <Label className="form-label" for={id}>Size</Label>
                <Input id={id} type="range" min={0} max={100} />
            </Col>
        )
    }

    function renderImageUrl() {
        const id = "image-url-input";
        return (
            <Col>
                <Label className="form-label" for={id}>
                    Image URL
                    <a
                        className="small ms-2"
                        href="#"
                        onClick={() => setShowUrlInput(false)}
                    >
                        [Use icon]
                    </a>
                </Label>
                <Input className="mb-3" type="url" id={id} />
            </Col>
        )
    }
}

