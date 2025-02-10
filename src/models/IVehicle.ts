export type VEHICLE_DUE_DATE_TYPE =
  | "general"
  | "road-tax"
  | "renewed"
  | "insurance"
  | "puspakom-service"
  | "truck-permit";

export interface IVehicleStatistics {
  vehicleCount: number;
  vehicleOnDutyCount: number;
  vehicleOffDutyCount: number;
}

export interface IVehicleDueDate {
  situation: string;
  status: string;
  type: VEHICLE_DUE_DATE_TYPE;
  tag: string | null;
  count: number;
}
