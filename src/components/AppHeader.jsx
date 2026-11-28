import { Link } from 'react-router-dom'

function AppHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="flex h-14 w-full items-center gap-4 px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <img src="/logo.svg" alt="" width="24" height="24" />
          CodeRoute
        </Link>

        <nav className="flex items-center gap-1 rounded-lg bg-paper p-0.5 text-sm">
          <Link to="/python" className="rounded-md bg-white px-3 py-1 font-medium shadow-sm">
            Все уроки
          </Link>
          <button
            type="button"
            className="rounded-md px-3 py-1 text-neutral-500"
            title="Появится позже"
          >
            Мои уроки
          </button>
        </nav>

        <div className="ml-auto flex items-center gap-1.5 text-sm">
          <button
            type="button"
            className="rounded-lg px-3 py-1.5 text-neutral-600"
            title="Появится на финале"
          >
            Войти
          </button>
          <button
            type="button"
            className="rounded-lg bg-ink px-3.5 py-1.5 font-medium text-white"
            title="Появится на финале"
          >
            Регистрация
          </button>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
