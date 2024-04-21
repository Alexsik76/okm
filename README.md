# okm
## Основи комп'ютерних мереж

### Демонстрація роботи мереж в середовищі Docker.

#### Котроткий опис:

Створюються 3 контейнери, які використовують одну мережу. В контейнери на базі Ubuntu встановлюються пакунки для команди ```ping``` та ```curl```.
Третій контейнер з образом ```Nginx``` запускає вебсервер та відображає сторінку ```index.html``` з папки ```html```, яка монтується у контейнер.

#### Значення основних команд:

##### Dockerfile:
- ```FROM ubuntu:latest``` - який образ використовуєтся для створення контейнера:
https://hub.docker.com/_/ubuntu/ ;
- ```RUN apt update && apt install -y inetutils-ping curl``` - запустити оновлення інформації про пакунки після чого встановити два пакунки. (ключ ```-y``` означає мовчазну згоду на встановлення);


##### docker-compose.yml:
У файлі мають значення відступи. То ж ```services:``` відкриває секцію опису сервісів. Їх 3 (cont1, cont2, web)

```build: .``` означає, що для створення контейнера буде використано ```Dockerfile```, який знаходиться у цій же директорії.
Якщо для контейнера достатньо налаштувань базового образу, тоді використовується команда ```image: <назва образу>```.
Перші два контейнери не передбачені бути доступними ззовні мережі. Натомість у третьому ми хотіли б мати доступ до сервісу, який доступний на порту 80. Тому потрібно "відкрити" цей порт назовні. Для цього слугує команда ``` ports:
    - "80:80"```.

Отже, третій контейнер запускає вебсервер ```nginx```, який може ослуговувати HTTP запити. У даному випадку він просто повертає у відповідь на ці запити просту HTML сторінку.
