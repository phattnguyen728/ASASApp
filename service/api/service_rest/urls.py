from django.urls import path
from .views import (
    api_technicians,
    api_technician,
    api_appointment,
    api_appointments,
    cancel_appointment,
    finish_appointment,
)

urlpatterns = [
    path(
        "technicians/",
        api_technicians,
        name="api_technicians"
    ),
    path(
        "technicians/<int:id>/",
        api_technician,
        name="api_technician"
    ),
    path(
        "appointments/",
        api_appointments,
        name="api_appointments"
    ),
    path(
        "appointments/<int:id>/",
        api_appointment,
        name="api_appointment"
    ),
    path(
        "appointments/<int:id>/cancel",
        cancel_appointment,
        name="cancel_appointment"
    ),
    path(
        "appointments/<int:id>/finish",
        finish_appointment,
        name="api_appointment"
    ),

]
