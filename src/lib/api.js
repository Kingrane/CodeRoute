import courseMock from '../mocks/lessons.json'

// Бэкенда пока нет: отдаём моки. Когда появится API — здесь будет fetch.
export async function getCourse() {
  return courseMock
}
