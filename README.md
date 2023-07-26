# CarCar

Team:

* Person 1 - Which microservice?
Sales Joanna McPherson
* Person 2 - Which microservice?
Service Phat Nguyen

## Getting Started

**  Make sure you have Docker, Git, and Node.js 18.2 or above**

1.  Fork this repository https://gitlab.com/ptnguyen728/project-beta.git

2.  Clone the forked repository onto your local computer:
git clone https://gitlab.com/ptnguyen728/project-beta.git

3.  Change directory to your project directory and build and run the project using Docker with these commands:
```
docker volume create beta-data
docker-compose build
docker-compose up
```
-   After running these commands, make sure all of your Docker containers are running

-   View the project in the browser: http://localhost:3000/
Look in below folder for screenshot of website
![Img](/images/CarCarWebsite.png)


## Design
CarCar is made up of 3 microservices which interact with one another.

- **Inventory**
- **Services**
- **Sales**

## Diagram
![Img](/images/CarCarDiagram.png)

## SERVICE MICROSERVICE
    Explain your models and integration with the inventory
    microservice, here.

##      API Documentation
 -      Put Service API documentation here
##      Value Objects
 -      Identification of value objects for each service goes here

## SALES MICROSERVICE

 On the backend, the sales microservice has 4 models: Salesperson, Customer, Sale and AutomobileVO. Sale is the model that interacts with the all other three models. A new sale must use an existing salesperson, customer and unsold automobile in order to be successfully created.

 Salesperson model has three character fields: first_name (max length is 200), last_name (max length is 200) and employee_id (max length is 201).

 Customer model has three character fields for first_name (max length is 200), last_name (max length is 200) and phone_number (max length is 12).  And one text field for address.

Sale model has a decimal field for price with 2 decimal places and the automobileVO, salesperson and customer as foreign keys.

## Sales Microservice Value object

The AutomobileVO is a value object that gets data about the automobiles from the inventory using a poller. The sales poller automotically polls the inventory microservice for data, so the sales microservice is constantly getting the updated data and it checks to see if an automobile has been created so it can create or update the automobile accordingly.

It tracks only the VIN which is unique and a max length of 17 characters. And the Boolean field of whether or not the car has been sold.

The reason for integration between these two microservices is that when recording a new sale, you'll need to choose which car is being sold and whether or not it has been sold. Information on new automobiles lives inside of the inventory microservice.


##      API Documentation
##      Access below endpoints through insomnia & your browser

###         Salespeople
| Action | Method | URL
| ----------- | ----------- | ----------- |
| Create a salesperson | POST | http://localhost:8090/api/salespeople/
| List salespeople | GET | http://localhost:8090/api/salespeople/
| Delete a specific salesperson | DELETE | http://localhost:8090/api/salespeople/id/

JSON body to send data:
Create a salesperson
```
{
	"first_name" :  "Danny",
   "last_name" :  "Devito",
   "employee_id" : "ddevito"
}
```
The return value of creating a salesperson
{
	"first_name": "Danny",
	"last_name": "Devito",
	"employee_id": "ddevito",
	"pk": 1
}
Getting a list of salespeople return value:
{
	"salespeople": [
		{
            "first_name": "Danny",
			"last_name": "Devito",
			"employee_id": "ddevito",
			"pk": 1

		},
		{
			"first_name": "Charlie",
			"last_name": "Day",
			"employee_id": "cday",
			"pk": 1
		},
	]
}
Deleting a salesperson return value if they exist
{
	"first_name": "Joanna",
	"last_name": "McPherson",
	"employee_id": "jmcpherson",
	"pk": null
}
If salesperson doesn't exist returns 404 "Salesperson does not exist"

###         Customers
| Action | Method | URL
| ----------- | ----------- | ----------- |
| Create a customer | POST | http://localhost:8090/api/customers/
| List customers | GET | http://localhost:8090/api/customers/
| Delete a specific customer | DELETE | http://localhost:8090/api/customers/id/


JSON body to send data:
Create a customer
```
{
	"first_name" :  "Agatha",
   "last_name" :  "Trunchbull",
    "address" : "101 Texas Street Arlington, TX",
	"phone_number": "555-224-9599"
}
```
The return value of creating a customer
{
	"first_name": "Agatha",
	"last_name": "Trunchbull",
	"phone_number": "555-224-9599",
	"address": "101 Texas Street Arlington, TX",
	"pk": 7
}
Getting a list of customers return value:
{
	"customers": [
		{
            "first_name": "Agatha",
			"last_name": "Trunchbull",
			"phone_number": "555-224-9599",
			"address": "101 Texas Street Arlington, TX",
			"pk": 1
		},
		{
            "first_name": "Phat",
			"last_name": "Nguyen",
			"phone_number": "555-555-5555",
			"address": "102 Texas Street Arlington, TX",
			"pk": 2
		}
	]
}
Deleting a customer return value if they exist
{
	"first_name": "Agatha",
	"last_name": "Trunchbull",
	"phone_number": "555-224-9599",
	"address": "101 Texas Street Arlington, TX",
	"pk": null
}
If customer doesn't exist returns 404 "Customer  does not exist"

###         Sales
| Action | Method | URL
| ----------- | ----------- | ----------- |
| Record a sale | POST | http://localhost:8090/api/sales/
| List sales | GET | http://localhost:8090/api/sales/
| Delete a sale | DELETE | http://localhost:8090/api/sales/id/

JSON body to send data:
Record a sale (you can not sell an automobile marked as sold and the automobile input should be the VIN number which is unique to each automobile)
```
{
    "price" : "15000",
    "automobile": "3C3XX5FB2AN120174",
    "salesperson": "5",
    "customer": "5"
}
```
The return value of recording a sale
{
	"price": "15000",
	"automobile": {
		"vin": "3C3XX5FB2AN120174",
		"sold": true
	},
	"salesperson": {
		"first_name": "Danny",
		"last_name": "Devito",
		"employee_id": "ddevito",
		"pk": 5
	},
	"customer": {
		"first_name": "Brian",
		"last_name": "Fredman",
		"phone_number": "6145466773",
		"address": "6828 Camrose Drive",
		"pk": 5
	}
}
Getting a list of sales return value:
{
	"sales": [
		{
			"price": "15000.00",
			"automobile": {
				"vin": "3C3XX5FB2AN120174",
				"sold": true
			},
			"salesperson": {
				"first_name": "Danny",
				"last_name": "Devito",
				"employee_id": "ddevito",
				"pk": 5
			},
			"customer": {
				"first_name": "Brian",
				"last_name": "Fredman",
				"phone_number": "6145466773",
				"address": "6828 Camrose Drive",
				"pk": 5
			}
		}
	]
}
Deleting a sale if they exist
{
	"message": "Sale deleted"
}

If sale doesn't exist returns 404 "Sale does not exist"
