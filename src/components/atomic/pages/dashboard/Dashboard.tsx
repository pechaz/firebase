"use client";

import { Box, Typography } from "@mui/material";

import useDashboard from "./useDashboard";
import Reminder from "./components/reminder/Reminder";
import Statistic from "./components/statistic/Statistic";
import Grid from "./components/grid/Grid";

const Dashboard = () => {
  const { t, user, driverStatisticData, vehicleStatisticData } = useDashboard();

  return (
    <Box width="100%" display="flex" flexDirection="column" gap={1} padding={4}>
      <Typography variant="h3">
        {t("labels.hi n", {
          n: user?.displayName ?? user?.email,
        })}
      </Typography>
      <Statistic
        driver={driverStatisticData?.data?.data}
        vehicle={vehicleStatisticData?.data?.data}
      />
      <Reminder />
      <Grid />
    </Box>
  );
};

export default Dashboard;
