from django.shortcuts import render
from .models import Product, Category
from django.http import JsonResponse


def product_list(request):
    products = Product.objects.all()
    data = [product.to_json() for product in products]
    return JsonResponse(data, safe=False)


def get_product(request, id):
    try:
        product = Product.objects.get(id=id)
        data = product.to_json()
        return JsonResponse(data)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)})


def category_list(request):
    categories = Category.objects.all()
    data = [category.to_json() for category in categories]
    return JsonResponse(data, safe=False)


def get_category(request, id):
    try:
        category = Category.objects.get(id=id)
        data = category.to_json()
        return JsonResponse(data)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})


def get_products_from_category(request, id):
    try:
        category = Category.objects.get(id=id)
        products = category.product_set.all()
        data = [product.to_json() for product in products]
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})