const Goal=require('../model/goalModel')
const User=require('../model/userModel')

const getGoals=async(req,res)=>{
    try{
    const goals=await Goal.find({user:req.user.id})
    res.status(200).json({goals})
    }
    catch(err){
        res.status(400).json(err)
    }
}

const postGoals=async(req,res)=>{
    try{
        const goals=await Goal.create({
            user:req.user.id,
            text:req.body.text
        })
        res.status(200).json({msg:"goal added"})
        }
        catch(err){
            res.status(400).json(err)
        }
}

const putGoals = async (req, res) => {
    try {
        const goals = await Goal.findById(req.params.id);
        if (!goals) {
            return res.status(404).json({ msg: "No data found for this ID" });
        }

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        if (goals.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: "Unauthorized access to this data" });
        }

        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true, 
        });

        if (!updatedGoal) {
            return res.status(404).json({ msg: "No data found for this ID" });
        }

        res.status(200).json(updatedGoal);
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};


const deleteGoals = async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        if (!goal) {
            return res.status(404).json({ msg: "No data found for this ID" });
        }

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        if (goal.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: "Unauthorized access to this data" });
        }

        await Goal.findByIdAndDelete(req.params.id);
        
        res.status(200).json({ msg: "Data deleted successfully" });
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};


module.exports={getGoals,postGoals,putGoals,deleteGoals}