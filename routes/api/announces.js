const express = require("express");
const router = express.Router();
const announces = require("../../Announces");
// const uuid = require('uuid')
const RoomModel = require("../../model/room");

// //Get all announces
router.get("/", async (req, res) => {
  const allAnnouces = await RoomModel.find();
  res.json({ All_Annouces: allAnnouces });
});

// //Get single day announces.
// router.get("/:date",async (req, res) =>{
//     // res.json(announces.filter(day => req.params.date));
//     // res.send(req.params.date);
//     const allAnnouces = await RoomModel.find();
//     let found = allAnnouces.some((announce => announce.date === req.params.date));
//     console.log(found);

//     if (found){
//         res.json(allAnnouces.filter(announce => announce.date === req.params.date))
//     }else{
//         res.status(400).json({ msg : `No announce with the date ${req.params.date}`});
//     }
// })

router.get("/test", (req, res) => {
   
  });

// //Create announce
router.post('/',async (req, res) =>{
    let date = new Date();
    // const thaiMonth = ["มกราคม", "กุมภาพันธ์","มีนาคม", "เมษายน", "พฤษภาคม","มิถุนายน", "กรกฎาคม", "สิงหาคม","กันยายน","ตุลาคม", "พฤศจิกายน", "ธันวาคม",];
    
    const day = date.getDate().toString();
    const month = date.getMonth() + 1;
    const year = (date.getFullYear()+543).toString();
    // const monthTH = thaiMonth[month - 1];
    const dateNow = day + "-" + month + "-" + year;

    const newAnnounces = {
        title: req.body.title,
        message: req.body.message,
        date: dateNow
    }
    if(!newAnnounces.title || !newAnnounces.message){
        console.log(false);
        return res.status(400).json({msg: 'Please include a title or message.'})
    }
    const saveToDB = await RoomModel.create({ title : newAnnounces.title, message : newAnnounces.message, date:newAnnounces.date });
    // announces.push(newAnnounces);
    res.send(true)
    // res.json(announces)
    console.log(newAnnounces);

})



// //Update announce
// router.put('/:date', (req, res) =>{
//     let found = announces.some((announce => announce.date === req.params.date));
//     if(found){
//         const updAnnounce = req.body;
//         announces.forEach(announce => {
//             if(announce.date === req.params.date){
//                 announce.title = updAnnounce.title ? updAnnounce.title : announces.title;
//                 announce.message = updAnnounce.message ? updAnnounce.message : announces.message;
//                 announce.date = updAnnounce.date ? updAnnounce.date : announces.date;

//                 res.json({ msg: 'Announce updated', announces})
//             }
//             else{
//                 res.status(400).json({msg : `No user with the date of ${req.params.date}`})
//             }
//         })
//     }
// })

// //Delete user
// router.delete('/:date', (req, res) => {
//     let found = announces.some((announce => announce.date === req.params.date));
//     if(found){
//         res.json({
//             msg: 'Announce deleted.',
//             announces: announces.filter(announce => announce.date !== req.params.date)
//         })
//     }else{
//         res.status(400).json({msg:`No announce with the date of ${req.params.date}`});
//     }
// })
module.exports = router;
