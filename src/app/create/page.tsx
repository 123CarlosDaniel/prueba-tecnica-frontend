import PersonCreateForm from "@/components/PersonCreateForm"

function CreatePersonPage() {

  return (
    <div className="flex flex-col gap-8 w-max">
      <h2 className="text-center">Crear Nueva Person</h2>
      <PersonCreateForm></PersonCreateForm>
    </div>
  )
}

export default CreatePersonPage
