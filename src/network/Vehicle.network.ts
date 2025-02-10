import { AxiosResponse } from "axios";

import { axiosApi } from "./config";
import { IVehicleDueDate, IVehicleStatistics } from "@/models/index";

export const getStatistics = (
  orgId: number
): Promise<AxiosResponse<IVehicleStatistics>> => {
  return axiosApi.get(`org/${orgId}/vehicle/statistics`);
};

export const getDueDates = (
  orgId: number
): Promise<AxiosResponse<IVehicleDueDate[]>> => {
  return axiosApi.get(`org/${orgId}/vehicle/due-dates/statistics`);
};
