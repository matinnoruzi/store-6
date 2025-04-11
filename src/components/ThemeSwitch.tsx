// 'use client'
// import { useEffect, useState } from "react"
// import { AiFillSun } from "../../public/react-icons/ai"
// import { AiFillMoon } from "../../public/react-icons/ai"
// import { useTheme } from "next-themes"
// import Image from "next/image"

// function ThemeSwitch() {
//     const [mounted, setMounted] = useState(false)
//     const { setTheme, resolvedTheme } = useTheme()

//     useEffect(() => setMounted(true)  , [])

//     if(!mounted) return (

//         <Image src="/mobiles/mobile-1.jpg" alt="loading..." height={36} width={36} priority={false}/>
//     )

//     if(resolvedTheme === 'dark'){
//         return <AiFillSun onClick={()=> setTheme('light')} />
//     }
//     if(resolvedTheme === 'light'){
//         return <AiFillMoon onClick={()=> setTheme('dark')} />
//     }
// }

// export default ThemeSwitch