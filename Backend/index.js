const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// const db=mysql.createPool({
//     host:"localhost",
//     user:"root",
//     password:"root",
//     database:"practice1"
// });

app.get("/", (req, res) => {
    const inserinto = "INSERT INTO personinfo (Name,Email) VALUES ('Aitzaz','Aitzaz@gmail.com')";
    db.query(inserinto, (err, result) => {
        if (err) {
            console.log("error occured");
            res.send(err);
        }
        else {
            console.log(result);
            res.send("Data is ENtereed");
        }

    })
});




app.get("/data", (req, res) => {
    const getData = "SELECT * From practice1.personinfo";
    db.query(getData, (err, result) => {
        if (err) {
            console.log("ERROR");
        }
        else {
            res.send(result);
        }
    })
});



app.delete("/api/delete/:id", (req, res) => {
    const { id } = req.params;
    const sqlremove = "Delete From personinfo where id=?"
    db.query(sqlremove, id, (err, result) => {
        if (err) {
            res.send(err);
        }
        else
            res.send(result + "removed");
    })
});

app.post("/api/post", (req, res) => {
    const { name, email } = req.body;
    const sqlpost = "INSERT INTO personinfo (Name,Email) VALUES (?,?)";
    db.query(sqlpost, [name, email], (err, result) => {
        console.log(err);
        console.log(result);
    })
})




//                  DataBase Integration information 

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "salesmanagementsystem"
});


//                   Api to Submit customer Form 
app.post("/customerform", (req, res) => {
    const {CustomerID,FirstName,LastName,Address,City,PhoneNumber } = req.body;
    const inserinto = "INSERT INTO customers (CustomerID,FirstName,LastName,Address,City,PhoneNumber) VALUES (?,?,?,?,?,?)";
    db.query(inserinto,[CustomerID,FirstName,LastName,Address,City,PhoneNumber],(err,result)=>{
        if(err){
            console.log(err);
            console.log("error occured");
            res.send(err)
        }
        else{
            console.log(result);
        }
    })
});

//                      Api to Submit SalesPerson Form

app.post("/salespersonform", (req, res) => {
    const {SalesPersonsID,FirstName,LastName,PhoneNumber,HireDate } = req.body;
    const inserinto = "INSERT INTO salespersons (SalesPersonsID,FirstName,LastName,PhoneNumber,HireDate) VALUES (?,?,?,?,?)";
    db.query(inserinto,[SalesPersonsID,FirstName,LastName,PhoneNumber,HireDate],(err,result)=>{
        if(err){
            console.log(err);
            console.log("error occured");
            res.send(err)
        }
        else{
            console.log(result);
        }
    })
})

//                      Api to Submit Products Form

app.post("/productform", (req, res) => {
    const {ProductID,ProductName,UnitsInStock,UnitsOnOrder,UnitPrice} = req.body;
    const inserinto = "INSERT INTO products (ProductID,ProductName,UnitsInStock,UnitsOnOrder,UnitPrice) VALUES (?,?,?,?,?)";
    db.query(inserinto,[ProductID,ProductName,UnitsInStock,UnitsOnOrder,UnitPrice],(err,result)=>{
        if(err){
            console.log(err);
            console.log("error occured");
            res.send(err)
        }
        else{
            console.log(result);
        }
    })
})

//                      Api to fetch Productlist Form

app.get("/productlist",(req,res)=>{
    const getproducts="Select * From salesmanagementsystem.products";
    db.query(getproducts,(err,result)=>{
        if(err){res.send(err)}
        else res.send(result);
    })
})

//                      Api to fetch SalesPersonlist Form

app.get("/salespersonslist",(req,res)=>{
    const getproducts="Select * From salesmanagementsystem.salespersons";
    db.query(getproducts,(err,result)=>{
        if(err){res.send(err)}
        else res.send(result);
    })
})

//                      Api to fetch Customerlist Form

app.get("/customerslist",(req,res)=>{
    const getproducts="Select * From salesmanagementsystem.customers";
    db.query(getproducts,(err,result)=>{
        if(err){res.send(err)}
        else res.send(result);
    })
})

//                      Api to fetch OrderDetail by id Form

app.get("/orderfetchbyorderID",(req,res)=>{
    const ordersID = req.query.ordersID;
    const getOrderdetail="SELECT o.ordersID, c.Firstname, c.Lastname, p.ProductName, p.UnitPrice " +
    "FROM customers c " +
    "INNER JOIN orders o ON c.CustomerID = o.CustomerID " +
    "INNER JOIN orderdetails od ON o.OrdersID = od.OrdersID " +
    "INNER JOIN products p ON od.ProductID = p.ProductID " +
    "WHERE o.ordersID = ?";
    db.query(getOrderdetail, [ordersID], (err, result) => {
        if (err) {
          console.log('Error fetching order details:', err);
          res.status(500).json({ error: 'Error fetching order details from the database.' });
        } else {
          if (result.length === 0) {
            res.status(404).json({ error: 'Order not found.' });
          } else {
            res.json(result);
          }
        }
      });
})

