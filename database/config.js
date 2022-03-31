import mongoose from "mongoose"

const dbConnection = async () => {
  //console.log(process.env.MONGODB_CNX);
  try {
    await mongoose.connect(process.env.MONGODB_CNX, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Base de datos online");
  } catch (error) {
    console.log(`Error ${error}`);
  }
}

export { dbConnection }