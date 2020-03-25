var connection = require("../config/connection.js");

var orm = {
    selectAll: function (tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (whatTable, whatCol, newValue) {
        var queryString = "INSERT INTO ?(?) VALUES (?)";
        console.log(queryString);
        connection.query(queryString, [whatTable, whatCol, newValue], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (whatTable, whatCol, whatValue, whatID) {
        var queryString =
            "UPDATE ? SET ? = ?, WHERE id = ?";

        connection.query(
            queryString,
            [whatTable, whatCol, whatValue, whatID],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

module.exports = orm;
