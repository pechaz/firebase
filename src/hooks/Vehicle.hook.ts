import { useQuery } from "@tanstack/react-query";

import { Queries } from "@/utils/index";
import { VehicleNetwork } from "@/network/index";

export const useGetStatistics = (orgId: number) => {
  const { data, error, isFetching, isLoading, isError, isSuccess, refetch } =
    useQuery({
      queryKey: [Queries.VEHICLE_STATISTICS, orgId],
      queryFn: () => VehicleNetwork.getStatistics(orgId),
      retry: false,
      refetchOnWindowFocus: false,
    });

  return {
    data,
    error,
    isFetching,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};

export const useGetDueDates = (orgId: number) => {
  const { data, error, isFetching, isLoading, isError, isSuccess, refetch } =
    useQuery({
      queryKey: [Queries.VEHICLE_STATISTICS, orgId],
      queryFn: () => VehicleNetwork.getDueDates(orgId),
      retry: false,
      refetchOnWindowFocus: false,
    });

  return {
    data,
    error,
    isFetching,
    isLoading,
    isError,
    isSuccess,
    refetch,
  };
};
