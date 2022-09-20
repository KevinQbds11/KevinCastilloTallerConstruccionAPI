//import
const {SERVER_ERROR} =require('../utils/constants');

//Models
const {Company}=require ('../models/company');
const {Customer}=require ('../models/customer');
const {User}=require ('../models/user');

//Controllers
const getSpecificCustomers=async(req,res) =>{

    try{

        const user = await User.findByPk(req.headers.id);
        const company = await Company.findByPk(user.Company_id);
        const client= await Customer.findByPk(user.Client_id);

        res.json({
            ...user.dataValues,
            ...client.dataValues,
            ...company.dataValues
        });

    }catch(e){
        console.log(e);
        res
            .status(500)
            .json (SERVER_ERROR);
    }

};

module.exports={
    getSpecificCustomers
};