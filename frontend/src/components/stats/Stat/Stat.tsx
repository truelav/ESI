import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Box,
    Text
  } from '@chakra-ui/react'

interface StatComponentProps {
    title: string;
    statLabels?: string[];
    statNumbers?: string[]
}

export const StatComponent = (props: StatComponentProps) => {
    const {title} = props
    return (
        <Box>
            <Text> {title} </Text>
            <StatGroup>
                <Stat>
                    <StatLabel>Total</StatLabel>
                    <StatNumber>345</StatNumber>
                    <StatHelpText>
                    <StatArrow type='increase' />
                        23.36%
                    </StatHelpText>
                </Stat>

                <Stat>
                    <StatLabel>Active</StatLabel>
                    <StatNumber>45</StatNumber>
                    <StatHelpText>
                    <StatArrow type='decrease' />
                        9.05%
                    </StatHelpText>
                </Stat>
            </StatGroup>
        </Box>
    )
}