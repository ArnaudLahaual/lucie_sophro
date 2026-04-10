<?php

namespace App\Mail;

use App\Models\ContactMessage;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMessageReceived extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */

    //appeler la classe du message par le construct (données du message basé sur le Model)
    public function __construct(
        public ContactMessage $contactMessage
    ) {}

    /**
     * Get the message envelope.
     */
    //enveloppe = expéditeur, destinataire
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Nouveau message de ' . $this->contactMessage->firstname
        );
    }

    /**
     * Get the message content definition.
     */
    //le contenu du message, affichage vue Blade
    public function content(): Content
    {
        return new Content(
            view: 'emails.contact-received',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
