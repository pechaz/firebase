import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

import { VehicleHook } from "@/hooks/index";
import { CONSTANTS } from "@/utils/index";
import { IVehicleDueDate } from "@/models/IVehicle";

const useReminder = () => {
  const { t } = useTranslation();

  const [renewedCount, setRenewedCount] = useState(0);
  const [insuranceCount, setInsuranceCount] = useState(0);
  const [puspakomCount, setPuspakomCount] = useState(0);
  const [roadTaxCount, setRoadTaxCount] = useState(0);
  const [truckPermitCount, setTruckPermitCount] = useState(0);
  const [generalCount, setGeneralCount] = useState(0);

  const { data } = VehicleHook.useGetDueDates(CONSTANTS.ORG_ID);

  const sumCalculation = (data: IVehicleDueDate[]) => {
    const sumRenewed = data
      .filter((item) => item.type === "renewed")
      .map((item) => Number(item.count))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const sumInsurance = data
      .filter((item) => item.type === "insurance")
      .map((item) => Number(item.count))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const sumPuspakom = data
      .filter((item) => item.type === "puspakom-service")
      .map((item) => Number(item.count))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const sumRoadTax = data
      .filter((item) => item.type === "road-tax")
      .map((item) => Number(item.count))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const sumTruckPermit = data
      .filter((item) => item.type === "truck-permit")
      .map((item) => Number(item.count))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const sumGeneral = data
      .filter((item) => item.type === "general")
      .map((item) => Number(item.count))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    setRenewedCount(sumRenewed);
    setInsuranceCount(sumInsurance);
    setPuspakomCount(sumPuspakom);
    setRoadTaxCount(sumRoadTax);
    setTruckPermitCount(sumTruckPermit);
    setGeneralCount(sumGeneral);
  };

  useEffect(() => {
    if (data && data.data) {
      sumCalculation(data.data.data);
    }
  }, [data]);

  return {
    t,
    renewedCount,
    insuranceCount,
    puspakomCount,
    roadTaxCount,
    truckPermitCount,
    generalCount,
  };
};

export default useReminder;
