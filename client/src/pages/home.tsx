import { useList } from "@pankod/refine-core";
import { Typography, Box, Stack } from "@pankod/refine-mui";

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
} from "components";

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  const latestProperties = data?.data ?? [];

  // if (isLoading) return <Typography>Loading...</Typography>;
  // if (isError) return <Typography>Something went wrong!</Typography>;

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#a8b2d1">
        About The Company
      </Typography>

      <Box mt="10px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Items for Sale"
          value={124}
          series={[60, 40]}
          colors={['#31cc74', '#CFC8FF']}
        />
        <PieChart
          title="Items for Rent"
          value={93}
          series={[80, 20]}
          colors={['#31cc74', '#CFC8FF']}
        />
        <PieChart
          title="Total Customers"
          value={1500}
          series={[75, 25]}
          colors={['#31cc74', '#CFC8FF']}
        />
        <PieChart
          title="Available in Cities"
          value={14}
          series={[20, 80]}
          colors={['#31cc74', '#CFC8FF']}
        />
      </Box>

      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>

      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#233554"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize="18px" fontWeight={600} color="#8892b0" >
          Latest Items
        </Typography>

        <Box
          mt={2.5}
          sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}
        >
          {latestProperties.map((property) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.photo}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;