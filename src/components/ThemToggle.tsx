import { useEffect, useState } from "react"
 import { AiFillSun } from "../../public/react-icons/ai"
 import { AiFillMoon } from "../../public/react-icons/ai"

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')



    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setTheme('dark')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark')

    };

    return (

        <button onClick={toggleTheme}
            className={`p-2 rounded-full bg-gray-500 ${theme === 'dark' && "bg-white"}`} >
            {theme === 'dark' ? (<AiFillSun />) : (<AiFillMoon />)}
        </button>
    )

}
export default ThemeToggle