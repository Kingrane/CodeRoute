import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AppHeader from '../components/AppHeader.jsx'
import { getCourse } from '../lib/api.js'

const sections = [
  { title: 'Все', active: true },
  { title: 'Python' },
  { title: 'JavaScript', soon: true },
  { title: 'SQL', soon: true },
  { title: 'C#', soon: true },
]

function CoursePage() {
  const [lessons, setLessons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCourse()
      .then((data) => setLessons(data.lessons))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-svh bg-paper text-ink">
      <AppHeader />

      <div className="grid w-full max-w-7xl gap-5 px-4 py-6 lg:grid-cols-[150px_1fr]">
        {/* слева: разделы */}
        <aside className="hidden lg:block">
          <p className="mb-2 px-3 text-xs font-medium tracking-wide text-neutral-400 uppercase">
            Разделы
          </p>

          <ul className="space-y-0.5 text-sm">
            {sections.map((section) => (
              <li key={section.title}>
                <span
                  className={
                    section.active
                      ? 'flex items-center justify-between rounded-lg bg-white px-3 py-1.5 font-medium'
                      : 'flex items-center justify-between rounded-lg px-3 py-1.5 text-neutral-400'
                  }
                >
                  {section.title}
                  {section.soon && <span className="text-xs">скоро</span>}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* карточки уроков */}
        <section className="space-y-4">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Все уроки</h1>
            <p className="text-sm text-neutral-500">
              {lessons.length} уроков по 5–10 минут
            </p>
          </div>

          {loading ? (
            <p className="text-sm text-neutral-500">Загрузка...</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {lessons.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} />
              ))}

              <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-neutral-300 p-4 text-center text-sm text-neutral-400">
                <span className="font-medium text-neutral-500">Дальше</span>
                Новые уроки появятся позже
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

function LessonCard({ lesson }) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <span className="grid size-8 place-items-center rounded-lg bg-paper text-sm font-medium">
          {lesson.order}
        </span>
        <span className="text-xs text-neutral-400">заданий: {lesson.taskCount}</span>
      </div>

      <div className="space-y-0.5">
        <h2 className="font-medium">{lesson.title}</h2>
        <p className="text-sm text-neutral-500">{lesson.description}</p>
      </div>

      <div className="mt-auto space-y-2.5">
        <div className="h-1 rounded-full bg-neutral-100">
          <div className="h-full w-0 rounded-full bg-ink" />
        </div>

        <Link
          to={`/lesson/${lesson.id}`}
          className="block rounded-lg bg-ink px-4 py-1.5 text-center text-sm font-medium text-white"
        >
          Начать
        </Link>
      </div>
    </article>
  )
}

export default CoursePage
