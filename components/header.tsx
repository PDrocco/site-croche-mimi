export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-rose-300 to-emerald-300 rounded-full"></div>
            <span className="text-xl font-serif text-stone-700">Crochet da Mimi</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://wa.me/5511998861229?text=Olá! Gostaria de fazer um pedido dos seus produtos de crochê."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full transition-colors font-medium"
            >
              Fazer um pedido
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
