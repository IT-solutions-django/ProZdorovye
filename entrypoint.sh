#!/bin/sh

echo "Waiting for PostgreSQL..."
while ! nc -z db 5432; do
  sleep 0.5
done
sleep 10
echo "PostgreSQL is up!"

echo "Waiting for Redis..."
while ! nc -z redis 6379; do
  sleep 0.5
done
echo "Redis is up!"

python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput

celery -A ProZdorovye worker -l info -P solo &
celery -A ProZdorovye beat -l info &
celery -A ProZdorovye flower -l info &
gunicorn ProZdorovye.wsgi:application --bind 0.0.0.0:8000 &

wait