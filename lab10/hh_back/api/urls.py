from django.urls import path
from .views import CompanyListView, CompanyDetailView, VacancyListView, VacancyDetailView, TopTenVacanciesView

urlpatterns = [
    path('companies/', CompanyListView.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyDetailView.as_view(), name='company-detail'),
    path('companies/<int:pk>/vacancies/', VacancyListView.as_view(), name='company-vacancies'),  # Updated URL pattern
    path('vacancies/', VacancyListView.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', TopTenVacanciesView.as_view(), name='top-ten-vacancies'),
]
