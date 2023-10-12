import { useGetUsersQuery } from "../../slice/usersApiSlice";
import User from "../user/user";

export const UserList = () => {

    const { 
        data, 
        isLoading, 
        isSuccess, 
        isError, 
        error 
    } = useGetUsersQuery(undefined, { 
        pollingInterval: 180000, 
        refetchOnFocus: true, 
        refetchOnMountOrArgChange: true
    })


    if(isLoading){
        return (<p>Loading..</p>)
    } 

    if (isError) {
        return  <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        // const { ids } = users

        // const tableContent = ids?.length
        //     ? ids.map(userId => <User key={userId} userId={userId} />)
        //     : null
        console.log(data)
        return (
            <table className="table table--users">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th user__username">Username</th>
                        <th scope="col" className="table__th user__roles">Roles</th>
                        <th scope="col" className="table__th user__edit">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {tableContent} */}
                </tbody>
            </table>
        )
    } else {
        return (
            <p>Something is wrong</p>
        )
    }
}