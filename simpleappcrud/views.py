from django.http import HttpResponse
from django.shortcuts import render
import datetime


def index2(response):
    return HttpResponse("<h1>Hola mundo</h1>")



def index(request):
    now = datetime.datetime.now()
    return render(request, 'index.html', {'current_date': now})