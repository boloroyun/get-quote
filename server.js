const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/get-quote-db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    name: String,
    img: String,
    description: String,
    section: String,
    price: Number,
    priceDetail: String,
  })
);

const Service = mongoose.model(
  "services",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    name: String,
    img: String,
    description: String,
    section: String,
    price: Number,
    priceDetail: String,
  })
);


app.get("/api/products", async (req, res) => {
const products = await Product.find({});
res.send(products);
});

app.get("/api/services", async (req, res) => {
  const services = await Service.find({});
  res.send(services);
});



app.post("/api/products", async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

app.post("/api/services", async (req, res) => {
  const newService = new Service(req.body);
  const savedService = await newService.save();
  res.send(savedService);
});


app.delete("/api/products/:id", async(req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);    
});

app.delete("/api/services/:id", async (req, res) => {
  const deletedService = await Service.findByIdAndDelete(req.params.id);
  res.send(deletedService);
});


const Order = mongoose.model(
  "order",
  new mongoose.Schema(
    {
      _id: {
        type: String,
        default: shortid.generate,
      },
      email: String,
      flname: String,
      address: String,
      tel: Number,
      projectDetails: String,
      wishListItems: [
        {
          _id: String,
          name: String,
          count: Number,
        },
      ],
    },
    {
      timestamps: true,
    }
  )
);



  app.post ("/api/orders", async(req, res) => {
    if (
      !req.body.flname ||
      !req.body.email ||
      !req.body.address ||
      !req.body.tel ||
      !req.body.projectDetails ||
      !req.body.wishListItems 
    ) {
      return res.send({ message: "Data is required."});
    }
    const order = await Order(req.body).save();
    res.send(order);
  });


  app.get("/api/orders", async(req, res) => {
    const orders = await Order.find({});
    res.send(orders);
  });



  app.delete("/api/orders/:id", async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.send(order);
  });



const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));




