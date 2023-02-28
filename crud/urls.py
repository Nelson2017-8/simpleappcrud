from django.urls import path
from . import views
#from django.conf import settings
#from django.contrib.staticfiles.urls import static

urlpatterns = [
    path('',  views.create, name="create"),
    path('user/show',  views.show, name="show"),
    path('user/delete/<int:id>',  views.userdelete, name="userdelete"),
    path('user/update/<int:id>',  views.update, name="update"),
    path('user/find',  views.find, name="find"),
] 
#+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)