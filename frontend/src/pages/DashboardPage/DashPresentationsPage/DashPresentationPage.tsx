import { memo } from "react";

import PresentationAccordion from "../../../entities/Presentation/ui/PresentationAccordion/PresentationAccordion";
import PresentationHeader from "../../../entities/Presentation/ui/PresentationHeader/PresentationHeader";

const DashPresentationPage = memo(() => {
    return (
        <>
            <PresentationHeader />
            <PresentationAccordion />
        </>
    )
});

export default DashPresentationPage;
