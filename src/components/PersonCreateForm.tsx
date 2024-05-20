"use client"

import Link from "next/link"
import { ChangeEventHandler, FormEventHandler, useState } from "react"

function PersonCreateForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: 0,
    trabajo: "",
  })

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault()
    const res = await fetch("http://localhost:8000/persons", {
      method: "POST",
      body: JSON.stringify({
        ...formData
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if(!res.ok){
      console.log(res)
      return
    }else{
      alert("Persona Agregada")
    }

  }
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-8 w-max">
      <div className="flex gap-4">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="nombre"
          id="name"
          value={formData.nombre}
          onChange={handleChange}
          className="text-black"
        />
      </div>
      <div className="flex gap-4">
        <label htmlFor="age">Edad</label>
        <input
          type="number"
          name="edad"
          id="age"
          value={formData.edad}
          onChange={handleChange}
          className="text-black"
        />
      </div>
      <div className="flex gap-4">
        <label htmlFor="job">Trabajo</label>
        <input
          type="text"
          name="trabajo"
          id="job"
          value={formData.trabajo}
          onChange={handleChange}
          className="text-black"
        />
      </div>
      <div className="flex justify-between w-max">
        <button className=" mx-auto border-solid border-2 border-blue-600 px-4 py-2 rounded-lg">
          Crear
        </button>
        <Link href={"/persons"}>
        <button>
          Ver Personas
        </button>
        </Link>
      </div>
    </form>
  )
}

export default PersonCreateForm
