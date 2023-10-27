import { memo } from "react"
import { Grid, GridItem, Avatar, Button,  } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa"
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";
import CardComponent, {CardVariants} from "../../../../shared/ui/Product/Card/CardComponent";
import { User } from "../../../../app/api/types/User/User";
import { useDeleteUserMutation } from "../../../../app/api/apiSlice";

export interface UsersListITemProps {
    user: User
}

export const UsersListItem =  memo((props : UsersListITemProps) => {
    const { user } = props
    const [deletePost, response] = useDeleteUserMutation()

    return (
        <CardComponent cardVariant={CardVariants.outline} additionalClassNames="Dash_ProductListItem">
            <Grid templateColumns='repeat(12, 1fr)' gap={4}>
                <GridItem colSpan={1}>
                    <div>
                        <input
                            type="checkbox"
                            className="input_checkbox"
                            // onChange={() => handleToggleSelectProducts(product?._id)}
                        />
                    </div>
                </GridItem>
                <GridItem colSpan={11}>
                    {/* <Link to={`/dashboard/users/${user._id}`}> */}
                        <Grid templateColumns='repeat(12, 1fr)' gap={4}>

                            <GridItem colSpan={2}>
                                <Avatar 
                                    src=""
                                    name={user.name}
                                    size="lg"
                                    objectFit='contain'
                                />
                            </GridItem> 

                            <GridItem colSpan={2}>
                                <CardTextComponent>
                                    {user.name}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={2}>
                                <CardTextComponent>
                                    {user.email}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={1}>
                                <CardTextComponent>
                                    {user.isActive ? "Active" : "Diabled"}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={2}>
                                <CardTextComponent>
                                    {user?.roles?.map((role: string) => role)}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={2}>
                                <CardTextComponent>
                                    {user.createdAt}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={1}>
                                <Button onClick={() => deletePost(user._id)}>
                                    <FaTrash />
                                </Button>
                            </GridItem>

                        </Grid>
                    {/* </Link> */}
                </GridItem>
            </Grid>
        </CardComponent>
    )
})