## Семинар №1 - Юнит-тесты на JS

**Перед установкой убедитесь, что у вас установлены nvm и npm**

**Установить проект:**

- клонируем репозиторий
- переходим в папку проекта `cd s1-units`
- создаем ветку от мастера, в названии ветки ваша фамилия `git checkout -b <second name>`
- выполняем `npm i`

**После выполнения задания:**

- пушим все изменения в ветку
- создаем пулл-реквест в мастер

**Запустить проект:**

- `npm start`

**Запустить тесты:**

- прогон тестов `npm run test`
- покрытие `npm test -- --coverage`
- обновить снапшоты `npm test -- --updateSnapshot`

**Документация по тестам:**

https://create-react-app.dev/docs/running-tests

_jest:_

https://jestjs.io/docs/ru/getting-started

https://jestjs.io/docs/ru/expect

_enzyme:_

https://airbnb.io/enzyme/

https://medium.com/@acesmndr/testing-react-functional-components-with-hooks-using-enzyme-f732124d320a

**Условия сдачи практики:**

- написать юнит-тесты на каждую функцию в /utils и на компонент Order
- добиться покрытия не менее 80% по всем модулям
- соблюсти принципы автоматизации и не применить анти-паттерны
- скинуть пулл-реквест до 23:00 в день семинара и пройти ревью


