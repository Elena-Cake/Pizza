import React from 'react'

import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss'

type Props = {
    countPages: number
    onChangeCurrentPage: (selectedPage: number) => void
}

export default function Pagination({ countPages, onChangeCurrentPage }: Props) {

    return (
        <ReactPaginate
            className={s.pagination}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(e) => onChangeCurrentPage(e.selected + 1)}
            pageRangeDisplayed={5}
            pageCount={countPages}
            renderOnZeroPageCount={null}
        />
    )
}

