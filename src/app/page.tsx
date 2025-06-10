import Container from "@/components/Container";
import Pagination from "@/components/pagination";
import Products from "@/components/Products";
import Search from "@/components/Search";
import { NewIProduct } from "@/components/types";

interface IParams {
   params: Promise<{}>,
   searchParams: Promise<{ page: string, per_page: string, name: string }>
}

export default async function Home({ searchParams }: IParams) {

   const page = (await searchParams).page ?? "1"
   const per_page = (await searchParams).per_page ?? "4"
   const name = (await searchParams).name ?? ""

   const hoy = await fetch(`http://localhost:3005/products?_page=${page}&_per_page=${per_page}&name=${name}`)
   const data = await hoy.json() as NewIProduct

   return (
      <Container>
         <div className="flex flex-col gap-8">
            <div className="w-full flex justify-center mt-10">
               <div className="w-56 ">
                  <Search />
               </div>
            </div>

            <div className="min-h-96 flex gap-28 flex-wrap  justify-center items-center ">

               {data.data.map((item) => (
                  <div key={item.id}>
                     <Products {...item} />

                  </div>
               ))}
            </div>
            <div className="mt-10">
               <Pagination pages={data.pages} />
            </div>
         </div>

      </Container >
   );

}
// json-server --watch db.json --port 3005