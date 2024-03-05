import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useGetAllUsersQuery } from "../../../../app/api/apiSlice";
import { UsersListItem } from "../usersListItem/usersListItem";
export const UsersList = () => {
    const { data: usersData, isLoading, isSuccess, isError, error, } = useGetAllUsersQuery();
    let content = (_jsx("div", {}));
    if (isLoading) {
        return (_jsx("p", { children: "Loading.." }));
    }
    if (isError) {
        return _jsxs("p", { className: "errmsg", children: ["No Users found ", JSON.stringify(error)] });
    }
    if (isSuccess) {
        content = (_jsx("div", { children: usersData?.map((user) => (_jsx(UsersListItem, { user: user }, user._id))) }));
    }
    return content;
};
