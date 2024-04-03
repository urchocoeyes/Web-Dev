from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.product_list, name='product_list'),
    path('products/<int:id>/', views.get_product, name='get_product'),
    path('categories/', views.category_list, name='category_list'),
    path('categories/<int:id>/', views.get_category, name='get_category'),
    path('categories/<int:id>/products/', views.get_products_from_category, name='get_products_from_category'),
]
