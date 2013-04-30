/* AppDB.js */

var AppDB = {
db: '',
    
init: function() {
     alert ("in init");
    // Create application database
    AppDB.db = window.openDatabase('appdb', '1.0', 'AppDb', 1000000);
    AppDB.db.transaction(AppDB.setup, function(e) { console.log(e); }, function() { AppDB.populate(); });
},
setup: function(tx) {
     alert ("in setup");
    tx.executeSql('DROP TABLE IF EXISTS books');
    tx.executeSql('CREATE TABLE IF NOT EXISTS books(id unique, name, author, description, imageurl, price double)');
    tx.executeSql('INSERT INTO books (id, name, author, description, imageurl, price) VALUES (1, "Sherlock Holmes", "A C Doyle", "A riveting historical narrative of the shocking events surrounding the assassination of John F. Kennedy", "../img/book1.jpg", 20)');
    tx.executeSql('INSERT INTO books (id, name, author, description, imageurl, price) VALUES (2, "Lord of the rings", "J R Tolkien", "A riveting historical narrative of the heart-stopping events surrounding the assassination of Abraham Lincoln", "../img/book2.jpg", 15)');
    tx.executeSql('INSERT INTO books (id, name, author, description, imageurl, price) VALUES (3, "Sorcerors stone", "J K Rowlings", "Nassim Nicholas Taleb, the bestselling author of The Black Swan and one of the foremost thinkers of our time", "../img/book3.jpg", 10)');
    
    
    var sql = 'SELECT * FROM trivia_venue' + 'where barname like ' + document.bname.VALUE + '%';
    
    tx.executeSql(sql, [], AppDB.search, function(e) { console.log(e); });

},
populate: function() {
     alert ("in populate");
    // Create data for books
    console.log("Successfully created Database");
},
search: function(tx, results) {
    alert ("in search");
    
    var data = [];
    // Returna all books
    var rowcount = results.rows.length;
    for (var i = 0; i < rowcount; i++) {
        
        var record = {};
        
              
        /*
        record.title = results.rows.item(i).name;
        record.image = results.rows.item(i).imageurl;
        record.description = results.rows.item(i).description;
        */
        record.Bar = results.rows.item(i).Bar;
         record.Street = results.rows.item(i).Street;
          record.City = results.rows.item(i).City;
          record.State = results.rows.item(i).State;
         record.Zip = results.rows.item(i).Zip;
         console.log("Bar: " + record.Bar);
        
        data.push(record);
        
    }
    
    AppDB.data = data;
    
}
    
}

//AppDB.init();
