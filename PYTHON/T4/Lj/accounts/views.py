from django.shortcuts import render,redirect
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.contrib.auth import login,logout
from django.contrib.auth.decorators import login_required

# Create your views here.
def home(request):
    return render(request,'home.html')

def register(request):
    if request.method=="POST":
        form=UserCreationForm(request.POST)
        if form.is_valid():
            user=form.save()
            login(request,user)
            return redirect('home')
        else:
            return render(request, 'register.html', {'form': form})
    else:
        form=UserCreationForm()
        return render(request,'register.html',{'form':form})

def user_login(request):
    if request.user.is_authenticated:
        return redirect("home")
    
    if request.method=="POST":
        form=AuthenticationForm(request,data=request.POST)
        if form.is_valid():
            login(request,form.get_user())
            return redirect('home')
    else:
        form=AuthenticationForm()
    return render(request,'login.html',{'form':form})

def user_logout(request):
    logout(request)
    return redirect('home')