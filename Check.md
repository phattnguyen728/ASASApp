##                  SERVICE
## README
# Done
Step-by-step Instructions to Run the Project
# Done
Diagram of the Project
Explicitly Defined URLs and ports for each of the services
CRUD Route Documentation for each of the services
Identification of the Value Objects

## Inventory Front End
#     Manufacturer
- Should have a working form view
- Should have a working list view
#     Vehicle Model
- Should have a working form view
- Should have a working list view
#     Automobile
- Should have a working form view
- Should have a working list view
-No JS console errors
-Views refresh on state change


## Front End
#     Navigation
Should have a link to an Add a Technician Form View
Should have a link to an Add a Service Appointment Form View
Should have a link to Show a List of Appointments View
Should have a link to Show Service Appointments by VIN View(optional)


#     Add a Technician Form
Should contain relevant inputs
- Should contain an Employee Name input
- Should contain an Employee ID input
On submit should create a new technician
No JS console errors
Verify state updates inside of Add a Service Appointment


#     Add a Service Appointment Form
Should contain relevant inputs
- Should contain a VIN input
- Should contain the vehicle owner's name input
- Should contain an input for the appointment date and time
- Should contain an input to select a service technician
- Should contain an input to add a reason for service appt
On submit should create a new service appointment
No JS console errors
Verify state updates inside of list of appointments/service appts by VIN
## If you update by VIN it will cause a DOM error for duplicate VIN key


#     Service Appointments List
Should contain a list of the following information for each service appointment
- VIN
- Customer Name
- Date and Time
- Assigned Technician Name
- Reason for Service
If the vehicle was purchased from the dealer's inventory, then should be a visual indicator of "VIP treatment"
Should have a button to complete/finish a service appointment
- On click should "complete" the appointment and remove the appointment from the view
Should have a button to cancel a service appointment
- On click should cancel the appointment and remove the appointment from the view
No JS console errors

## May need to change this
## Does not have a submit button, but the filter search will filter and only display vin without refreshing
#     Show Service History by VIN(separate view or as part of service appointments list)
Should contain a VIN input
Should contain a submit button
- On submit, should show the service history for that VIN(vehicle)
- Information displayed should only include appointments for that VIN (ie. the filter works)
- This information should be displayed without needing to refresh the page
Should (at minimum) contain a list of the following information for each service appointment
- Customer Name
- Date and Time
- Assigned Technician Name
- Reason for Service
No JS console errors


## Back End
#     Technicians Resource
GET request to API should respond with a list of technicians
# http://localhost:8080/api/technicians/
GET request to API should respond with an appropriate status code
# 200
POST request to API should create a new technician resource
# http://localhost:8080/api/technicians/

{
  "first_name": "Matthew",
	"last_name": "Campbell",
	"employee_id": "mcampbell"
}

POST request to API should respond with an appropriate status code
# 200




#     Appointments Resource
GET request to API should respond with a list of appointments
# 	http://localhost:8080/api/appointments/
GET request to API should respond with an appropriate status code
# 200
POST request to API should create a new appointment
# The technician 1 is the id the correspends to the technician ID, but in the front end is done by drop down selection
# http://localhost:8080/api/appointments/
{
    "date_time": "2024-07-24T14:30:00",
    "reason": "Yearly maintenance",
    "vin": "1C3CC5FB2AN120174",
    "customer": "Joanna McPherson",
    "technician": 1
}
POST request to API should respond with an appropriate status code
# 200
#     Polling Service
It should work and create the appropriate Value Objects for the service









##                        Sales
## README
Step-by-step Instructions to Run the Project
Diagram of the Project
Explicitly Defined URLs and ports for each of the services
CRUD Route Documentation for each of the services
Identification of the Value Objects


## Inventory Front End
#     Manufacturer
- Should have a working form view
- Should have a working list view
#     Vehicle Model
- Should have a working form view
- Should have a working list view
#     Automobile
- Should have a working form view
- Should have a working list view
-No JS console errors
-Views refresh on state change





## Front End
#     Navigation
Should have a link to an Add a Sales Person Form View
Should have a link to an Add a Customer Form View
Should have a link to  Create a Sale Record Form View
Should have a link to a List All Sales View
Should have a link to a List All Sales by Sales Person View (optional)


#     Add Sales Person Form View
Should contain relevant inputs
- Should contain an Name input
- Should contain an Employee number input
On submit should create a new sales person
No JS console errors
Verify state updates inside of Create a Sale Record View


#     Add a Customer Form View
Should contain relevant inputs
- Should contain a name input
- Should contain the address input
- Should contain a phone number input
On submit should create a new potential customer
No JS console errors
Verify state updates inside Create a Sale Record View
## If you update by VIN it will cause a DOM error for duplicate VIN key


#     Create a Sale Record Form View
Should contain relevant inputs
- should contain a dropdown to select an unsold Automobile in inventory
- should contain a dropdown to select a Sales Person
- should contain a dropdown to select a Customer
- should contain a sale price input
On submit, should create a new sale record
No JS console errors
Verify state updates inside List All Sales View


#    List All Sales View
Should contain the following information for each record
- Sales Person Name
- Employee Number
- Purchaser Name
- Automobile VIN
- Price of Sale
No JS Console Errors


#   List Sales History by Sales Person
Should contain a dropdown to select a sales person by name or employee number?
On selection, should display a list of sales records for that sales person without refreshing
Should contain the following information for each record
- Sales Person Name
- Customer Name
- Automobile VIN
- Sale Price
No JS Console Errors


##  Back End
#     Sales Person Resource
GET request to API should respond with a list of sales people
GET request to API should respond with an appropriate status code
POST request to API should create a new sales person resource
POST request to API should respond with an appropriate status code


#     Customer Resource
GET request to API should respond with a list of customers
GET request to API should respond with an appropriate status code
POST request to API should create a new customer resource
POST request to API should respond with an appropriate status code


#     Sales Resource
GET request to API should respond with a list of sales
GET request to API should respond with an appropriate status code
POST request to API should create a new sales resource
POST request to API should respond with an appropriate status code


#     Polling Service
It should work and create the appropriate Value Objects for the service
