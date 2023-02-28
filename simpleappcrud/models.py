from django.db import models

class Users(models.Model):

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)

    def __str__(self):
        """
        String para representar el Objeto Modelo
        """
        return '%s, %s' % (self.first_name, self.last_name)