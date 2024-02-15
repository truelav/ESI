import { memo, useState } from "react";
import { Grid, GridItem, Avatar, Button } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText";
import CardComponent, {
  CardVariants,
} from "../../../../shared/ui/Product/Card/CardComponent";
import { User } from "../../../../app/api/types/User/User";
import { useDeleteUserMutation } from "../../../../app/api/apiSlice";
import { UsersActivationSwitch } from "../usersActivationSwitch/usersActivationSwitch";

export interface UsersListITemProps {
  user: User;
}

export const UsersListItem = memo((props: UsersListITemProps) => {
  const { user } = props;
  const [deletePost] = useDeleteUserMutation();
  const [isActive, setIsActive] = useState(user.isActive)

  return (
    <CardComponent
      cardVariant={CardVariants.outline}
      additionalClassNames="Dash_ProductListItem"
    >
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
            <GridItem colSpan={2}>
              <Avatar src="" name={user.name} size="lg" objectFit="contain" />
            </GridItem>

            <GridItem colSpan={2}>
              <CardTextComponent>{user.name}</CardTextComponent>
            </GridItem>

            <GridItem colSpan={2}>
              <CardTextComponent>{user.email}</CardTextComponent>
            </GridItem>

            <GridItem colSpan={2} display='flex' >
              <UsersActivationSwitch isActive={isActive} setIsActive={setIsActive} />
            </GridItem>

            <GridItem colSpan={1}>
              <CardTextComponent>
                {user?.role ? user.role : "unknown"}
              </CardTextComponent>
            </GridItem>

            <GridItem colSpan={2}>
              <CardTextComponent>{user.createdAt}</CardTextComponent>
            </GridItem>

            <GridItem colSpan={1}>
              <Button onClick={() => deletePost(user._id)}>
                <FaTrash />
              </Button>
            </GridItem>
      </Grid>
    </CardComponent>
  );
});
