<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Contracts\Queue\ShouldQueue;


class ReservationUpdate extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $email;
    public $name;
    public $entity;
    public $appuntamento;

    public function __construct($email, $name, $entity, $appuntamento)
    {
        $this->email = $email;
        $this->name = $name; 
        $this->entity = $entity; 
        $this->appuntamento = $appuntamento; 
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        $subject = 'aggiornamento dell\' appuntamento';
        $entity = $this->entity;
        
        //here you have to pass the email and name of the sender
        return new Envelope(
            from: new Address($entity->email_addetto_ufficio, $entity->ufficio),
            subject: $subject,
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            markdown: 'emails.reservationupdate'
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
       
       return [];
    }
}
