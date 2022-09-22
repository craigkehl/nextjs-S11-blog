"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 2874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./lib/db-util.js

async function connectDatabase() {
    return await external_mongodb_namespaceObject.MongoClient.connect(process.env.MONGODB);
}
async function insertDocument(client, collection, document) {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);
    return result;
}
async function getAllDocuments(client, collection, sort, filter = {}) {
    const db = client.db();
    const documents = await db.collection(collection).find(filter).sort(sort).toArray();
    return documents;
}

;// CONCATENATED MODULE: ./pages/api/contact.js

async function handler(req, res) {
    if (req.method === "POST") {
        const { email , name , message  } = req.body;
        if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim() === "") {
            res.status(422).json({
                message: "Invalid input."
            });
            return;
        }
        // store in a database
        const newMessage = {
            email,
            name,
            message
        };
        let client;
        try {
            client = await connectDatabase();
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Could not connect to database."
            });
            return;
        }
        try {
            const result = await insertDocument(client, "messageContacts", newMessage);
            if (!result.acknowledged) {
                throw new Error(result);
                return;
            }
            newMessage.id = result.insertedId;
            res.status(201).json({
                message: "Success",
                messageData: newMessage
            });
        } catch (error1) {
            console.error(error1);
            res.status(500).json({
                message: "Document was not inserted!"
            });
        } finally{
            await client.close();
        }
    }
}
/* harmony default export */ const contact = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2874));
module.exports = __webpack_exports__;

})();