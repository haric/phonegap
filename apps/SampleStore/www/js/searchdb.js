/* AppDB.js */

var SearchDB = {
db: '',
    
init: function() {
     alert ("in init");
    // Create application database
    SearchDB.db = window.openDatabase('triviaAVE', '1.0', 'triviaAVE', 1000000);
    SearchDB.db.transaction(SearchDB.setup, function(e) { console.log(e); }, function() { SearchDB.populate(); });
},
setup: function(tx) {
     alert ("in setup");
   
    alert("Before Select");
    
    var sql = 'SELECT * FROM trivialoc where bar like "' + $('#bname').val() + '%"';
    
    alert(sql);
    tx.executeSql(sql, [], SearchDB.search, function(e) { console.log(e); });

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
        record.bar = results.rows.item(i).bar;
         record.street = results.rows.item(i).street;
          record.city = results.rows.item(i).city;
          record.state = results.rows.item(i).state;
         record.zip = results.rows.item(i).zip;
         console.log("Bar: " + record.bar);
        
        data.push(record);
        
    }
    
    SearchDB.data = data;
    
}
    
}

//AppDB.init();
