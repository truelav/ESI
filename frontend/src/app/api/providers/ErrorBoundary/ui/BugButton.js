import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
export const BugButton = () => {
    const [error, setError] = useState(false);
    const onThrow = () => setError(true);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return _jsx(Button, { onClick: onThrow, children: "throw error" });
};
