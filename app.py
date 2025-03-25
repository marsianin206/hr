import subprocess
import sys

def run_nodejs_app():
    try:
        # Запускаем Node.js с файлом app.js
        process = subprocess.Popen(
            ["node", "app.js"],  # Команда для запуска
            stdout=subprocess.PIPE,  # Перенаправляем вывод в Python
            stderr=subprocess.PIPE,  # Перенаправляем ошибки в Python
            text=True,  # Вывод в виде текста, а не байтов
            shell=False  # Без использования shell (безопаснее)
        )

        # Читаем вывод и ошибки в реальном времени
        while True:
            # Читаем стандартный вывод
            output = process.stdout.readline()
            if output == '' and process.poll() is not None:
                break
            if output:
                print(output.strip())

            # Читаем ошибки
            error = process.stderr.readline()
            if error:
                print(f"Ошибка: {error.strip}", file=sys.stderr)

        # Проверяем код завершения процесса
        return_code = process.poll()
        if return_code != 0:
            print(f"Процесс завершился с ошибкой, код: {return_code}")
        else:
            print("Бот успешно завершил работу")

    except FileNotFoundError:
        print("Ошибка: Node.js не найден. Убедитесь, что Node.js установлен и доступен в PATH.")
    except Exception as e:
        print(f"Произошла ошибка при запуске: {e}")

if __name__ == "__main__":
    try:
        run_nodejs_app()
    except KeyboardInterrupt:
        print("\nЗапуск бота прерван пользователем")
        sys.exit(0)