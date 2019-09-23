var antwoord;

confirm("Is de kaas geel?");
if (antwoord == true){
  (confirm("zitten er gaten in?"));
  if (antwoord == true){
    (confirm("Is de kaas belachelijk duur?"));
    if (antwoord == true){
      alert("U heeft gekozen voor Emmenthaler");
    } else{
      alert("U heeft gekozen voor Leerdammer");
    }

  } else{
    (confirm("Is de kaas hard als steen?"));
    if (antwoord == true){
      alert("U heeft gekozen voor Pamigiano Reggiano");
    } else{
      alert("U heeft gekozen voor Goudse kaas");
    }
  }

} else{
  (confirm("Heeft de kaas blauwe schimmels?"));
  if (antwoord == true){
    (confirm("Heeft de kaas een korst?"));
    if (antwoord == true){
      alert("U heeft gekozen voor Camenbert");
    } else{
      alert("U heeft gekozen voorMozzarella");
    }
  } else{
    (confirm("heeft de kaas een korst?"));
    if (antwoord == true){
      alert("U heeft gekozen voor Bleu de Rochbaron");
    } else{
      alert("U heeft gekozen voor Foume d'Ambert");
    }
  }
}
