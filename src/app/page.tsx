import Container from "@/components/Container";
import Pagination from "@/components/pagination";
import Products from "@/components/Products";
import Search from "@/components/Search";
import { NewIProduct } from "@/components/types";


interface IParams {
   params: Promise<{}>,
   searchParams: Promise<{ page: string, per_page: string ,name : string }>
}

export default async function Home({ searchParams }: IParams) {

   const page = (await searchParams).page ?? "1"
   const per_page = (await searchParams).per_page ?? "4"
   const name = (await searchParams).name ?? ""

   const hoy = await fetch(`http://localhost:3005/products?_page=${page}&_per_page=${per_page}&name=${name}`)
   const data = await hoy.json() as NewIProduct


   return (
      <Container>
         <div>
            <Search />

         </div>

         <div className="h-[60vh] bg-shoolred flex gap-28 flex-wrap mt-10 justify-center items-center mobile:bg-green-600 tablet:bg-yellow-600 laptop:bg-red-500  rounded-4xl">

            {data.data.map((item) => (
               <div key={item.id}>
                  <Products {...item} />

               </div>
            ))}

         </div>
         <div>

            <Pagination pages={data.pages} />
         </div>
         

      </Container >

   );

}
// json-server --watch db.json --port 3005