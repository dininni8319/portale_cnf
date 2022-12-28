<x-mail::message>
Caro {{$name}}<br/><br/>
Il tuo indirizzo email: {{$email}}<br/><br/>
Abbiamo aggiornamento l'appuntamento,<br/><br/>
Note di lavorazione: {{$appuntamento->note_lavorazione}}.<br/><br/>
Stato dell'appuntamento: {{$appuntamento->stato ? 'chiuso' : 'aperto'}}.<br/><br/>
Ulteriori dettagli dell'appuntamento: <br/><br/>
Descrizione: {{$appuntamento->description}}<br/><br/>
Tipologia di richiesta: {{$appuntamento->tipologia_richiesta}}<br/><br/>
Data ed orario dell'appuntamento: {{$appuntamento->start}}<br/><br/>
Email dell'addetto: {{ $entity->email_addetto_ufficio}}<br/><br/>
Grazie, ufficio di {{ $entity->ufficio }}<br>

</x-mail::message>
