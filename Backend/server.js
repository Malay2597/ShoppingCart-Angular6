const express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser')
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//HEADERS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//GET User
app.get("/getproducts", async function (req, res) {
  var USER_DATA = await readingProductData();
  res.send(JSON.stringify(USER_DATA, null, 4));
});

app.get("/getTransactions", async function (req, res) {
  var USER_DATA = await readingTransactionData();
  res.send(JSON.stringify(USER_DATA, null, 4));
});



app.get("/getUsers", async function (req, res) {
  var USER_DATA = await readingUserData();
  res.send(JSON.stringify(USER_DATA, null, 4));
});



//ADD Transaction
app.post("/create", async function (req, res) {

  //Read file
  var transaction_DATA = await readingTransactionData();

  //Increment Id
  for (i = transaction_DATA.length; i >= transaction_DATA.length - 1; i--) {
    id = transaction_DATA[--i].T_id;
  }
  req.body.T_id = id + 1;

  //Write to file
  transaction_DATA.push(req.body);
  writeInTransactionData(JSON.stringify(transaction_DATA, null, 4))
  res.end;

});

app.post("/addProducts", async function (req, res) {
  var PRODUCT_DATA = await readingProductData();
  let flag = true;
  console.log(req.body);
  PRODUCT_DATA.forEach(element => {
    if (element.P_id == req.body.P_id) {
      flag = false;
    }
  });
  if (!flag) {
    res.send({"text":"Product Id already exists","isValid":false});
    res.end;
  }
  else {
    
    PRODUCT_DATA.push(req.body);
    writeInProductData(JSON.stringify(PRODUCT_DATA, null, 4))
    res.status(200).send({"text":"Product Added succesfully","isValid":true})
    res.end;
  }
});

// //Delete User
// app.delete("/delete/*", async function (req, res) {
//   var USER_DATA = await readingUserData();
//   USER_DATA.forEach((element,index,arr)=> {
//     if (element.username == req.params[0]) {
//       arr.splice(index,1);
//     }
//   });

//   writeInUserData(JSON.stringify(USER_DATA, null, 4))

//   res.send(JSON.stringify(USER_DATA, null, 4));
// });

//Read File
readingProductData = async () => {
  const data = await readFile('G:/cart/ShoppingCart-Angular6/src/assets/products.json', 'utf-8');
  return JSON.parse(data.toString());
}

readingUserData = async () => {
  const data = await readFile('G:/cart/ShoppingCart-Angular6/src/assets/users.json', 'utf-8');
  return JSON.parse(data.toString());
}

readingTransactionData = async () => {
  const data = await readFile('G:/cart/ShoppingCart-Angular6/src/assets/transaction.json', 'utf-8');
  return JSON.parse(data.toString());
}

//Write In File
writeInTransactionData = async (obj) => {
  try {
    await writeFile('G:/cart/ShoppingCart-Angular6/src/assets/transaction.json', obj);
    return 'success';
  } catch (err) {
    throw "error";
  }
}

writeInProductData = async (obj) => {
  try {
    await writeFile('G:/cart/ShoppingCart-Angular6/src/assets/products.json', obj);
    return 'success';
  } catch (err) {
    throw "error";
  }
}

app.listen(8000);