const express = require('express');
const Users = require('../model/user.model');
const ejs = require('ejs');
const userControllers = {};

userControllers.newUser = async function(req,res){
    try 
    {
        let newUser = await new Users(req.body);
        await newUser.save();
        res.redirect("/")
    } 
    catch (err) 
    {
        res.status(404).send("404 Not found")
    }
};
userControllers.getUsers = async function(req,res){
    try 
    {
        let users = await Users.find();
        res.status(200).render("pages/Home.ejs", {users});
    } 
    catch (err) 
    {
        res.status(404).send("404 Not found")
    }
};
userControllers.addUser = async function(req,res){
    try 
    {
        res.status(200).render("pages/Form.ejs");
    } 
    catch (err) 
    {
        res.status(404).send("404 Not Found")
    }
};
userControllers.updatePromotion = async function(req,res){
    try 
    {
        let user = await Users.findById(req.params.id);
        let promotion = user.promoted === null ? true : (user.promoted ? false : true);
        await Users.findByIdAndUpdate(req.params.id, {promoted : promotion});
        res.redirect("/");
    } 
    catch (err)
    {
        res.status(400).json({status : "Failed", message : err.message});
    }
};
userControllers.deleteUser = async function(req,res){
    try 
    {
        await Users.findByIdAndDelete(req.params.id);
        res.redirect("/");
    } catch (err) {
        res.status(400).json({status : "Failed", message : err.message});
    }
};

module.exports = userControllers;