from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def nav(request):
    name="Yuvraj"
    score=10
    l=["Python",25,"Django","JavaScript"]
    return render(request, 'nav.html', {'name':name,'s':score,'l':l})