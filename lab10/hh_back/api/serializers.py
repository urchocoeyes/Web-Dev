from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name', 'description', 'city', 'address']

class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=50)
    description = serializers.CharField()
    salary = serializers.FloatField()
    company_id = serializers.IntegerField()

    def create(self, validated_data):
        vacancy = Vacancy.objects.create(name=validated_data.get('name', ),
                                         description=validated_data.get('description', ),
                                         salary=validated_data.get('salary', ),
                                         company=validated_data.get('company', ))
        return vacancy

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.company_id = validated_data.get('company_id', instance.company_id)
        instance.save()
        return instance
