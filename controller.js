import studentSchema from "./schema.js"

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
        message: "success"
      })
    }
  } catch(error) {
    res.json({
      status: 404,
      message: "not success"
    })
  }
}

export const getData = async (req, res) => {
  try{
    const data = await studentSchema.find({
      fName,
      rollNo,
    })
    if(data){
      res.json({
        status: 200,
        data:data,
        message: "success"
      })
    }
  } catch(error) {
    res.json({
      status: 404,
      message: "not success"
    })
  }
}

