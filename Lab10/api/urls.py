#fbv
"""from django.urls import path
from .views.fbv import products_list, product_detail

urlpatterns = [
    path('products/', products_list),
    path('products/<int:product_id>/', product_detail),
]"""
#cbv
"""
from django.urls import path
from .views.cbv import ProductListAPIView, ProductDetailAPIView

urlpatterns = [
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
]"""
#mixins
"""
from django.urls import path
from .views.mixins import ProductListAPIView, ProductDetailAPIView

urlpatterns = [
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
]"""
#generics
from django.urls import path
from .views.generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView
)

urlpatterns = [
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),

    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view()),
]