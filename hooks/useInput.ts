import React, { useState } from "react";
import { useValidation } from "./useValidations";

export const useInput = (initialValue: string, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>) => {
        setDirty(true);
    };

    const onClearValue = () => {
        setValue('');
        setDirty(false);
    };

    return {
        value,
        onChange,
        onBlur,
        onClearValue,
        isDirty,
        ...valid
    };
};