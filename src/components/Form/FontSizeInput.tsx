import React from "react";
import {Input, Label} from "reactstrap";

interface Props {
    id: string;
    min: number;
    max: number;
}

export const FontSizeInput: React.FC<Props> = ({id, min, max}: Props) => {
    return (
        <React.Fragment>
            <Label for={id} className="form-label">Font Size</Label>
            <Input min={min} max={max} type="range" id={id} />
        </React.Fragment>
    )
}
