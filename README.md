# Playwright – zadania rekrutacyjne

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/rockstome/playwright-rekrutacja)

Kliknij przycisk powyżej – środowisko uruchomi się w przeglądarce, nic nie trzeba instalować.

## Uruchamianie

- VS Code: zakładka **Testing** (🧪) → wybierz test → ▶
- Terminal:

```bash
npx playwright test <ścieżka do pliku>   # jedno zadanie
npx playwright test --ui                 # tryb UI
```

Każde zadanie to jeden plik. Polecenie jest w komentarzu na górze pliku.

## Struktura

| Katalog | Co tam jest |
|---|---|
| `tests/typescript/` | Krótkie zadania z TypeScript (bez przeglądarki) |
| `tests/playwright/` | Zadania z Playwright, pogrupowane według testowanej strony |
| `src/pages/` | Page Objecty do zadań z `tests/playwright/pom/` |

## Lokalnie

```bash
git clone https://github.com/rockstome/playwright-rekrutacja.git
cd playwright-rekrutacja
npm install
```
