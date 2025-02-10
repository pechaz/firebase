import { AxiosResponse } from "axios";

import { axiosApi } from "./config";
import { IResponse, IVehicleDueDate, IVehicleStatistics } from "@/models/index";

export const getStatistics = (
  orgId: number
): Promise<AxiosResponse<IResponse<IVehicleStatistics>>> => {
  return axiosApi.get(`org/${orgId}/vehicle/statistics`);
};

export const getDueDates = (
  orgId: number
): Promise<AxiosResponse<IResponse<IVehicleDueDate[]>>> => {
  return axiosApi.get(`org/${orgId}/vehicle/due-dates/statistics`);
};
