import { Person } from "@/lib/interfaces"

function PersonCard({person}: {person: Person}) {
  return (
    <article className="border-solid border-2 border-green-400 px-4 py-2 rounded-lg">
      <div className="flex flex-col gap-2">
        <span>Id : {person.id}</span>
        <span>Edad : {person.edad}</span>
        <span className="capitalize text-lg">Nombre : {person.nombre}</span>
        <p>Trabajo : {person.trabajo}</p>
      </div>
    </article>
  )
}

export default PersonCard