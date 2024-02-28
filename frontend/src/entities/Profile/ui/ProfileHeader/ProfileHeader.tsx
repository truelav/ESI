import { CardHeader, Avatar, Box } from "@chakra-ui/react"
import { CardTextComponent } from "../../../../shared/ui/Product/Card/CardText"

export const ProfileHeader = (props) => {
    const { username, email, role, createdAt } = props
    return (
        <CardHeader>
            <Box>
                <Avatar src="" name={username} size="lg" objectFit="contain" />
            </Box>
            <Box>
                <CardTextComponent>Email: {email}</CardTextComponent>
            </Box>
            <Box>
                <CardTextComponent>Role: {role}</CardTextComponent>
            </Box>
            <Box>
                <CardTextComponent>Created: {createdAt.slice(0, 10)}</CardTextComponent>
            </Box>
        </CardHeader>
    )
}