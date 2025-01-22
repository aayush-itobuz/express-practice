import studentSchema from "../models/schema.js"

// create
export const addData = async (req, res) => {
  try{
    const {fName, rollNo} = req.body;
    const data = await studentSchema.create({
      fName,
      rollNo,
    })
    if(data){
      res.json({
        status: 200,
        data:data,
        message: "data created successfully"
      })
    }
  } catch(error) {
    res.json({
      status: 404,
      message: "error occurred during data creation"
    })
  }
}

// read
export const getData = async (req, res) => {
  try{
    const data = await studentSchema.find()
    if(data){
      res.json({
        status: 200,
        data:data,
        message: "data fetched successfully"
      })
    }
  } catch(error) {
    res.json({
      status: 404,
      message: "error occurred during data fetching"
    })
  }
}

// read by Id
export const getDataById = async (req, res) => {
  try{
    const { _id } = req.body;
    const data = await studentSchema.findById({ _id })
    if(data){
      res.json({
        status: 200,
        data:data,
        message: "data fetched successfully by id"
      })
    }
  } catch(error) {
    res.json({
      status: 404,
      message: "error occurred during data fetching"
    })
  }
}

// update
export const updateData = async (req, res) => {
  try{
    const { _id, fName, rollNo} = req.body;
    const updatedData = await studentSchema.findByIdAndUpdate(
     _id,
     {
      fName: fName,
      rollNo: rollNo,
     },
     {new: true}
    )
    if(updatedData){
      res.json({
        status: 200,
        data:updatedData,
        message: "data updated successfully"
      })
    }
  } catch(error) {
    res.json({
      status: 404,
      message: "error occurred during data updation"
    })
  }
}

// delete
export const deleteData = async (req, res) => {
  try{
    const { _id } = req.body;
    const data = await studentSchema.findByIdAndDelete({
      _id,
    })
    if(data){
      res.json({
        status: 200,
        data:data,
        message: "data deleted successfully"
      })
    }
  } catch(error) {
    res.json({
      status: 404,
      message: "error occurred during data deletion"
    })
  }
}