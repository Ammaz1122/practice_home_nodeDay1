const addData = (req,res)=>{
    res.send("Data send successfully");
}

const getData = (req,res)=>{
    res.send("get data extracted succesfully")
}

const updateData =(req,res)=>{
    const data = req.params.id;
    res.send(`Data has been updated on ${data}`)
}

const deleteData = (req,res)=>{
    const delete_data = req.params.id;
    res.send(`Data is deleted on id ${delete_data}`)

}





module.exports = {
    addData,
    getData,
    updateData,
    deleteData
}