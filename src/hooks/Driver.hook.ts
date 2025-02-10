import { useQuery } from "@tanstack/react-query";

import { Queries } from "@/utils/index";
import { DriverNetwork } from "@/network/index";

export const useGetStatistics = (orgId: number) => {
  const { data, error, isFetching, isLoading, isError, isSuccess, refetch } =
    useQuery({
      queryKey: [Queries.DRIVE_STATISTICS, orgId],
      queryFn: () => DriverNetwork.getStatistics(orgId),
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
