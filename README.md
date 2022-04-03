# Insly Fullstack Test Asignment

![Insly logo](https://insly.com/en/wp-content/themes/Bonamore/img/logo.svg)
- Test it online [https://insly-car-ui.herokuapp.com/](https://insly-car-ui.herokuapp.com/)
- Backend [https://github.com/melmartinez-dev/insly-car-api](https://github.com/melmartinez-dev/insly-car-api)
## Task
Write a simple car insurance calculator which will output price of the policy using vanilla PHP and ReactJS or VueJS.

Create a form with following fields:

   - a. Estimated value of the car.

     - i. Minimum value 100 EUR
     - ii. Maximum value 100000 EUR

   - b. Tax percentage

     - i. From range 0 – 100 %

   - c. Number of policy installments – count of payments in which the client wants to pay for the policy

     - i. From range 1 – 12

   - d. Calculation button

Output a table with the result as a Modal. When clicking on the background then the modal should close.

![Table example](https://i.imgur.com/yfwXd5y.png)

### Local Deploy

To deploy locally follow the steps:

```sh
npm install
npm run dev
```
Dev server will be listening at port 3000

### Using Docker

Build image:
```sh
docker build --pull --rm -f "Dockerfile" -t inslycarui:latest "." <
```

Run the created container
```sh
docker run -d -p8000:80 inslycarui
```

Visit webpage http://localhost:8000