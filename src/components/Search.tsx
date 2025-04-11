"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

function Search() {
    const searchParams = useSearchParams()
    const [search, setSearch] = useState("")
    const router = useRouter()
    const handleSearch = () => {

        const currentSerachParams = new URLSearchParams(searchParams)
        currentSerachParams.set("name", search)
        router.push(`?${currentSerachParams}`)
        // router.push(`?name=${search}`)
    }

    return (
        <div className="flex flex-col">

            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='جست و جو...' />
            <button onClick={handleSearch} className='bg-emerald-200 text-white p-2'>ssssssss</button>
        </div>
    )
}

export default Search