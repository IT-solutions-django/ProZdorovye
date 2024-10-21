from celery import shared_task 
from django.core.mail import EmailMessage
from ProZdorovye.settings import FEEDBACK_EMAIL


@shared_task
def send_email_task(subject: str, message: str) -> None:    
    email = EmailMessage(subject=subject,
                        body=message, 
                        to=(FEEDBACK_EMAIL,))
    email.send()