import React from "react";
import {Input, Label} from "reactstrap";

interface Props {
    id: string;
    min: number;
    max: number;
    value: number;
    set: (value: number) => any;
}

export const FontSizeInput: React.FC<Props> = ({id, min, max, value, set}: Props) => {
    return (
        <React.Fragment>
            <Label for={id} className="form-label">Font Size ({value})</Label>
            <Input
                min={min}
                max={max}
                type="range"
                id={id}
                value={value}
                onChange={e => set(parseInt(e.target.value))}
            />
        </React.Fragment>
    )
}
