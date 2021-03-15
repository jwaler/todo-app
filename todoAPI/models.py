from django.db import models

# Create your models here.


class Tasks(models.Model):
    title = models.CharField(max_length=30)
    completed = models.BooleanField(default=False, blank=True, null=True)

    def __str__(self):
        return self.title
