var triviaAVE = {
db: '',
data: '',
    
init: function(data) {
    // Create application database
    triviaAVE.data = data;
    triviaAVE.db = window.openDatabase('triviaAVE', '1.0', 'triviaAVE', 1000000);
    triviaAVE.db.transaction(triviaAVE.setup, function(e) { console.log(e); }, function() { triviaAVE.populate(); });
},
setup: function(tx) {
    tx.executeSql('DROP TABLE IF EXISTS trivialoc');
    tx.executeSql('CREATE TABLE IF NOT EXISTS trivialoc(bar, street, city, state, zip, phone, day, time, company, latitude, longitude)');
    
    // Loop through triviaAVE.data and insert for each object (row)
   for (var i = 0; i < triviaAVE.data.length; i++) {
       tx.executeSql('INSERT INTO trivialoc(bar, street, city, state, zip, phone, day, time, company, latitude, longitude) VALUES (?, ?, ? , ? , ? ,?, ? , ? ,? , ? ,?)', [triviaAVE.data[i].Bar, triviaAVE.data[i].Street, triviaAVE.data[i].City, triviaAVE.data[i].State, triviaAVE.data[i].Zip, triviaAVE.data[i].Phone, triviaAVE.data[i].Day, triviaAVE.data[i].Time, triviaAVE.data[i].Company, triviaAVE.data[i].Latitude, triviaAVE.data[i].Longitude]);
   }
    
    var sql = 'SELECT * FROM trivialoc';
    tx.executeSql(sql, [], triviaAVE.search, function(e) { console.log(e); });
    

}

}


function reqListener () {
    // document.write(this.responseText);
    var triviaData = JSON.parse(this.responseText);
    console.log(triviaData);
    triviaAVE.init(triviaData);
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "js/triviavenues.json", true);
oReq.send();