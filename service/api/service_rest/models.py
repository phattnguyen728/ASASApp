from django.db import models
from django.urls import reverse

# Create your models here.
class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100)

    def get_api_url(self):
        return reverse("api_technician", kwargs={"pk": self.id})

    def __str__(self):
        return self.employee_id


class AutomobileVO(models.Model):
    href = models.CharField(max_length=200, unique= True)
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

    def __str__(self):
        return self.vin


class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.TextField()
    status = models.CharField(max_length=100, default="Created")
    vin = models.CharField(max_length=17)
    is_vip = models.BooleanField(default=False, null=True, blank=True)
    customer = models.CharField(max_length=100)
    technician = models.ForeignKey(
        Technician,
        related_name="appointment",
        on_delete=models.PROTECT
    )

    def is_finished(self):
        self.status = "Finished"
        self.save()


    def is_cancelled(self):
        self.status = "Cancelled"
        self.save()

    def get_api_url(self):
        return reverse("api_appointment", kwargs={"pk": self.id})

    def __str__(self):
        return self.reason
