import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { FormControlFeature } from "../FormControlItem/FormControlFeature";
export const EditProductFeatures = (props) => {
    const { features, handleChange, handleEditFeature, handleDeleteFeature } = props;
    return (_jsx(_Fragment, { children: features?.map((feature, idx) => (_jsx(FormControlFeature, { index: idx, feature: feature, handleChange: handleChange, handleEditFeature: handleEditFeature, handleDeleteFeature: handleDeleteFeature }, feature))) }));
};
