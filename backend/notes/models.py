""" Model for the Note object """

from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    """Model for the Note object"""

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
