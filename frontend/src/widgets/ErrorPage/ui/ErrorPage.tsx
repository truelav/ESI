import { Button } from "@chakra-ui/react";
// import cls from "./ErrorPage.module.scss";

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={`errorPage ${className}`}>
            <p>An error has occurred</p>
            <Button onClick={reloadPage}>Refresh Page</Button>
        </div>
    );
};
