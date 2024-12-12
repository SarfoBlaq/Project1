

const healthcheck = async (req, res) => {
    return res.json("message live");
};





module.exports = {
    healthcheck
}