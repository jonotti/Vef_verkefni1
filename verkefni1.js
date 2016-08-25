1.Hvað er ECMAScript?

ECMAScript er sameiginlegur grunnur (syntax og semantic) til að byggja skrftumál á eins og
t.d.JavaScript og ActionScript. Hýsingar umhverfi fyrir ECMAScript þarf ekki að vera vafri heldur
getur verið NodeJS (server-side platform) eða Adobe Flash. 

2.Afhverju að nota === fremur en == í JavaScript?

== athugar bara hvort að gildin séu eins á meðan === athugar hvort að gildið og tegundin sé það sama

3.Hvað kemur út og hvaða type (sjá typeof operator)?

a) int 25
b) string 55 

4.Hvað eru margar global breytur í kóðanum?

það eru 3 global breytur í kóðanum

5.Hver er munurinn á A og B? Útskýrðu hvað “use strict“ gerir.

Hjá mér birtir A message en B birtir ekki message
"use strict" setur javascript engineið í strict mode og eyðir út errors sem hafa ekki
áhrif og keyrir kóðann.  Strict mode getur gert kóðann hraðvirkari en oft breytir hann hegðun kóðans.
strict mode er hinsvegar ekki supportað á öllum vöfrum

6.Hver er munurinn á null og undefined í notkun?

þegar breyta er undefined þá hefur hún ekki fengið gildi en þegar breyta er null þá er búið að skilgreyna að hún sé ekki með gildi
þegar athugað er hvaða tegund undefined er þá kemur error en þegar athugað er hvaða tegund null er þá kemur object

7.Gerðu kóðann skilvirkari og rökstuddu breytinguna!

var names = ['George','Ringo','Paul','John'];
for(var i=0 , j= names.length; i<j; i++){
doSomethingWith(names[i]);
}


8. Hver er munurinn á for of, forEach og for in lykkju. Komdu með dæmi?

allt saman eru þetta for lykkjur og virka eins en eru notaðar í mismunandi tilfellum.
for in er notað yfir enumerable properties í objecti
foreach er notað yfir stök í fylki
for of geturu stjórnað hvaða value þú ætlar að keyra í gegnum

9. Hvað er NaN og afhverju er eftirfarandi false?

NaN stendur fyrir not a number og NaN getur aldrei verið NaN svoleiðis að NaN == NaN mun alltaf vera false

10. Hvað birtist (úttak)? Útskýrðu hversvegna.

þegar notað er || (or) þá velur hann fyrri valmöguleikann nema hann sé null eða tómur,
þannig að útkoman er "user" í þessu tilfelli