<x-mail::message>
Caro {{$name}}<br/><br/>
Il tuo indirizzo email: {{$email}}<br/><br/>
Tipologia di richiesta: {{$event->name}}<br/>

Prenotazione per la data: {{$event->startDateTime->format('H:i d.m.Y')}}<br/><br/>
Descrizione: {{$event->description}}<br/><br/>

Link per GoogleMeet: <br/><br/>
La tua richiesta è stata inviata con successo.<br/>
{{-- <x-mail::button :url="''">
Button Text
</x-mail::button> --}}
Abbiamo ricevuto la sua richiesta, provvederemo a ricontattarla.<br/><br/>
Email dell'addetto: {{ $entity->email_addetto_ufficio}}<br/><br/>
Grazie, ufficio di {{ $entity->ufficio }}<br>

</x-mail::message>
