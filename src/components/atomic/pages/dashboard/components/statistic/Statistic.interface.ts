import { IDriverStatistics } from "@/models/IDriver";
import { IVehicleStatistics } from "@/models/IVehicle";

export interface IStatisticProps {
  driver?: IDriverStatistics;
  vehicle?: IVehicleStatistics;
}