//                      Api to fetch Detail by Customerid Form

app.get("/orderfetchbyCustomerID",(req,res)=>{
    const CustomerID = req.query.CustomerID;
    const getOrderdetail="SELECT o.ordersID, c.Firstname, c.Lastname, p.ProductName, p.UnitPrice " +
    "FROM customers c " +
    "INNER JOIN orders o ON c.CustomerID = o.CustomerID " +
    "INNER JOIN orderdetails od ON o.OrdersID = od.OrdersID " +
    "INNER JOIN products p ON od.ProductID = p.ProductID " +
    "WHERE o.CustomerID = ?";
    db.query(getOrderdetail, [CustomerID], (err, result) => {
        if (err) {
          console.log('Error fetching order details:', err);
          res.status(500).json({ error: 'Error fetching order details from the database.' });
        } else {
          if (result.length === 0) {
            res.status(404).json({ error: 'Order not found.' });
          } else {
            res.json(result);
          }
        }
      });
})

//                      Api to fetch Specific id's customer detail and Update


app.get("/customerdata",(req,res)=>{
    const CustomerID = req.query.CustomerID
    const sqlget="Select *From customers where CustomerID=?";
    db.query(sqlget,CustomerID,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(result);
            console.log(result);

        }
    })
})



app.put('/updateCustomer', (req, res) => {
    const updatedCustomer = req.body;
    const { CustomerID, FirstName, LastName, Address, City, PhoneNumber } = updatedCustomer;
  
    // Implement your database update logic here
    const updateQuery = 'UPDATE customers SET FirstName=?, LastName=?, Address=?, City=?, PhoneNumber=? WHERE CustomerID=?';
    db.query(updateQuery, [FirstName, LastName, Address, City, PhoneNumber, CustomerID], (err, result) => {
      if (err) {
        console.error('Error updating customer record:', err);
        res.status(500).json({ error: 'Error updating customer record in the database.' });
      } else {
        console.log('Customer record updated successfully.');
        res.json({ message: 'Customer record updated successfully.' });
      }
    });
  });


  
//                      Api to fetch Specific id's Product detail and update

  app.get("/productsdata", (req, res) => {
    const ProductID = req.query.ProductID;
    console.log("ProductID received:", ProductID);
  
    const sqlGet = "SELECT * FROM products WHERE ProductID=?";
    db.query(sqlGet, ProductID, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Error fetching product data from the database." });
      } else {
        res.json(result);
        console.log("Product data retrieved:", result);
      }
    });
  });
  
  



  app.put('/updateProduct', (req, res) => {
    const updatedProduct = req.body;
    const { ProductID, ProductName, UnitsInStock, UnitsOnOrder, UnitPrice } = updatedProduct;
  
    // Implement your database update logic here for products
    const updateQuery = 'UPDATE products SET ProductName=?, UnitsInStock=?, UnitsOnOrder=?, UnitPrice=? WHERE ProductID=?';
    db.query(updateQuery, [ProductName, UnitsInStock, UnitsOnOrder, UnitPrice, ProductID], (err, result) => {
      if (err) {
        console.error('Error updating product record:', err);
        res.status(500).json({ error: 'Error updating product record in the database.' });
      } else {
        console.log('Product record updated successfully.');
        res.json({ message: 'Product record updated successfully.' });
      }
    });
  });
  
//                      Api to fetch Specific id's Salesperson detail and update

  app.get("/salespersondata", (req, res) => {
    const SalesPersonsID = req.query.SalesPersonsID;
    console.log("Uzair"+ SalesPersonsID);
    console.log("ProductID received:", SalesPersonsID);
  
    const sqlGet = "SELECT * FROM salespersons WHERE SalesPersonsID=?";
    db.query(sqlGet, SalesPersonsID, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Error fetching product data from the database." });
      } else {
        res.json(result);
        console.log("Product data retrieved:", result);
      }
    });
  });
  

  app.put('/updateSalesperson', (req, res) => {
    const updatedSalesperson = req.body;
    const { SalesPersonsID, FirstName, LastName, PhoneNumber, HireDate } = updatedSalesperson;
  
    // Implement your database update logic here for products
    const updateQuery = 'UPDATE salespersons SET FirstName=?, LastName=?, PhoneNumber=?, HireDate=? WHERE SalesPersonsID=?';
    db.query(updateQuery, [FirstName,LastName,PhoneNumber, HireDate, SalesPersonsID], (err, result) => {
      if (err) {
        console.error('Error updating product record:', err);
        res.status(500).json({ error: 'Error updating product record in the database.' });
      } else {
        console.log('Product record updated successfully.');
        res.json({ message: 'Product record updated successfully.' });
      }
    });
  });
  
  
  
  










app.listen(500, () => {
    console.log("listening to future");
})