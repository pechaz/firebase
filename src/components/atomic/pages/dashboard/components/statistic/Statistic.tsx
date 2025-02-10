import { Grid2 } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useTheme } from "@emotion/react";

import { HilightBox } from "@/components/atomic/molecules";
import { IStatisticProps } from "./Statistic.interface";

const Statistic = ({ driver, vehicle }: IStatisticProps) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid2 container spacing={1} width="100%">
      <Grid2 size={{ xs: 12, lg: 6 }}>
        <HilightBox
          title={t("labels.Driver")}
          titleBoxFirst={{
            color: theme.palette.common.white,
            count: driver?.driverCount ?? 0,
            title: t("labels.total n of driver"),
          }}
          titleBoxSecond={{
            color: theme.palette.common.white,
            count: driver?.onDutyCount ?? 0,
            title: t("labels.on duty"),
          }}
          titleBoxThird={{
            color: theme.palette.common.white,
            count: driver?.offDutyCount ?? 0,
            title: t("labels.off duty"),
          }}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, lg: 6 }}>
        <HilightBox
          title={t("labels.Vehicle")}
          titleBoxFirst={{
            color: theme.palette.common.white,
            count: vehicle?.vehicleCount ?? 0,
            title: t("labels.total n of vehicle"),
          }}
          titleBoxSecond={{
            color: theme.palette.common.white,
            count: vehicle?.vehicleOnDutyCount ?? 0,
            title: t("labels.in use"),
          }}
          titleBoxThird={{
            color: theme.palette.common.white,
            count: vehicle?.vehicleOffDutyCount ?? 0,
            title: t("labels.unused"),
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default Statistic;
