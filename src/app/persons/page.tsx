import PersonCard from "@/components/PersonCard"
import { Person } from "@/lib/interfaces"
import Link from "next/link"

const getPersons = async() => {
  const res = await fetch("http://localhost:8000/persons", {
    cache: "no-store"
  })
  if (!res.ok) return undefined
  return res.json()
}
async function PersonsPage() {
  const persons: Person[] = await getPersons()
  return (
    <section className="flex flex-col gap-8 items-center">
      <div className="flex justify-between w-80">
        <h3>Lista de Personas</h3>
        <Link href={"/create"}><button>Agregar mas</button></Link>
      </div>
      <div className="flex flex-col gap-4">
        {
          persons ? persons.map(p => (
            <PersonCard person={p} key={p.id}/>
          )): ""
        }
      </div>
    </section>
  )
}

export default PersonsPage