import {
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@emotion/react";

const DataGridToolbar = () => {
  const theme = useTheme();
  return (
    <GridToolbarContainer sx={{ marginBottom: 1 }}>
      <GridToolbarQuickFilter
        variant="outlined"
        size="small"
        InputProps={{
          sx: {
            borderRadius: 2,
            borderColor: theme.palette.grey[900],
            "&.MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.palette.grey[900],
              },
              "&:hover fieldset": {
                borderColor: theme.palette.grey[800],
              },
            },
          },
          startAdornment: <></>,
          endAdornment: <SearchIcon />,
        }}
      />
      <GridToolbarFilterButton
        slotProps={{
          button: {
            color: "inherit",
            size: "large",
            sx: { color: theme.palette.grey[900] },
          },
        }}
      />
    </GridToolbarContainer>
  );
};

export default DataGridToolbar;
