import { Avatar } from "@/components/Avatar";

export default function Home() {
  return (
    <main className="p-8 h-screen flex items-center justify-center bg-gray-200">
      <section className="flex flex-col justify-between w-[800px] h-[600px] rounded-3xl bg-white shadow-lg px-14 py-6 text-[#372D3B]">
        <div className="w-[200px] h-4 rounded-xl bg-[#E5D8EA] self-center"></div>
        <section>
          <h1 className="font-bold text-4xl">
            Encontre <span className="text-[#864293]">Boris</span> no local de
            partida
          </h1>
          <span className="text-2xl font-medium">
            Chega em 3 minutos (800 metros)
          </span>
        </section>
        <Avatar />
      </section>
    </main>
  );
}
