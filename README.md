## Семинар №1 - Юнит-тесты на JS

**Перед установкой убедитесь, что у вас установлены nvm и npm**

**Установить проект:**

- форкаем репозиторий
- клонируем и переходим в папку проекта `cd js-units`
- выполняем `npm i`

**После выполнения задания:**

- пушим написанные тесты
- создаем пулл-реквест и скидываем в телеграм @VictoriaOtm

**Запустить проект:**

- `npm start`

**Запустить тесты:**

- прогон тестов `npm run test`
- покрытие `npm test -- --coverage --watchAll=false`
- обновить снапшоты `npm test -- --updateSnapshot`

**Документация по тестам:**

https://create-react-app.dev/docs/running-tests

_jest:_

https://jestjs.io/docs/ru/getting-started

https://jestjs.io/docs/ru/expect

_jest моки:_

https://jestjs.io/docs/ru/bypassing-module-mocks

_enzyme:_

https://airbnb.io/enzyme/

https://medium.com/@acesmndr/testing-react-functional-components-with-hooks-using-enzyme-f732124d320a

**Условия сдачи практики:**

1. Написать юнит-тесты на каждую функцию в sortOrders
    - используйте [test.each](https://jestjs.io/docs/en/api#testeachtablename-fn-timeout) для одинаковых выходных значений
2. Замокать функцию getDate и написать юнит-тесты на компонент Order
3. Добиться покрытия не менее 90% по всем модулям
4. Соблюсти принципы автоматизации и не применить анти-паттерны
5. Скинуть пулл-реквест до конца семинара и пройти ревью


