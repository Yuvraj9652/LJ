from django.shortcuts import render,redirect,get_object_or_404
from .models import Players

# Create your views here.
def home(request):
    # players=Players.objects.all()
    query = request.GET.get('p')
    if query:
        data = Players.objects.filter(name__icontains=query)
    else:
        data = Players.objects.all()
    return render(request, 'home.html', {"p": data})

def welcome(request):
    return render(request,'welcome.html')

def addp(request):
    if request.method=="POST":
        name=request.POST['name']
        innings=request.POST['innings']
        runs=request.POST['runs']
        Players.objects.create(name=name,innings=innings,runs=runs)
        return redirect('home')
    else:
        return render(request,'add.html')

def editp(request,id):
    players=get_object_or_404(Players,id=id)
    if request.method=="POST":
        players.name=request.POST['name']
        players.innings=request.POST['innings']
        players.runs=request.POST['runs']
        players.save()
        return redirect('home')
    else:
        return render(request,'edit.html',{'p':players})
    

def deletep(request,id):
    players=get_object_or_404(Players,id=id)
    players.delete()
    return redirect('home')