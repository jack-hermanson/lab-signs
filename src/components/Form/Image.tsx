import React from "react";
import {
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
import {useStoreActions, useStoreState} from "../../store";

export const Image: React.FC = () => {

    const showUrlInput = useStoreState(state => state.useCustomImage);
    const setShowUrlInput = useStoreActions(actions => actions.setUseCustomImage);

    const selectedIcon = useStoreState(state => state.selectedIcon);
    const setSelectedIcon = useStoreActions(actions => actions.setSelectedIcon);

    const customImageUrl = useStoreState(state => state.customImageUrl);
    const setCustomImageUrl = useStoreActions(actions => actions.setCustomImageUrl);

    const imageSize = useStoreState(state => state.imageSize);
    const setImageSize = useStoreActions(actions => actions.setImageSize);

    const iconOptions = [
        faIdCardAlt, faBullhorn, faCalendarAlt, faChalkboardTeacher, faCommentDots,
        faDesktop, faLaptop, faUser, faDoorClosed, faDoorOpen, faEnvelope,
        faExclamationTriangle, faFile, faPrint, faTimes, faQuestion
    ]

    return (
        <FormGroup>
            <FormSectionTitle title="Image"/>
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
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
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
                        <ul className="icon-options rounded mb-3">
                            {iconOptions.map((icon, index) => {
                                let active = icon.iconName === selectedIcon?.iconName;
                                return (
                                    <li
                                        onClick={() => {
                                            if (active) {
                                                setSelectedIcon(undefined);
                                            } else {
                                                setSelectedIcon(icon);
                                            }
                                        }}
                                        key={index}
                                        className={active ? "active" : ""}
                                    >
                                        <FA icon={icon} />
                                    </li>
                                );
                            })}
                        </ul>
                    </Col>
                </Row>
            </Col>
        );
    }

    function renderSize() {
        const id = "image-size-input";
        return (
            <Col>
                <Label className="form-label" for={id}>Size ({imageSize}%)</Label>
                <Input
                    value={imageSize}
                    id={id}
                    type="range"
                    min={0}
                    max={100}
                    onChange={e => {
                        const size: number = parseInt(e.target.value);
                        setImageSize(size);
                    }}
                />
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
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            setShowUrlInput(false);
                        }}
                    >
                        [Use icon]
                    </a>
                </Label>
                <Input
                    className="mb-3"
                    type="url"
                    id={id}
                    value={customImageUrl}
                    onChange={e => setCustomImageUrl(e.target.value)}
                />
            </Col>
        )
    }
}

