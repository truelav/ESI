import { memo, FC } from "react"
import { Link } from "react-router-dom";
import { Grid, GridItem, Avatar, Button,  } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa"
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";
import CardComponent, {CardVariants} from "../../../../shared/ui/Product/Card/CardComponent";
import { User } from "../../../../app/api/types/User/User";

// export interface UsersListITemProps {
//     _id: string,
//     name: string,
//     email: string,
//     roles: string[],
//     createdAt: string,
//     isActive: boolean
// }

export const UsersListItem: FC<User> =  memo(({ user }) => {
    const { _id, name, email, roles, createdAt, isActive } = user

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
                    <Link to={`/dashboard/users/${_id}`}>
                        <Grid templateColumns='repeat(12, 1fr)' gap={4}>

                            <GridItem colSpan={2}>
                                <Avatar 
                                    src=""
                                    name={name}
                                    size="sm"
                                    boxSize='100px'
                                    objectFit='contain'
                                />
                            </GridItem> 

                            <GridItem colSpan={2}>
                                <CardTextComponent>
                                    {name}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={2}>
                                <CardTextComponent>
                                    {email}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={1}>
                                <CardTextComponent>
                                    {isActive ? "Active" : "Diabled"}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={2}>
                                <CardTextComponent>
                                    {roles.map((role: unknown) => role)}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={2}>
                                <CardTextComponent>
                                    {createdAt}
                                </CardTextComponent>
                            </GridItem>

                            <GridItem colSpan={1}>
                                <Button>
                                    <FaTrash />
                                </Button>
                            </GridItem>

                        </Grid>
                    </Link>
                </GridItem>
            </Grid>
        </CardComponent>
    )
})