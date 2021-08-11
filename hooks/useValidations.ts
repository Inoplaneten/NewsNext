import { useEffect, useState } from "react";

export const useValidation = (value: string, validations) => {
    const [isEmpty, setEmptyError] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    if (value.trim().length < validations[validation]) {
                        setMinLengthError(true)
                    } else {
                        setMinLengthError(false);
                    }
                    break;
                case 'maxLength':
                    if (value.trim().length > validations[validation]) {
                        setMaxLengthError(true)
                    } else {
                        setMaxLengthError(false);
                    }
                    break;
                case 'isEmpty':
                    if (!value.trim()) {
                        setEmptyError(true);
                    } else {
                        setEmptyError(false);
                    }
                    break;
            }
        }
    }, [value]);

    useEffect(() => {
        if (isEmpty || minLengthError || maxLengthError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [isEmpty, minLengthError, maxLengthError])

    return {
        inputValid
    }
};