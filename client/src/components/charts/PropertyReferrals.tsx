import { Box, Stack, Typography } from "@pankod/refine-mui"

import { propertyReferralsInfo } from "constants/index"

interface ProgressBarProps {
    title: string,
    percentage: number,
    color: string,
}


const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
    <Box width="100%">
        <Stack direction="row"
            alignItems="center"
            justifyContent="space-between">
            <Typography fontSize={16}
                fontWeight={500}
                color="#8892b0">{title}
            </Typography>
            <Typography fontSize={16}
                fontWeight={500}
                color="#8892b0">{percentage}
            </Typography>

        </Stack>

        <Box mt={2} position="relative" width="100%" height="8px" borderRadius={1} bgcolor="#e4e8ef">
            <Box
                width={`${percentage}%`}
                bgcolor={color}
                position="absolute"
                height="100%"
                borderRadius={1}
            >

            </Box>

        </Box>
    </Box >

)

const PropertyReferrals = () => {
    return (
        <Box
            p={4}
            bgcolor={"#233554"}
            id="chart"
            minWidth={490}
            display="flex"
            flexDirection="column"
            borderRadius="15px">

            <Typography fontSize={18} fontWeight={600} color="#a8b2d1">
                About Items
                <Typography fontSize={14} color="#808191">
                            The items that our customers usually buy or sell :) (in %)
                        </Typography>
                
            </Typography>

            <Stack my="20px" direction="column" gap={4}>
                {propertyReferralsInfo.map((bar) =>
                    <ProgressBar key={bar.title} {...bar} />)}
            </Stack>
        </Box>
    )
}

export default PropertyReferrals