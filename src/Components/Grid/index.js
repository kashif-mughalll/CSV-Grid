import * as React from 'react';
import { DataGrid, GridToolbarFilterButton } from '@mui/x-data-grid';
import { csvData } from '../../Data/csv';
import Button from '@mui/material/Button';

const columns = [
  { field: 'Website', headerName: 'Website', width: 200 },
  { field: 'Run_date', headerName: 'Run Date', width: 120 },
  { field: 'Street', headerName: 'Street', width: 150 },
  { field: 'City', headerName: 'City', width: 120 },
  { field: 'State', headerName: 'State', width: 80 },
  { field: 'Zip Code', headerName: 'Zip Code', width: 120 },
  { field: 'Prices', headerName: 'Prices', width: 120 },
  { field: 'Zestimates', headerName: 'Zestimates', width: 120 },
  { field: 'Ratio', headerName: 'Ratio', width: 100 },
  { field: 'Price_cut', headerName: 'Price Cut', width: 120 },
  { field: 'Price_cut_date', headerName: 'Price Cut Date', width: 150 },
  { field: 'Days_on_Zillow', headerName: 'Days on Zillow', width: 150 },
  { field: 'Phone_number', headerName: 'Phone Number', width: 150 },
  { field: 'Time Zone', headerName: 'Time Zone', width: 120 },
  { field: 'Last Name', headerName: 'Last Name', width: 120 },
];

const CustomToolBar = ({ onExport }) => {
  return (
    <div style={{ display: 'flex' }}>
      <GridToolbarFilterButton sx={{ width: '100px', margin: '12px' }} />
      <Button onClick={onExport}>Export</Button>
    </div>
  );
};

export default function GridAriaV7() {
  const [rows, setRows] = React.useState(csvData);
  const [selectedRows, setSelectedRows] = React.useState([]);

  const handleSelectionModelChange = (data) => {
    setSelectedRows(rows.filter(({ id }, i) => data.rowSelection.includes(id)));
  };

  const onExport = () => {
    console.log('Export', selectedRows);
  };

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      checkboxSelection
      disableRowSelectionOnClick
      disableSelectionOnClick
      disableColumnMenu
      disableColumnFilter={false}
      disableColumnSelector
      disableDensitySelector
      disable
      disableExtendRowFullWidth
      disablePagination
      slots={{ toolbar: () => <CustomToolBar onExport={onExport} /> }}
      experimentalFeatures={{ ariaV7: true }}
      onSelectionModelChange={handleSelectionModelChange}
      onStateChange={handleSelectionModelChange}
    />
  );
}
