import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import { listBrandsActions } from '../../features/redux-saga/brand/listBrandSlice';
import './index.css'

export function ListBrands() {

    // const rows:BrandDto = 
    const dispatch = useAppDispatch()

    const listBrandsSelector = useSelector((state:RootState) => state.listBrands)

    const columns: GridColDef[] =[

        {field:'id', headerName:'ID', width:70},
        {field: 'logo', headerName:'Logo', width:300, renderCell:(params: GridRenderCellParams<string>) => (

            <img src={params.value} alt='Mất logo'className='img-logo-brand'/>

        )},
        {field:'name', headerName:'Tên thương hiệu', width:200},
        {field:'field', headerName:'Lĩnh vực', width: 200},
    ]
    React.useEffect(()=>{

        console.log("Loading data from store...")
        dispatch(listBrandsActions.fetchAllBrands())

    }, [])
    return (
        <section className='list-brands-container'>
            <h1>This list brands</h1>
            <DataGrid 
                columns={columns}
                rows={listBrandsSelector}
                disableColumnFilter={true}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </section>
    );
};