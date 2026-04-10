<h2>Nouveau message reçu</h2>

<p><strong>Nom:</strong>{{ $contactMessage->lastname}} {{ $contactMessage->firstname}}</p>
<p><strong>Email:</strong>{{ $contactMessage->email}}</p>
<p><strong>Telephone:</strong>{{ $contactMessage->phone}}</p>
<p><strong>Sujet:</strong>{{ $contactMessage->subject}}</p>

<hr>

<p>{{$contactMessage->message}}</p>