const { request } = require("express");
const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const url="mongodb://localhost:27017/Blog";
mongoose.connect(url, {useNewUrlParser: true});

const user_schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    email_id: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    work: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    likes_post: {
        type: Array
    }
})


// const post = mongoose.model("post", post_sechma);

const user = mongoose.model("user", user_schema);

app.get("/Users", async function (req, res) {
    let User_data=await user.find();
    res.send(User_data);
});

app.listen(5000, () => { console.log("Server is running at 5000....") });