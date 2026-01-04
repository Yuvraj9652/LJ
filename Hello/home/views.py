from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User
from django.contrib import messages
# Create your views here.
def home(request):
    return render(request, "home.html")

def loginUser(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect("dashboard")
        else:
            return render(request, "login.html", {"error": "Invalid credentials"})
        # Add your authentication logic here
    return render(request, "login.html")

@login_required
def logoutUser(request):
    logout(request)
    return redirect("home")

@login_required
def dashboard(request):
    return render(request, "dashboard.html")



def signup(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        password2 = request.POST.get("password2")
        email = request.POST.get("email")

        # Password match check
        # if password != password2:
        #     return render(request, "signup.html", {
        #         "error": "Passwords do not match"
        #     })
        if password != password2:
            messages.error(request, "Passwords do not match")
            return redirect("signup")
        if len(password) < 6:
            messages.error(request, "Password must be at least 6 characters")
            return redirect("signup")

        # Username uniqueness
        if User.objects.filter(username=username).exists():
            return render(request, "signup.html", {
                "error": "Username already exists"
            })
        if User.objects.filter(email=email).exists():
            return render(request, "signup.html", {
                "error": "Email already registered"
            })

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )
        messages.success(request, "Account created successfully")
        login(request, user)
        return redirect("dashboard")

    return render(request, "signup.html")
