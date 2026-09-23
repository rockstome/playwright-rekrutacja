# 🎯 Playwright QA / SDET Recruitment Challenge

Witaj w repozytorium rekrutacyjnym! Projekt zawiera zadania praktyczne z zakresu automatyzacji testów w **TypeScript** z wykorzystaniem **Playwright** i przeglądarki **Google Chrome**.

---

## ⚡ Jak uruchomić to środowisko w 100% w przeglądarce?

Nie musisz instalować niczego na swoim komputerze (Node.js, Git ani przeglądarki)! Wybierz jedną z poniższych opcji:

### Opcja A: GitHub Codespaces (Zalecana)

1. Kliknij poniższy przycisk (lub na stronie repozytorium: **Code** ➔ **Codespaces** ➔ **Create codespace on main**):

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new)

2. Po kilku sekundach w przeglądarce otworzy się gotowe środowisko **VS Code w chmurze**. Wszystkie zależności, rozszerzenie Playwright oraz przeglądarka Google Chrome zainstalują się automatycznie!

### Opcja B: Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/)

---

## 🧪 Jak uruchamiać testy w przeglądarce (w Codespaces / VS Code)?

Możesz uruchamiać testy na 2 sposoby:

### 1. Przez interfejs graficzny (VS Code Test Explorer)
* W lewym panelu VS Code kliknij ikonę **Test** (kolba laboratoryjna / Testing).
* Zobaczysz listę zadań – kliknij zieloną strzałkę **▶** przy wybranym teście, aby go odpalić.
* Możesz też klikać zieloną strzałkę **▶** bezpośrednio przy teście w pliku `.spec.ts`.

### 2. Przez wbudowany terminal
Otwórz terminal w Codespaces (`Ctrl + ~` lub menu *Terminal ➔ New Terminal*) i uruchom:

```bash
# Uruchomienie wszystkich testów
npm test

# Uruchomienie poszczególnych zadań
npm run test:task1
npm run test:task2
npm run test:task3

# Podgląd raportu HTML
npm run test:report
```

---

## 📋 Lista zadań rekrutacyjnych

| Zadanie | Plik | Opis |
|---|---|---|
| **Zadanie 1** | `tests/tasks/task1_basics.spec.ts` | Formularze, dobór dobrych lokatorów (`getByRole`, `getByPlaceholder`) i asercje |
| **Zadanie 2** | `tests/tasks/task2_page_objects.spec.ts` + `src/pages/LoginPage.ts` | Refaktoryzacja i implementacja wzorca **Page Object Model (POM)** |
| **Zadanie 3** | `tests/tasks/task3_api_mocking.spec.ts` | Przechwytywanie i mockowanie zapytań HTTP (`page.route()`) |

---

## 💻 Alternatywa: Uruchomienie lokalne na własnym komputerze

Jeśli wolisz pracować lokalnie na swoim systemie:
```bash
# 1. Klonowanie repozytorium
git clone <URL_REPO>
cd <NAZWA_KATALOGU>

# 2. Instalacja zależności
npm install

# 3. Instalacja przeglądarki Chrome
npx playwright install chrome

# 4. Uruchomienie testów
npm test
```
