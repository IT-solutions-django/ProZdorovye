import os
from celery import shared_task 
from dotenv import load_dotenv
from .models import Review 
from .services import get_2gis_organization_reviews_info
from .exceptions import UpdateReviewError, EmptyReviewList


load_dotenv()


@shared_task(bind=True, max_retries=5)
def update_reviews_task(self) -> None: 
    gis_api_key = os.getenv('2GIS_API_KEY')
    organization_id = os.getenv('2GIS_ORGANIZATION_ID')

    try:
        info = get_2gis_organization_reviews_info(
            api_key_2gis=gis_api_key, 
            organization_id=organization_id,
        )
    except UpdateReviewError as e: 
        raise self.retry(exc=e, countdown=10)
    except EmptyReviewList as e: 
        raise self.retry(exc=e, countdown=10)
    
    Review.objects.all().delete()
    for review in info['reviews']: 
        new_review = Review(
            rate=review['stars'], 
            content=review['text'], 
            created_at=review['created_at']
        )
        new_review.save()
