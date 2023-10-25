import { useGetAllUsersQuery } from "../../../../app/api/apiSlice";

export const UserList = () => {

    const {
        data: users,
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
                {JSON.stringify(users)}
            </>
        )
    }

    return content
}