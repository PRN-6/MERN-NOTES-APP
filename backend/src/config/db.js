import mongoose from "mongoose"



export const connectDB = async () => {
    try {
       await mongoose.connect("mongodb+srv://prinsonroyal2_db_user:VLD8NnEThEBV3Xxp@cluster0.tnxzzqt.mongodb.net/?appName=Cluster0")
       console.log("MONGODB CONNECTED SUCCESSFULLY")
    }catch (error){
        console.error("Error connecting to mongodb",error)
    }
}