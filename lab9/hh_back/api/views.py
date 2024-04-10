from django.shortcuts import render
from django.http import JsonResponse
from .models import Company, Vacancy

# List of all Companies
def list_companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        data = [{'id': company.id, 'name': company.name, 'description': company.description, 'city': company.city, 'address': company.address} for company in companies]
        return JsonResponse(data, safe=False) # safe=False allows the data (which is a list) to be serialized into JSON without raising an error

# Get info about one Company
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse({'ERROR': 'Company not found'}, status=404)

    data = {'id': company.id, 'name': company.name, 'description': company.description, 'city': company.city, 'address': company.address}
    return JsonResponse(data)

# List of Vacancies by Company
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse({'ERROR': 'Company not found'}, status=404)

    vacancies = company.vacancies.all()
    data = [{'id': vacancy.id, 'name': vacancy.name, 'description': vacancy.description, 'salary': vacancy.salary} for vacancy in vacancies]
    return JsonResponse(data, safe=False)

# List of all Vacancies
def list_of_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        data = [{'id': vacancy.id, 'name': vacancy.name, 'description': vacancy.description, 'salary': vacancy.salary, 'company': vacancy.company_id} for vacancy in vacancies]
        return JsonResponse(data, safe=False)

# Get one Vacancy detail
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist:
        return JsonResponse({'ERROR': 'Vacancy not found'}, status=404)

    data = {'id': vacancy.id, 'name': vacancy.name, 'description': vacancy.description, 'salary': vacancy.salary, 'company': vacancy.company_id}
    return JsonResponse(data)

# List of top 10 vacancies sorted by decreasing salary
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = [{'id': vacancy.id, 'name': vacancy.name, 'description': vacancy.description, 'salary': vacancy.salary, 'company': vacancy.company_id} for vacancy in vacancies]
    return JsonResponse(data, safe=False)