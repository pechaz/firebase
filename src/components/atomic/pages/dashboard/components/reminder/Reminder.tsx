import { Box, Grid2, Typography } from "@mui/material";

import { ReminderBox } from "@/components/atomic/molecules";
import useReminder from "./useReminder";

const Reminder = () => {
  const {
    t,
    generalCount,
    insuranceCount,
    puspakomCount,
    renewedCount,
    roadTaxCount,
    truckPermitCount,
  } = useReminder();

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Typography variant="body1">{t("labels.reminder")}</Typography>
      <Grid2 container spacing={1} width="100%">
        <Grid2 size={{ xs: 12, lg: 4 }}>
          <ReminderBox count={renewedCount} title={t("labels.renewed")} />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 4 }}>
          <ReminderBox count={insuranceCount} title={t("labels.insurance")} />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 4 }}>
          <ReminderBox
            count={puspakomCount}
            title={t("labels.puspakom service")}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 4 }}>
          <ReminderBox count={roadTaxCount} title={t("labels.road tax")} />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 4 }}>
          <ReminderBox
            count={truckPermitCount}
            title={t("labels.tuck permit")}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 4 }}>
          <ReminderBox count={generalCount} title={t("labels.general")} />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Reminder;
