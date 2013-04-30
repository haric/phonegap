/* AppDB.js */

var Trivia_Venue = {
db: '',
    
init: function() {
    // Create application database
    Trivia_Venue.db = window.openDatabase('appdb', '1.0', 'AppDb', 1000000);
    Trivia_Venue.db.transaction(Trivia_Venue.setup, function(e) { console.log(e); }, function() { Trivia_Venue.populate(); });
},
setup: function(tx) {
//    tx.executeSql('DROP TABLE IF EXISTS books');
//    tx.executeSql('CREATE TABLE IF NOT EXISTS books(id unique, name, author, description, imageurl, price double)');
//    tx.executeSql('INSERT INTO books (id, name, author, description, imageurl, price) VALUES (1, "Sherlock Holmes", "A C Doyle", "A riveting historical narrative of the shocking events surrounding the assassination of John F. Kennedy", "../img/book1.jpg", 20)');
//    tx.executeSql('INSERT INTO books (id, name, author, description, imageurl, price) VALUES (2, "Lord of the rings", "J R Tolkien", "A riveting historical narrative of the heart-stopping events surrounding the assassination of Abraham Lincoln", "../img/book2.jpg", 15)');
//    tx.executeSql('INSERT INTO books (id, name, author, description, imageurl, price) VALUES (3, "Sorcerors stone", "J K Rowlings", "Nassim Nicholas Taleb, the bestselling author of The Black Swan and one of the foremost thinkers of our time", "../img/book3.jpg", 10)');
    
    var sql = 'SELECT * FROM trivia_venue';
    tx.executeSql(sql, [], Trivia_VenueDB.search, function(e) { console.log(e); });
    
},
populate: function() {
    // Create data for books
    console.log("Successfully created Database");
},
search: function(tx, results) {
    var data = [];
    // Return all books
    var rowcount = results.rows.length;
    for (var i = 0; i < rowcount; i++) {
        var record = {};
        record.title = results.rows.item(i).name;
        record.image = results.rows.item(i).imageurl;
        record.description = results.rows.item(i).description;
        
        data.push(record);
    }
    
    Trivia_VenueDB.data = data;
    
}
    
}

Trivia_VenueDB.init();