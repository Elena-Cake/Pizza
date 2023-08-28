import React from 'react'

import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss'
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setCurrentPage } from '../../store/filterSlice';


export default function Pagination() {
    const dispatch = useAppDispatch()
    const countPages = useAppSelector(s => s.filter.countPages)

    return (
        <ReactPaginate
            className={s.pagination}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
            pageRangeDisplayed={5}
            pageCount={countPages}
            renderOnZeroPageCount={null}
        />
    )
}

