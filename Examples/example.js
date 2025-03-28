/**
 * Описание модуля:
 * Этот модуль содержит команду 'change-me', которая выводит 'Hello world!' в качестве ответа.
 *
 * Детали команды:
 * - Имя: change-me
 * - Описание: Выводит 'Hello world!'
 * - Использование: change-me
 * - Алиасы: change-me, change-me
 * - Только для разработчиков: Нет (может использоваться всеми)
 * - Отключена: Нет (включена)
 * - Задержка: 5 секунд
 */

module.exports = {
  name: 'change-me', // Имя команды
  description: 'change-me', // Краткое описание команды
  usage: 'change-me', // Пример использования команды
  aliases: ['change-me', 'change-me'], // Список алиасов (других названий команды)
  developer: false, // Указывает, доступна ли команда только разработчикам
  disabled: false, // Указывает, отключена ли команда
  cooldown: 5, // Задержка перед повторным использованием команды (в секундах)
  execute(bot, user, args) {
    /**
     * Выполняет команду 'change-me'.
     *
     * @param {Bot} bot - Экземпляр бота.
     * @param {User} user - Пользователь, вызвавший команду.
     * @param {Array<string>} args - Аргументы команды.
     */
    bot.message.send('Hello world!'); // Отправляет сообщение 'Hello world!' в чат
  },
};
