var orm = require("../config/orm.js");

var burger = {
    //gets all instances in the burger table
    all: function (cb) {
        orm.selectAll("burger", function (res) {
            cb(res);
        });
    },

    // inserts new type of burger into the table.
    insert: function (cols, vals, cb) {
        orm.insertOne("burger", cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (whatCol, whatValue, whatID) {
        orm.updateOne("burger", whatCol, whatValue, whatID, function (res) {
            cb(res);
        });
    },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;