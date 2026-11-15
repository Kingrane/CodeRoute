> Этот файл читают ИИ-агенты. Правила короткие и обязательные.

# CodeRoute — правила для агентов

Стек: React 19 + Vite + Tailwind CSS v4, **JavaScript, не TypeScript**. Бэкенд — C# ASP.NET Core minimal API.

## Что можно

- Менять только файлы из текущей задачи. Всё остальное — не трогать.
- Создавать файлы внутри своей папки (она указана в задаче).

## Чего нельзя без разрешения тимлида

- Рефакторить, переименовывать и переформатировать чужой код.
- Менять: `package.json`, `package-lock.json`, `vite.config.js`, `src/App.jsx`, `src/main.jsx`, `src/index.css`, `backend/**/Program.cs`, `README.md`.
- Добавлять зависимости.
- Создавать папки вне своей зоны.
- Выдумывать поля API — смотри `docs/api.md` и `docs/content-schema.md`.

## Обязательно

- Супер короткие комментарии на русском и только там, где неочевидно.
- Короткие функции, понятные имена, без «умных» сокращений.
- Перед коммитом: `npm run lint && npm run build` (фронт) или `dotnet test` (бэк).
- Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `test:`.
- В конце покажи `git diff --stat`.
