# Highrise JS Bot Template

> **Этот шаблон Highrise поможет вам начать работу с вашим первым ботом для Highrise.**

---

## **⚙️ Установка**
```bash
npm install
# или запустите install.bat
```

---

## **📥 Клонирование репозитория**
```bash
git clone https://github.com/sphinixFTW/highrise-js-bot.git
```

---

## **✨ Возможности**

- Удобный интерфейс.
- Дизайн, подходящий для начинающих.
- Продвинутые обработчики команд и событий.
- Настраиваемые разрешения и задержки для команд.
- Гибкий конфигурационный файл для легких изменений.

---

## **🎐 Использование**
Для запуска бота выполните:
```bash
node app.js
# или
node .
# или запустите start.bat
```

---

## **📂 Пример структуры файлов**

### Пример команды
Путь: `src/commands/category/file.js`
```js
module.exports = {
  name: 'example',
  description: 'Пример команды',
  usage: 'example',
  aliases: ['ex'],
  cooldown: 5,
  execute(bot, user, args) {
    bot.message.send('Это пример команды!');
  },
};
```

---

## **📜 Список команд**

### **Информационные команды**
| Команда       | Описание                     | Пример использования |
|---------------|------------------------------|-----------------------|
| `ping`        | Проверить пинг бота          | `ping`               |
| `uptime`      | Узнать время работы бота     | `uptime`             |
| `wallet`      | Узнать содержимое кошелька   | `wallet`             |

### **Развлекательные команды**
| Команда       | Описание                     | Пример использования |
|---------------|------------------------------|-----------------------|
| `dance`       | Выполнить случайный танец    | `dance`              |
| `dance @user` | Выполнить танец на игроке    | `dance @username`    |

### **Модераторские команды**
| Команда       | Описание                     | Пример использования |
|---------------|------------------------------|-----------------------|
| `come`        | Призвать бота к себе         | `come`               |
| `summon`      | Призвать игрока к себе       | `summon @username`   |
| `tpto`        | Телепортироваться к игроку   | `tpto @username`     |
| `print`       | Вывести данные о пользователе| `print @username`    |

### **Приватные команды**
| Команда       | Описание                     | Пример использования |
|---------------|------------------------------|-----------------------|
| `reload`      | Перезагрузить команду        | `reload category command` |

---

## **📌 Примечание**

Вы можете свободно изменять этот пакет в соответствии с вашими потребностями. Однако, пожалуйста, не заявляйте его как свой. Уважайте усилия, вложенные в создание и распространение этого ресурса.

---

## **📖 Лицензия**
Этот проект распространяется под лицензией MIT. Вы можете использовать его в своих проектах, но не забывайте указывать авторство.