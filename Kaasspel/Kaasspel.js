var antwoord;

antwoord = (confirm("Is de kaas geel?"));
if (antwoord == true){
  antwoord = (confirm("zitten er gaten in?"));
  if (antwoord == true){
    antwoord = (confirm("Is de kaas belachelijk duur?"));
    if (antwoord == true){
      alert("U heeft gekozen voor Emmenthaler");
    } else{
      alert("U heeft gekozen voor Leerdammer");
    }

  } else{
    antwoord = (confirm("Is de kaas hard als steen?"));
    if (antwoord == true){
      alert("U heeft gekozen voor Pamigiano Reggiano");
    } else{
      alert("U heeft gekozen voor Goudse kaas");
    }
  }

} else{
  antwoord = (confirm("Heeft de kaas blauwe schimmels?"));
  if (antwoord == true){
    antwoord = (confirm("Heeft de kaas een korst?"));
    if (antwoord == true){
      alert("U heeft gekozen voor Bleu de Rochbaron");
    } else{
      alert("U heeft gekozen voor Fourme d'Ambert");
    }
    	} else{
    antwoord = (confirm("heeft de kaas een korst?"));
      if (antwoord == true){
      alert("U heeft gekozen voor Camembert");
    }   else{
      alert("U heeft gekozen voor Mozzarella");
    }
  }
}
