# Antoine Ghiassi - Axel Vinant - OCRES TD04
# Partie Backend

Pour l'ossature du backend en modele-vue-controleur, nous avons pris l'exemple du tp mis à disposition :
- https://github.com/clementAC/cours-7-Stockage-de-donnees

Pour relier le back avec le front, nous nous sommes aidé de ce tutoriel :
- https://www.positronx.io/react-axios-tutorial-make-http-get-post-requests/?fbclid=IwAR1uLIeuznRzDFbHYisoYfAXQiXvGIAl8UxgixPXZSh046dJwlo8Qlvstr0
Les portions de code se trouvant dans cette page web nous ont notamment été très utiles pour afficher le tableau d'utilisateurs de la page admin, cette source est donc également liée au frontend


# Attention
De ce que nous avons pu observer, pour que le front et le back acceptent de fonctionner sur le même port, il faut npm start le front AVANT de npm start le back.
Ainsi, pour que les données du dashboard proviennent bien de la bdd, il faut, dans l'ordre :
- npm start le dossier frontend
- npm start le dossier backend
- la page d'accueil s'ouvre avec des données nulles (ne prend pas en compte les données du back puisque lancé avant lui)
- aller dans le menu déroulant de la navbar, sélectionner la page admin pour y accéder
- aller dans le menu déroulant de la navbar, sélectionner la accueil pour y ré-accéder

et ainsi les données seront bien mises à jour

