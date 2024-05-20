import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h2>Persons app</h2>
      <Link href={"/persons"}>Ver todas las personas</Link>
    </main>
  );
}
