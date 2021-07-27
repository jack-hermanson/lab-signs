import React, { useCallback } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import noHeadersFooters from "../../images/no_headers_footers.png";
import printToPdf from "../../images/print_to_pdf.png";

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => any;
}

export const PrintModal: React.FC<Props> = ({ isOpen, setIsOpen }: Props) => {
    const close = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    return (
        <Modal size="lg" isOpen={isOpen} toggle={close}>
            <ModalHeader toggle={close}>Print to PDF Instructions</ModalHeader>
            <ModalBody>
                <p className="lead mb-0">
                    In the print dialog, select "Print to PDF" or a similar
                    option as the printer.
                </p>
                <img src={printToPdf} alt="Select Print to PDF" />
                <p className="lead mt-2 mb-0">
                    Make sure the "Print headers and footers" option is{" "}
                    <span className="fw-bold">NOT</span> checked.
                </p>
                <img
                    src={noHeadersFooters}
                    alt={`Uncheck "Headers and Footers"`}
                />
                <hr className="mb-3 mt-4" />
                <p className="lead mb-0">
                    Once you have saved the PDF file, print it out with proper
                    (~0.5in) margins. Do not print directly from this program.
                </p>
            </ModalBody>
            <ModalFooter>
                <Button onClick={close} color="secondary">
                    Cancel
                </Button>
                <Button onClick={print} style={{ backgroundColor: "#1e4d2b" }}>
                    Print
                </Button>
            </ModalFooter>
        </Modal>
    );

    function print() {
        setIsOpen(false);
        setTimeout(() => {
            window.print();
        }, 500);
    }
};
