# Playwright TypeScript Automation (Google Chrome)

Projekt automatyzacji testów E2E napisany w **TypeScript** przy użyciu **Playwright**, skonfigurowany pod markową przeglądarkę **Google Chrome** (`channel: 'chrome'`).

---

## 🚀 Wymagania wstępne

- [Node.js](https://nodejs.org/) (wersja 18+ lub nowsza)
- Zainstalowana przeglądarka [Google Chrome](https://www.google.com/chrome/) (lub pobrana przez Playwright)

---

## 📦 Instalacja

1. Pobierz zależności:
   ```bash
   npm install
   ```

2. (Opcjonalnie) Pobierz przeglądarki Playwright / Chrome:
   ```bash
   npx playwright install chrome
   ```

---

## 🧪 Uruchamianie testów

- **Uruchomienie wszystkich testów w trybie headless:**
  ```bash
  npm test
  ```

- **Uruchomienie testów z widocznym oknem przeglądarki (headed):**
  ```bash
  npm run test:headed
  ```

- **Interaktywny Playwright UI Mode:**
  ```bash
  npm run test:ui
  ```

- **Tryb debugowania (Playwright Inspector):**
  ```bash
  npm run test:debug
  ```

- **Podgląd ostatniego raportu HTML:**
  ```bash
  npm run test:report
  ```

---

## 📁 Struktura projektu

```
├── tests/                  # Katalog z plikami testów (*.spec.ts)
│   └── example.spec.ts     # Przykładowy zestaw testów
├── playwright.config.ts    # Konfiguracja Playwright (Google Chrome channel)
├── tsconfig.json           # Konfiguracja TypeScript
├── package.json            # Zależności i skrypty npm
└── .gitignore              # Ignorowane pliki i raporty
```
