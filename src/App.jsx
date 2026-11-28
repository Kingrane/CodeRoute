import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CoursePage from './pages/CoursePage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import HomePage from './pages/HomePage.jsx'

// Временные заглушки: заменяются настоящими страницами по мере готовности
function Stub({ title }) {
  return (
    <main className="grid min-h-svh place-items-center bg-white px-6 text-center text-ink">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-neutral-500">Скоро появится</p>
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/python" element={<CoursePage />} />
        <Route path="/course" element={<Navigate to="/python" replace />} />
        <Route path="/lesson/:id" element={<Stub title="Урок" />} />
        <Route path="*" element={<Stub title="Страница не найдена" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
