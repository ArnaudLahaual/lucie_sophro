<h2>Nouvelle réservation reçue</h2>
<p><strong>Nom :</strong> {{ $booking->lastname }} {{ $booking->firstname }}</p>
<p><strong>Email :</strong> {{ $booking->email }}</p>
<p><strong>Téléphone :</strong> {{ $booking->phone }}</p>
<p><strong>Type de séance :</strong> {{ $booking->subject }}</p>
<hr>
<p><strong>Date :</strong> {{ $booking->timeSlot->date }}</p>
<p><strong>Heure :</strong> {{ $booking->timeSlot->time }}</p>