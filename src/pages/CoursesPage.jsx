import AppHeader from '../components/AppHeader.jsx'

function CoursesPage() {
  return (
    <div className="min-h-svh bg-paper text-ink">
      <AppHeader />

      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-semibold">Курсы</h1>
        <p className="mt-2 text-sm text-muted">Тут Георгий сделает</p>
      </main>
    </div>
  )
}

export default CoursesPage
