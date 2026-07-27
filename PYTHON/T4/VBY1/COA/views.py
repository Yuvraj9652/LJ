from django.shortcuts import render,redirect,get_object_or_404
from .models import FB
# Create your views here.
def home(request):
    data=FB.objects.all().order_by('gp')
    return render(request,'home.html',{'data':data})

def add(request):
    if request.method=="POST":
        name=request.POST['name']
        email=request.POST['email']
        ipe=request.POST['ipe']
        gp=request.POST['gp']
        fb=FB(name=name,email=email,ipe=ipe,gp=gp)
        fb.save()
        return redirect('home')
    return render(request,'add.html')

def edit(request,name):
    data=get_object_or_404(FB,name=name)

    if request.method=="POST":
        name=request.POST['name']
        email=request.POST['email']
        ipe=request.POST['ipe']
        gp=request.POST['gp']
        fb=FB(name=name,email=email,ipe=ipe,gp=gp)
        fb.save()
        return redirect('home')
    return render(request,'edit.html')

def delete(request,name):
    fac=FB.objects.get(name=name)
    fac.delete()
    return redirect('home')