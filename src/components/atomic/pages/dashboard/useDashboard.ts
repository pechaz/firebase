import { IRootState } from "@/redux/store";
import { useTheme } from "@emotion/react";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";

import { DriverHook, VehicleHook } from "@/hooks/index";
import { CONSTANTS } from "@/utils/index";

const useDashboard = () => {
  const { t } = useTranslation();
  const { user } = useSelector((state: IRootState) => state.auth);
  const theme = useTheme();

  const { data: driverStatisticData } = DriverHook.useGetStatistics(
    CONSTANTS.ORG_ID
  );
  const { data: vehicleStatisticData } = VehicleHook.useGetStatistics(
    CONSTANTS.ORG_ID
  );

  return { t, user, theme, driverStatisticData, vehicleStatisticData };
};

export default useDashboard;
