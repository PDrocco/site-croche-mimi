import { ProductCard } from "@/components/product-card"
import { Header } from "@/components/header"

const products = [
  {
    id: 1,
    title: "Kit 4 Sousplat Personalizado",
    price: "R$ 150,00",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kit%204%20sousplat%20com%20cor%20personalizada%20R%24150%20%28%2Btrilha%20de%20mesa%20R%24250%29.jpg-zMnPRPJ75MjKfdulxhh9U31Pzk0HKf.jpeg",
    description: "Kit com 4 sousplats de crochê com cor personalizada. Trilha de mesa adicional por R$ 100,00.",
  },
  {
    id: 2,
    title: "Kit Decoração Floco de Neve",
    price: "R$ 30,00",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kit%20decora%C3%A7%C3%A3o%20de%20mesa%20estilo%20floco%20de%20neve%2030%20reais%20cada.jpg-mNbI9qVIcFN0qGNapBYyjNkPIvdudF.jpeg",
    description: "Peças decorativas em crochê estilo floco de neve, perfeitas para decoração de mesa.",
  },
  {
    id: 3,
    title: "Sousplat com Trilho de Mesa",
    price: "R$ 250,00",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Com%20trilha%20de%20mesa.jpg-6qxywdNcimdlDGGu3P0c67VvJoiRKo.jpeg",
    description: "Conjunto completo de sousplats verdes com trilho de mesa em crochê artesanal.",
  },
  {
    id: 4,
    title: "Chaveiros de Sakura Personalizados",
    price: "R$ 30,00",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chaveiros%20de%20sakura%20com%20cor%20personalizada%2030%20cada.jpg-sCPSdnERwNggeaQmscMvDeYHymhXfv.jpeg",
    description: "Chaveiros delicados em formato de flor de cerejeira (sakura) com cor personalizada.",
  },
  {
    id: 5,
    title: "Charm de Lírio Personalizado",
    price: "R$ 30,00",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/charm%20de%20lirio%20com%20cor%20personalizada%2030%20reais.jpg-XbFQZ1YB0zbR342dBdJ4DtsvwCjjro.jpeg",
    description: "Charm elegante em formato de lírio branco com caule e folhas verdes, cor personalizada.",
  },
  {
    id: 6,
    title: "Kit de Café com 4 Peças",
    price: "R$ 50,00",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kit%20de%20caf%C3%A9%20com%204%20pe%C3%A7as%2050%20reais-qQamrOMHoSpRRIHEmFMwnCZhOKmCbK.png",
    description: "Kit com 4 porta-copos em crochê branco com padrão rendado delicado, perfeito para o café da manhã.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-stone-50 to-emerald-50">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-700 mb-4">Crochet da Mimi</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Peças artesanais únicas em crochê, feitas com carinho e dedicação. Cada produto é cuidadosamente criado para
            trazer aconchego e beleza ao seu lar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <footer className="bg-stone-100 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-stone-600">© 2025 Crochet da Mimi - Feito com amor e dedicação</p>
        </div>
      </footer>
    </div>
  )
}
