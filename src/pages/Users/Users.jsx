import React, { forwardRef, useEffect, useMemo, useRef } from "react";

import Aside from "../../components/Shared/Aside/Aside";

import Navbar from "../../components/Shared/Navbar/Navbar";

import Form from "../../components/Form/Form";

import formImage from "../../assets/images/program/searchIcon.png";

import Select from "react-select";

import { useFetch } from "../../hooks";

import { apiGetUsers } from "../../services/usersServices";

import {
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";
import { Link } from "react-router-dom";

const columns = [
  {
    Header: "اسم العميل",
    accessor: (col) => (
      <div>
        <Link to={col.user.id} className="flex items-center gap-3">
          {/* {JSON.stringify(col.user.profile.avatar)} */}
          {col.user?.profile?.avatar && (
            <img
              src={col.user?.profile?.avatar}
              className="img-fluid"
              alt="avatar"
            />
          )}
          <span>{col.user?.name}</span>
        </Link>
      </div>
    ),
  },
  {
    Header: "البرنامج المستخدم",
    accessor: (col) => col.user.profile?.weight,
  },
  {
    Header: "مدة الإشتراك",
    accessor: (col) => col.user.profile?.weight,
  },
  {
    Header: "نوع الإشتراك",
    accessor: (col) => col.user.profile?.weight,
  },
  {
    Header: "الإجراء",
    accessor: (col) => col.user.profile?.weight,
  },
];

export default function Users() {
  const options = [{ value: "", label: "" }];

  // fetch users using react-query library
  const { isLoading, data: usersData } = useFetch({
    queryKey: "get-users",
    queryFn: apiGetUsers,
  });

  const tableData = useMemo(
    () => usersData?.data?.data?.leaders || [],
    [usersData]
  );

  const usersColumn = useMemo(() => columns || [], [columns]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state: { globalFilter, pageSize, pageIndex },
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
  } = useTable(
    {
      columns: usersColumn,
      data: tableData,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    // handle selection
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
            style: {
              width: "70px",
            },
            class: "select-inp",
          },
          ...columns,
        ];
      });
    }
  );

  useEffect(() => {
    setPageSize(8);
  }, [setPageSize]);

  return (
    <div>
      <Navbar />
      <section className="hero bg-light-gray flex">
        <Aside />
        <section className="program flex-grow overflow-hidden">
          <div className="program-container my-5 mx-6 bg-white p-6 rounded-lg">
            {/* Form Section */}
            <div className="program-form flex justify-between items-center mb-8">
              <div className="select min-w-[190px]">
                <Select options={options} placeholder="نوع البرنامج" />
              </div>

              <Form
                classes="flex bg-form-light gap-x-4 items-center rounded-lg px-2 py-3 font-normal"
                context="ابحث عن عميل"
                formImage={formImage}
              />
            </div>
            {/* Table Section */}
            <div className="table-section w-full">
              <table {...getTableProps()} className="main-table m-0 w-full">
                {/* head  */}
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      className="rounded-[10px]  bg-[#FAFAFA]"
                    >
                      {
                        // Loop over the headers in each row
                        headerGroup.headers.map((column) => (
                          // Apply the header cell props
                          <th
                            {...column.getHeaderProps()}
                            style={column.style}
                            className={
                              column.class + " h-[64px]  text-start !px-[20px]"
                            }
                          >
                            {
                              // Render the header
                              column.render("Header")
                            }
                          </th>
                        ))
                      }
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    // Prepare the row for display
                    prepareRow(row);
                    return (
                      // Apply the row props
                      <tr {...row.getRowProps()}>
                        {
                          // Loop over the rows cells
                          row.cells.map((cell) => {
                            // Apply the cell props
                            return (
                              <td
                                {...cell.getCellProps()}
                                className={
                                  cell.column.class +
                                  " h-[64px]  text-start !px-[20px]"
                                }
                                style={cell.column.style}
                              >
                                {
                                  // Render the cell contents
                                  cell.render("Cell")
                                }
                              </td>
                            );
                          })
                        }
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

const Checkbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;
  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  return (
    <div>
      <label className="table-custom-checkbox-label">
        <input className="d-none" type="checkbox" ref={resolvedRef} {...rest} />
        <div className="table-custom-checkbox d-flex align-items-center justify-content-center">
          <i className="las la-check icon"></i>
        </div>
      </label>
    </div>
  );
});
