import { useGetAllUsersQuery } from "../../../../app/api/apiSlice";
import { User } from "../../../../app/api/types/User/User";
import { UsersListItem } from "../usersListItem/usersListItem";

export const UserList = () => {

    const {
        data: usersData,
        isLoading,
        isSuccess,
        isError,
        error,
      } = useGetAllUsersQuery();

    let content = (<div></div>)

    if(isLoading){
        return (<p>Loading..</p>)
    } 

    if (isError) {
        return  <p className="errmsg">No Users found {JSON.stringify(error)}</p>
    }

    if (isSuccess) {
        content = (
            <>
                {/* {JSON.stringify(users)} */}
                {/* {usersData.map((user: User) => console.log(user))} */}
                {usersData?.map((user: User) =>  (
                        <UsersListItem user={user} key={user._id}/>
                ))}
            </>
        )
    }

    return content
}