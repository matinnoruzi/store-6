"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import ReactPaginate from 'react-paginate'

function Pagination({ pages }: { pages: number }) {


    const router = useRouter()


    const handlePageCkick = (e: { selected: number }) => {
        const page = e.selected + 1
        router.push(`/?page=${page}&per_page=4`)
    }

    return (
        <div>
            <div className='flex justify-center items-center'>
                <ReactPaginate className='flex  mt-60 gap-4 font-bold bg-emerald-100 rounded p-4 shadow '
                    nextLabel=">"
                    onPageChange={handlePageCkick}
                    pageRangeDisplayed={5}
                    pageCount={pages}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    nextClassName='nextC'
                    previousClassName='prevC'
                    activeClassName='activeC'
                    disabledClassName='disableC'
                    pageLinkClassName='linkC'

                />
            </div>

        </div>
    )
}

export default Pagination