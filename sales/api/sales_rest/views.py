from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import Salesperson, Customer, AutomobileVO, Sale

class AutomobileVOEncoder(ModelEncoder):
    properties = ["vin", "sold"]

class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = ["first_name","last_name", "employee_id",]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = ["first_name","last_name", "phone_number", "address",]

class SaleEncoder(ModelEncoder):
    model = Sale
    properties = ["price","automobile","salesperson","customer",]
    encoders = {
        "automobile": AutomobileVOEncoder(),
    }

# list salespeople and create salesperson
@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
                {"salespeople": salespeople},
                encoder=SalespersonEncoder,
            )
    else:
        content = json.loads(request.body)
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False,
        )



# delete salesperson
@require_http_methods(["DELETE"])
def api_delete_salesperson(request,pk):
    try:
        salesperson = Salesperson.objects.get(id=pk)
        salesperson.delete()
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False
        )
    except Salesperson.DoesNotExist:
        return JsonResponse({"message":"Salesperson does not exist"})


# list customers and create customer
@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
                {"customers": customers},
                encoder=CustomerEncoder,
            )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )

# delete customer
@require_http_methods(["DELETE"])
def api_delete_customer(request,pk):
    try:
        customer = Customer.objects.get(id=pk)
        customer.delete()
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False
        )
    except Customer.DoesNotExist:
        return JsonResponse({"message":"Customer does not exist"})

# list sales and create a sale
@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
                {"sales": sales},
                encoder=SaleEncoder,
            )
    else:
        content = json.loads(request.body)
        try:
            auto_vin = content["automobile"]
            auto = AutomobileVO.objects.get(vin=auto_vin)
            content["auto"] = auto
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid auto vin"}
            )
        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False,
        )

# delete a sale
@require_http_methods(["DELETE"])
def api_delete_sale(request,pk):
    try:
        sale = Sale.objects.get(id=pk)
        sale.delete()
        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False
        )
    except Sale.DoesNotExist:
        return JsonResponse({"message":"Sale does not exist"})
