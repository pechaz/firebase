import { AxiosResponse } from "axios";

import { axiosApi } from "./config";
import { IDriverStatistics } from "@/models/index";

export const getStatistics = (
  orgId: number
): Promise<AxiosResponse<IDriverStatistics>> => {
  return axiosApi.get(`org/${orgId}/driver/statistics`);
};
