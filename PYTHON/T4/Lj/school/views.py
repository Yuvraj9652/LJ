from django.shortcuts import render,get_object_or_404,redirect
from .models import Evaluation

# Create your views here.
def home(request):
    data = Evaluation.objects.all()
    return render(request,'school/home.html',{"l":data})

def info(request,id):
    fac = get_object_or_404(Evaluation,id=id)
    return render(request,'school/info.html',{'f':fac})

def adddata(request):
    if request.method=="POST":
        # name=request.POST['name'](other way)
        name=request.POST.get("name")
        course=request.POST.get("course")
        score=request.POST.get("score")
        email=request.POST.get("email")

        Evaluation.objects.create(
            name=name,
            course=course,
            score=score,
            email=email
        )
        return redirect('home')
    return render(request,'school/add.html')

def update(request,id):
    fac=get_object_or_404(Evaluation,id=id)

    if request.method=="POST":
        fac.name=request.POST.get("name")
        fac.course=request.POST.get("course")
        fac.score=request.POST.get("score")
        fac.email=request.POST.get("email")

        fac.save()
        return redirect('home')
    return render(request,'school/update.html',{'f':fac})

def delete(request,id):
    fac=Evaluation.objects.get(id=id)
    fac.delete()
    return redirect('home')