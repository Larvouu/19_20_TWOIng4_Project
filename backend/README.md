# Antoine Ghiassi - Axel Vinant - OCRES TD04
# Partie Backend

Pour l'ossature du backend en modele-vue-controleur, nous avons pris l'exemple du tp mis à disposition :
- https://github.com/clementAC/cours-7-Stockage-de-donnees

Pour relier le back avec le front, nous nous sommes aidé de ce tutoriel :
- https://www.positronx.io/react-axios-tutorial-make-http-get-post-requests/?fbclid=IwAR1uLIeuznRzDFbHYisoYfAXQiXvGIAl8UxgixPXZSh046dJwlo8Qlvstr0

Les portions de code se trouvant dans cette page web nous ont notamment été très utiles pour afficher le tableau d'utilisateurs de la page admin, cette source est donc également liée au frontend


# Attention
Lors du npm start frontend, aucun chart ne s'affiche. C'est normal, voici comment les afficher : 

De ce que nous avons pu observer, pour que le front et le back acceptent de fonctionner sur le même port, il faut npm start le front AVANT de npm start le back.
Lors du premier affichage de notre page d'accueil, toutes nos données sont donc à 0 puisque non affiliées au data du back.

Ainsi, pour que les données du dashboard proviennent bien de la bdd, il faut, dans l'ordre :
- (il faudra probablement faire npm install sur le frontend ET le backend avant d'exécuter les actions qui suivent + avoir la base de donnée sur mongoDB en arrière-plan)
- npm start le dossier frontend
- npm start le dossier backend
- la page d'accueil s'ouvre avec des données nulles (ne prend pas en compte les données du back puisque lancé avant lui)
- aller dans le menu déroulant de la navbar, sélectionner la page admin pour y accéder
- aller dans le menu déroulant de la navbar, sélectionner la page accueil pour y ré-accéder

Ainsi les données seront bien mises à jour, et on peut commencer l'observation du dashboard.
Remarque : des illustrations se trouvent dans frontend/src/illustrations_front.


# Notes 
- Dans le widget barChart, même après avoir suivi les instructions ci dessus, la barre représentant 'cuisine' est à 0. Ce n'est pas une erreur, il n'y a effectivement aucun capteur dans la database ayant pour location 'kitchen'.
- lors de l'ajout d'un nouvel utilisateur via la page admin, la page ne s'actualise pas d'elle même, il faut changer de page puis y retourner pour voir le nouvel user apparaitre dans le tableau.
- Pour ce qui est des bonus du back, comme nous possédons les CRUD pour user, sensor, et measure, il nous est possible de delete un user, ainsi que d'update un user, même si les fonctionnalités ne sont pas exerçables via le frontend. Elles sont vérifiables sur Postman avec les requettes suivantes : 

# les requetes Postman pour tester la remarque juste au dessus

- DELETE http://localhost:3000/user/(+id du user), à noter que cette requete supprime un user sans supprimer ses sensors et ses measures.

- POST http://localhost:3000/user/(+id du user) en ajoutant, dans Body, les keys 'location', 'personsInHouse', et 'houseSize', et les values désirées pour le modifier. 

