import { Box, Typography } from "@mui/material";

import { DataGrid } from "@/components/atomic/atoms/index";
import useGrid from "./useGrid";
import { FAKE_DATE } from "./config";

const Grid = () => {
  const { t, columns } = useGrid();

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Typography variant="body1">{t("labels.recent submissions")}</Typography>
      <DataGrid
        rows={FAKE_DATE}
        columns={columns()}
        getRowHeight={() => "auto"}
        getRowId={(row) => row.id}
        disableColumnSelector
        autoAdjustment={false}
        disableColumnFilter
      />
    </Box>
  );
};

export default Grid;
