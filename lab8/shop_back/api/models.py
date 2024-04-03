from django.db import models


class Category(models.Model):
  name = models.CharField(max_length=255)

  def __str__(self):
    return self.name
  
  class Meta:
    verbose_name_plural = "Categories"

  def to_json(self):
      return {
          'id': self.id,
          'name': self.name
      }


class Product(models.Model):
  name = models.CharField(max_length=255)
  price = models.FloatField()
  description = models.TextField()
  count = models.IntegerField()
  is_active = models.BooleanField()
  category = models.ForeignKey(Category, on_delete=models.PROTECT)

  def __str__(self):
    return self.name
  
  def to_json(self):
    return dict(name=self.name,
                price=self.price,
                description=self.description,
                count=self.count,
                is_active=self.is_active)