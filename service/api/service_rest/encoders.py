from common.json import ModelEncoder
from .models import Technician, Appointment, AutomobileVO

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ['vin', 'href', 'sold']

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        'first_name',
        'last_name',
        'employee_id',
        'id'
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        'date_time',
        'reason',
        'id',
        'status',
        'vin',
        'customer',
        'is_vip',
        'technician'
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }
