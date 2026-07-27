from django.shortcuts import render,redirect,get_object_or_404
from .models import FB 


def home(request):
    name=request.GET.get("name")
    email=request.GET.get("email")
    ipe=request.GET.get("ipe")
    gp=request.GET.get("gp")
    fb=FB.objects.all().order_by("gp")
    if name:
        fb=fb.filter(name__icontains=name)
    if ipe:
        fb=fb.filter(ipe=ipe)
    if gp:
        fb=fb.filter(gp=gp)
    return render(request,"data.html",{"data":fb})
def add(request):
    if request.method=="POST":
        name=request.POST["name"]
        email=request.POST["email"]
        ipe=request.POST["ipe"]
        gp=request.POST["gp"]
        fb=FB.objects.create(name=name,email=email,ipe=ipe,gp=gp)
        return redirect("home")
    return render(request,"add.html")
def edit(request,name):
    fb=get_object_or_404(FB,name=name)
    if request.method=="POST":
        fb.name=request.POST["name"]
        fb.email=request.POST["email"]
        fb.ipe=request.POST["ipe"]
        fb.gp=request.POST["gp"]
        fb.save()
        return redirect("home")
    return render(request,"edit.html",{"fb":fb})

def delete(request,name):
    fac=FB.objects.get(name=name)
    fac.delete()
    return redirect('home')
