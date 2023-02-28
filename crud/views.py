from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import Users
from .forms import UserForm
import datetime


def create(request):
    formulario = UserForm(request.POST or None, request.FILES or None)
    if(formulario.is_valid()):
        formulario.save()
        return redirect("show")
  
    return render(request, "pages/createUser.html", {"formulario": formulario})

def show(request):
    usuarios = Users.objects.all()
    print(usuarios)
    return render(request, "pages/queryUser.html", {'users': usuarios})

def update(request, id):
    user = Users.objects.get(id=id)
    formulario = UserForm(request.POST or None, request.FILES or None, instance=user)
    if formulario.is_valid() and request.method == 'POST':
        formulario.save()
        return redirect("show")

    return render(request, "pages/updateUser.html", {'formulario': formulario, 'user': user})

def userdelete(request, id):
    user = Users.objects.get(id=id)
    user.delete()
    return redirect("show")

def find(request):
    email = request.GET.get("email")
    user = Users.objects.filter(email=email)
    print(user)
    return render(request, "pages/queryUser.html", {'users': user, 'operation': "find"})