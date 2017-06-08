var express = require('express');
var app = express();
app.use(express.static('css'));

app.set('view engine', 'ejs');

app.listen(8080, function() {
  console.log("Server listening on port 8080");
});

var List = [{
  Nom : "Birmingham",
  Rue : "3 rue de l'hôtel de ville",
  Département : "92400",
  Téléphone : "0674767560",
  Lundi : "8h à 20h",
  Mardi : "8h à 20h",
  Mercredi : "8h à 20h",
  Jeudi : "8h à 20h",
  Vendredi : "8h à 22h",
  Samedi : "8h à 22h",
  Dimanche : "fermé"
}];

app.get("/", function(req, res) {
  res.render("CentralPage",{ EpicerieList: List});
});

app.get('/ajouter', function(req, res) {
  List.push(req.query);
  res.render("CentralPage", { EpicerieList: List});
});

app.get('/supprimer', function(req, res) {
  List.splice(req.query.i, 1);
  res.render("CentralPage", { EpicerieList: List});
});

app.get('/modifier', function(req, res) {
  List[req.query.i][req.query.property] = req.query.value;
  res.render("CentralPage", { EpicerieList: List});
});
