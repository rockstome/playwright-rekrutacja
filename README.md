# 🎯 Playwright QA / SDET Recruitment Challenge

Witaj w repozytorium rekrutacyjnym! Projekt zawiera **10 praktycznych zadań** sprawdzających wiedzę i umiejętności z zakresu automatyzacji testów w **TypeScript** przy użyciu **Playwright** i przeglądarki **Google Chrome**.

Zadania są ułożone progresywnie – od prostych poprawek selektorów i regexów, przez pisanie logiki formularzy i Page Object Model, aż po mockowanie API, parametryzację oraz obsługę okien dialogowych i ramek iFrame.

---

## ⚡ Jak uruchomić to środowisko w 100% w przeglądarce?

Nie musisz instalować niczego na swoim komputerze (Node.js, Git ani przeglądarki)!

1. Kliknij poniższy przycisk:

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/rockstome/playwright-rekrutacja)

2. Po chwili w przeglądarce otworzy się gotowe środowisko **VS Code w chmurze** z zainstalowanym Node.js, Google Chrome i rozszerzeniem Playwright.

---

## 🧪 Jak uruchamiać zadania testowe?

### Sposób 1: Przez interfejs graficzny VS Code (Testing UI)
* W lewym menu kliknij ikonę **Testing** (probówka 🧪).
* Wybierz zadanie i kliknij zielony przycisk **▶** (Run).

### Sposób 2: Przez wbudowany terminal
Otwórz terminal w Codespaces (`Ctrl + ~` lub menu *Terminal ➔ New Terminal*) i uruchamiaj poszczególne zadania:

```bash
# Uruchamianie konkretnego zadania:
npm run test:task01
npm run test:task02
npm run test:task03
npm run test:task04
npm run test:task05
npm run test:task06
npm run test:task07
npm run test:task08
npm run test:task09
npm run test:task10

# Uruchomienie wszystkich zadań:
npm test

# Podgląd raportu HTML:
npm run test:report
```

---

## 📋 Spis 10 Zadań Rekrutacyjnych

| Nr | Poziom | Plik zadania | Zagadnienie / Opis |
|---|:---:|---|---|
| **01** | 🟢 Łatwy | `tests/tasks/task01_fix_regex.spec.ts` | **Asercje i Regex:** Poprawa błędnego wyrażenia regularnego w `toHaveTitle`. |
| **02** | 🟢 Łatwy | `tests/tasks/task02_fix_locator.spec.ts` | **Selektory:** Poprawa niedziałającego selektora na rekomendowany `getByRole`. |
| **03** | 🟡 Średni | `tests/tasks/task03_fill_form.spec.ts` | **Formularz & UI:** Napisanie kroków dodawania elementów do listy i zaznaczania checkboxa. |
| **04** | 🟡 Średni | `tests/tasks/task04_dynamic_loading.spec.ts` | **Asynchroniczność:** Obsługa dynamicznego ładowania i opóźnionego pojawiania się elementów w DOM. |
| **05** | 🟡 Średni | `tests/tasks/task05_pom_methods.spec.ts`<br>+ `src/pages/LoginPage.ts` | **Page Object Model:** Implementacja brakujących metod i lokatorów w klasie `LoginPage`. |
| **06** | 🟡 Średni | `tests/tasks/task06_create_page_object.spec.ts`<br>+ `src/pages/CartPage.ts` | **Tworzenie POM:** Zaprojektowanie od podstaw klasy `CartPage` do zarządzania elementami. |
| **07** | 🟡 Średni | `tests/tasks/task07_api_mocking.spec.ts` | **Mockowanie API:** Przechwycenie zapytania sieciowego (`page.route`) i podmiana odpowiedzi JSON. |
| **08** | 🟡 Średni | `tests/tasks/task08_api_request.spec.ts` | **Testy API:** Wykonanie bezpośredniego zapytania POST (`request.post`) i walidacja odpowiedzi HTTP/JSON. |
| **09** | 🟡 Średni | `tests/tasks/task09_data_driven.spec.ts` | **Parametryzacja:** Stworzenie testu sterowanego danymi (Data-Driven) w pętli dla wielu scenariuszy. |
| **10** | 🔴 Trudny | `tests/tasks/task10_dialogs_and_frames.spec.ts` | **Dialogi i iFrames:** Obsługa okna JavaScript Prompt (`page.on('dialog')`) oraz interakcja wewnątrz ramki `frameLocator`. |

---

## 💻 Uruchomienie lokalne (opcjonalnie)

Jeśli wolisz pracować na własnym komputerze:
```bash
git clone https://github.com/rockstome/playwright-rekrutacja.git
cd playwright-rekrutacja
npm install
npm run test:task01
```
