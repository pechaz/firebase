import { AxiosResponse } from "axios";

import { axiosApi } from "./config";
import { IDriverStatistics, IResponse } from "@/models/index";

export const getStatistics = (
  orgId: number
): Promise<AxiosResponse<IResponse<IDriverStatistics>>> => {
  return axiosApi.get(`org/${orgId}/driver/statistics`);
};
