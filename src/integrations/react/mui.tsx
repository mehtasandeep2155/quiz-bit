import { qwikify$ } from '@builder.io/qwik-react';
import { Button, Slider } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export const MUIButton = qwikify$(Button);
export const MUISlider = qwikify$(Slider, { eagerness: 'hover' });

export const MUIDataGrid = qwikify$(DataGrid)
