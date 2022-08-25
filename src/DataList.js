import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'

function DataList() {

    const [userList, setUserList] = useState([]);

    const columns = [
        { dataField: 'id', text: 'Id' },
        { dataField: 'name', text: 'Name', sort: true, filter: textFilter() },
        { dataField: 'username', text: 'Username', sort: true, filter: textFilter() },
        { dataField: 'email', text: 'Email', sort: true }
    ]

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 10,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {

        }
    })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => setUserList(result))
            .catch(error => console.log(error));
    }, [])

    return (
        <div>

            <BootstrapTable
                bootstrap4
                keyField='id'
                columns={columns}
                data={userList}
                pagination={pagination}
                filter={filterFactory()}
            />

        </div>
    )
}

export default DataList
