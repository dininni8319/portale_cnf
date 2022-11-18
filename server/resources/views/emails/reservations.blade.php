<x-mail::message>
Caro {{$name}}<br/>
dall' indirizzo: {{$email}}<br/>
Tipologia di richiesta: {{$event->name}}

Prenotazione per la data: {{$event->startDateTime}}<br/>
Descrizione: {{$event->description}}<br/>

Link per GoogleMeet: 
La tua richiesta è stata inviata con successo.
<x-mail::button :url="''">
Button Text
</x-mail::button>

Thanks, {{ $ufficio }}<br>

</x-mail::message>
