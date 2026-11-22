# Роуты

| URL | Страница | Файл | Кто |
|---|---|---|---|
| `/` | Стартовый экран | `src/pages/HomePage.jsx` | Роман |
| `/course` | Карта курса | `src/pages/CoursePage.jsx` | Роман |
| `/lesson/:id` | Урок «собери код» | `src/pages/LessonPage.jsx` | Роман |
| `/lesson/:id/result` | Итоги урока | `src/pages/LessonResultPage.jsx` | Анна |
| `/sandbox` | Песочница UI-кита | `src/pages/SandboxPage.jsx` | Георгий |
| `*` | Страница не найдена | заглушка в `App.jsx` | Роман |

Правила:

- адреса не меняем без правки этого файла;
- новые страницы добавляет только Роман в `App.jsx`;
- параметр `:id` — это `lesson-01`, `lesson-02` и т.д., ровно как в JSON урока.
