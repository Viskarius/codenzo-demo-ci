# Codenzo demo CI/CD

Простой демо-проект:

- линтер: ESLint;
- тесты: node:test;
- CI/CD: GitHub Actions;
- деплой: VPS + Nginx через rsync/SSH;
- мониторинг: внешний uptime-check для /healthz.

Локальные проверки:

1. npm install
2. npm run lint
3. npm test
