const assert = require('assert');

// Create - C
exports.insertDocument = (db, document, collection, callback) => {
	// const coll = db.collection(collection);
	return db.collection(collection).insertOne(document);
};

// Read - R
exports.findDocuments = (db, collection, callback) => {
	const coll = db.collection(collection);
	return coll.find({name: "BBQ2"}).toArray();
};

// Delete - D
exports.removeDocument = (db, document, collection, callback) => {
	const coll = db.collection(collection);
	return coll.deleteOne(document)
};

// Update - U
exports.updateDocument = (db, document, update, collection, callback) => {
	const coll = db.collection(collection);
	return coll.updateOne(document, {$set: update}, null)
};
