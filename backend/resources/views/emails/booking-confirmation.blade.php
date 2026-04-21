<h2>Votre réservation est confirmée !</h2>
<p>Bonjour {{ $booking->firstname }},</p>
<p>Votre séance de sophrologie est bien réservée.</p>
<hr>
<p><strong>Date :</strong> {{ $booking->timeSlot->date }}</p>
<p><strong>Heure :</strong> {{ $booking->timeSlot->time }}</p>
<p><strong>Type de séance :</strong> {{ $booking->subject }}</p>
<p>À bientôt !</p>