### Исследуем React lifecycle
### Содержание
1. [Жизненный цикл](#Жизненный-цикл)
1. [Создание и иницилизация компонента](#Создание-и-иницилизация-компонента)
    1. [constructor](#constructor)
    1. [static getDerivedStateFromProps](#static-getderivedstatefromprops)
    1. [render](#render)
    1. [componentDidMount](#componentdidmount)
1. [Обновление компонента](#Обновление-компонента)
1. [deprecated](#deprecated)

## Жизненный цикл
![lifecycle](lifecycle.jpeg)
___
## Создание и иницилизация компонента
1. constructor
1. getDerivedStateFromProps
1. componentDidMount

#### constructor
![constructor](imgs/constructor.png)

**Можно**
* Установите изначальное состояние компонента
* Задайте значений state
* “Привяжите” this к вашим функциям, если не используете стрелочные функции для методов

**Нельзя**
* Не выполняйте никаких сайд-эффектов

**Избегайте**
* Копирования свойств props в state, они будут доступны и так. Исключением можно считать случай, когда мы хотим игнорировать обновления props

#### static getDerivedStateFromProps
* Статическая функция (нет доступа к this)
* Синхронизируйте ваши props и state (замена устаревшему componentWillReceiveProps(nextProps))
* Возращает объект или null. Возвращаемый объект «вливается в существующее состояние компонента.
* Отрабатывает при инициализации компонента, изменении props или setState (с 16.4.2)

#### render
**Нужно**
* Определить, каким будет DOM

**Нельзя**
* Не выполняйте this.setState - приведет к зацикливанию

#### componentDidMount

## Обновление компонента

## deprecated

* componentWillMount
* componentWillReceiveProps(nextProps)
* componentWillUpdate(nextProps, nextState)




