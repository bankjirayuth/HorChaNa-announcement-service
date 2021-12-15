const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({title : { type : String }, message :{ type : String }, date: { type : String}}, { collection : 'announcesDB' });

const RoomModel = mongoose.model('RoomSchema', RoomSchema);

module.exports = RoomModel;