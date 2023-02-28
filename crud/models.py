from django.db import models

# Create your models here.
class Users(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=255, verbose_name="Nombres")
    last_name = models.CharField(max_length=255, verbose_name="Apellidos")
    email = models.CharField(max_length=255, verbose_name="Correo", unique=True)
    birthdate = models.DateField(verbose_name="Fecha de Nacimiento")
    #photo_profile = models.TextField(verbose_name="Foto")
    photo_profile = models.ImageField(verbose_name="Foto", upload_to='static/imagenes/', null=True, blank=True)

    def __str__(self):
        fila = self.first_name + " " + self.last_name
        return fila
    
    def delete(self, using=None, kepp_parents=False):
        self.photo_profile.storage.delete(self.photo_profile.name)
        super().delete()