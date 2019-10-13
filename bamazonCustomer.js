var mysql = require("mysql");
var total;
var inquirer = require("inquirer");
var new_value;



// create the connection information for the sql database

var connection = mysql.createConnection({

  host: "localhost",



  // Your port; if not 3306

  port: 3306,



  // Your username

  user: "root",



  // Your password

  password: "root",

  database: "bamazon"

});



// connect to the mysql server and sql database

connection.connect(function(err) {

  if (err) throw err;

  // run the start function after the connection is made to prompt the user

  start();

});

function start() {
    connection.query("SELECT * FROM products", function(err, results) {

        if (err) throw err;
        console.table(results)

        askUser()
}
    )}

    function askUser() {
      inquirer.prompt ([
        {
        type: "input",
        name: "whatToBuy",
        message: "What do you want to buy? (provide the id)"
           },
           {
            type: "input",
            name: "howManyToBuy",
            message: "How many do you want to buy?"
               }]).then(function(answers){
         var howManyToBuy = answers.howManyToBuy
         howManyToBuy = parseInt(howManyToBuy)
        
         var whatToBuy = answers.whatToBuy
         

         findQuantity(howManyToBuy, whatToBuy)
        });
    }

   function findQuantity(howManyToBuy,whatToBuy) {
    connection.query('SELECT stock_quantity FROM products WHERE item_id = ' + whatToBuy, function(err, results) {

      if (err) throw err;
      
       total = results[0].stock_quantity
      
      updateProducts(howManyToBuy,whatToBuy)
})
 
function updateProducts(howManyToBuy,whatToBuy) {
 new_value = total - howManyToBuy
 console.log("new val", new_value)
    connection.query("UPDATE products SET stock_quantity=" + new_value + " WHERE item_id = " + whatToBuy, function(err, results) {

      if (err) throw err;
      console.table(results)
      showTable()
    })
  }
}

function showTable() {
  connection.query("SELECT * FROM products", function(err, results) {

    if (err) throw err;
    console.table(results)
})
}
