// Central data store for all Lebensfunken themes.
// Each theme has: id, title, category, lead, image, duration, people, philosophy1/2, stations[]
// Each station has: name, title, duration (seconds), hostNote, description?, question?, items?
// - items: [{label, accent, text}] — rendered as cards (used for typologies, scenario lists)

window.THEMES = {
  bindung: {
    title: 'Welches Bindungsmuster prägt mich?',
    category: 'Beziehungen',
    lead: 'Ein Abend über das, was in uns mitläuft, wenn wir lieben: die unsichtbare Software unserer Bindung. Keine Couch, keine Diagnose — ein ehrliches Gespräch in kleiner Runde.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBor9suvn-xFQGUPG_UbB1MaifycThZmUPJRX2-WNWOZhly_8jdzzkA0MXabSI3-CEd2HO7gldmaQ4-kX4hYZWBIyyCZFgv9DLNYB5DZ2WY0Ss7C_8QnhAZN_eYWD9F3AoqgOh5n9K9Wv4Y-UIUqZyG-VZhlWBPWYaTNP70rpZLQCoOBq-9VsaXRJ62v8xo7SYTLEnELzwn6bO3TdDlXs2FUoJlD0aD0IkcIU5xUMq9M1cQ_VP1yDJSW_aevQpAwCZKrfWF0ds0EHbX',
    duration: '2 Std. 5 Min.',
    people: '4-6 Personen',
    philosophy1: 'Wir kommen mit einer Art Beziehungs-Software auf die Welt. Die ersten Bezugspersonen prägen, wie wir Nähe später erleben: ob sie sich sicher anfühlt oder bedrohlich, ob wir auf uns allein gestellt sind oder getragen.',
    philosophy2: 'Die klassische Bindungsforschung unterscheidet vier Muster. Die meisten Menschen erkennen sich in Mischungen wieder. Heute schaut ihr gemeinsam, wo eure Muster liegen — ohne Diagnose, ohne Therapie, einfach ehrlich.',
    featured: true,
    stations: [
      {
        name: 'Ankommen',
        title: 'Was bringt dich heute hierher?',
        duration: 15 * 60,
        hostNote: 'Reihum in die Runde. Jede:r 1–2 Sätze. Keine Rückfragen, keine Reaktion — nur hören.',
        description: 'Bevor wir ins Thema gehen: Kommt erst mal an. Atmen, Getränk in der Hand, Handy aus. Dann:',
        question: 'Was bringt dich heute hierher — und wo steht dein Kopf gerade?'
      },
      {
        name: 'Einstieg',
        title: 'Warum wir so lieben, wie wir lieben',
        duration: 15 * 60,
        hostNote: 'Der Host liest langsam vor. Danach 2 Minuten Stille.',
        description: 'Ein Kind, das schreit, wird getröstet — oder nicht. Ein Kind, das Nähe sucht, wird aufgenommen — oder weggeschoben. Aus diesen tausend kleinen Momenten lernt jeder von uns: Ist Nähe sicher? Darf ich abhängig sein? Werde ich gesehen, wenn ich es brauche?\n\nDiese frühe Lektion wird zur inneren Landkarte. Wir tragen sie in jede Beziehung — mit Partner:innen, Freund:innen, am Arbeitsplatz. Sie zeigt sich dann, wenn wir verletzlich sind: im Streit, in der Sehnsucht, in der Angst verlassen zu werden.\n\nDie gute Nachricht: Muster sind keine Schicksale. Wenn du sie erkennst, kannst du sie verändern.'
      },
      {
        name: 'Die vier Muster',
        title: 'Die vier Bindungsmuster',
        duration: 20 * 60,
        hostNote: 'Der Host liest jeden Typ einmal vor. Nach jedem: 30 Sek. Stille. Wer sich erkennt, nickt — nur für sich.',
        items: [
          { label: 'Sicher', accent: 'ca. 50 %', text: 'Nähe ist möglich, Unabhängigkeit auch. Konflikte schrecken nicht. Vertrauen darf einfach da sein. Die innere Grundannahme: Ich bin okay, andere sind okay.' },
          { label: 'Ängstlich', accent: 'ca. 20 %', text: 'Sehnsucht nach viel Nähe. Sensible Antennen für jedes Zeichen der Distanz. Die innere Grundannahme: Ich brauche dich, und ich habe Angst, dich zu verlieren.' },
          { label: 'Vermeidend', accent: 'ca. 25 %', text: 'Unabhängigkeit ist oberste Priorität. Emotionale Nähe fühlt sich schnell eng an. Rückzug ist der erste Reflex. Innere Grundannahme: Ich komme allein klar.' },
          { label: 'Desorganisiert', accent: 'ca. 5 %', text: 'Gleichzeitig Sehnsucht nach Nähe und Angst davor. Beziehungen fühlen sich widersprüchlich an, oft nach frühen, schmerzhaften Erfahrungen. Innere Grundannahme: Ich will dich — bleib weg.' }
        ]
      },
      {
        name: 'Alltag',
        title: 'Szenen aus dem echten Leben',
        duration: 20 * 60,
        hostNote: 'Der Host liest eine Szene nach der anderen vor. Reihum: Was ist dein erster Impuls? Kurz, ehrlich, ungefiltert.',
        items: [
          { accent: '1.', label: 'Stille', text: 'Dein:e Partner:in meldet sich drei Stunden nicht. Was denkst du zuerst?' },
          { accent: '2.', label: 'Ohne dich', text: 'Freund:innen haben sich verabredet — du erfährst es später über Umwege. Was macht das mit dir?' },
          { accent: '3.', label: 'Streit', text: 'Ein Konflikt eskaliert. Was ist dein Impuls: bleiben und klären, oder Rückzug, oder zuschlagen?' },
          { accent: '4.', label: 'Nähe', text: 'Jemand kommt dir unerwartet emotional nah — eine Geste, ein Satz. Was passiert in dir?' },
          { accent: '5.', label: 'Hilfe', text: 'Du brauchst Hilfe mit etwas Konkretem. Wie leicht oder schwer fällt es dir zu fragen?' }
        ]
      },
      {
        name: 'Wurzeln',
        title: 'Eine Szene, die dich geformt hat',
        duration: 25 * 60,
        hostNote: 'Reihum. Keine Tiefenanalyse — ein Bild, eine Szene, eine Erinnerung. „Pass" ist völlig okay.',
        description: 'Egal ob warm oder kühl, nah oder fern. Welche Erinnerung taucht auf — wenn du jetzt nicht lange nachdenkst?',
        question: 'Eine Szene aus deiner Kindheit zum Thema Geborgenheit. Was kommt?'
      },
      {
        name: 'Schritt',
        title: 'Ein kleiner, konkreter Schritt',
        duration: 20 * 60,
        hostNote: 'Reihum, ein Satz. Nicht vage — konkret. Klein genug, dass es diese Woche klappt.',
        description: 'Nicht: „Ich will sicher gebunden sein." Sondern: „Wenn Lisa sich am Samstag länger nicht meldet, frage ich einmal nach, statt mich innerlich zurückzuziehen." Das ist die Größenordnung.',
        question: 'Was ist dein nächster kleiner Schritt — diese Woche?'
      },
      {
        name: 'Abschluss',
        title: 'Ein Wort, das bleibt',
        duration: 10 * 60,
        hostNote: 'Reihum. Nur ein Wort. Keine Erklärung.',
        question: 'Was nimmst du mit?'
      }
    ]
  },
  werte: {
    title: 'Was sind meine Werte?',
    category: 'Werte',
    lead: 'Ein Abend, an dem die unsichtbaren Kompasse sichtbar werden — ohne Poster-Parolen, sondern aus dem eigenen Alltag heraus.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAndtAhizmGZhn3gzaSL1DCAJ7zPOpBj1D06e4TxBChuV7EoVcg18GrQd_4xjFemvRe-DGQo1B_THcAc1orj-qpBD7zHw8rLvym3huLddoBlsxl4Tj0gT8gH9k7tqINEnDzoUSto8a9SldKQbSDADNKZl2OYQuOWYEyHcHT7GEjbr_o3OEIfDDMDuguc29p7b3OCypmWKTRCwXm4ot5oCXJyKsA0QF8Rd4S0nOUgI6eeTb9vYtM7MzYmXhlBgkQ7gdQFKIsdGZ2hJ7I',
    duration: '1 Std. 50 Min.',
    people: '4-8 Personen',
    philosophy1: 'Werte sind selten das, was wir auf Poster schreiben. Sie zeigen sich darin, wofür wir Zeit opfern, wogegen wir uns ärgern und was uns spät in der Nacht beschäftigt.',
    philosophy2: 'An diesem Abend sucht ihr nicht nach den „richtigen" Werten. Ihr sucht nach den euren — wie sie sich im Alltag zeigen, nicht wie sie klingen sollten.',
    impulseQuestion: 'Welche 3 Werte haben dich diese Woche wirklich geleitet — nicht welche du haben willst, sondern welche du gelebt hast?'
  },
  prioritaeten: {
    title: 'Was ist mir wirklich wichtig?',
    category: 'Werte',
    lead: 'Ein Fokus-Abend über das stille Ja zum Wesentlichen — und das Nein zum Möglichen.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx3zc_372HZ2FnhMqRihODyYdH0O6QMhHorRxsi1pNG5H6yo27lR3uFj5kEpa_bZr6NyMTZMkNLzxhVFFrWOAWg62u4rwi9mqyFdCHrVY3-O-ZOBWT-4kuNVD5hHIfeuAHO8OfvTaFZmYMfj-kYak3WqVQZF6RIYra-FyBU_I2AjVbDZVt0JjNJj2RSBpOn2Us3TyGl-oc_Da2fdvd3_WYWlkDPaFgXfDXm_5WLY5Q9p-ssyPjMUjYVmwfk1RS19Dq2edt7wPpu1R2',
    duration: '1 Std. 35 Min.',
    people: '2-6 Personen',
    philosophy1: 'Vieles schreit nach Aufmerksamkeit. Wenig verdient sie wirklich. Prioritäten werden erst sichtbar, wenn wir aufhören, alles gleichzeitig zu wollen.',
    philosophy2: 'An diesem Abend trennt ihr das eine vom anderen — ohne Eile, ohne Rechtfertigung.',
    impulseQuestion: 'Wenn du in deinem Leben nur drei Dinge behalten dürftest — welche wären das?'
  },
  stehe: {
    title: 'Wofür stehe ich?',
    category: 'Werte',
    lead: 'Eine Standortbestimmung. Wo ziehst du Linien? Wo gibst du nach? Wo wächst du?',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxbjqrLpObJ-WD47GvSPuVQIAi2NVN5ZnoVNgvrsdtCZLaj4qrsZF2HrzHhwsJxLgvnVJILKatnzlr-owOjC4Vwjsj8zZLzjxILS_tEIw2mEMKfb-zeXJMntnWcVcuPa9PYApGzgjcOkjrCAXO4pfQeKu2mkuLgmuZAib-diXx3G3-UD0YnoBhDw7Ce18lglGHQsmkYnYtlXA3uXQy7ubFaeStRwPaH_tvjawicIlIFmIJNz1hbpyZCZKx3FSF1NFKo_bj2ggPwLZZ',
    duration: '2 Std.',
    people: '6-10 Personen',
    philosophy1: 'Nicht jede Überzeugung muss laut sein. Aber sie muss deine sein. Heute geht es um die stillen Grundsätze, an denen du dich wiedererkennst.',
    philosophy2: 'Es gibt keine richtigen oder falschen Antworten — nur ehrliche und weniger ehrliche.',
    impulseQuestion: 'Wofür bist du bereit, unbequem zu werden — und wofür nicht?'
  },
  tag: {
    title: 'Mein idealer Tag',
    category: 'Zukunft',
    lead: 'Eine visionäre Reise. Wenn alles möglich wäre — wie würde dein Tag aussehen, von morgens bis abends?',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGJu-_hBQUfMgGqaCQAYs1H6AFjL5dK4gVKhHP7NsoVNFIbSk-TQyo0-fEJqwcpbO9GCCSDlhI3HMYtGoY4EQ7NHiBklOiV0LQ-CNBeklSYmw0yNL3mphU1Ocav-12_PYQKRjuxpj6DPJLEhIWa4iumFZihxaG20tE0r3Ox3AeL_Phj3b3XJy3cUtKvCKFYcOfc7HUj1kqmdYtWMqD8-i_IAyHfDHsEffMyYqANt4NMTHQLEHn1fcI3Hn-g7kqXJF3g1X8khkw0odF',
    duration: '2 Std.',
    people: '4-8 Personen',
    philosophy1: 'Die Frage nach dem idealen Tag klingt harmlos. In Wirklichkeit legt sie offen, was wir wirklich brauchen: Ruhe, Begegnung, Bewegung, Tiefe, Leichtigkeit.',
    philosophy2: 'Kein Traumurlaub, kein Fünf-Jahres-Plan. Nur ein ehrlich gemeinter Tag zwischen Aufstehen und Einschlafen.',
    impulseQuestion: 'Beschreibe deinen idealen Dienstag — nicht den Wunsch-Urlaub, sondern einen echten Tag.'
  },
  zehnjahre: {
    title: 'In 10 Jahren',
    category: 'Zukunft',
    lead: 'Eine Zeitreise nach vorn. Nicht: was willst du erreicht haben. Sondern: wer willst du geworden sein?',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASxrTq6qbyjcPIszUistGKA093J37XGuKEfXb7-hB0RKkT2HvXmspPfpdXuWkgqmBwjOialAQhLeV7nZvf_8ywA6kv8uYw_yqrgYfJZYUn5_x7sPkbUMe-WmqC8VlDNAhfply8WJlUZxo0ovwfs0z7nWfJzGGjckVrDJg4W-q5KFtH6OxwdK56mFymrmK3aO1nDuY1lhm6brUvLXgXgkhnDEyN_X6NpKBcEpNCuAZLTtT1XXxPR6ichv8AudBs5fTwVEpz-JqXpuf-',
    duration: '2 Std.',
    people: '4-8 Personen',
    philosophy1: 'Zehn Jahre sind weit genug, um alles zu verändern — und nah genug, um heute etwas zu verschieben.',
    philosophy2: 'Diese Übung lebt von Konkretheit. Keine Poesie. Stattdessen: Ort, Tagesablauf, Menschen um dich herum.',
    impulseQuestion: 'Stell dir einen Mittwoch in zehn Jahren vor. Wo wachst du auf, neben wem, und woran arbeitest du heute?'
  }
};

