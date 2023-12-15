
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';

export default function TabelData({onValue,onTotalRecords,onKlik,onLoading,onLazyState,onColumn,onPages}){
    const [globalFilter, setGlobalFilter] = useState(null);


    const onPage = (event)=>{
        onPages(event);
    }

    const onSearch = (e)=>{
        let _lazyState = {...onLazyState};
        _lazyState['filters']['search'] = e;
        onPage(_lazyState);
    }

    const header = (
        <div className="flex flex-column md:flex-row md:justify-content-end md:align-items-center">
            <span className="block mt-2 md:mt-0 p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onChange={(e) => onSearch(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );
    
    return(
            <DataTable
                value={onValue}
                lazy
                dataKey="KODE"
                paginator
                rows={10}
                className="datatable-responsive"
                first={onLazyState.first}
                totalRecords={onTotalRecords}
                onPage={onPage}
                loading={onLoading}
                filters={onLazyState.filters}
                header={header}
            >
                {onColumn.map((col,i) => (
                    <Column field={col.field} header={col.header}></Column>    
                ))}

            </DataTable>
    )
}