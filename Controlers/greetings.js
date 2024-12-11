

const greetingController = async (req, res) => { 
    const { name } = req.body;
    const response = "Hello " + name + "!";
    return res.json(response);
};



module.exports = {
    greetingController
};