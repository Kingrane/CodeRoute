import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <main className="grid min-h-svh place-items-center bg-white px-6 text-ink">
      <div className="flex flex-col items-center gap-8 text-center">
        <img src="/logo.svg" alt="CodeRoute" width="96" height="96" />

        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">CodeRoute</h1>
          <p className="text-sm text-neutral-500">
            Игровое изучение программирования по уровням
          </p>
        </div>

        <Link
          to="/course"
          className="rounded-xl bg-ink px-6 py-3 text-sm font-medium text-white"
        >
          Начать
        </Link>
      </div>
    </main>
  )
}

export default HomePage
