import os

# Твои пары URL
old_urls_file = "old_urls.txt"
new_urls_file = "new_urls.txt"

# Прочитать файлы
with open(old_urls_file, "r", encoding="utf-8") as f:
    old_urls = [line.strip() for line in f if line.strip()]

with open(new_urls_file, "r", encoding="utf-8") as f:
    new_urls = [line.strip() for line in f if line.strip()]

# Проверка
if len(old_urls) != len(new_urls):
    print("Кол-во строк не совпадает!")
    exit(1)

# Генерация
for old, new in zip(old_urls, new_urls):
    # Извлечь только путь
    path = old.split("/", 3)[-1]  # после домена
    dir_name = path.strip("/")

    # Создать папку
    os.makedirs(dir_name, exist_ok=True)

    # HTML шаблон
    html = f"""
    <!DOCTYPE html>
    <html lang="ru">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="refresh" content="0; url={new}">
      <title>Redirecting...</title>
    </head>
    <body>
      <p>Redirecting...</p>
    </body>
    </html>
    """

    # Записать файл
    with open(f"{dir_name}/index.html", "w", encoding="utf-8") as f:
        f.write(html.strip())

print("✅ Готово: HTML-файлы с редиректами созданы!")

