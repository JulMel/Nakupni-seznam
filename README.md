# Nákupní seznam 

Tato aplikace slouží k zadávání položek na nákupní seznam prostřednictvím formuláře.  
Po přidání položky, případně při odeslání prázdného formuláře, se uživateli krátce zobrazí upozornění formou notifikace.  
Projekt vznikl v rámci kurzu Reactu a byl zaměřen na efektivnější správu stavů pomocí `useReducer`.

<img width="1418" alt="React10-Nákupní-seznam" src="https://github.com/user-attachments/assets/1ba3b2b2-72c7-47ce-be4c-9833e6499d82" />

---

## Funkce
- Zadání nové položky prostřednictvím formuláře
- Dočasné zobrazení notifikace po přidání nebo chybě
- Vypsání zadaných položek v seznamu
- Možnost odebrání jednotlivé položky

---

## Co jsem se naučila
- Správa komplexnějšího stavu pomocí `useReducer`
- Zpracování akcí (`dispatch`) a tvorba vlastního reduceru
- Práce s objekty typu `action` a jejich typy (`type`, `payload`)
- Dynamické vykreslování seznamu pomocí `map`
- Podmíněné vykreslení komponenty (notifikace)
- Práce s `useEffect` pro automatické zavírání upozornění
- Strukturování aplikace do samostatných komponent (Modal)

---

## Použité technologie
- React
- JavaScript
- CSS

---

## Jak spustit projekt

```bash
git clone https://github.com/JulMel/Nakupni-seznam.git
cd nakupni-seznam
npm install
npm start
