const { Highrise } = require("highrise-js-sdk");
// Импортируем SDK для работы с Highrise API

const handleEvents = require("./src/handlers/handleEvents");
// Импортируем обработчик событий

const config = require("./config/config");
// Импортируем конфигурацию бота

// Создаем экземпляр бота с токеном авторизации и идентификатором комнаты
const bot = new Highrise(config.authorization.token, config.authorization.room);

// Привязываем дополнительные параметры из конфигурации к объекту бота
bot.config = config.config; // Основные настройки
bot.perms = config.permissions; // Разрешения
bot.auth = config.authorization; // Данные авторизации
bot.emojis = config.emojis; // Эмодзи
bot.logs = config.loggers; // Логгеры
bot.settings = config.settings; // Прочие настройки

require('colors');
// Подключаем библиотеку для работы с цветным выводом в консоли

handleEvents(bot);
// Подключаем обработчик событий для бота

// Если в настройках включен cmdChat, бот будет принимать команды из консоли
if (bot.settings.cmdChat) {
  let y = process.openStdin();
  // Открываем поток ввода из консоли

  y.addListener("data", res => {
    // Добавляем обработчик событий для ввода данных
    let x = res.toString().trim().split(/ +/g);
    // Преобразуем введенные данные в строку, удаляем лишние пробелы и разбиваем на массив слов

    bot.message.send(x.join(" "));
    // Отправляем сообщение в чат, объединяя массив слов в строку
  });
}
