<script>

const pages = [

{
titre:"Les regards",
texte:`Deux jeunes poules d'eau vivaient sur le même lac.

Elles s'étaient déjà croisées plusieurs fois sans jamais se parler.

Pourtant...

Quelque chose semblait déjà les rapprocher.`,

image:"images/page1.png"
},

{
titre:"La rencontre",
texte:`Grâce à un ami, leurs chemins se croisèrent enfin.

À partir de ce jour-là, ils ne se quittèrent presque plus.`,

image:"images/page2.png"
},

{
titre:"Le brin d'herbe",
texte:`Un jour, Matteo ramassa un petit brin d'herbe.

Il le passa autour de l'aile de Shaïly comme une bague.

Puis il lui dit :

« Ne la donne pas à une autre poule d'eau. »`,

image:"images/page3.png"
},

{
titre:"Inséparables",
texte:`Ils riaient, voyageaient et construisaient leur histoire ensemble.`,

image:"images/page4.png"
},

{
titre:"Le nid",
texte:`Ils construisirent leur premier nid rempli de rêves et de projets.`,

image:"images/page5.png"
},

{
titre:"Les tempêtes",
texte:`Les disputes prirent peu à peu plus de place que les sourires.`,

image:"images/page6.png"
},

{
titre:"Le départ",
texte:`Un jour, Matteo quitta le nid.

Shaïly resta seule.`,

image:"images/page7.png"
},

{
titre:"Le silence",
texte:`Le lac semblait soudain beaucoup plus grand et silencieux.`,

image:"images/page8.png"
},

{
titre:"Le vide",
texte:`Sous son aile, Shaïly gardait toujours le petit brin d'herbe.`,

image:"images/page9.png"
},

{
titre:"Les jours continuent",
texte:`Quelques jours passèrent.

Le soleil continuait de se lever sur le lac.`,

image:"images/page10.png"
},

{
titre:"Un peu de lumière",
texte:`Petit à petit, Shaïly releva doucement la tête.`,

image:"images/page11.png"
},

{
titre:"Pour Matteo",
texte:`Parce que certaines histoires ne s'oublient jamais.

Merci d'avoir fait partie de la mienne. ❤️`,

image:"images/page12.png"
}

];

let page = 0;

const cover = document.getElementById("cover");
const book = document.getElementById("book");

const titre = document.getElementById("titre");
const texte = document.getElementById("texte");
const image = document.getElementById("illustration");
const numero = document.getElementById("numero");

function afficher(){

titre.textContent = pages[page].titre;

texte.innerHTML = pages[page].texte.replace(/\\n/g,"<br><br>");

image.src = pages[page].image;

numero.textContent = (page+1)+" / "+pages.length;

}

document.getElementById("ouvrir").onclick = () => {

cover.classList.add("hidden");
book.classList.remove("hidden");

afficher();

};

document.getElementById("suivant").onclick = () => {

if(page < pages.length-1){

page++;

afficher();

}

};

document.getElementById("precedent").onclick = () => {

if(page > 0){

page--;

afficher();

}

};

</script>

</body>
</html>
pages.push(
{
titre: "Le départ",
texte: `Matteo prit une décision difficile.

Il dit au revoir
sans se retourner.

Shaïly resta là,
le regard rempli de larmes.

Le silence
prit toute la place.`,
image: "images/page7.png"
},

{
titre: "La fin... pour l'instant",
texte: `Le soleil se coucha.

Shaïly resta longtemps
au bord du lac.

Elle ne savait pas
si elle le reverrait.

Mais elle se promit
de continuer à avancer.`,
image: "images/page8.png"
},

{
titre: "Le retour",
texte: `Shaïly rentra seule.

Le lac était calme.

Son cœur,
lui,
restait lourd.

Mais elle continua
à avancer.`,
image: "images/page9.png"
},

{
titre: "Le vide qui reste",
texte: `Quatre jours.

Quatre jours
sans sa présence.

Shaïly attendait.

Elle espérait,
sans trop y croire.`,
image: "images/page10.png"
},

{
titre: "Un peu de lumière",
texte: `Le jour se leva.

Le lac brillait doucement.

Shaïly avançait encore.

Pas parce qu'elle avait oublié,
mais parce qu'elle méritait
un peu de paix.`,
image: "images/page11.png"
},

{
titre: "Pour toujours",
texte: `Pour Matteo ❤️

Parce que certaines histoires
ne s'oublient jamais.`,
image: "images/page12.png"
}
);
let page = 0;

const couverture = document.getElementById("cover");
const livre = document.getElementById("book");

const titre = document.getElementById("titre");
const texte = document.getElementById("texte");
const illustration = document.getElementById("illustration");
const numero = document.getElementById("numero");

document.getElementById("ouvrir").addEventListener("click", () => {
    couverture.style.display = "none";
    livre.style.display = "flex";
    afficherPage();
});

function afficherPage() {
    titre.textContent = pages[page].titre;
    texte.innerHTML = pages[page].texte.replace(/\n/g, "<br><br>");
    illustration.src = pages[page].image;
    numero.textContent = (page + 1) + " / " + pages.length;

    illustration.style.opacity = 0;
    setTimeout(() => {
        illustration.style.opacity = 1;
    }, 150);
}

document.getElementById("suivant").addEventListener("click", () => {
    if (page < pages.length - 1) {
        page++;
        afficherPage();
    }
});

document.getElementById("precedent").addEventListener("click", () => {
    if (page > 0) {
        page--;
        afficherPage();
    }
});