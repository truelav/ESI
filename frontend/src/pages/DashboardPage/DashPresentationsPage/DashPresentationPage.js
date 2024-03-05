import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import PresentationAccordion from "../../../entities/Presentation/ui/PresentationAccordion/PresentationAccordion";
import PresentationHeader from "../../../entities/Presentation/ui/PresentationHeader/PresentationHeader";
const DashPresentationPage = memo(() => {
    return (_jsxs(_Fragment, { children: [_jsx(PresentationHeader, {}), _jsx(PresentationAccordion, {})] }));
});
export default DashPresentationPage;
