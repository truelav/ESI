import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid, GridItem } from "@chakra-ui/react";
import { ProfileCard } from "../../entities/Profile";
import { useGetUserProfileQuery } from "../../app/api/apiSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../entities/Profile/model/profileSlice";
import { useParams } from "react-router-dom";
import { OrderList } from "../../entities/Order/ui/OrderList/OrderList";
const ProfilePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { data, isLoading, isSuccess, isError, error, } = useGetUserProfileQuery(id);
    useEffect(() => {
        if (data) {
            dispatch(setUser(data));
        }
    }, [data, dispatch]);
    console.log(data);
    let content = _jsx("div", {});
    if (isLoading) {
        content = _jsx(_Fragment, { children: "Loading Profile..." });
    }
    if (isError) {
        content = _jsxs(_Fragment, { children: ["No Profile Found : ", JSON.stringify(error)] });
    }
    if (isSuccess) {
        content = (_jsxs(Grid, { templateColumns: "repeat(12, 1fr)", gap: 4, children: [_jsx(GridItem, { colSpan: 3, children: _jsx(ProfileCard, { username: data.name, email: data.email, role: data.role, createdAt: data.createdAt }) }), _jsx(GridItem, { colSpan: 9, children: _jsx(OrderList, { orders: data.orders }) })] }));
    }
    return (content);
};
export default ProfilePage;
