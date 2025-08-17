"use client"

interface Product {
  id: number
  title: string
  price: string
  image: string
  description: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-stone-800 text-lg mb-2 leading-tight">{product.title}</h3>
        <p className="text-2xl font-bold text-emerald-600 mb-3">{product.price}</p>
        <p className="text-stone-600 text-sm leading-relaxed">{product.description}</p>
      </div>
    </div>
  )
}
