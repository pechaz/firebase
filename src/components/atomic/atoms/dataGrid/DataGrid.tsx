import { useEffect } from "react";
import {
  DataGrid as MUIDataGrid,
  DataGridProps,
  useGridApiRef,
} from "@mui/x-data-grid";

import DataGridToolbar from "./DataGridToolbar";
import { CONSTANTS } from "../../../../utils";

const DataGrid = (
  props: DataGridProps & {
    autoAdjustment?: boolean;
  }
) => {
  const apiRef = useGridApiRef();
  const { autoAdjustment = true } = props;

  useEffect(() => {
    if (autoAdjustment && apiRef && apiRef.current) {
      setTimeout(() => {
        apiRef.current.autosizeColumns({
          includeHeaders: true,
          includeOutliers: true,
        });
      }, 50);
    }
  }, [props, props.rows]);

  return (
    <MUIDataGrid
      disableColumnSelector
      sx={{
        "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
          outline: "none !important",
        },
      }}
      apiRef={apiRef}
      slots={{ toolbar: DataGridToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
        },
        filterPanel: {
          logicOperators: [],
          filterFormProps: {
            operatorInputProps: {
              disabled: true,
              sx: { display: "none" },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: "outlined",
                size: "small",
              },
            },
            columnInputProps: {
              variant: "outlined",
              size: "small",
              sx: {
                marginRight: 1,
              },
            },
          },
        },
      }}
      disableRowSelectionOnClick
      pageSizeOptions={CONSTANTS.LIST_SIZES}
      initialState={{
        pagination: {
          paginationModel: { pageSize: CONSTANTS.LIST_INITIAL_SIZE },
        },
      }}
      {...props}
    />
  );
};

export default DataGrid;
