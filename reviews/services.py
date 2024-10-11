from typing import Any
import requests
from requests.adapters import Retry, HTTPAdapter
from .models import Review 
from .exceptions import UpdateReviewError, EmptyReviewList


def get_2gis_organization_reviews_info(api_key_2gis: str, organization_id: str, reviews_limit: int = 10) -> dict[str, Any]:
    """
    Получаем информацию об отзывах определенной организации
    :param api_key_2gis: 2GIS API KEY
    :param reviews_limit: Количество отзывов в ответе (default: 10);
    :param url: Ссылка на организацию 2 gis (пример: https://2gis.ru/vladivostok/firm/70000001021276207/tab/reviews);
    :return: Словарь с данными об отзывах организации
    """
    fetched_reviews = _fetch_reviews(organization_id, api_key_2gis)
    result = _get_needed_data_format(fetched_reviews, reviews_limit)
    return result


def _fetch_reviews(organization_id: str, api_key_2gis: str) -> dict[str, dict]:
    """
    Использую публичное API 2gis, получаем полную информацию об отзывах организации.
    :param api_key_2gis: 2GIS API KEY
    :param organization_id: ID организации 2gis
    :return: Словарь ответа 2gis API
    """

    session = requests.Session()
    retries = Retry(total=5, backoff_factor=1, status_forcelist=[502, 503, 504])
    session.mount("https://", HTTPAdapter(max_retries=retries))

    try:
        return session.get(
            f"https://public-api.reviews.2gis.com/2.0/branches/{organization_id}/reviews?"
            f"limit=50&is_advertiser=false&fields=meta.branch_rating&sort_by=date_edited&"
            f"key={api_key_2gis}&locale=ru_RU"
        ).json()
    except Exception:
        raise UpdateReviewError("Ошибка при запросе к 2gis API")


def _get_needed_data_format(
    fetched_data: dict[str, dict], reviews_limit: int = 10
) -> dict[str, Any]:
    """
    Фильтрация ненужных данных ответа и преобразование нужных в необходимый формат.
    :param fetched_data: Данные ответа от API 2gis;
    :param reviews_limit: Количество отзывов в ответе (default: 10);
    :return: Словарь с данными об отзывах организации
    """

    MIN_RATING = 4

    if len(fetched_data["reviews"]) == 0:
        raise EmptyReviewList("Список отзывов пуст")
    
    return {
        "reviews": [
            {
                "stars": review["rating"],
                "created_at": review["date_edited"] or review["date_created"],
                "text": review["text"],
            }
            for review in fetched_data["reviews"]
            if review["rating"] >= MIN_RATING
        ][:reviews_limit],
    }
