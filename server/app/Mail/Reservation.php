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


class Reservation extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $email;
    public $name;
    public $event;
    public $entity;

    public function __construct($event, $email, $name,  $attachment, $entity)
    {
        $this->event = $event;
        $this->email = $email;
        $this->name = $name; 
        $this->attachment = $attachment; 
        $this->entity = $entity; 
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        $subject = $this->event->name;
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
            markdown: 'emails.reservations'
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        $attachment = $this->attachment;
       return [
           Attachment::fromData(fn () => $attachment->get() , 'invite.ics')
           ->withMime('text/calendar; charset=UTF-8; method=REQUEST'),
       ];
    }

}
