const connection=require('../Utilities/connection')
let sessionModel={};

sessionModel.setSeesion=async(userId,sessionId)=>{
    console.log(userId,sessionId);
    const model=await connection.getSeesionCollection();
   
        const user=await model.create({
            userId:userId,
            sessionId:sessionId,
            createdAt:new Date(),
            expireAt:new Date(new Date().getTime()+30000)
        })
        
        console.log(user);
        return user.sessionId;
    
}
sessionModel.getUserId=async(userId)=>{
    const model=await connection.getSeesionCollection();
    const user=await model.find({userId:userId},{sessionId:1,_id:0})
    return user;
}

sessionModel.checkUserSignIn=async(userId)=>{
    const model=await connection.getSeesionCollection();
    const user=await model.find({userId:userId})
    return user;
}
module.exports=sessionModel;