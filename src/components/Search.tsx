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

            <input className="rtl bg-slate-100 rounded p-2" onChange={(e) => setSearch(e.target.value)} type="text" placeholder='جست و جو...' />
            <button onClick={handleSearch} className='bg-emerald-200 rounded p-2'>اعمال جست و جو</button>
        </div>
    )
}

export default Search