// Generic fallback stations for themes without custom stations.
// Short group-focused flow. Einzelreflexion ist bewusst klein gehalten —
// der Abend lebt vom gemeinsamen Gespräch, nicht vom stillen Grübeln.
function buildGenericStations(theme) {
  return [
    {
      name: 'Ankommen',
      title: 'Ankommen',
      duration: 15 * 60,
      hostNote: 'Reihum, 1–2 Sätze: wie geht es dir — ehrlich?',
      description: 'Handys beiseite. Ein gemeinsames Getränk. Kurze Stille, um den Alltag abzulegen.',
      question: 'Wie kommst du hier an?'
    },
    {
      name: 'Impuls',
      title: 'Die Frage des Abends',
      duration: 10 * 60,
      hostNote: 'Der Host liest langsam vor. Zweimal. Danach 2 Minuten Stille — jede:r für sich, kurze Notiz auf Papier, falls etwas kommt.',
      question: theme.impulseQuestion
    },
    {
      name: 'Zu zweit',
      title: 'Erst im kleinen Kreis',
      duration: 20 * 60,
      hostNote: 'In Zweier-Paaren. Je 10 Minuten pro Person. Nur zuhören, nicht beraten.',
      description: 'Einfacher Start, bevor die ganze Gruppe spricht. Niemand muss perfekt sein — sprecht aus, was gerade wach ist.',
      question: theme.impulseQuestion
    },
    {
      name: 'In die Runde',
      title: 'Gemeinsamer Austausch',
      duration: 50 * 60,
      hostNote: 'Offene Runde. Der Host hört mit, lenkt bei Bedarf nach. Keiner muss sprechen, keiner soll dominieren.',
      description: 'Jetzt die ganze Gruppe. Gedanken dürfen sich ergänzen, widersprechen, auftauchen. Aus der Resonanz entsteht das Verstehen.',
      question: 'Was möchtest du mit der Runde teilen?'
    },
    {
      name: 'Abschluss',
      title: 'Ein Wort, das bleibt',
      duration: 10 * 60,
      hostNote: 'Reihum. Nur ein Wort. Keine Erklärung.',
      question: 'Was nimmst du mit?'
    }
  ];
}

// Post-process: give each theme either its custom stations or generic ones
Object.keys(window.THEMES).forEach(id => {
  const theme = window.THEMES[id];
  theme.id = id;
  if (!theme.stations) {
    theme.stations = buildGenericStations(theme);
  }
  // Total duration label derived from stations if needed (for display)
  theme.totalMinutes = theme.stations.reduce((s, st) => s + st.duration, 0) / 60;
});
