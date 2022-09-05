## Testen met Jest

[x] Je weet hoe je een `package.json` maakt en wat er in moet
[x] Je weet hoe je met behulp van Jest automated tests kunt opzetten
[x] Je weet hoe je een test in drie delen onderscheidt
    - Arrange (klaarzetten)
    - Act (handelen)
    - Assert (beweren)
[] Je weet hoe je de Jest expect functie gebruikt
[] Je weet hoe je de code loskoppelt van de test

## stappenplan
1. Maak een package.json aan door npm te initialiseren (`npm init`)
2. Installeer jest met het commando `npm install jest --save-dev`
3. Voeg de node_modules toe aan de .gitignore file
4. Voeg `npx jest` toe aan de **test** key in de package.json en `npx jest --watch` aan de **test:watch** key
5. Maak een map genaamd `__test__` en stop daar jouw testbestand in (`index.test.js`)
6. Roep daarin de `test`-functie aan en geef deze een anonieme functie mee
7. Test altijd eerst even of dit werkt met een `console.log` en voer het test commando uit: `npm run test'
8. ARRANGE: zet de waardes klaar waar je mee gaat testen
9. ACT: voer de functie uit en geef de gecontroleerde waardes daaraan mee
10. ASSERT: maak een bewering over de verwachte uitkomst en vergelijk dit met de werkelijke uitkomst