### Исследуем React lifecycle
### Содержание
1. [Жизненный цикл](#жизненный-цикл)
1. [Создание и иницилизация компонента](#создание-и-иницилизация-компонента)
    1. [constructor](#constructor)
    1. [static getDerivedStateFromProps](#static-getderivedstatefromprops)
    1. [render](#render)
    1. [componentDidMount](#componentdidmount)
1. [Обновление компонента](#обновление-компонента)
    1. [shouldComponentUpdate](#shouldcomponentupdate)
    1. [getSnapshotBeforeUpdate](#getsnapshotbeforeupdate)
    1. [componentDidUpdate](#componentdidupdate)
1. [componentDidCatch](#componentdidcatch)
1. [deprecated](#deprecated)
1. [Полезные ссылки](#полезные-ссылки)

## Жизненный цикл
![lifecycle](lifecycle.jpeg)
---
## Создание и иницилизация компонента
1. constructor
1. getDerivedStateFromProps
1. componentDidMount
---
#### constructor
![constructor](imgs/constructor.png)

**Можно**
* Установите изначальное состояние компонента
* Задайте значение state
* “Привяжите” ```this``` к вашим функциям, если не используете стрелочные функции для методов
* Создайте "связи" для взаимодействия с ```DOM``` узлами или элементами React, определяемыми в методе ```render```.

**Нельзя**
* Не выполняйте никаких сайд-эффектов

**Избегайте**
* Копирования свойств ```props``` в ```state```, они будут доступны и так. Исключением можно считать случай, когда мы хотим игнорировать обновления ```props```
---
#### static getDerivedStateFromProps(props, state)
* Статическая функция (нет доступа к ```this```)
* Синхронизируйте ваши ```props``` и ```state``` (замена устаревшему componentWillReceiveProps(nextProps))
* Возращает объект или ```null```. Возвращаемый объект «вливается в существующее состояние компонента.
* Отрабатывает при инициализации компонента, изменении props или setState (с ```16.4.2```)
---------------------
#### render
**Нужно**
* Определить, каким будет ```DOM```

**Нельзя**
* Не выполняйте ```this.setState``` - приведет к зацикливанию
---
#### componentDidMount
Сигнализирует о том, что компонент и все его дочерние компоненты отрисовались без ошибок
**Можно**
* Установить счетки/"листенеры"...
* Выполнить сайд-эффекты (Вызовы AJAX и т.д.)

**Не рекомендуется**
* Не стоит вызывать ```this.setState```, так как это приведет к перерисовке

## Обновление компонента

#### shouldComponentUpdate

#### getSnapshotBeforeUpdate

#### componentDidUpdate

## componentDidCatch

## deprecated

* componentWillMount
* componentWillReceiveProps(nextProps)
* componentWillUpdate(nextProps, nextState)

Рекомендуется с версии ```16.3``` использовать эти методы жизненного цикла с префиксом ```UNSAFE```

* UNSAFE_componentWillMount
* UNSAFE_componentWillUpdate
* UNSAFE_componentWillReceiveProps


## Полезные ссылки

* [Understanding React — React 16.3 + Component life-cycle](https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705)
* [UNSAFE_componentWillReceiveProps()](https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops)








