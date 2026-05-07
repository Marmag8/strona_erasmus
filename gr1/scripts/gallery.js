(() => {
	const galleryGrid = document.getElementById("galleryGrid");

	if (!galleryGrid) {
		return;
	}

	const prevPageButton = document.getElementById("galleryPrev");
	const nextPageButton = document.getElementById("galleryNext");
	const pagesContainer = document.getElementById("galleryPages");

	const lightbox = document.getElementById("lightbox");
	const lightboxImage = document.getElementById("lightboxImage");
	const lightboxTitle = document.getElementById("lightboxTitle");
	const lightboxDescription = document.getElementById("lightboxDescription");
	const lightboxCloseButton = document.getElementById("lightboxClose");
	const lightboxPrevButton = document.getElementById("lightboxPrev");
	const lightboxNextButton = document.getElementById("lightboxNext");

	const galleryItems = [
	{
		src: '../public/gallery/students-27-29/lodyWRimini.webp',
		alt: 'Czas w Rimini',
		title: 'Lody w Rimini',
		description: 'Odpoczynek przy tradycyjnych włoskich lodach.'
	},
	{
		src: '../public/gallery/students-27-29/4E na obiedzie.webp',
		alt: 'Wspólny posiłek',
		title: 'Wspólny posiłek',
		description: 'Klasa 4E integruje się podczas pysznego obiadu.'
	},
	{
		src: '../public/gallery/students-27-29/4E w San Marino.webp',
		alt: 'Wizyta w San Marino',
		title: 'Klasa 4E',
		description: 'Uczniowie klasy 4E zwiedzający San Marino.'
	},
	{
		src: '../public/gallery/students-27-29/czas wolny przy plazy.webp',
		alt: 'Czas wolny',
		title: 'Czas przy plaży',
		description: 'Relaks i zabawa uczestników nad brzegiem morza.'
	},
	{
		src: '../public/gallery/students-27-29/czas wolny w rimini (2).webp',
		alt: 'Czas w Rimini',
		title: 'Uliczkami Rimini',
		description: 'Spacery ulicami Rimini podczas wolnego popołudnia.'
	},
	{
		src: '../public/gallery/students-27-29/czas wolny w rimini.webp',
		alt: 'Czas w Rimini',
		title: 'Odpoczynek w Rimini',
		description: 'Grupa podziwia architekturę miasteczka wspólnie spędzając czas.'
	},
	{
		src: '../public/gallery/students-27-29/czas wolny.webp',
		alt: 'Czas wolny',
		title: 'Czas dla siebie',
		description: 'Odpoczynek po pełnym wrażeń dniu w ramach programu.'
	},
	{
		src: '../public/gallery/students-27-29/Kolacja na tle San Marino.webp',
		alt: 'Wieczorne widoki',
		title: 'Posiłek w San Marino',
		description: 'Uczestnicy jedzą ze wspaniałym malowniczym tłem.'
	},
	{
		src: '../public/gallery/students-27-29/panorama w san marino.webp',
		alt: 'Panorama San Marino',
		title: 'Przepiękna panorama',
		description: 'Ujęcia pięknych krajobrazów San Marino obserwowanych podczas wycieczki.'
	},
	{
		src: '../public/gallery/students-27-29/rzezba aparatu w rimini.webp',
		alt: 'Rzeźba w Rimini',
		title: 'Artystyczne Rimini',
		description: 'Zdjęcie przy znanej miejscowej rzeźbie w kształcie aparatu.'
	},
	{
		src: '../public/gallery/students-27-29/czas wolny w san marino.webp',
		alt: 'Czas w San Marino',
		title: 'Klimatyczne San Marino',
		description: 'Chwila wytchnienia podczas zwiedzania republiki.'
	},
	{
		src: '../public/gallery/students-27-29/widok w san marino.webp',
		alt: 'Widok na miasto',
		title: 'Krajobrazy z góry',
		description: 'Przecudowny widok rozciągający się z jednej z twierdz.'
	},
	{
		src: '../public/gallery/students-27-29/wieczor w rimini.webp',
		alt: 'Wieczór w Rimini',
		title: 'Rimini nocą',
		description: 'Zwiedzanie pięknego Rimini po zachodzie słońca.'
	},
	{
		src: '../public/gallery/students-27-29/fontanna w rimini.webp',
		alt: 'Miejska architektura',
		title: 'Słynna fontanna',
		description: 'Spotkanie uczniów pod zabytkową fontanną.'
	},
	{
		src: '../public/gallery/students-27-29/grupa w san marino.webp',
		alt: 'Zdjęcie grupowe',
		title: 'Cała ekipa',
		description: 'Wszyscy uśmiechnięci gotowi do dalszego zwiedzania.'
	},
	{
		src: '../public/gallery/students-27-29/kosciol w rimini.webp',
		alt: 'Architektura Rimini',
		title: 'Zabytkowy kościół',
		description: 'Stare włoskie budowle zachwycają swoimi detalami.'
	},
	{
		src: '../public/gallery/students-27-29/kosciol w san marino.webp',
		alt: 'Zabytki San Marino',
		title: 'Katedra San Marino',
		description: 'Klasyczna architektura sakralna pośród państwowych budowli.'
	},
	{
		src: '../public/gallery/students-27-29/rimini.webp',
		alt: 'Ujęcie miasta',
		title: 'W centrum Rimini',
		description: 'Zdjęcie lokalnego placyku mieniącego się w słońcu.'
	},
	{
		src: '../public/gallery/students-27-29/rzezba.webp',
		alt: 'Detale i sztuka',
		title: 'Lokalna sztuka',
		description: 'Intrygujące dzieło rzeźbiarskie spotkane w drodze.'
	},
	{
		src: '../public/gallery/students-27-29/samolot do rimini.webp',
		alt: 'Podróż lotnicza',
		title: 'Podniebna podróż',
		description: 'Droga w chmurach prosto na staże Erasmus+.'
	},
	{
		src: '../public/gallery/students-27-29/san marino (2).webp',
		alt: 'Wizyta w San Marino',
		title: 'Spacer brzegiem urwiska',
		description: 'Fotografia ukazująca wzniesienia z krajobrazem miejskim.'
	},
	{
		src: '../public/gallery/students-27-29/san marino (3).webp',
		alt: 'Wizyta w San Marino',
		title: 'Mury obronne',
		description: 'Uczestnicy zachwyceni widokami potężnych murów obronnych.'
	},
	{
		src: '../public/gallery/students-27-29/san marino.webp',
		alt: 'Wizyta w San Marino',
		title: 'Górskie miasteczko',
		description: 'Tajemnicze i zapierające dech w piersiach klimatyczne zaułki.'
	},
	{
		src: '../public/gallery/students-27-29/uczestnicy w san marino.webp',
		alt: 'Uczestnicy',
		title: 'Razem w podróży',
		description: 'Zdjęcie pamiątkowe grupy chłopaków uczestniczących w projekcie.'
	},
	{
		src: '../public/gallery/students-27-29/ulice san marino.webp',
		alt: 'Klimatyczne ulice',
		title: 'Wzdłuż murów',
		description: 'Urocze dróżki przecinające starówkę malowniczą trasą.'
	},
	{
		src: '../public/gallery/students-27-29/san marino (2).webp',
		alt: 'Krajobrazy',
		title: 'Widoki i natura',
		description: 'Zapierające dech w piersiach dachy i obiekty widziane z góry.'
	},
	{
		src: '../public/gallery/students-27-29/uliczka w rimini.webp',
		alt: 'Klimatyczne uliczki',
		title: 'Urokliwa uliczka',
		description: 'Ciasna, klimatyczna ulica ze wspaniałą włoską zabudową.'
	},
	{
		src: '../public/gallery/students-27-29/muzeum felliniego.webp',
		alt: 'Odkrywanie kultury',
		title: 'Muzeum Felliniego',
		description: 'Kulturalny rozwój poprzez podziwianie sztuki kinowej.'
	},
	{
		src: '../public/gallery/students-27-29/czas wolny.webp',
		alt: 'Czas na odpoczynek',
		title: 'Ładowanie baterii',
		description: 'Odpoczynek na promenadzie i nabieranie sił na kolejne przygody.'
	},
	{
		src: '../public/gallery/students-27-29/wieczor w rimini.webp',
		alt: 'Miasto nocą',
		title: 'Nocne życie miasta',
		description: 'Po ciężkim dniu praktyk, warto zapoznać się z miastem również nocą.'
	},
	{
		src: '../public/gallery/zalucki-27-29/4e w san marino 1.webp',
		alt: 'Wspomnienia grupowe',
		title: 'Klasa 4E wycieczka',
		description: 'Edukacyjny i intergrujący wypad reprezentantów klasy 4E.'
	},
	{
		src: '../public/gallery/zalucki-27-29/4e w san marino.webp',
		alt: 'Wspomnienia grupowe',
		title: '4E na szlaku',
		description: 'Kolejne zdjecie pamiątkowe dzielnej klasy zdobywającej San Marino.'
	},
	{
		src: '../public/gallery/zalucki-27-29/4j w san marino.webp',
		alt: 'Wspomnienia grupowe',
		title: 'Silna grupa 4J',
		description: 'Uczniowie 4J równie chętnie zwiedzali wszystkie najciekawsze zakątki.'
	},
	{
		src: '../public/gallery/zalucki-27-29/chlopak na tle widokow san marino.webp',
		alt: 'Uczestnik wyjazdu',
		title: 'Pamiątka z gór',
		description: 'Idealne miejsce na pamiątkowe profilowe ze słonecznej krainy.'
	},
	{
		src: '../public/gallery/zalucki-27-29/chlopaki przy lornetce na tle zamku san marino.webp',
		alt: 'Uczestnicy wyjazdu',
		title: 'Punkt widokowy',
		description: 'Podziwianie rozległej panoramy używając miejskich lornet.'
	},
	{
		src: '../public/gallery/zalucki-27-29/chlopaki w san marino 1.webp',
		alt: 'Uczestnicy w San Marino',
		title: 'Wycieczki piesze',
		description: 'Wiele kilometrów pieszo to doskonały sposób na dobre zwiedzanie.'
	},
	{
		src: '../public/gallery/zalucki-27-29/chlopaki w san marino 10.webp',
		alt: 'Uczestnicy w San Marino',
		title: 'Wzdłuż murów obronnych',
		description: 'San Marino robi wrażenie ufortyfikowaniami sięgającymi historii wojen.'
	},
	{
		src: '../public/gallery/zalucki-27-29/chlopaki w san marino 11.webp',
		alt: 'Uczestnicy w San Marino',
		title: 'Schodami w górę',
		description: 'Pamiątkowe foto przy pokonywaniu niezliczonych schodków państwa.'
	},
	{
		src: '../public/gallery/zalucki-27-29/chlopaki w san marino 12.webp',
		alt: 'Uczestnicy w San Marino',
		title: 'Odpoczynek u szczytu',
		description: 'Po intensywnym wejściu wszystkim należał się głębszy oddech.'
	},
	{
		src: '../public/gallery/zalucki-27-29/chlopaki w san marino 2.webp',
		alt: 'Uczestnicy w San Marino',
		title: 'Zabudowa z bliska',
		description: 'Charakterystyczne jasne mury starych zabudowań zapierają dech.'
	},
	{
		src: '../public/gallery/zalucki-27-29/chlopaki w san marino 3.webp',
		alt: 'Uczestnicy w San Marino',
		title: 'Grupa we włoskiej scenerii',
		description: 'Nikt nie narzekał na wspaniałe klimaty towarzyszące wyjazdowi.'
	},
	{
		src: '../public/gallery/zalucki-27-29/chlopaki w san marino 4.webp',
		alt: 'Uczestnicy w San Marino',
		title: 'Zamek od środka',
		description: 'Młodzież poznaje historyczne artefakty i zbrojownie miasta.'
	},
	{
		src: '../public/gallery/zalucki-27-29/chlopaki w san marino 5.webp',
		alt: 'Uczestnicy w San Marino',
		title: 'Patrząc w dal',
		description: 'Z tak wysokiego pasma górskiego widoki sięgają za horyzont.'
	},
	{
		src: '../public/gallery/zalucki-27-29/chlopaki w san marino 7.webp',
		alt: 'Uczestnicy w San Marino',
		title: 'Pośród pomników',
		description: 'Odnajdywanie skrytych w uliczkach pomników i fontann.'
	},
	{
		src: '../public/gallery/zalucki-27-29/chlopaki w san marino 8.webp',
		alt: 'Uczestnicy w San Marino',
		title: 'Niezapomniane przeżycia',
		description: 'Taki wyjazd buduje wspomnienia oraz długotrwałe przyjaźnie na lata.'
	},
	{
		src: '../public/gallery/zalucki-27-29/chlopaki w san marino 9.webp',
		alt: 'Uczestnicy w San Marino',
		title: 'Szukając pamiątek',
		description: 'Mnóstwo uroczych sklepików było stałym punktem na trasach wędrówek.'
	},
	{
		src: '../public/gallery/zalucki-27-29/chlopaki w san marino.webp',
		alt: 'Uczestnicy w San Marino',
		title: 'Pozdrowienia z San Marino',
		description: 'Najważniejsze to dobre humory, które nikogo nie opuszczały.'
	},
	{
		src: '../public/gallery/zalucki-27-29/chlopaki zainterewowane tabliczka.webp',
		alt: 'Podczas wycieczki',
		title: 'Stare inskrypcje',
		description: 'Zaciekawienie historią ukrytą na miejskich pamiątkowych tablicach.'
	},
	{
		src: '../public/gallery/zalucki-27-29/ciezka praca staz zawodowy.webp',
		alt: 'Praktyki',
		title: 'Wytężona praca',
		description: 'Uczestnicy skupieni nad realnymi projektami w ramach stażu.'
	},
	{
		src: '../public/gallery/zalucki-27-29/grupka osob na tle san marino.webp',
		alt: 'Widoki i ludzie',
		title: 'Piękne tło na foto',
		description: 'Rozciągające się z tyłu krajobrazy są wymarzonym miejscem na zdjęcia.'
	},
	{
		src: '../public/gallery/zalucki-27-29/grupowe zdjecie pizza san marino.webp',
		alt: 'Wspólny posiłek',
		title: 'Włoska pizza',
		description: 'Po całym dniu nie ma nic lepszego niż włoska, oryginalna pizza z pieca.'
	},
	{
		src: '../public/gallery/zalucki-27-29/grupowe zdjecie san marino.webp',
		alt: 'Uczestnicy w San Marino',
		title: 'Foto na tle budowli',
		description: 'Wielkie wzniesienia obfitują w takie grupowe, urocze zakątki.'
	},
	{
		src: '../public/gallery/zalucki-27-29/powitanie uczniow.webp',
		alt: 'Wydarzenie',
		title: 'Powitanie uczestników',
		description: 'Moment inauguracji i serdecznego powitania w nowym środowisku zawodowym.'
	},
	{
		src: '../public/gallery/zalucki-27-29/praktyki zawodowe.webp',
		alt: 'Praktyki',
		title: 'Czas na kompetencje',
		description: 'Uczestnictwo w projekcie to wielki rozwój umiejętności zawodowych i językowych.'
	},
	{
		src: '../public/gallery/zalucki-27-29/prezentacja o rimini.webp',
		alt: 'Zajęcia',
		title: 'Poznajemy Rimini',
		description: 'Referaty o zabytkach wprowadzają w wspaniały klimat włoskich miast.'
	},
	{
		src: '../public/gallery/zalucki-27-29/prezentacja o san marino.webp',
		alt: 'Zajęcia',
		title: 'Poznajemy San Marino',
		description: 'Zaczerpnięcie wiedzy przed wyruszeniem na własną misję odkrywczą.'
	},
	{
		src: '../public/gallery/zalucki-27-29/sdjecie gruopowe przed zamkiem.webp',
		alt: 'Zdjęcie pamiątkowe',
		title: 'Zwycięzcy u bram',
		description: 'Najważniejsze bramy i zameczki zostały pomyślnie i radośnie zwiedzone.'
	},
	{
		src: '../public/gallery/zalucki-27-29/statua san marino.webp',
		alt: 'Zabytki',
		title: 'Kultowe rzeźby',
		description: 'Jedna z licznie rozmieszczonych po całym państwie-mieście historycznych figur.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy 1.webp',
		alt: 'Zadania w pracy',
		title: 'Zagłębieni w kodzie',
		description: 'Uczniowie rozwijający swoje branżowe projekty i kompetencje w IT.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy 2.webp',
		alt: 'Zadania w pracy',
		title: 'Praca przy stanowiskach',
		description: 'Każdy miał przydzielone miejsce pracy aby dogodnie realizować cele zadania.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy 3.webp',
		alt: 'Zadania w pracy',
		title: 'Spotkania mentorskie',
		description: 'Omówieni z mentorami postępów na stażach zawodowych realizowanych dla firm.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy.webp',
		alt: 'Zadania w pracy',
		title: 'Budowa doświadczenia',
		description: 'Praktyki odbywające się we Włoszech to idealna szansa dla młodych adeptów technologii.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy1.webp',
		alt: 'Zadania w pracy',
		title: 'Czas na wnioski',
		description: 'Programiści dyskutujący nad optymalnymi i wydajnymi rozwiązaniami na swoich projektach.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy10.webp',
		alt: 'Zadania w pracy',
		title: 'Analiza usterek',
		description: 'Codzienne zmagania z typowymi studenckimi usterkami w pisanych algorytmach.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy11.webp',
		alt: 'Zadania w pracy',
		title: 'Nauka sprzętu',
		description: 'Studenci nie bali się odkrywać zupełnie nowej, lokalnej aparatury czy sieci.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy12.webp',
		alt: 'Zadania w pracy',
		title: 'Wykłady i prelekcje',
		description: 'Ważną cegiełkę dołożyły wspaniałe przygotowania teoretyczne odbywane w salach.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy13.webp',
		alt: 'Zadania w pracy',
		title: 'Burze mózgów',
		description: 'Twórcze debaty pozwoliły zrealizować wielkie idee na płaszczyźnie stażowej.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy14.webp',
		alt: 'Zadania w pracy',
		title: 'Prezentacje pomysłów',
		description: 'Każdy uczeń musiał zaprezentować dotychczas zaplanowane etapy zlecenia.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy15.webp',
		alt: 'Zadania w pracy',
		title: 'Zaliczenia praktyczne',
		description: 'Szybkie zapoznanie się z wymogami projektowymi na zewnątrz firmy na żywo.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy16.webp',
		alt: 'Zadania w pracy',
		title: 'Praktyczny egzamin',
		description: 'Nikt nie narzekał na rutynę, zadania i wyzwania stale przyciągały do pracy.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy17.webp',
		alt: 'Zadania w pracy',
		title: 'Zdobyte certyfikaty',
		description: 'Po ciężkiej pracy na stażach wszyscy nabyli niezwykłych referencji i zaświadczeń.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy18.webp',
		alt: 'Zadania w pracy',
		title: 'Współpraca międzynarodowa',
		description: 'Angielski to podstawa i każdy doskonale opanował obcowanie z kadrą po angielsku.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy2.webp',
		alt: 'Zadania w pracy',
		title: 'Testowanie sprzętu',
		description: 'Ciekawe laboratoria posługujące się innowacyjnymi środkami informatycznymi.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy3.webp',
		alt: 'Zadania w pracy',
		title: 'Przy komputerze',
		description: 'Domyślna postawa informatyka podczas prób pisania perfekcyjnego modułu.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy4.webp',
		alt: 'Zadania w pracy',
		title: 'Dobre wsparcie',
		description: 'Pewne zaplecze opieki z wykwalifikowaną załogą firmy szkolącej.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy5.webp',
		alt: 'Zadania w pracy',
		title: 'Zdane testy',
		description: 'Wysilając umysły młodzież udowodniła, że potrafi się błyskawicznie przystosowywać do zmian.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy6.webp',
		alt: 'Zadania w pracy',
		title: 'Pomoc dydaktyczna',
		description: 'Zajęcia grupowe bardzo przydawały się zwłaszcza w przełamywaniu pierwszych lodów na warsztacie.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy7.webp',
		alt: 'Zadania w pracy',
		title: 'Sukcesy techniczne',
		description: 'Z uśmiechem na twarzy można celebrować zamknięcie kluczowego sprinta zlecenia.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy8.webp',
		alt: 'Zadania w pracy',
		title: 'Staż IT na froncie',
		description: 'Włoskie powietrze zdecydowanie sprzyjało innowacjom i kreatywności w kodowaniu.'
	},
	{
		src: '../public/gallery/zalucki-27-29/staz zawodowy9.webp',
		alt: 'Zadania w pracy',
		title: 'Certyfikacja i sukces',
		description: 'Zdobyte doświadczenie i wpis do CV, to wspaniały start dla każdego ucznia technikum!'
	},
	{
		src: '../public/gallery/zalucki-27-29/widok zamek san marino.webp',
		alt: 'Krajobrazy',
		title: 'Zamek górujący nad miastem',
		description: 'Niesamowitą panoramę miasta wieńczył wielki stary zamek, dostępny dla darmowych zwiedzań.'
	},
	{
		src: '../public/gallery/zalucki-27-29/widoki san marino 1.webp',
		alt: 'Krajobrazy',
		title: 'Widok na dolinę',
		description: 'Gęste zalesienie kontrastujące ze skalnymi wzgórzami robi spore wrażenie.'
	},
	{
		src: '../public/gallery/zalucki-27-29/widoki san marino 2.webp',
		alt: 'Krajobrazy',
		title: 'Dachy miasta',
		description: 'Włoski styl dachwek z wypalanej gliny od razu buduje wspaniały południowy klimat.'
	},
	{
		src: '../public/gallery/zalucki-27-29/widoki san marino 3.webp',
		alt: 'Krajobrazy',
		title: 'Skale wzgórza',
		description: 'Kaskadowo ułożone miasto to wspaniała perspektywa turystyczna z każdej strony.'
	},
	{
		src: '../public/gallery/zalucki-27-29/widoki san marino 4.webp',
		alt: 'Krajobrazy',
		title: 'Punkt najwyższy',
		description: 'Docierając na szczyt można w ułamek sekundy poczuć, że było warto.'
	},
	{
		src: '../public/gallery/zalucki-27-29/widoki san marino 5.webp',
		alt: 'Krajobrazy',
		title: 'Morze dachów',
		description: 'Patrząc w dół widać niekończące się ilości zabudowań cywilnych republiki.'
	},
	{
		src: '../public/gallery/zalucki-27-29/widoki san marino.webp',
		alt: 'Krajobrazy',
		title: 'Krajobrazy pełne magii',
		description: 'Podsumowując zjawiskowe ujęcia - był to w całości bardzo obfity kulturowo punkt wycieczek.'
	},
	{
		src: '../public/gallery/zalucki-27-29/zdjecie groupowe kosciol.webp',
		alt: 'Zdjęcie grupowe',
		title: 'Zdjęcie przy kościele',
		description: 'Pamiątkowa fotografia tuż z wejścia do wiekowej ogromnej, przepięknej bazyliki miejskiej.'
	},
	{
		src: '../public/gallery/zalucki-27-29/zdjecie groupowe most.webp',
		alt: 'Zdjęcie grupowe',
		title: 'Pamiątka z mostu',
		description: 'Stare mosty to idealne punkty dla malowniczych zdjęć klasowych grupy turystów.'
	},
	{
		src: '../public/gallery/zalucki-27-29/zdjecie grupowe lodki.webp',
		alt: 'Wycieczka',
		title: 'W porcie',
		description: 'Przy wycieczce nad wodę udało się także podziwiać przystanie usłane wieloma, cennymi łodziami.'
	},
	{
		src: '../public/gallery/zalucki-27-29/zdjecie grupowe napis rimini.webp',
		alt: 'W Rimini',
		title: 'Znak Rimini',
		description: 'Tego napisu nie dało się pominąć - zdjęcie pod tablicą \'Rimini\' to wręcz studencki obowiązek!'
	},
	{
		src: '../public/gallery/zalucki-27-29/zdjecie grupowe san marino 1.webp',
		alt: 'Wspomnienia grupowe',
		title: 'San Marino razem',
		description: 'Duża reprezentacja uczniów radośnie zdobywającej najtrudniej dostępne widokowe pułki San Marino.'
	},
	{
		src: '../public/gallery/zalucki-27-29/zdjecie grupowe san marino 2.webp',
		alt: 'Wspomnienia grupowe',
		title: 'Schodek po schodku',
		description: 'Tłum na schodach potwierdza jedność i świetne relacje rówieśnicze w czasie przerw edukacyjnych.'
	},
	{
		src: '../public/gallery/zalucki-27-29/zdjecie grupowe san marino 3.webp',
		alt: 'Wspomnienia grupowe',
		title: 'Cała delegacja',
		description: 'Nikt nie pozostał w tyle. Wszyscy bardzo szczęśliwie uczestniczyli w atrakcyjnych podróżach grupowych ze szkoły.'
	},
	{
		src: '../public/gallery/zalucki-27-29/zdjecie grupowe san marino.webp',
		alt: 'Wspomnienia grupowe',
		title: 'Wygrani zdobywcy wycieczek',
		description: 'Na samym końcu każdy wiedział, jak wielkim zaszczytem i wspaniałą przygodą okazał się wyjazd zagraniczny!'
	},
	{
		src: '../public/gallery/students-30-03/bolonia (1).webp',
		alt: 'Uroki Bolonii',
		title: 'Uroki Bolonii',
		description: 'Znakomite chwile spędzone podczas wycieczki do Bolonii.'
	},
	{
		src: '../public/gallery/students-30-03/bolonia (2).webp',
		alt: 'Uroki Bolonii',
		title: 'Uroki Bolonii',
		description: 'Znakomite chwile spędzone podczas wycieczki do Bolonii.'
	},
	{
		src: '../public/gallery/students-30-03/chlopaki na tle flagi wloch.webp',
		alt: 'Z narodową flagą',
		title: 'Z narodową flagą',
		description: 'Pamiątkowe zdjęcie z flagą narodową Włoch.'
	},
	{
		src: '../public/gallery/students-30-03/chlopaki po zamku z armatami wodnymi.webp',
		alt: 'Zabawa w wodzie',
		title: 'Zabawa w wodzie',
		description: 'Bitwa na armatki wodne zapewniła grupie dużo śmiechu i rozrywki.'
	},
	{
		src: '../public/gallery/students-30-03/chlopaki w parku miniatur (1).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Najsłynniejsze włoskie i europejskie zabytki w skali mikro.'
	},
	{
		src: '../public/gallery/students-30-03/chlopaki w parku miniatur (10).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Najsłynniejsze włoskie i europejskie zabytki w skali mikro.'
	},
	{
		src: '../public/gallery/students-30-03/chlopaki w parku miniatur (11).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Zabawa i edukacja w Parku Miniatur to idealny sposób na popołudnie.'
	},
	{
		src: '../public/gallery/students-30-03/chlopaki w parku miniatur (12).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Zabawa i edukacja w Parku Miniatur to idealny sposób na popołudnie.'
	},
	{
		src: '../public/gallery/students-30-03/chlopaki w parku miniatur (2).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Najsłynniejsze włoskie i europejskie zabytki w skali mikro.'
	},
	{
		src: '../public/gallery/students-30-03/chlopaki w parku miniatur (3).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Najsłynniejsze włoskie i europejskie zabytki w skali mikro.'
	},
	{
		src: '../public/gallery/students-30-03/chlopaki w parku miniatur (4).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Ciekawe popołudnie spędzone na zwiedzaniu miniatur.'
	},
	{
		src: '../public/gallery/students-30-03/chlopaki w parku miniatur (5).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Doskonałe nastroje podczas relaksu w urokliwym Parku Miniatur.'
	},
	{
		src: '../public/gallery/students-30-03/chlopaki w parku miniatur (6).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Najsłynniejsze włoskie i europejskie zabytki w skali mikro.'
	},
	{
		src: '../public/gallery/students-30-03/chlopaki w parku miniatur (7).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Doskonałe nastroje podczas relaksu w urokliwym Parku Miniatur.'
	},
	{
		src: '../public/gallery/students-30-03/chlopaki w parku miniatur (8).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Najsłynniejsze włoskie i europejskie zabytki w skali mikro.'
	},
	{
		src: '../public/gallery/students-30-03/chlopaki w parku miniatur (9).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Ciekawe popołudnie spędzone na zwiedzaniu miniatur.'
	},
	{
		src: '../public/gallery/students-30-03/chlopaki w parku miniatur.webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Zabawa i edukacja w Parku Miniatur to idealny sposób na popołudnie.'
	},
	{
		src: '../public/gallery/students-30-03/chlopaki w parku miniatur1.webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Ciekawe popołudnie spędzone na zwiedzaniu miniatur.'
	},
	{
		src: '../public/gallery/students-30-03/demolka miniatury zamku.webp',
		alt: 'Demolka miniatury zamku',
		title: 'Demolka miniatury zamku',
		description: 'Uśmiechy na twarzach mówią wszystko o zadowoleniu ze wspólnego wyjazdu.'
	},
	{
		src: '../public/gallery/students-30-03/karuzela w parku miniatur.webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Zabawa i edukacja w Parku Miniatur to idealny sposób na popołudnie.'
	},
	{
		src: '../public/gallery/students-30-03/park miniatur (2).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Najsłynniejsze włoskie i europejskie zabytki w skali mikro.'
	},
	{
		src: '../public/gallery/students-30-03/park miniatur (3).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Najsłynniejsze włoskie i europejskie zabytki w skali mikro.'
	},
	{
		src: '../public/gallery/students-30-03/park miniatur.webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Doskonałe nastroje podczas relaksu w urokliwym Parku Miniatur.'
	},
	{
		src: '../public/gallery/students-30-03/przejazd autobusem.webp',
		alt: 'Przejazd autobusem',
		title: 'Przejazd autobusem',
		description: 'Dobry humor i wspaniała pogoda nie opuszczały uczestników ani na moment.'
	},
	{
		src: '../public/gallery/students-30-03/przeplyw lodka w parku miniatur (2).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Najsłynniejsze włoskie i europejskie zabytki w skali mikro.'
	},
	{
		src: '../public/gallery/students-30-03/przeplyw lodka w parku miniatur.webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Ciekawe popołudnie spędzone na zwiedzaniu miniatur.'
	},
	{
		src: '../public/gallery/students-30-03/selfie na tle miniatury gor.webp',
		alt: 'Selfie na tle miniatury gor',
		title: 'Selfie na tle miniatury gor',
		description: 'Kolejne piękne ujęcie z niezapomnianego programu Erasmus+.'
	},
	{
		src: '../public/gallery/students-30-03/uczen z flaga wloch.webp',
		alt: 'Z narodową flagą',
		title: 'Z narodową flagą',
		description: 'Pamiątkowe zdjęcie z flagą narodową Włoch.'
	},
	{
		src: '../public/gallery/students-30-03/uczen na tle flagi wloch.webp',
		alt: 'Z narodową flagą',
		title: 'Z narodową flagą',
		description: 'Pamiątkowe zdjęcie z flagą narodową Włoch.'
	},
	{
		src: '../public/gallery/students-30-03/uczen z kolezenska papuga.webp',
		alt: 'Uczen z kolezenska papuga',
		title: 'Uczen z kolezenska papuga',
		description: 'Zabawne zdjęcie z nowym, kolorowym i opierzonym przyjacielem.'
	},
	{
		src: '../public/gallery/students-30-03/w drodze do parku miniatur.webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Doskonałe nastroje podczas relaksu w urokliwym Parku Miniatur.'
	},
	{
		src: '../public/gallery/students-30-03/wizyta w operze.webp',
		alt: 'Wizyta w Operze',
		title: 'Wizyta w Operze',
		description: 'Niezapomniane wyjście do opery dostarczyło grupie cennych przeżyć.'
	},
	{
		src: '../public/gallery/students-30-03/wspieranie krzywej wiezy.webp',
		alt: 'Krzywa Wieża z dystansu',
		title: 'Krzywa Wieża z dystansu',
		description: 'Klasyczne wakacyjne zdjęcie podpierające słynną Krzywą Wieżę!'
	},
	{
		src: '../public/gallery/students-30-03/zdjecie przy kawie w parku miniatur.webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Doskonałe nastroje podczas relaksu w urokliwym Parku Miniatur.'
	},
	{
		src: '../public/gallery/students-30-03/zjezdzalnia wodna w parku miniatur.webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Najsłynniejsze włoskie i europejskie zabytki w skali mikro.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki na gelato (1).webp',
		alt: 'Włoskie Gelato',
		title: 'Włoskie Gelato',
		description: 'Prawdziwe lody to świetny ratunek podczas ciepłego dnia.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki na gelato (2).webp',
		alt: 'Włoskie Gelato',
		title: 'Włoskie Gelato',
		description: 'Prawdziwe lody to świetny ratunek podczas ciepłego dnia.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki na obiedzie (1).webp',
		alt: 'Chlopaki na obiedzie',
		title: 'Chlopaki na obiedzie',
		description: 'Czas spędzony na wyjeździe obfitował w liczne atrakcje turystyczne i edukacyjne.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki na obiedzie (2).webp',
		alt: 'Chlopaki na obiedzie',
		title: 'Chlopaki na obiedzie',
		description: 'Dobry humor i wspaniała pogoda nie opuszczały uczestników ani na moment.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki na obiedzie (3).webp',
		alt: 'Chlopaki na obiedzie',
		title: 'Chlopaki na obiedzie',
		description: 'Uśmiechy na twarzach mówią wszystko o zadowoleniu ze wspólnego wyjazdu.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki na obiedzie (4).webp',
		alt: 'Chlopaki na obiedzie',
		title: 'Chlopaki na obiedzie',
		description: 'Czas spędzony na wyjeździe obfitował w liczne atrakcje turystyczne i edukacyjne.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki na obiedzie (5).webp',
		alt: 'Chlopaki na obiedzie',
		title: 'Chlopaki na obiedzie',
		description: 'Czas spędzony na wyjeździe obfitował w liczne atrakcje turystyczne i edukacyjne.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki na obiedzie (6).webp',
		alt: 'Chlopaki na obiedzie',
		title: 'Chlopaki na obiedzie',
		description: 'Czas spędzony na wyjeździe obfitował w liczne atrakcje turystyczne i edukacyjne.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (1).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Odkrywanie niezwykłego świata włoskiego kina na wspaniałej ekspozycji.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (10).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Odkrywanie niezwykłego świata włoskiego kina na wspaniałej ekspozycji.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (11).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Odkrywanie niezwykłego świata włoskiego kina na wspaniałej ekspozycji.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (12).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Podziwianie dzieł i pamiątek w słynnym muzeum Federico Felliniego.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (13).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Pamiątkowe ujęcia na tle rekwizytów kultowego reżysera.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (14).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Pamiątkowe ujęcia na tle rekwizytów kultowego reżysera.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (15).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Odkrywanie niezwykłego świata włoskiego kina na wspaniałej ekspozycji.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (16).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Podziwianie dzieł i pamiątek w słynnym muzeum Federico Felliniego.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (17).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Odkrywanie niezwykłego świata włoskiego kina na wspaniałej ekspozycji.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (18).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Odkrywanie niezwykłego świata włoskiego kina na wspaniałej ekspozycji.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (19).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Odkrywanie niezwykłego świata włoskiego kina na wspaniałej ekspozycji.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (2).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Odkrywanie niezwykłego świata włoskiego kina na wspaniałej ekspozycji.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (20).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Odkrywanie niezwykłego świata włoskiego kina na wspaniałej ekspozycji.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (3).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Podziwianie dzieł i pamiątek w słynnym muzeum Federico Felliniego.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (4).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Odkrywanie niezwykłego świata włoskiego kina na wspaniałej ekspozycji.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (5).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Pamiątkowe ujęcia na tle rekwizytów kultowego reżysera.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (6).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Odkrywanie niezwykłego świata włoskiego kina na wspaniałej ekspozycji.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (7).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Pamiątkowe ujęcia na tle rekwizytów kultowego reżysera.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (8).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Pamiątkowe ujęcia na tle rekwizytów kultowego reżysera.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w muzeum felliniego (9).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Podziwianie dzieł i pamiątek w słynnym muzeum Federico Felliniego.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w parku miniatur (1).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Doskonałe nastroje podczas relaksu w urokliwym Parku Miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki w trasie.webp',
		alt: 'Chlopaki w trasie',
		title: 'Chlopaki w trasie',
		description: 'Klimatyczne, włoskie uliczki pełne unikalnych, starych murów i zakamarków.'
	},
	{
		src: '../public/gallery/zalucki-30-03/chlopaki z opiekunami w parku miniatur.webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Ciekawe popołudnie spędzone na zwiedzaniu miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/kolejka wodna w parku miniatur (2).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Doskonałe nastroje podczas relaksu w urokliwym Parku Miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/ladny korytarz na miescie.webp',
		alt: 'Ladny korytarz na miescie',
		title: 'Ladny korytarz na miescie',
		description: 'Klimatyczne, włoskie uliczki pełne unikalnych, starych murów i zakamarków.'
	},
	{
		src: '../public/gallery/zalucki-30-03/opiekunka wspierajaca krzywa wieze.webp',
		alt: 'Krzywa Wieża z dystansu',
		title: 'Krzywa Wieża z dystansu',
		description: 'Klasyczne wakacyjne zdjęcie podpierające słynną Krzywą Wieżę!'
	},
	{
		src: '../public/gallery/zalucki-30-03/opiekunowie w trasie.webp',
		alt: 'Opiekunowie grupy',
		title: 'Opiekunowie grupy',
		description: 'Klimatyczne, włoskie uliczki pełne unikalnych, starych murów i zakamarków.'
	},
	{
		src: '../public/gallery/zalucki-30-03/papuga w parku miniatur.webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Zabawa i edukacja w Parku Miniatur to idealny sposób na popołudnie.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (1).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Najsłynniejsze włoskie i europejskie zabytki w skali mikro.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (10).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Ciekawe popołudnie spędzone na zwiedzaniu miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (11).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Doskonałe nastroje podczas relaksu w urokliwym Parku Miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (12).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Ciekawe popołudnie spędzone na zwiedzaniu miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (13).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Zabawa i edukacja w Parku Miniatur to idealny sposób na popołudnie.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (14).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Ciekawe popołudnie spędzone na zwiedzaniu miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (15).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Doskonałe nastroje podczas relaksu w urokliwym Parku Miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (16).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Doskonałe nastroje podczas relaksu w urokliwym Parku Miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (17).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Ciekawe popołudnie spędzone na zwiedzaniu miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (18).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Ciekawe popołudnie spędzone na zwiedzaniu miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (19).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Zabawa i edukacja w Parku Miniatur to idealny sposób na popołudnie.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (2).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Doskonałe nastroje podczas relaksu w urokliwym Parku Miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (20).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Najsłynniejsze włoskie i europejskie zabytki w skali mikro.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (21).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Zabawa i edukacja w Parku Miniatur to idealny sposób na popołudnie.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (22).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Ciekawe popołudnie spędzone na zwiedzaniu miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (23).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Doskonałe nastroje podczas relaksu w urokliwym Parku Miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (24).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Ciekawe popołudnie spędzone na zwiedzaniu miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (25).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Ciekawe popołudnie spędzone na zwiedzaniu miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (3).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Doskonałe nastroje podczas relaksu w urokliwym Parku Miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (4).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Najsłynniejsze włoskie i europejskie zabytki w skali mikro.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (5).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Zabawa i edukacja w Parku Miniatur to idealny sposób na popołudnie.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (6).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Doskonałe nastroje podczas relaksu w urokliwym Parku Miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (7).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Zabawa i edukacja w Parku Miniatur to idealny sposób na popołudnie.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (8).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Ciekawe popołudnie spędzone na zwiedzaniu miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/park miniatur (9).webp',
		alt: 'Park Miniatur',
		title: 'Park Miniatur',
		description: 'Doskonałe nastroje podczas relaksu w urokliwym Parku Miniatur.'
	},
	{
		src: '../public/gallery/zalucki-30-03/prezentacja - bolonia.webp',
		alt: 'Uroki Bolonii',
		title: 'Uroki Bolonii',
		description: 'Bolonia zachwyciła nas swoim klimatem ze wspaniałymi historycznymi miejscami.'
	},
	{
		src: '../public/gallery/zalucki-30-03/prezentacja - fellini (2).webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Pamiątkowe ujęcia na tle rekwizytów kultowego reżysera.'
	},
	{
		src: '../public/gallery/zalucki-30-03/prezentacja - fellini.webp',
		alt: 'Muzeum Felliniego',
		title: 'Muzeum Felliniego',
		description: 'Pamiątkowe ujęcia na tle rekwizytów kultowego reżysera.'
	},
	{
		src: '../public/gallery/zalucki-30-03/prezentacja - wenecja.webp',
		alt: 'Czas Prezentacji',
		title: 'Czas Prezentacji',
		description: 'Omawianie zdobytej wiedzy z wykorzystaniem starannie przygotowanej prezentacji.'
	},
	{
		src: '../public/gallery/zalucki-30-03/prezentacja - wlochy.webp',
		alt: 'Czas Prezentacji',
		title: 'Czas Prezentacji',
		description: 'Omawianie zdobytej wiedzy z wykorzystaniem starannie przygotowanej prezentacji.'
	},
	{
		src: '../public/gallery/zalucki-30-03/rimini noca.webp',
		alt: 'Włoskie noce',
		title: 'Włoskie noce',
		description: 'Wieczorny spacer, kiedy tętniące życiem Rimini ukazuje swoje zupełnie inne oblicze.'
	},
	{
		src: '../public/gallery/zalucki-30-03/szkolenie zawodowe (1).webp',
		alt: 'Warsztaty zawodowe',
		title: 'Warsztaty zawodowe',
		description: 'Codzienne wyzwania na stanowiskach pracy wymagały kreatywnego podejścia.'
	},
	{
		src: '../public/gallery/zalucki-30-03/szkolenie zawodowe (10).webp',
		alt: 'Warsztaty zawodowe',
		title: 'Warsztaty zawodowe',
		description: 'Doskonalenie praktycznych umiejętności w profesjonalnym i wspierającym środowisku.'
	},
	{
		src: '../public/gallery/zalucki-30-03/szkolenie zawodowe (2).webp',
		alt: 'Warsztaty zawodowe',
		title: 'Warsztaty zawodowe',
		description: 'Praktyczna część stażu, skupiająca się na podnoszeniu kompetencji z różnych dziedzin.'
	},
	{
		src: '../public/gallery/zalucki-30-03/szkolenie zawodowe (3).webp',
		alt: 'Warsztaty zawodowe',
		title: 'Warsztaty zawodowe',
		description: 'Doskonalenie praktycznych umiejętności w profesjonalnym i wspierającym środowisku.'
	},
	{
		src: '../public/gallery/zalucki-30-03/szkolenie zawodowe (6).webp',
		alt: 'Warsztaty zawodowe',
		title: 'Warsztaty zawodowe',
		description: 'Solidna praca na warsztatach przyniosła wymierne korzyści dla uczestników do ich przyszłym karier.'
	},
	{
		src: '../public/gallery/zalucki-30-03/szkolenie zawodowe (7).webp',
		alt: 'Warsztaty zawodowe',
		title: 'Warsztaty zawodowe',
		description: 'Solidna praca na warsztatach przyniosła wymierne korzyści dla uczestników do ich przyszłym karier.'
	},
	{
		src: '../public/gallery/zalucki-30-03/szkolenie zawodowe (8).webp',
		alt: 'Warsztaty zawodowe',
		title: 'Warsztaty zawodowe',
		description: 'Codzienne wyzwania na stanowiskach pracy wymagały kreatywnego podejścia.'
	},
	{
		src: '../public/gallery/zalucki-30-03/szkolenie zawodowe - drukarka 3D (1).webp',
		alt: 'Technologie 3D',
		title: 'Technologie 3D',
		description: 'Zajęcia z druku 3D to wkraczanie w innowacyjne, nowoczesne technologie.'
	},
	{
		src: '../public/gallery/zalucki-30-03/szkolenie zawodowe - drukarka 3D (2).webp',
		alt: 'Technologie 3D',
		title: 'Technologie 3D',
		description: 'Zajęcia z druku 3D to wkraczanie w innowacyjne, nowoczesne technologie.'
	},
	{
		src: '../public/gallery/zalucki-30-03/szkolenie zawodowe - drukarka 3D (3).webp',
		alt: 'Technologie 3D',
		title: 'Technologie 3D',
		description: 'Projektowanie i modelowanie przestrzenne pobudziło kreatywność grupy.'
	},
	{
		src: '../public/gallery/zalucki-30-03/wizyta w operze (1).webp',
		alt: 'Wizyta w Operze',
		title: 'Wizyta w Operze',
		description: 'Wizyta w operze to zetknięcie się z włoską kulturą w najczystszej postaci.'
	},
	{
		src: '../public/gallery/zalucki-30-03/wizyta w operze (2).webp',
		alt: 'Wizyta w Operze',
		title: 'Wizyta w Operze',
		description: 'Niezapomniane wyjście do opery dostarczyło grupie cennych przeżyć.'
	},
	{
		src: '../public/gallery/zalucki-30-03/wybrzeze w rimini.webp',
		alt: 'Morskie Wybrzeże',
		title: 'Morskie Wybrzeże',
		description: 'Malowniczy krajobraz morskiego wybrzeża przy promieniach słonecznych.'
	},
		{
		src: '../public/gallery/wenecja/IMG_0465.webp',
		alt: 'Wenecja',
		title: 'Wenecja',
		description: 'Spokojny moment na zwiedzanie i zbieranie wspomnień w ulubionym tempie.'
	},
	{
		src: '../public/gallery/wenecja/IMG_0471.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'Między krótkimi przystankami znalazła się chwila na relaks i uśmiech.'
	},
	{
		src: '../public/gallery/wenecja/IMG_0478.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'To jeden z tych kadrów, które świetnie pasują do opowieści o dobrym dniu.'
	},
	{
		src: '../public/gallery/wenecja/IMG_7374.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'Mimo nieidealnej pogody nikt się nie spieszył.'
	},
	{
		src: '../public/gallery/wenecja/IMG_7375.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'Krótka przerwa na złapanie oddechu i kolejne wspólne zdjęcie.'
	},
	{
		src: '../public/gallery/wenecja/IMG_7380.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'Wenecja jak zwykle potrafi zaskoczyć, nawet gdy pogoda bywa kapryśna.'
	},
	{
		src: '../public/gallery/wenecja/IMG_7381.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'Zatrzymany moment, który idealnie podsumowuje spokojny rytm wycieczki.'
	},
	{
		src: '../public/gallery/wenecja/IMG_7384.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'Takie ujęcia zostają na długo, bo przypominają o dobrze spędzonym czasie.'
	},
	{
		src: '../public/gallery/wenecja/IMG_7388.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'Spacerowym krokiem i z humorem, nawet jeśli wiatr lekko przypomina o sobie.'
	},
	{
		src: '../public/gallery/wenecja/IMG_7390.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'Krótki postój na zdjęcie i kolejną porcję wrażeń z wyjazdu.'
	},
	{
		src: '../public/gallery/wenecja/IMG_7391.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'Dobre towarzystwo to najlepszy przepis na udany dzień w podróży.'
	},
	{
		src: '../public/gallery/wenecja/IMG_7393.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'Ujęcie, które pasuje do każdej opowieści o wakacyjnym odpoczynku.'
	},
	{
		src: '../public/gallery/wenecja/IMG_7395.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'Wenecja robi klimat, a reszta to już tylko dobre nastroje.'
	},
	{
		src: '../public/gallery/wenecja/IMG_7397.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'Lekki żart, szybkie zdjęcie i kolejny punkt na trasie.'
	},
	{
		src: '../public/gallery/wenecja/IMG_7398.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'Kilka minut relaksu i wracamy do zwiedzania z nową energią.'
	},
	{
		src: '../public/gallery/wenecja/IMG_7405.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'Miasto płynie własnym rytmem, a my chętnie się do niego dostosowaliśmy.'
	},
	{
		src: '../public/gallery/wenecja/IMG_7406.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'Przystanek na oddech, zdjęcie i ulubione wspomnienia z wyjazdu.'
	},
	{
		src: '../public/gallery/wenecja/IMG_7407.webp',
		alt: 'Wenecja',
		title: 'Spacer po Wenecji',
		description: 'Nawet przy mniej idealnej pogodzie dało się świetnie spędzić czas.'
	}
];

	const perPage = 24;
	const totalPages = Math.ceil(galleryItems.length / perPage);

	let currentPage = 1;
	let currentLightboxIndex = 0;

	const createGalleryCard = (item, index) => {
		const card = document.createElement("div");
		card.className =
			"group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-[0_32px_48px_-4px_rgba(24,28,32,0.06)]";

		const button = document.createElement("button");
		button.type = "button";
		button.className = "block h-full w-full text-left";
		button.setAttribute("data-index", String(index));
		button.setAttribute("aria-label", `Otwórz zdjęcie: ${item.title}`);

		const img = document.createElement("img");
		img.src = item.src;
		img.alt = item.alt;
		img.className = "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105";

		button.appendChild(img);
		card.appendChild(button);

		return card;
	};

	const renderPageButtons = () => {
		if (!pagesContainer) {
			return;
		}

		pagesContainer.innerHTML = "";

		for (let page = 1; page <= totalPages; page += 1) {
			const pageButton = document.createElement("button");
			pageButton.type = "button";
			pageButton.textContent = String(page);
			pageButton.className =
				"px-5 py-2 rounded-full text-on-surface-variant font-medium transition-all hover:bg-white";
			pageButton.setAttribute("data-page", String(page));
			pageButton.setAttribute("aria-label", `Przejdź do strony ${page}`);

			if (page === currentPage) {
				pageButton.className = "px-5 py-2 rounded-full bg-primary text-on-primary font-bold shadow-md";
			}

			pagesContainer.appendChild(pageButton);
		}
	};

	const renderGallery = () => {
		const start = (currentPage - 1) * perPage;
		const end = start + perPage;

		galleryGrid.innerHTML = "";

		galleryItems.slice(start, end).forEach((item, localIndex) => {
			const globalIndex = start + localIndex;
			galleryGrid.appendChild(createGalleryCard(item, globalIndex));
		});

		renderPageButtons();

		if (prevPageButton) {
			prevPageButton.disabled = currentPage === 1;
		}

		if (nextPageButton) {
			nextPageButton.disabled = currentPage === totalPages;
		}
	};

	const updateLightboxContent = () => {
		const item = galleryItems[currentLightboxIndex];

		if (!item || !lightboxImage || !lightboxTitle || !lightboxDescription) {
			return;
		}

		lightboxImage.src = item.src;
		lightboxImage.alt = item.alt;
		lightboxTitle.textContent = item.title;
		lightboxDescription.textContent = item.description;
	};

	const openLightbox = (index) => {
		if (!lightbox) {
			return;
		}

		currentLightboxIndex = index;
		updateLightboxContent();
		lightbox.classList.remove("hidden");
		lightbox.setAttribute("aria-hidden", "false");
		document.body.classList.add("overflow-hidden");
	};

	const closeLightbox = () => {
		if (!lightbox) {
			return;
		}

		lightbox.classList.add("hidden");
		lightbox.setAttribute("aria-hidden", "true");
		document.body.classList.remove("overflow-hidden");
	};

	const showPrevImage = () => {
		currentLightboxIndex =
			(currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
		updateLightboxContent();
	};

	const showNextImage = () => {
		currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
		updateLightboxContent();
	};

	galleryGrid.addEventListener("click", (event) => {
		const target = event.target;

		if (!(target instanceof HTMLElement)) {
			return;
		}

		const trigger = target.closest("button[data-index]");

		if (!trigger) {
			return;
		}

		const index = Number(trigger.getAttribute("data-index"));

		if (!Number.isNaN(index)) {
			openLightbox(index);
		}
	});

	if (pagesContainer) {
		pagesContainer.addEventListener("click", (event) => {
			const target = event.target;

			if (!(target instanceof HTMLElement)) {
				return;
			}

			const pageButton = target.closest("button[data-page]");

			if (!pageButton) {
				return;
			}

			const nextPage = Number(pageButton.getAttribute("data-page"));

			if (!Number.isNaN(nextPage) && nextPage !== currentPage) {
				currentPage = nextPage;
				renderGallery();
			}
		});
	}

	prevPageButton?.addEventListener("click", () => {
		if (currentPage > 1) {
			currentPage -= 1;
			renderGallery();
		}
	});

	nextPageButton?.addEventListener("click", () => {
		if (currentPage < totalPages) {
			currentPage += 1;
			renderGallery();
		}
	});

	lightboxCloseButton?.addEventListener("click", closeLightbox);
	lightboxPrevButton?.addEventListener("click", showPrevImage);
	lightboxNextButton?.addEventListener("click", showNextImage);

	lightbox?.addEventListener("click", (event) => {
		if (event.target === lightbox) {
			closeLightbox();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (!lightbox || lightbox.classList.contains("hidden")) {
			return;
		}

		if (event.key === "Escape") {
			closeLightbox();
		}

		if (event.key === "ArrowLeft") {
			showPrevImage();
		}

		if (event.key === "ArrowRight") {
			showNextImage();
		}
	});

	renderGallery();
})();
