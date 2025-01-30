from celery import shared_task 
from django.core.mail import EmailMessage
from ProZdorovye.settings import FEEDBACK_EMAIL


@shared_task
def send_email_task(subject: str, message: str, resume_path: str = None) -> None:
    email = EmailMessage(
        subject=subject,
        body=message,
        to=(FEEDBACK_EMAIL,),
    )

    # Если передан путь к файлу, прикрепляем его
    if resume_path:
        email.attach_file(resume_path)

    email.send()