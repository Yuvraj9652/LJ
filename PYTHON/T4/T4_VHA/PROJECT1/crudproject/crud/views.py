from django.shortcuts import render,redirect,get_object_or_404
from .models import Product
# Create your views here.

def product_list(request):
    query = request.GET.get('q')
    products = Product.objects.all()
    if query:
        products = products.filter(name__icontains=query)
    return render(request, 'crud/product_list.html', {'products': products})

def product_detail(request, pk):
    product = get_object_or_404(Product, pk=pk)
    return render(request, 'crud/product_detail.html', {'product': product})
def product_create(request):
    if request.method == 'POST':
        Product.objects.create(
        name=request.POST['name'],
        price=request.POST['price'],
        quantity=request.POST['quantity'],
        description=request.POST['description']
        )
        return redirect('product_list')
    return render(request, 'crud/product_form.html')

def product_edit(request, pk):
    product = get_object_or_404(Product, pk=pk)
    if request.method == 'POST':
        product.name = request.POST['name']
        product.price = request.POST['price']
        product.quantity = request.POST['quantity']
        product.description = request.POST['description']
        product.save()
        return redirect('product_list')
    return render(request, 'crud/product_form.html', {'product': product})
def product_delete(request, pk):
    product = get_object_or_404(Product, pk=pk)
    product.delete()
    return redirect('product_list')