import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "next-i18next";
import { Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { IGrid } from "@/models/index";
import { Button } from "@/components/atomic/atoms";

const useGrid = () => {
  const { t } = useTranslation();

  const columns = (): GridColDef<IGrid>[] => {
    return [
      {
        field: "id",
        headerName: t("labels.no"),
        filterable: false,
        resizable: false,
        type: "string",
      },
      {
        field: "driver",
        headerName: t("labels.driver"),
        filterable: false,
        resizable: false,
        type: "string",
        flex: 1,
      },
      {
        field: "vehicle",
        headerName: t("labels.vehicle"),
        filterable: false,
        resizable: false,
        flex: 1,
        type: "string",
      },
      {
        field: "mileAge",
        headerName: t("labels.mile age"),
        filterable: false,
        resizable: false,
        type: "string",
        flex: 1,
        renderCell: ({ row }) => {
          return (
            <Stack
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Typography variant="body2">{row.mileAge}</Typography>
              <Typography variant="subtitle1">{`(200)`}</Typography>
            </Stack>
          );
        },
      },
      {
        field: "date",
        headerName: t("labels.date"),
        flex: 1,
        filterable: false,
        resizable: false,
        type: "string",
      },
      {
        field: "action",
        headerName: "",
        filterable: false,
        resizable: false,
        minWidth: 128,
        flex: 1,
        renderCell: () => {
          return (
            <Stack
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Button
                size="large"
                variant="outlined"
                startIcon={<CheckCircleOutlineIcon />}
              >
                {t("labels.endorse")}
              </Button>
            </Stack>
          );
        },
      },
    ];
  };

  return {
    t,
    columns,
  };
};

export default useGrid;
