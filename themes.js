// Central data store for all Wertenackt themes.
//
// Each theme has:
//   id, title, category, lead, image, philosophy1, philosophy2, featured?
//   formats: { group?: {...}, pair?: {...} }
//
// Each format has:
//   label, duration, people, stations[]
//
// Each station has:
//   name, title, duration (seconds)
//   hostNote?, description?, question?
//   items?  [{label, accent, text}]  — rendered as cards (typology, scenarios, lists)
//   quote?  {text, author}  — rendered as styled blockquote (usually in Einstieg-Station)
//   type?   'feedback'  — renders a feedback form instead of normal content

window.WERTENACKT_FEEDBACK_EMAIL = 'florian.s.thiel+wertenackt@gmail.com';

const FEEDBACK_STATION = {
  name: 'Feedback',
  title: 'Danke — wie war’s?',
  duration: 5 * 60,
  type: 'feedback',
  description: 'Dein Feedback hilft dabei, die nächsten Abende besser zu machen. Braucht 1 Minute, bleibt zwischen uns.',
};

function withFeedback(stations) {
  return [...stations, FEEDBACK_STATION];
}

window.THEMES = {

  // =====================================================================
  // BINDUNG  — Flaggschiff
  // =====================================================================
  bindung: {
    title: 'Welches Bindungsmuster prägt mich?',
    category: 'Beziehungen',
    lead: 'Ein Abend über das, was in uns mitläuft, wenn wir lieben: die unsichtbare Software unserer Bindung. Keine Couch, keine Diagnose — ein ehrliches Gespräch.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBor9suvn-xFQGUPG_UbB1MaifycThZmUPJRX2-WNWOZhly_8jdzzkA0MXabSI3-CEd2HO7gldmaQ4-kX4hYZWBIyyCZFgv9DLNYB5DZ2WY0Ss7C_8QnhAZN_eYWD9F3AoqgOh5n9K9Wv4Y-UIUqZyG-VZhlWBPWYaTNP70rpZLQCoOBq-9VsaXRJ62v8xo7SYTLEnELzwn6bO3TdDlXs2FUoJlD0aD0IkcIU5xUMq9M1cQ_VP1yDJSW_aevQpAwCZKrfWF0ds0EHbX',
    philosophy1: 'Wir kommen mit einer Art Beziehungs-Software auf die Welt. Die ersten Bezugspersonen prägen, wie wir Nähe später erleben: ob sie sich sicher anfühlt oder bedrohlich, ob wir auf uns allein gestellt sind oder getragen.',
    philosophy2: 'Die klassische Bindungsforschung unterscheidet vier Muster. Die meisten erkennen sich in Mischungen wieder. Heute schaut ihr, wo eure Muster liegen — ohne Diagnose, ohne Therapie, einfach ehrlich.',
    featured: true,
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~1 Std. 40 Min.',
        people: '4-6 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Was bringt dich heute hierher?', duration: 10*60,
            hostNote: 'Reihum, 1–2 Sätze. Keine Rückfragen.',
            question: 'Was bringt dich heute hierher — und wo steht dein Kopf gerade?' },
          { name: 'Einstieg', title: 'Warum wir so lieben, wie wir lieben', duration: 8*60,
            hostNote: 'Der Host liest langsam vor. Danach 1 Minute Stille.',
            quote: { text: 'Die Liebe will nichts von dem anderen, sie will alles für den anderen.', author: 'Dietrich Bonhoeffer' },
            description: 'Ein Kind, das schreit, wird getröstet — oder nicht. Ein Kind, das Nähe sucht, wird aufgenommen — oder weggeschoben. Aus diesen tausend kleinen Momenten lernt jeder von uns: Ist Nähe sicher? Darf ich abhängig sein? Werde ich gesehen, wenn ich es brauche?\n\nDiese frühe Lektion wird zur inneren Landkarte. Wir tragen sie in jede Beziehung — mit Partner:innen, Freund:innen, am Arbeitsplatz. Heute schauen wir, welches Muster in dir heute noch wirkt.' },
          { name: 'Sicher', title: 'Muster 1: Sicher', duration: 5*60,
            hostNote: 'Vorlesen. Danach kurz in die Runde: Wer erkennt sich?',
            description: 'Etwa 50 % der Menschen. Nähe ist möglich, Unabhängigkeit auch. Konflikte schrecken nicht. Vertrauen darf einfach da sein.\n\nInnere Grundannahme: Ich bin okay, andere sind okay. Wenn ich bitte, bekomme ich meistens eine Antwort. Wenn jemand geht, kommt er meistens wieder.' },
          { name: 'Ängstlich', title: 'Muster 2: Ängstlich', duration: 5*60,
            hostNote: 'Vorlesen. Wer nickt?',
            description: 'Etwa 20 %. Sehnsucht nach viel Nähe, sensible Antennen für jedes Zeichen der Distanz. Schreibt eine Nachricht, wartet auf Antwort, wartet länger, fängt an zu zweifeln.\n\nInnere Grundannahme: Ich brauche dich, und ich habe Angst, dich zu verlieren.' },
          { name: 'Vermeidend', title: 'Muster 3: Vermeidend', duration: 5*60,
            hostNote: 'Vorlesen. Kurze Reaktion.',
            description: 'Etwa 25 %. Unabhängigkeit ist oberste Priorität. Emotionale Nähe fühlt sich schnell eng an. Rückzug ist der erste Reflex, wenn’s zu dicht wird.\n\nInnere Grundannahme: Ich komme allein klar. Zu brauchen ist gefährlich.' },
          { name: 'Desorganisiert', title: 'Muster 4: Desorganisiert', duration: 5*60,
            hostNote: 'Vorlesen. Mit Feingefühl — dieses Muster berührt oft.',
            description: 'Etwa 5 %. Gleichzeitig Sehnsucht nach Nähe und Angst davor. Beziehungen fühlen sich widersprüchlich an, oft nach frühen, schmerzhaften Erfahrungen.\n\nInnere Grundannahme: Ich will dich — bleib weg. Komm näher — nicht so nah.' },
          { name: 'Selbstverortung', title: 'Wo verortest du dich?', duration: 10*60,
            hostNote: 'Reihum. Keine Diagnose — ein Bauchgefühl reicht. Mischungen sind normal.',
            question: 'In welchem Muster erkennst du dich am ehesten wieder — und wie zeigt sich das im Alltag?' },
          { name: 'Alltag', title: 'Drei Szenen aus dem echten Leben', duration: 15*60,
            hostNote: 'Der Host liest eine Szene nach der anderen. Reihum: Was ist dein erster Impuls? Kurz, ungefiltert.',
            items: [
              { accent: '1.', label: 'Stille', text: 'Dein:e Partner:in meldet sich drei Stunden nicht. Was denkst du zuerst?' },
              { accent: '2.', label: 'Streit', text: 'Ein Konflikt eskaliert. Bleiben und klären — oder Rückzug — oder zuschlagen?' },
              { accent: '3.', label: 'Hilfe', text: 'Du brauchst Hilfe mit etwas Konkretem. Wie leicht oder schwer fällt es dir zu fragen?' }
            ] },
          { name: 'Wurzeln', title: 'Eine Szene, die dich geformt hat', duration: 18*60,
            hostNote: 'Reihum. Keine Tiefenanalyse — ein Bild, eine Szene. „Pass“ ist völlig okay.',
            description: 'Egal ob warm oder kühl, nah oder fern. Welche Erinnerung taucht auf, wenn du jetzt nicht lange nachdenkst?',
            question: 'Eine Szene aus deiner Kindheit zum Thema Geborgenheit. Was kommt?' },
          { name: 'Schritt', title: 'Ein kleiner, konkreter Schritt', duration: 15*60,
            hostNote: 'Reihum, ein Satz. Nicht vage — konkret. Plus Ein-Wort-Abschluss.',
            description: 'Nicht: „Ich will sicher gebunden sein.“ Sondern: „Wenn Lisa am Samstag 3 h nicht antwortet, frage ich einmal nach statt mich innerlich zurückzuziehen.“',
            question: 'Was ist dein nächster kleiner Schritt diese Woche? Und was nimmst du in einem Wort mit?' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 15 Min.',
        people: '2 Personen (Paar oder Freundschaft)',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Erst mal: Wie geht es dir?', duration: 8*60,
            hostNote: 'Beide nacheinander, 2 Minuten. Andere:r hört zu, ohne zu reagieren.',
            question: 'Wie geht es dir wirklich, heute?' },
          { name: 'Einstieg', title: 'Warum wir so lieben, wie wir lieben', duration: 6*60,
            hostNote: 'Eine:r liest laut vor.',
            quote: { text: 'Die Liebe will nichts von dem anderen, sie will alles für den anderen.', author: 'Dietrich Bonhoeffer' },
            description: 'Wir kommen mit einer Art Beziehungs-Software auf die Welt. Diese frühe Lektion trägt jeder in jede Beziehung mit.\n\nHeute schauen wir gemeinsam: Welches Muster bringt jede:r von euch mit — und wie begegnen die sich in eurer Beziehung?' },
          { name: 'Die Muster', title: 'Die vier Grundmuster', duration: 6*60,
            hostNote: 'Gemeinsam durchlesen. Stoppt, wo jemand nickt.',
            items: [
              { label: 'Sicher', accent: '~50 %', text: 'Nähe und Unabhängigkeit sind beides möglich. Vertrauen kommt leicht.' },
              { label: 'Ängstlich', accent: '~20 %', text: 'Sehnsucht nach viel Nähe. Sensibel für kleinste Zeichen der Distanz.' },
              { label: 'Vermeidend', accent: '~25 %', text: 'Unabhängigkeit zuerst. Nähe fühlt sich schnell eng an.' },
              { label: 'Desorganisiert', accent: '~5 %', text: 'Wunsch nach Nähe und Angst davor zugleich.' }
            ] },
          { name: 'Wo stehst du?', title: 'Gegenseitige Verortung', duration: 12*60,
            hostNote: 'Jede:r sagt erst für sich, dann für die andere Person. Zuhören, dann tauschen.',
            question: 'Wo verortest du dich — und wo verortest du die andere Person?' },
          { name: 'Alltag', title: 'Wie begegnen sich eure Muster?', duration: 15*60,
            hostNote: 'Gemeinsam durch die Szenen. Ehrlich reagieren, nicht strategisch.',
            items: [
              { accent: '1.', label: 'Stille', text: 'Der/die andere meldet sich drei Stunden nicht. Was denkst du?' },
              { accent: '2.', label: 'Rückzug', text: 'Einer zieht sich nach einem Konflikt zurück. Wie reagiert der andere?' },
              { accent: '3.', label: 'Nähe', text: 'Einer kommt plötzlich emotional sehr nah. Was passiert?' }
            ] },
          { name: 'Wurzeln', title: 'Ein Einblick in die Kindheit', duration: 15*60,
            hostNote: 'Jede:r 5 Minuten erzählen, der andere nur zuhören. Dann tauschen.',
            description: 'Keine Tiefenanalyse. Eine Szene, ein Bild aus eurer Kindheit — wie war das für euch?',
            question: 'Was fällt dir ein — und was schickt dich das über dein heutiges Muster?' },
          { name: 'Schritt', title: 'Was wir einander diese Woche versprechen', duration: 10*60,
            hostNote: 'Konkret, klein, machbar. Ein Satz pro Person.',
            question: 'Was probiere ich diese Woche anders — und was wünsche ich mir von dir?' }
        ])
      }
    }
  },

  // =====================================================================
  // WERTE
  // =====================================================================
  werte: {
    title: 'Was sind meine Werte?',
    category: 'Werte',
    lead: 'Werte zeigen sich nicht in dem, was wir sagen, sondern in dem, wofür wir Zeit opfern, worüber wir uns ärgern und was uns spät in der Nacht beschäftigt.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAndtAhizmGZhn3gzaSL1DCAJ7zPOpBj1D06e4TxBChuV7EoVcg18GrQd_4xjFemvRe-DGQo1B_THcAc1orj-qpBD7zHw8rLvym3huLddoBlsxl4Tj0gT8gH9k7tqINEnDzoUSto8a9SldKQbSDADNKZl2OYQuOWYEyHcHT7GEjbr_o3OEIfDDMDuguc29p7b3OCypmWKTRCwXm4ot5oCXJyKsA0QF8Rd4S0nOUgI6eeTb9vYtM7MzYmXhlBgkQ7gdQFKIsdGZ2hJ7I',
    philosophy1: 'Jeder kennt das: Auf dem Poster stehen „Familie, Ehrlichkeit, Gesundheit“ — und im Alltag treffen wir Entscheidungen, die genau dem widersprechen. Werte sind nicht das, was wir sagen. Sie sind das, was sich in unseren kleinen täglichen Entscheidungen durchsetzt.',
    philosophy2: 'An diesem Abend sucht ihr nicht nach den „richtigen“ Werten — ihr sucht nach den euren. So, wie sie sich wirklich im Alltag zeigen, nicht wie sie klingen sollten.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~1 Std. 45 Min.',
        people: '4-6 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie kommst du hier an?', duration: 10*60,
            hostNote: 'Reihum, 1–2 Sätze. Kein Smalltalk — was bewegt dich heute?',
            question: 'Wie kommst du hier an — und was beschäftigt dich heute?' },
          { name: 'Einstieg', title: 'Der Unterschied zwischen Werten und Wunschdenken', duration: 8*60,
            hostNote: 'Der Host liest langsam vor.',
            quote: { text: 'Versuche nicht ein erfolgreicher, sondern ein wertvoller Mensch zu werden.', author: 'Albert Einstein' },
            description: 'Werte sind nicht die schönen Worte auf einem Poster. Werte sind das, was sich durchsetzt, wenn es eng wird.\n\nWenn du „Gesundheit“ als Wert angibst, aber in stressigen Wochen als Erstes den Sport streichst — dann ist nicht Gesundheit dein Wert in dieser Woche, sondern Effizienz oder Karriere. Das ist nicht schlimm. Das ist nur ehrlich. Und ehrlich ist der erste Schritt, um es ändern zu können.' },
          { name: 'Landkarte 1', title: 'Das Paar: Sicherheit und Freiheit', duration: 5*60,
            hostNote: 'Kurz vorlesen. Wer tendiert wohin?',
            items: [
              { label: 'Sicherheit', text: 'Struktur, Vorhersehbarkeit, Absicherung, Traditionen, das Bekannte bewahren.' },
              { label: 'Freiheit', text: 'Offenheit, Abenteuer, Wandel, Eigenständigkeit, das Neue wagen.' }
            ] },
          { name: 'Landkarte 2', title: 'Das Paar: Leistung und Verbundenheit', duration: 5*60,
            hostNote: 'Kurz vorlesen. Wo steht ihr?',
            items: [
              { label: 'Leistung', text: 'Wachstum, Exzellenz, etwas erreichen, Einfluss, sichtbare Ergebnisse.' },
              { label: 'Verbundenheit', text: 'Beziehungen, Zugehörigkeit, füreinander da sein, Zeit mit Menschen.' }
            ] },
          { name: 'Landkarte 3', title: 'Das Paar: Sinn und Genuss', duration: 5*60,
            hostNote: 'Letztes Paar.',
            items: [
              { label: 'Sinn', text: 'Ein größerer Zweck, Beitrag zu etwas, dienen, verändern.' },
              { label: 'Genuss', text: 'Das Hier und Jetzt, Schönheit, Leichtigkeit, sinnlich leben.' }
            ] },
          { name: 'Deine 3', title: 'Drei Werte, die dich tatsächlich leiten', duration: 10*60,
            hostNote: 'Jede:r schreibt für sich. Nicht Wunsch, sondern was sich in der letzten Woche gezeigt hat. Dann reihum teilen.',
            question: 'Welche 3 Werte haben dich diese Woche wirklich geleitet — nicht welche du haben willst, sondern welche du gelebt hast?' },
          { name: 'Spur', title: 'Alltags-Szenen', duration: 15*60,
            hostNote: 'Eine Szene nach der anderen. Reihum: Was hättest du entschieden — und welcher Wert zeigt sich darin?',
            items: [
              { accent: '1.', label: 'Das Jobangebot', text: 'Dein Traumjob ruft — bezahlt besser, weniger Zeit für die Familie. Was zuerst im Kopf?' },
              { accent: '2.', label: 'Die Absage', text: 'Freund:innen fragen dich spontan für’s Wochenende. Du bist müde. Was sagst du — und was würdest du eigentlich sagen wollen?' },
              { accent: '3.', label: 'Die letzten Stunden', text: 'Du hast einen Abend frei. Niemand fragt nach dir. Wie verbringst du ihn ehrlich — nicht wie du es solltest?' }
            ] },
          { name: 'Wurzeln', title: 'Wer hat das in dich hineingelegt?', duration: 15*60,
            hostNote: 'Reihum. Eine Person, eine Szene reicht.',
            description: 'Werte kommen nicht aus dem Nichts. Sie wurden dir vorgelebt, aufgetragen, entgegengesetzt. Jemand hat eine Saat in dich gelegt — mit Wärme oder mit Härte.',
            question: 'Welcher deiner Werte ist geliehen — von wem? Und welcher ist wirklich deiner?' },
          { name: 'Was fehlt', title: 'Und was hast du verdrängt?', duration: 12*60,
            hostNote: 'Ehrliches, aber wohlwollendes Selbstgespräch. Reihum.',
            question: 'Welcher Wert käme als Nächstes dran — und wovor hast du Angst, wenn du ihn wirklich lebst?' },
          { name: 'Schritt', title: 'Ein kleiner Schritt, ein Wort', duration: 10*60,
            hostNote: 'Reihum: ein konkreter Schritt diese Woche + ein Wort zum Abschluss.',
            question: 'Welcher Wert bekommt diese Woche einen Minuten-Schritt? Und was nimmst du in einem Wort mit?' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 15 Min.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie kommst du an?', duration: 8*60,
            hostNote: 'Beide nacheinander, 3 Minuten. Andere:r hört, ohne zu reagieren.',
            question: 'Wie geht es dir — und was hat dich diese Woche bewegt?' },
          { name: 'Einstieg', title: 'Werte sind, was sich durchsetzt', duration: 6*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Versuche nicht ein erfolgreicher, sondern ein wertvoller Mensch zu werden.', author: 'Albert Einstein' },
            description: 'Werte sind nicht die schönen Worte, die wir über uns sagen. Sie sind das, was sich in den kleinen Entscheidungen durchsetzt, wenn keiner hinschaut. Heute schauen wir gemeinsam — ohne Bewertung — was sich bei euch beiden gerade durchsetzt.' },
          { name: 'Landkarte', title: 'Die drei Werte-Paare', duration: 6*60,
            hostNote: 'Gemeinsam durchlesen. Welche Paare polarisieren bei euch?',
            items: [
              { label: 'Sicherheit ↔ Freiheit', text: 'Das Bekannte bewahren oder das Neue wagen.' },
              { label: 'Leistung ↔ Verbundenheit', text: 'Etwas erreichen oder füreinander da sein.' },
              { label: 'Sinn ↔ Genuss', text: 'Für etwas Größeres leben oder im Jetzt präsent sein.' }
            ] },
          { name: 'Deine 3', title: 'Deine drei echten Werte', duration: 12*60,
            hostNote: 'Jede:r schreibt erst allein auf. Dann einer erzählt 5 Min, der andere hört nur zu. Wechsel.',
            question: 'Welche 3 Werte haben dich diese Woche wirklich geleitet?' },
          { name: 'Blick nach außen', title: 'Was ich bei dir sehe', duration: 10*60,
            hostNote: 'Beide abwechselnd: „Bei dir sehe ich folgenden Wert besonders stark leben…“. Keine Kritik, nur Beobachtung.',
            question: 'Welchen Wert lebst du für mich besonders sichtbar?' },
          { name: 'Wurzeln', title: 'Woher kommen deine Werte?', duration: 12*60,
            hostNote: 'Je 5 Min erzählen, der andere nur zuhören.',
            question: 'Welcher Wert ist geliehen — von wem? Und welcher ist wirklich deiner?' },
          { name: 'Schritt', title: 'Ein Versprechen diese Woche', duration: 8*60,
            hostNote: 'Ein Satz pro Person.',
            question: 'Welcher Wert bekommt diese Woche einen Minuten-Schritt?' }
        ])
      }
    }
  },

  // =====================================================================
  // PRIORITÄTEN — das Vier-Öfen-Modell
  // =====================================================================
  prioritaeten: {
    title: 'Was ist mir wirklich wichtig?',
    category: 'Werte',
    lead: 'Ein Fokus-Abend über das stille Ja zum Wesentlichen — und das Nein zum Möglichen. Mit dem Vier-Öfen-Modell: welche Öfen brennen heiß bei dir, welche sind aus?',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx3zc_372HZ2FnhMqRihODyYdH0O6QMhHorRxsi1pNG5H6yo27lR3uFj5kEpa_bZr6NyMTZMkNLzxhVFFrWOAWg62u4rwi9mqyFdCHrVY3-O-ZOBWT-4kuNVD5hHIfeuAHO8OfvTaFZmYMfj-kYak3WqVQZF6RIYra-FyBU_I2AjVbDZVt0JjNJj2RSBpOn2Us3TyGl-oc_Da2fdvd3_WYWlkDPaFgXfDXm_5WLY5Q9p-ssyPjMUjYVmwfk1RS19Dq2edt7wPpu1R2',
    philosophy1: 'Vieles schreit nach Aufmerksamkeit. Wenig verdient sie wirklich. Prioritäten werden erst sichtbar, wenn wir aufhören, alles gleichzeitig zu wollen.',
    philosophy2: 'Das Vier-Öfen-Modell (nach David McCullough / Harvard Business Review) ist simpel und unbequem: vor dir stehen vier Öfen — Arbeit, Familie, Freunde, Gesundheit. Um wirklich erfolgreich zu sein, musst du mindestens einen komplett ausmachen. Um außergewöhnlich zu sein, zwei. Heute schaut ihr, welche eure gerade brennen.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~1 Std. 40 Min.',
        people: '4-6 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Was ist diese Woche laut in deinem Kopf?', duration: 10*60,
            hostNote: 'Reihum. Kein Smalltalk, eine ehrliche Antwort reicht.',
            question: 'Was beschäftigt dich gerade am meisten — und will deine Zeit?' },
          { name: 'Einstieg', title: 'Das Vier-Öfen-Modell', duration: 8*60,
            hostNote: 'Der Host liest langsam vor. Danach einen Moment sacken lassen.',
            quote: { text: 'Disziplin ist nur die Wahl zwischen dem, was du jetzt willst und dem, was du am meisten willst.', author: null },
            description: 'Stell dir vor, vor dir stehen vier Öfen. Auf jedem brennt ein Feuer, das deine Lebensenergie braucht: Arbeit, Familie, Freundschaft, Gesundheit.\n\nUm wirklich gut in etwas zu sein — so die These — musst du mindestens einen Ofen ausmachen. Um außergewöhnlich zu sein, zwei. Das ist hart. Aber es erklärt, warum „alles gleichzeitig“ nie funktioniert. Heute schauen wir ehrlich: Welche Öfen brennen heiß bei dir? Welche köcheln vor sich hin? Welche sind aus — und merkst du’s überhaupt?' },
          { name: 'Ofen Arbeit', title: 'Ofen 1: Arbeit & Berufung', duration: 5*60,
            hostNote: 'Kurz in die Runde: Wie heiß?',
            description: 'Alles, was mit bezahlter Arbeit, Karriere, Wirken in der Welt zu tun hat. Nicht nur der Job — auch Nebenprojekte, Ambitionen, das „was ich eigentlich schaffen will“.',
            question: 'Auf einer Skala von 1–10: Wie heiß brennt dieser Ofen bei dir gerade?' },
          { name: 'Ofen Partner', title: 'Ofen 2: Partnerschaft & Familie', duration: 5*60,
            hostNote: 'Reihum, eine Zahl.',
            description: 'Die nähesten Beziehungen — Partner:in, Kinder, Eltern, Geschwister. Der Kreis, in dem man sich nicht erklären muss.',
            question: 'Wie heiß brennt dieser Ofen gerade? Und merkst du, wenn er kleiner wird?' },
          { name: 'Ofen Freunde', title: 'Ofen 3: Freundschaft & Community', duration: 5*60,
            hostNote: 'Eine Zahl genügt.',
            description: 'Freund:innen, Bekannte, Vereine, Nachbarschaft. Die Menschen, die einen nicht aus der Familie kennen, aber trotzdem tragen.',
            question: 'Wie heiß brennt dieser Ofen — und wann hast du zuletzt jemanden angerufen, nur um Hallo zu sagen?' },
          { name: 'Ofen Gesundheit', title: 'Ofen 4: Gesundheit & Körper', duration: 5*60,
            hostNote: 'Ehrlich bleiben.',
            description: 'Bewegung, Schlaf, Essen, mentale Gesundheit, Ruhepausen. Der Ofen, der sich am leichtesten auslöschen lässt — weil er nicht so laut schreit wie die anderen drei.',
            question: 'Wie heiß brennt dieser Ofen — und welcher andere Ofen frisst gerade seine Glut?' },
          { name: 'Deine Öfen', title: 'Deine Öfen — ehrlich', duration: 12*60,
            hostNote: 'Jede:r nennt reihum: Welche zwei Öfen brennen am heißesten? Welcher ist de facto aus? Keine Rechtfertigung.',
            question: 'Welche zwei Öfen brennen bei dir gerade am heißesten — und welcher ist de facto aus?' },
          { name: 'Kalender-Check', title: 'Was zeigt dein letzter Kalender?', duration: 15*60,
            hostNote: 'Holt euer Handy raus, scrollt durch die letzte Woche. Erzählt reihum, was ihr seht.',
            description: 'Die eigenen Öfen zu benennen ist das Eine. Der Kalender ist das Andere. Er lügt nicht.',
            items: [
              { accent: '1.', label: 'Zeit-Realität', text: 'Welcher Ofen hat die meiste Zeit bekommen? Deckt sich das mit deiner Antwort eben?' },
              { accent: '2.', label: 'Unsichtbare Zeit', text: 'Welche Stunden liegen nirgends im Kalender — wo sind die hin?' },
              { accent: '3.', label: 'Überraschung', text: 'Was erstaunt dich, wenn du die Woche so anschaust?' }
            ] },
          { name: 'Wurzeln', title: 'Wer hat dir beigebracht, was wichtig ist?', duration: 12*60,
            hostNote: 'Reihum. Eine Person, eine Botschaft.',
            description: 'Unsere Prioritäten sind selten unsere eigenen. Irgendwo in der Kindheit hat uns jemand gezeigt: „Dies ist wichtig. Dies nicht.“ Oft unausgesprochen — durch das, wofür Zeit da war und wofür nie.',
            question: 'Welche Priorität hat dir jemand vorgelebt — und trägst du sie heute weiter, obwohl sie nicht deine ist?' },
          { name: 'Schritt', title: 'Einen Ofen drosseln, einen anheizen', duration: 10*60,
            hostNote: 'Reihum. Konkret. Plus Ein-Wort-Abschluss.',
            question: 'Welchen Ofen drosselst du diese Woche — und welchen drehst du auf? Und was nimmst du in einem Wort mit?' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 10 Min.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie laut ist dein Kopf?', duration: 8*60,
            hostNote: 'Beide nacheinander. 3 Minuten pro Person.',
            question: 'Was will gerade am meisten deine Zeit — und fühlt sich das richtig an?' },
          { name: 'Einstieg', title: 'Das Vier-Öfen-Modell', duration: 6*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Disziplin ist nur die Wahl zwischen dem, was du jetzt willst und dem, was du am meisten willst.', author: null },
            description: 'Vier Öfen vor euch: Arbeit, Familie/Partner, Freundschaft, Gesundheit. Die These: um wirklich gut in etwas zu sein, muss mindestens einer aus. Das ist unbequem — und erklärt, warum „alles gleichzeitig“ nie funktioniert.' },
          { name: 'Die vier Öfen', title: 'Die vier Öfen im Überblick', duration: 6*60,
            hostNote: 'Gemeinsam durchgehen. Wer denkt bei welchem Ofen zuerst an sich?',
            items: [
              { label: 'Arbeit', text: 'Beruf, Karriere, Ambition, Wirken in der Welt.' },
              { label: 'Partner / Familie', text: 'Die engsten Menschen. Der Kreis ohne Erklärungen.' },
              { label: 'Freunde', text: 'Community, Bekannte, Nachbarn. Wer trägt außer der Familie?' },
              { label: 'Gesundheit', text: 'Körper, Schlaf, Bewegung, Ruhe. Der leiseste Ofen.' }
            ] },
          { name: 'Eure Landkarte', title: 'Meine Öfen — deine Öfen', duration: 15*60,
            hostNote: 'Jede:r zeichnet für sich 4 Öfen mit Flamme groß/klein/aus. Dann zeigt ihr euch die Zeichnungen.',
            question: 'Welche Öfen brennen bei mir gerade — und wo siehst du das bei mir anders?' },
          { name: 'Kalender-Check', title: 'Ein ehrlicher Blick in die Wochen', duration: 15*60,
            hostNote: 'Scrollt zusammen durch eure letzten 7 Tage. Was seht ihr?',
            description: 'Der Kalender ist der ehrlichste Spiegel. Was er zeigt, das lebt ihr — unabhängig von dem, was ihr sagt.',
            question: 'Was zeigt unser Kalender über unsere Prioritäten — und wo gibt es Lücken?' },
          { name: 'Wurzeln', title: 'Was habt ihr mitgebracht?', duration: 10*60,
            hostNote: 'Je 5 Minuten erzählen, der andere nur zuhören.',
            question: 'Welche Priorität ist bei dir geliehen — von deinen Eltern, deiner Herkunft?' },
          { name: 'Schritt', title: 'Was probieren wir diese Woche?', duration: 8*60,
            hostNote: 'Ein Satz pro Person. Konkret.',
            question: 'Welchen Ofen drossele ich diese Woche — und welchen gebe ich mehr Luft?' }
        ])
      }
    }
  },

  // =====================================================================
  // WOFÜR STEHE ICH — Drei Ebenen des Einstehens
  // =====================================================================
  stehe: {
    title: 'Wofür stehe ich?',
    category: 'Werte',
    lead: 'Eine Standortbestimmung. Nicht die laute Version — die stille. Wo ziehe ich Linien, wo ducke ich mich, wo wachse ich?',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxbjqrLpObJ-WD47GvSPuVQIAi2NVN5ZnoVNgvrsdtCZLaj4qrsZF2HrzHhwsJxLgvnVJILKatnzlr-owOjC4Vwjsj8zZLzjxILS_tEIw2mEMKfb-zeXJMntnWcVcuPa9PYApGzgjcOkjrCAXO4pfQeKu2mkuLgmuZAib-diXx3G3-UD0YnoBhDw7Ce18lglGHQsmkYnYtlXA3uXQy7ubFaeStRwPaH_tvjawicIlIFmIJNz1hbpyZCZKx3FSF1NFKo_bj2ggPwLZZ',
    philosophy1: 'Nicht jede Überzeugung muss laut sein. Aber sie muss deine sein. Heute geht es um die Grundsätze, an denen du dich wiedererkennst — und um die Momente, in denen du dich verleugnest.',
    philosophy2: 'Wir schauen auf drei Ebenen: Wofür stehst du bei dir selbst ein? Für andere? Für eine Sache, die größer ist als du? Manche Menschen stehen auf Ebene 1 stark und auf Ebene 3 schwach. Andere umgekehrt. Beides ist okay — sichtbar wird das Muster erst, wenn man ehrlich draufschaut.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~1 Std. 40 Min.',
        people: '4-8 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie ehrlich bist du mit dir diese Woche gewesen?', duration: 10*60,
            hostNote: 'Reihum, ein Satz. Nicht das richtige Leben, das echte.',
            question: 'Wo warst du diese Woche am ehrlichsten mit dir — und wo am wenigsten?' },
          { name: 'Einstieg', title: 'Drei Ebenen des Einstehens', duration: 8*60,
            hostNote: 'Der Host liest langsam vor. Danach Stille.',
            quote: { text: 'Es ist kein Zeichen geistiger Gesundheit, gut angepasst an eine kranke Gesellschaft zu sein.', author: 'Jiddu Krishnamurti' },
            description: 'Wofür man steht, zeigt sich auf drei Ebenen.\n\nEbene 1: Für dich selbst. Hältst du dich an deine Vorsätze, deine Grenzen, deine Entscheidungen — auch wenn niemand hinschaut?\n\nEbene 2: Für andere. Wen verteidigst du, wenn er nicht im Raum ist? Für wen ziehst du deinen Hals raus?\n\nEbene 3: Für eine Sache. Gibt es etwas, für das du auch öffentlich einstehst, obwohl es dich etwas kostet?\n\nDie meisten von uns sind auf einer Ebene stärker, auf einer anderer leiser. Heute ohne Bewertung — nur Hinschauen.' },
          { name: 'Ebene 1', title: 'Ebene 1: Für dich selbst', duration: 6*60,
            hostNote: 'Ein Beispiel reicht pro Person.',
            description: 'Sich an die eigenen Regeln halten, wenn niemand hinschaut. Die Bitte, die man nicht ablehnt, obwohl man es tun sollte. Der Sport, den man nicht macht. Das Nein, das ein Ja wurde.',
            question: 'Wo hast du diese Woche nicht für dich selbst eingestanden?' },
          { name: 'Ebene 2', title: 'Ebene 2: Für andere', duration: 6*60,
            hostNote: 'Eine Person, eine Szene.',
            description: 'Wenn jemand über eine:n abwesende:n Freund:in lästert — sagst du was? Wenn jemand unfair behandelt wird und du es siehst — mischt du dich ein? Nicht heroisch, sondern alltäglich.',
            question: 'Für wen stehst du zuverlässig ein — und für wen nicht?' },
          { name: 'Ebene 3', title: 'Ebene 3: Für eine Sache', duration: 6*60,
            hostNote: 'Auch „ich stehe für nichts Größeres öffentlich ein“ ist eine ehrliche Antwort.',
            description: 'Politisch, moralisch, beruflich, religiös — gibt es etwas, wofür du öffentlich einstehst, auch wenn es unbequem wird? Und: Bist du dir sicher, dass dein Schweigen nicht auch eine Aussage ist?',
            question: 'Wofür, das größer ist als du, bist du bereit, unbequem zu werden?' },
          { name: 'Deine Ebenen', title: 'Wo bist du stark — wo leise?', duration: 10*60,
            hostNote: 'Reihum. Keine Wertung — Selbstbild.',
            question: 'Auf welcher Ebene stehst du stark, auf welcher leise — und überrascht dich das?' },
          { name: 'Szenen', title: 'Drei unbequeme Momente', duration: 15*60,
            hostNote: 'Szene für Szene vorlesen. Reihum: Was würdest du tun — und was tust du wirklich?',
            items: [
              { accent: '1.', label: 'Das Meeting', text: 'Im Meeting sagt die Chefin etwas, was du für falsch hältst. Alle nicken. Du weißt, dass du es besser weißt. Sagst du etwas?' },
              { accent: '2.', label: 'Der Witz', text: 'Ein Freund macht einen Witz, der eine Gruppe abwertet. Alle lachen, du auch. Oder?' },
              { accent: '3.', label: 'Der Fremde', text: 'Ein:e Fremde:r wird vor dir angepöbelt. Schaust du weg, sprichst du die Person an, oder bleibst du stehen?' }
            ] },
          { name: 'Vorbilder', title: 'Wer hat dir Rückgrat gezeigt?', duration: 12*60,
            hostNote: 'Reihum. Keine Berühmtheit — jemand aus deinem Leben.',
            question: 'Wer hat dir im echten Leben gezeigt, was „einstehen“ heißt? Und was genau hast du von dieser Person gelernt?' },
          { name: 'Schritt', title: 'Wo wirst du diese Woche einstehen?', duration: 10*60,
            hostNote: 'Reihum. Konkret, klein, machbar. Plus Ein-Wort-Abschluss.',
            question: 'In welcher Situation diese Woche wirst du einmal nicht wegducken? Und was nimmst du in einem Wort mit?' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 10 Min.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wo warst du diese Woche am wenigsten ehrlich mit dir?', duration: 8*60,
            hostNote: 'Beide nacheinander. Nicht dramatisieren, nur benennen.',
            question: 'Wo warst du diese Woche leise, obwohl etwas in dir reden wollte?' },
          { name: 'Einstieg', title: 'Drei Ebenen des Einstehens', duration: 6*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Es ist kein Zeichen geistiger Gesundheit, gut angepasst an eine kranke Gesellschaft zu sein.', author: 'Jiddu Krishnamurti' },
            description: 'Einstehen passiert auf drei Ebenen — für sich selbst, für andere, für eine Sache. Die meisten Menschen sind auf einer stark, auf einer leise. Heute schauen wir gegenseitig hin — ohne Urteil.' },
          { name: 'Die drei Ebenen', title: 'Die drei Ebenen', duration: 6*60,
            items: [
              { label: 'Für dich selbst', text: 'Hältst du dich an deine Grenzen, deine Vorsätze?' },
              { label: 'Für andere', text: 'Wen verteidigst du — auch in deren Abwesenheit?' },
              { label: 'Für eine Sache', text: 'Wofür bist du öffentlich unbequem bereit zu sein?' }
            ] },
          { name: 'Spiegel', title: 'Ich sehe dich — du siehst mich', duration: 15*60,
            hostNote: '„Auf Ebene X sehe ich dich stark, weil… Auf Ebene Y leise, weil…“ Beide abwechselnd. Keine Verteidigung, nur hinhören.',
            question: 'Was siehst du bei mir auf welcher Ebene?' },
          { name: 'Unbequeme Szenen', title: 'Zwei Alltags-Szenen', duration: 15*60,
            hostNote: 'Vorlesen, dann gemeinsam: Was hättest du gemacht? Was hätte ich gemacht?',
            items: [
              { accent: '1.', label: 'Freundeskreis', text: 'Jemand, den ihr beide mögt, wird abwesend lächerlich gemacht. Wer von euch sagt etwas?' },
              { accent: '2.', label: 'Öffentlich', text: 'In einem Café wird jemand diskriminiert. Erwartet ihr einander zu handeln — oder seid ihr unsicher?' }
            ] },
          { name: 'Wurzeln', title: 'Wer hat euch Rückgrat vorgelebt?', duration: 10*60,
            hostNote: 'Je 5 Minuten erzählen.',
            question: 'Wer hat dir im echten Leben gezeigt, wie „einstehen“ aussieht?' },
          { name: 'Schritt', title: 'Diese Woche einmal einstehen', duration: 8*60,
            hostNote: 'Ein Satz pro Person. Konkret, sichtbar.',
            question: 'Wo stehe ich diese Woche einmal ein — und wo wünsche ich mir von dir, dass du es tust?' }
        ])
      }
    }
  },

  // =====================================================================
  // MEIN IDEALER TAG — Drei Säulen (Flow / Connection / Stille)
  // =====================================================================
  tag: {
    title: 'Mein idealer Tag',
    category: 'Zukunft',
    lead: 'Keine Traumreise, kein Fünf-Jahres-Plan. Ein ehrlicher Tag zwischen Aufstehen und Einschlafen — und was er über dich verrät.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGJu-_hBQUfMgGqaCQAYs1H6AFjL5dK4gVKhHP7NsoVNFIbSk-TQyo0-fEJqwcpbO9GCCSDlhI3HMYtGoY4EQ7NHiBklOiV0LQ-CNBeklSYmw0yNL3mphU1Ocav-12_PYQKRjuxpj6DPJLEhIWa4iumFZihxaG20tE0r3Ox3AeL_Phj3b3XJy3cUtKvCKFYcOfc7HUj1kqmdYtWMqD8-i_IAyHfDHsEffMyYqANt4NMTHQLEHn1fcI3Hn-g7kqXJF3g1X8khkw0odF',
    philosophy1: 'Die Frage nach dem idealen Tag klingt harmlos. In Wirklichkeit legt sie offen, was wir wirklich brauchen: Ruhe, Begegnung, Bewegung, Tiefe, Leichtigkeit — in welcher Mischung?',
    philosophy2: 'Drei Säulen tragen die meisten guten Tage: Flow (etwas schaffen, in dem man aufgeht), Connection (jemanden wirklich sehen), Stille (Zeit mit sich selbst). Kein Tag ist perfekt, aber die Mischung entscheidet. Heute sucht ihr eure eigene.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~1 Std. 40 Min.',
        people: '4-6 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wann war ein Tag zuletzt wirklich deiner?', duration: 10*60,
            hostNote: 'Reihum, ein Beispiel. Nicht Urlaub, sondern Alltag.',
            question: 'Wann hast du zuletzt einen Tag gehabt, der sich wie deiner angefühlt hat? Was war besonders?' },
          { name: 'Einstieg', title: 'Die drei Säulen eines guten Tages', duration: 8*60,
            hostNote: 'Host liest langsam vor. Dann einen Moment sacken lassen.',
            quote: { text: 'Die Zeiten, die zählen, sind die Zeiten, die nicht gezählt werden.', author: null },
            description: 'Gute Tage haben selten perfekte Stunden. Aber sie haben oft drei Zutaten in der richtigen Mischung:\n\nFlow — ein Stück Zeit, in dem du in etwas aufgehst und die Uhr vergisst. Egal ob Arbeit, Sport, Kochen, Zeichnen.\n\nConnection — ein echtes Gespräch, eine Umarmung, ein Lachen mit jemandem, der dich sieht.\n\nStille — Zeit mit dir selbst, in der niemand etwas von dir will. Spaziergang, Kaffee allein, Buch.\n\nMenschen unterscheiden sich, wie viel sie von jeder Säule brauchen. Deine Aufgabe heute: deinen eigenen Mix finden.' },
          { name: 'Säule Flow', title: 'Säule 1: Flow', duration: 5*60,
            hostNote: 'Kurz in die Runde.',
            description: 'Flow ist der Zustand, in dem du ganz in einer Tätigkeit aufgehst. Du vergisst die Zeit, die Umgebung verschwindet. Das kann Arbeit sein, aber auch Kochen, Sport, Zeichnen, ein Gespräch, Gartenarbeit.',
            question: 'Wann bist du zuletzt im Flow gewesen? Was hast du gemacht?' },
          { name: 'Säule Connection', title: 'Säule 2: Connection', duration: 5*60,
            hostNote: 'Reihum.',
            description: 'Verbindung ist nicht „Menschen gesehen“. Es ist die ein, zwei Minuten, in denen du wirklich gesehen wirst — oder jemanden wirklich siehst. Ein Satz kann reichen.',
            question: 'Wann hast du zuletzt einen echten Moment der Verbindung gehabt — und mit wem?' },
          { name: 'Säule Stille', title: 'Säule 3: Stille', duration: 5*60,
            hostNote: 'Ehrlich: Viele von uns sind darin unterversorgt.',
            description: 'Stille heißt nicht nichts tun. Es heißt: Zeit, in der niemand etwas von dir will. Auch keine Algorithmen, kein Podcast, keine Playlist. Raum, in dem dein eigenes Denken sich ausbreiten kann.',
            question: 'Wann hattest du zuletzt 30 Minuten echte Stille? Und wie oft pro Woche hast du das?' },
          { name: 'Dein Mix', title: 'Dein idealer Dienstag — konkret', duration: 15*60,
            hostNote: 'Jede:r nimmt sich 3 Minuten zum Nachdenken. Dann reihum: von Aufstehen bis Einschlafen, grob in 3-4 Stationen.',
            description: 'Nicht der Dienstag wie er ist. Der Dienstag wie er sein könnte, wenn du den Mix wählen dürftest. Realistisch, nicht Urlaub. Konkret, nicht poetisch.',
            question: 'Wie sieht dein idealer Dienstag aus — von morgens bis abends?' },
          { name: 'Was fehlt', title: 'Der Vergleich mit heute', duration: 12*60,
            hostNote: 'Reihum, ein klarer Satz.',
            description: 'Jetzt wird’s unbequem: vergleiche den gerade beschriebenen idealen Tag mit deinem letzten echten Dienstag.',
            question: 'Was fehlt in deinem heutigen Alltag — das in deinem idealen Tag ganz selbstverständlich ist?' },
          { name: 'Hindernisse', title: 'Warum lebst du ihn nicht?', duration: 10*60,
            hostNote: 'Reihum. Erste Antwort ist selten die ehrlichste — eine zweite Schicht freilegen.',
            question: 'Was hindert dich wirklich daran, dem näher zu kommen — ist es wirklich Zeit oder Geld, oder etwas anderes?' },
          { name: 'Schritt', title: 'Ein Element, diesen Dienstag', duration: 10*60,
            hostNote: 'Reihum. Ein Element, eine Uhrzeit. Plus Ein-Wort-Abschluss.',
            question: 'Welches EIN Element deines idealen Tages baust du diesen Dienstag ein — zu welcher Uhrzeit, wie lange?' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 10 Min.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Dein letzter richtig guter Tag', duration: 8*60,
            hostNote: 'Beide nacheinander. 3 Minuten pro Person.',
            question: 'Wann hattest du zuletzt einen Tag, der sich wie deiner angefühlt hat? Was war da?' },
          { name: 'Einstieg', title: 'Die drei Säulen', duration: 6*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Die Zeiten, die zählen, sind die Zeiten, die nicht gezählt werden.', author: null },
            description: 'Gute Tage haben drei Zutaten — in unterschiedlichen Mischungen: Flow (aufgehen in etwas), Connection (einander sehen), Stille (Zeit mit sich selbst). Wir brauchen alle drei, aber jeder in anderer Dosierung.' },
          { name: 'Säulen', title: 'Die drei Säulen im Überblick', duration: 6*60,
            items: [
              { label: 'Flow', text: 'Zeit, in der du in etwas aufgehst und die Uhr vergisst.' },
              { label: 'Connection', text: 'Echte Begegnung — jemanden wirklich sehen oder gesehen werden.' },
              { label: 'Stille', text: 'Zeit, in der niemand etwas von dir will. Auch kein Handy.' }
            ] },
          { name: 'Dein Samstag', title: 'Erzähl mir deinen idealen Samstag', duration: 15*60,
            hostNote: 'Eine:r erzählt 6 Minuten — konkret, von morgens bis abends. Andere:r hört nur zu. Dann tauschen.',
            description: 'Nicht, was du glaubst, was gut wäre. Was sich wirklich nach Zuhause anfühlt.',
            question: 'Wie sieht dein idealer Samstag aus — realistisch, nicht Urlaub?' },
          { name: 'Gemeinsamer Mix', title: 'Gemeinsam oder getrennt?', duration: 12*60,
            hostNote: 'Der überraschende Teil: Viele Paare leben gemeinsam und doch unterschiedliche ideale Tage.',
            question: 'Welche Teile unseres idealen Tages sind gemeinsam — welche dürfen getrennt sein?' },
          { name: 'Was fehlt', title: 'Der Vergleich mit heute', duration: 10*60,
            hostNote: 'Beide nacheinander. Was merkt ihr jetzt?',
            question: 'Welches Element fehlt euch gerade am meisten — und merkt ihr das aneinander?' },
          { name: 'Schritt', title: 'Dieser eine Dienstag', duration: 8*60,
            hostNote: 'Ein Element pro Person, mit Uhrzeit.',
            question: 'Welches Element baust du Dienstag ein — und wie kann ich dir dabei den Rücken freihalten?' }
        ])
      }
    }
  },

  // =====================================================================
  // IN 10 JAHREN — Vier Säulen der Zukunft (Ort / Menschen / Arbeit / Selbst)
  // =====================================================================
  zehnjahre: {
    title: 'In 10 Jahren',
    category: 'Zukunft',
    lead: 'Eine Zeitreise nach vorn. Nicht: was willst du erreicht haben. Sondern: wer willst du geworden sein — und was fängt heute damit an?',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASxrTq6qbyjcPIszUistGKA093J37XGuKEfXb7-hB0RKkT2HvXmspPfpdXuWkgqmBwjOialAQhLeV7nZvf_8ywA6kv8uYw_yqrgYfJZYUn5_x7sPkbUMe-WmqC8VlDNAhfply8WJlUZxo0ovwfs0z7nWfJzGGjckVrDJg4W-q5KFtH6OxwdK56mFymrmK3aO1nDuY1lhm6brUvLXgXgkhnDEyN_X6NpKBcEpNCuAZLTtT1XXxPR6ichv8AudBs5fTwVEpz-JqXpuf-',
    philosophy1: 'Zehn Jahre sind weit genug, um fast alles zu verändern — und nah genug, dass das, was wir heute tun, entscheidet, was dann da sein wird.',
    philosophy2: 'Wir schauen auf vier Säulen einer Zukunft: Ort (wo), Menschen (mit wem), Arbeit (woran) und Selbst (wer bist du geworden). Die Übung lebt von Konkretheit — keine Poesie, sondern ein Mittwoch im April 2036.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~1 Std. 45 Min.',
        people: '4-6 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Was würdest du heute dein 18-jähriges Ich wissen lassen?', duration: 10*60,
            hostNote: 'Reihum, ein Satz. Warm, nicht belehrend.',
            question: 'Was würdest du deinem jüngeren Ich heute sagen — als kurzer Satz?' },
          { name: 'Einstieg', title: 'Zehn Jahre sind lang. Und kurz.', duration: 8*60,
            hostNote: 'Host liest langsam vor. Dann Stille.',
            quote: { text: 'The two most important days in your life are the day you are born and the day you find out why.', author: 'Mark Twain' },
            description: 'Vor zehn Jahren warst du jemand anderes. Andere Stadt, andere Menschen, andere Fragen — vielleicht. In zehn Jahren wirst du wieder jemand anderes sein, egal ob du es aktiv gestaltest oder nicht.\n\nDer Unterschied: Wer heute eine grobe Richtung kennt, macht kleinere Korrekturen statt großer Brüche. Wer keine hat, wird getrieben.\n\nHeute bauen wir ein konkretes Bild — nicht perfekt, aber konkret. Und schauen dann, was davon heute beginnt.' },
          { name: 'Säule Ort', title: 'Säule 1: Ort', duration: 5*60,
            hostNote: 'Reihum. Konkret, nicht „irgendwo wo es warm ist“.',
            description: 'Wo wachst du auf in 10 Jahren? Nicht die Stadt — das Zimmer. Was siehst du aus dem Fenster? Wie kommst du ins Bad? Ist das Haus dein Haus, eine Wohnung, ein Zimmer auf Zeit?',
            question: 'Beschreib mir dein Morgens — von Aufwachen bis erster Kaffee. Wo bist du?' },
          { name: 'Säule Menschen', title: 'Säule 2: Menschen', duration: 5*60,
            hostNote: 'Einen Menschen pro Person benennen.',
            description: 'Wer ist morgens in deiner Nähe? Mit wem frühstückst du — oder frühstückst du allein? Wer ruft dich abends an? Wer weiß, wie es dir wirklich geht?',
            question: 'Welcher Mensch ist in 10 Jahren in deinem Alltag nah — und ist es jemand, den du heute schon kennst?' },
          { name: 'Säule Arbeit', title: 'Säule 3: Arbeit', duration: 5*60,
            hostNote: 'Nicht Jobtitel — Tätigkeit.',
            description: 'Woran arbeitest du? Was gibt deinem Tag Struktur? Ist es angestellt, selbstständig, eine Mischung, etwas, was es heute noch nicht gibt? Fühlt es sich nach Beruf oder Berufung an?',
            question: 'Wenn jemand dich fragt, was du machst — was antwortest du in 10 Jahren?' },
          { name: 'Säule Selbst', title: 'Säule 4: Selbst', duration: 5*60,
            hostNote: 'Die schwierigste. Ehrlich sein.',
            description: 'Wer bist du geworden als Person? Was hast du gelassen, was dazugewonnen? Welche Sorge von heute ist in 10 Jahren lächerlich? Welche Stärke hast du, die du heute noch nicht hast?',
            question: 'Wer bist du in 10 Jahren — und was unterscheidet dich vom heutigen Dich?' },
          { name: 'Dein Mittwoch', title: 'Ein Mittwoch in 10 Jahren', duration: 15*60,
            hostNote: 'Jede:r bekommt 3 Minuten zum Sammeln, dann reihum 3 Minuten pro Person.',
            description: 'Nicht der große Zukunfts-Roman. Ein normaler Mittwoch — 16. April 2036. Du wachst auf. Wie sieht der Tag aus, von morgens bis abends? Wer ist da? Was tust du?',
            question: 'Beschreib mir deinen Mittwoch in 10 Jahren — so konkret wie möglich.' },
          { name: 'Rückwärts', title: 'Rückwärts planen', duration: 15*60,
            hostNote: 'Jetzt der harte Teil. Reihum.',
            description: 'Damit das Bild in 10 Jahren steht, muss irgendwann etwas anfangen. Rückwärts gedacht: welche Weichen müssen in den nächsten 5 Jahren gestellt sein? Welche im nächsten Jahr? Welche in den nächsten 3 Monaten?',
            question: 'Was muss in den nächsten 12 Monaten passieren, damit dein 10-Jahres-Bild realistisch wird?' },
          { name: 'Wurzeln', title: 'Von wem ist dein Zukunftsbild geliehen?', duration: 12*60,
            hostNote: 'Reihum. Nicht Schuld zuweisen — Klarheit gewinnen.',
            description: 'Unsere Zukunftsbilder kommen selten aus dem Nichts. Eltern, Milieu, Freundeskreis, Social Media, Bücher — irgendwo haben wir gesehen: „So soll ein gelungenes Leben aussehen.“ Manchmal trägt uns das. Manchmal zieht es uns vom Weg.',
            question: 'Welcher Teil deines Zukunftsbildes ist wirklich deiner — und welcher ist von jemandem geborgt?' },
          { name: 'Schritt', title: 'Der erste Move', duration: 10*60,
            hostNote: 'Reihum. Ein Schritt diese Woche. Plus Ein-Wort-Abschluss.',
            question: 'Welchen ersten, kleinen Schritt machst du diese Woche Richtung deines 10-Jahres-Ich? Und was nimmst du in einem Wort mit?' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 15 Min.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Dein 18-jähriges Ich', duration: 8*60,
            hostNote: 'Beide nacheinander.',
            question: 'Was würdest du deinem 18-jährigen Ich heute erzählen — in einem Satz?' },
          { name: 'Einstieg', title: 'Zehn Jahre — nah und weit', duration: 6*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'The two most important days in your life are the day you are born and the day you find out why.', author: 'Mark Twain' },
            description: 'Zehn Jahre reichen, um fast alles zu ändern. Und sind nah genug, dass das, was wir heute tun, Spuren hinterlässt. Heute bauen wir gemeinsam konkrete Bilder von eurer Zukunft — und schauen, wo sich eure Wege kreuzen, wo nicht.' },
          { name: 'Vier Säulen', title: 'Die vier Säulen einer Zukunft', duration: 6*60,
            items: [
              { label: 'Ort', text: 'Wo wachst du auf? Was siehst du aus dem Fenster?' },
              { label: 'Menschen', text: 'Mit wem frühstückst du? Wer ist morgens nah?' },
              { label: 'Arbeit', text: 'Woran arbeitest du? Was gibt Struktur?' },
              { label: 'Selbst', text: 'Wer bist du geworden? Was hast du gelassen, was dazugewonnen?' }
            ] },
          { name: 'Dein Mittwoch', title: 'Erzähl mir deinen Mittwoch in 10 Jahren', duration: 18*60,
            hostNote: 'Eine:r erzählt 8 Minuten — konkret, von morgens bis abends. Andere:r hört nur zu. Dann tauschen.',
            description: 'Nicht das perfekte Leben. Ein normaler Mittwoch im April 2036. Was siehst du, wenn du morgens die Augen aufmachst?',
            question: 'Wie sieht dein Mittwoch in 10 Jahren aus — von 7 bis 22 Uhr?' },
          { name: 'Schnittmengen', title: 'Wo kreuzen sich eure Wege?', duration: 12*60,
            hostNote: 'Der ehrliche Teil. Beide abwechselnd.',
            description: 'Wenn ihr beide Bilder nebeneinander legt: wo ist die Überschneidung, und wo geht’s in verschiedene Richtungen? Kein Richtig oder Falsch — nur Klarheit.',
            question: 'Welcher Teil unserer 10-Jahres-Bilder ist gemeinsam — und welcher darf getrennt bleiben?' },
          { name: 'Rückwärts', title: 'Was muss nächstes Jahr passieren?', duration: 10*60,
            hostNote: 'Je eine Antwort pro Person.',
            question: 'Welche Weiche muss in den nächsten 12 Monaten umgelegt sein, damit dein Bild realistisch wird?' },
          { name: 'Schritt', title: 'Der erste Move diese Woche', duration: 8*60,
            hostNote: 'Konkret, sichtbar.',
            question: 'Was ist dein erster kleiner Schritt diese Woche — und wie kann ich dich dabei unterstützen?' }
        ])
      }
    }
  }

,

  // =====================================================================
  // FRAGEABEND — Karten-Flow, Fragen nach Kategorien statt Stations-Reflexion
  // Anders als die Reflexions-Abende: leichter, spielerischer, kennenlernend.
  // =====================================================================
  frageabend: {
    title: 'Ein Abend mit guten Fragen',
    category: 'Begegnung',
    lead: 'Kein Thema, keine Landkarte — nur Fragen, die sich nicht jeden Tag stellen lassen. Ideal für neue Gruppen, Dates oder Freund:innen, die sich nochmal neu kennenlernen wollen.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxbjqrLpObJ-WD47GvSPuVQIAi2NVN5ZnoVNgvrsdtCZLaj4qrsZF2HrzHhwsJxLgvnVJILKatnzlr-owOjC4Vwjsj8zZLzjxILS_tEIw2mEMKfb-zeXJMntnWcVcuPa9PYApGzgjcOkjrCAXO4pfQeKu2mkuLgmuZAib-diXx3G3-UD0YnoBhDw7Ce18lglGHQsmkYnYtlXA3uXQy7ubFaeStRwPaH_tvjawicIlIFmIJNz1hbpyZCZKx3FSF1NFKo_bj2ggPwLZZ',
    philosophy1: 'Gute Fragen tun etwas, was Aussagen nicht können: sie öffnen. Sie laden eine Person ein, von sich zu erzählen — ohne dass es sich wie Verhör anfühlt.',
    philosophy2: 'Dieser Abend hat keine Landkarte, kein Modell, keinen therapeutischen Bogen. Nur eine kuratierte Auswahl an Fragen, sortiert von leicht zu tief. Ihr entscheidet spontan, wer antwortet, wie lange, ob eine Frage übersprungen wird.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std. 15 Min.',
        people: '3-8 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie kommst du heute an?', duration: 10*60,
            hostNote: 'Reihum, ein Wort oder ein kurzer Satz. Nicht mehr.',
            question: 'Welches Wort beschreibt am besten, wie du heute hier ankommst?' },
          { name: 'Einstieg', title: 'Wie dieser Abend funktioniert', duration: 6*60,
            hostNote: 'Host liest kurz vor, dann legt ihr los.',
            quote: { text: 'Viele Dinge zu wissen bedeutet noch nicht, sie zu verstehen.', author: 'Heraklit' },
            description: 'Wir haben heute kein Thema — nur Fragen. Der Host liest pro Runde eine Frage vor. Wer Lust hat, antwortet. Wenn du passen willst, sag „pass“ — kein Problem. Keine Rückfragen, kein „aber bei dir…“, einfach zuhören. Bei jeder Station gibt es 3–5 Fragen, du musst nicht auf alle antworten. Wichtig: Ehrlich sein ist besser als klug klingen.' },
          { name: 'Leichtes', title: 'Zum Einsteigen', duration: 15*60,
            hostNote: 'Eine Frage nach der anderen. Reihum oder wer zuerst Lust hat.',
            items: [
              { accent: 'Frage 1', text: 'Was ist eine kleine Sache im Alltag, die dich unverhältnismäßig glücklich macht?' },
              { accent: 'Frage 2', text: 'Was hast du zuletzt zum allerersten Mal in deinem Leben gemacht?' },
              { accent: 'Frage 3', text: 'Welche kleine Sache lässt dich sofort nostalgisch werden?' },
              { accent: 'Frage 4', text: 'Gibt es etwas, das andere Leute oft an dir falsch einschätzen?' },
              { accent: 'Frage 5', text: 'Was hat dich zuletzt zum Staunen gebracht?' }
            ] },
          { name: 'Über dich', title: 'Ein bisschen näher', duration: 18*60,
            hostNote: 'Jetzt etwas persönlicher. Wer passen will, passt.',
            items: [
              { accent: 'Frage 6', text: 'Wenn dein Leben gerade ein Buch wäre — welchen Titel hätte es?' },
              { accent: 'Frage 7', text: 'Welches „unsichtbare Tattoo“ trägst du — also welche Erfahrung prägt dich, obwohl man es dir nicht ansieht?' },
              { accent: 'Frage 8', text: 'Angenommen, du könntest einen Tag mit deinem 15-jährigen Ich verbringen — was würdet ihr besprechen?' },
              { accent: 'Frage 9', text: 'In welcher Version deiner selbst fühlst du dich am wohlsten — und wann warst du zuletzt dort?' },
              { accent: 'Frage 10', text: 'Welche Eigenschaft an dir möchtest du unbedingt behalten, selbst wenn du mal 100 Jahre alt bist?' }
            ] },
          { name: 'Menschen um dich', title: 'Die Menschen um dich', duration: 18*60,
            hostNote: 'Wird persönlich. Namen können anonym bleiben — was zählt, ist das Bild.',
            items: [
              { accent: 'Frage 11', text: 'Wen in deinem Leben würdest du gerne wieder anrufen, hast es aber zu lange nicht getan?' },
              { accent: 'Frage 12', text: 'Welche Eigenschaft deiner Eltern siehst du heute mit mehr Verständnis als früher?' },
              { accent: 'Frage 13', text: 'Was hast du jemandem zuletzt gesagt, was du schon länger hättest sagen sollen?' },
              { accent: 'Frage 14', text: 'Wem würdest du gerne noch einmal danken können — und wofür?' }
            ] },
          { name: 'Werte & Haltung', title: 'Wofür du stehst', duration: 18*60,
            hostNote: 'Tiefer. Zeit lassen zwischen den Antworten.',
            items: [
              { accent: 'Frage 15', text: 'Wenn du eine Sache an der Gesellschaft sofort ändern könntest — welche wäre das und warum?' },
              { accent: 'Frage 16', text: 'Welche Frage würdest du gerne mit „Ja“ beantworten können, kannst es aber (noch) nicht?' },
              { accent: 'Frage 17', text: 'Gibt es eine Erfahrung, die sich erst wie ein Misserfolg angefühlt hat, sich aber als wertvolle Lektion entpuppte?' },
              { accent: 'Frage 18', text: 'Welche kleine Entscheidung in deinem Leben hat überraschend große Auswirkungen gehabt?' },
              { accent: 'Frage 19', text: 'Welche Rolle spielst du unbewusst in Gruppen — und passt sie noch zu dir?' }
            ] },
          { name: 'Zeit & Spur', title: 'Zeit und was bleibt', duration: 15*60,
            hostNote: 'Ruhiger Abschnitt. Nicht antworten müssen — auch schweigen ist okay.',
            items: [
              { accent: 'Frage 20', text: 'Was nimmst du dir jedes Jahr vor, machst es aber nicht — und warum wahrscheinlich?' },
              { accent: 'Frage 21', text: 'Welcher Tag aus den letzten 12 Monaten war für dich besonders — und woran hast du das gemerkt?' },
              { accent: 'Frage 22', text: 'Wenn du wüsstest, dass dir genau ein Jahr bleibt — was würde sich sofort ändern, und was nicht?' },
              { accent: 'Frage 23', text: 'Was ist eine kleine tägliche Handlung, die dich stabil hält?' }
            ] },
          { name: 'Träume', title: 'Abenteuer & Träume', duration: 12*60,
            hostNote: 'Hier darf es groß werden.',
            items: [
              { accent: 'Frage 24', text: 'Was würdest du gerne ausprobieren, hast dich aber bisher nie getraut?' },
              { accent: 'Frage 25', text: 'Angenommen, du hättest ab morgen ein Jahr frei von allen Verpflichtungen und genug Geld — wie würdest du es verbringen?' },
              { accent: 'Frage 26', text: 'Was ist deine „andere Karriere“ — das Leben, das du auch hättest führen können?' }
            ] },
          { name: 'Zum Ausklingen', title: 'Leichte Abschluss-Runde', duration: 10*60,
            hostNote: 'Auflockerung vor dem Schluss.',
            items: [
              { accent: 'Frage 27', text: 'Wenn dein Leben als Netflix-Serie erscheinen würde — welches Genre wäre es, und wie hieße die aktuelle Staffel?' },
              { accent: 'Frage 28', text: 'Welcher Satz, den jemand mal zu dir gesagt hat, ist geblieben?' },
              { accent: 'Frage 29', text: 'Welche kleine Geste von jemand anderem kann dich sofort für diese Person einnehmen?' }
            ] },
          { name: 'Abschluss', title: 'Deine Frage des Abends', duration: 10*60,
            hostNote: 'Reihum, ein Satz.',
            question: 'Welche Frage hat dich heute am meisten beschäftigt — und warum?' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 30 Min.',
        people: '2 Personen (Date, Paar, Freundschaft)',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie ist der Tag gelaufen?', duration: 8*60,
            hostNote: 'Beide nacheinander. 3 Minuten. Andere:r hört zu, ohne zu reagieren.',
            question: 'Wie geht es dir gerade — ehrlich, nicht höflich?' },
          { name: 'Einstieg', title: 'Wie das heute läuft', duration: 5*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Viele Dinge zu wissen bedeutet noch nicht, sie zu verstehen.', author: 'Heraklit' },
            description: 'Heute keine großen Themen. Nur Fragen. Abwechselnd: eine:r stellt, andere:r antwortet so lange wie es sich richtig anfühlt. Dann tauschen. „Pass“ geht immer — kein Druck, kein Drängen. Gut zuhören ist die eigentliche Kunst.' },
          { name: 'Kennenlernen', title: 'Ein bisschen näher', duration: 18*60,
            hostNote: 'Je 5 Minuten pro Frage. Wer mag, fragt nach.',
            items: [
              { accent: 'Frage 1', text: 'Wenn dein Leben gerade ein Buch wäre — welchen Titel hätte es?' },
              { accent: 'Frage 2', text: 'Welches „unsichtbare Tattoo“ trägst du — was prägt dich, obwohl man es dir nicht ansieht?' },
              { accent: 'Frage 3', text: 'Was hast du zuletzt zum allerersten Mal in deinem Leben gemacht?' },
              { accent: 'Frage 4', text: 'In welcher Version deiner selbst fühlst du dich am wohlsten — und wann warst du zuletzt dort?' }
            ] },
          { name: 'Werte', title: 'Tiefer rein', duration: 15*60,
            hostNote: 'Etwas länger Zeit lassen. Nachfragen ist erwünscht.',
            items: [
              { accent: 'Frage 5', text: 'Welche Erfahrung hat sich erst wie ein Misserfolg angefühlt — und war später eine wertvolle Lektion?' },
              { accent: 'Frage 6', text: 'Welche Frage würdest du gerne mit „Ja“ beantworten können, kannst es aber (noch) nicht?' },
              { accent: 'Frage 7', text: 'Welche kleine Entscheidung in deinem Leben hat überraschend große Auswirkungen gehabt?' }
            ] },
          { name: 'Menschen um dich', title: 'Die Menschen um dich', duration: 15*60,
            hostNote: 'Wird persönlich. Keine Namen nötig — das Bild zählt.',
            items: [
              { accent: 'Frage 8', text: 'Welche Person aus deinem Leben hat dich mehr geprägt, als sie selbst weiß?' },
              { accent: 'Frage 9', text: 'Was hast du jemandem zuletzt gesagt, was du schon länger hättest sagen sollen?' },
              { accent: 'Frage 10', text: 'In welcher Beziehung spürst du gerade, dass Aufmerksamkeit fehlt?' }
            ] },
          { name: 'Zeit & Spur', title: 'Zeit und was bleibt', duration: 12*60,
            hostNote: 'Ruhig. Zwischen den Fragen dürfen Pausen sein.',
            items: [
              { accent: 'Frage 11', text: 'Was nimmst du dir jedes Jahr vor, machst es aber nicht — und warum wahrscheinlich?' },
              { accent: 'Frage 12', text: 'Wenn du wüsstest, dass dir genau ein Jahr bleibt — was würde sich sofort ändern, was nicht?' },
              { accent: 'Frage 13', text: 'Was ist eine kleine tägliche Handlung, die dich stabil hält?' }
            ] },
          { name: 'Träume', title: 'Und wenn alles möglich wäre?', duration: 12*60,
            hostNote: 'Lass die Antwort ungeformt stehen — nicht gleich erklären.',
            items: [
              { accent: 'Frage 14', text: 'Was würdest du gerne ausprobieren, hast dich aber nie getraut?' },
              { accent: 'Frage 15', text: 'Wenn du ein Jahr frei hättest und genug Geld — wie würdest du es verbringen?' },
              { accent: 'Frage 16', text: 'Angenommen, dein zukünftiges Ich schreibt dir einen Brief — was würde darin stehen?' }
            ] },
          { name: 'Abschluss', title: 'Was heute bei dir hängen bleibt', duration: 8*60,
            hostNote: 'Ein Satz pro Person.',
            question: 'Welche Antwort von mir hat dich heute überrascht — und welche Frage möchtest du nochmal im Kopf haben?' }
        ])
      }
    }
  },

  // =====================================================================
  // FRAGEABEND: ARBEIT & BERUFUNG
  // =====================================================================
  frageabend_arbeit: {
    title: 'Frageabend: Arbeit & Berufung',
    category: 'Frageabend',
    lead: 'Ein Abend über das, was wir 40 Stunden pro Woche tun — und ob es uns noch gehört. Für Menschen, die sich fragen, ob ihr Job sie noch beheimatet.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxbjqrLpObJ-WD47GvSPuVQIAi2NVN5ZnoVNgvrsdtCZLaj4qrsZF2HrzHhwsJxLgvnVJILKatnzlr-owOjC4Vwjsj8zZLzjxILS_tEIw2mEMKfb-zeXJMntnWcVcuPa9PYApGzgjcOkjrCAXO4pfQeKu2mkuLgmuZAib-diXx3G3-UD0YnoBhDw7Ce18lglGHQsmkYnYtlXA3uXQy7ubFaeStRwPaH_tvjawicIlIFmIJNz1hbpyZCZKx3FSF1NFKo_bj2ggPwLZZ',
    philosophy1: 'Arbeit ist nicht nur Lohnerwerb. Sie strukturiert unsere Wochen, prägt unsere Identität, beantwortet die Frage „Was machst du eigentlich?“. Und doch sprechen wir selten ehrlich darüber.',
    philosophy2: 'An diesem Abend geht es nicht um Karriere-Coaching. Es geht um Reibung und Resonanz: wo gehört dir deine Arbeit noch, wo nicht? Wo hast du sie mal geliebt, wo nicht mehr?',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~1 Std. 30 Min.',
        people: '3-6 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie geht es dir mit deiner Arbeit?', duration: 10*60,
            hostNote: 'Reihum, ein ehrlicher Satz. Nicht „läuft“ — was ist wirklich los?',
            question: 'Wie geht es dir mit deiner Arbeit gerade — in einem Satz?' },
          { name: 'Einstieg', title: 'Arbeit als Spiegel', duration: 6*60,
            hostNote: 'Host liest vor.',
            quote: { text: 'The two most important days in your life are the day you are born and the day you find out why.', author: 'Mark Twain' },
            description: 'Wir verbringen ein Drittel unserer wachen Zeit mit Arbeit. Sie ist Identität, Geld, Sinn, Frust, Berufung — manchmal alles gleichzeitig. Heute schauen wir ehrlich drauf: wie viel von dir steckt da drin? Wo gibt sie dir was zurück, wo nimmt sie nur?' },
          { name: 'Flow & Stillstand', title: 'Wann fließt deine Zeit?', duration: 18*60,
            hostNote: 'Eine Frage nach der anderen. Reihum.',
            items: [
              { accent: 'Frage 1', text: 'Wann warst du zuletzt in deiner Arbeit so vertieft, dass du die Zeit vergessen hast — was hast du da gemacht?' },
              { accent: 'Frage 2', text: 'Welche Tätigkeit würdest du machen, auch wenn niemand dich dafür bezahlen würde?' },
              { accent: 'Frage 3', text: 'Wann hast du in deinem Job zuletzt einen echten Moment von Sinn gespürt — und wann das letzte Mal von Leere?' },
              { accent: 'Frage 4', text: 'Was frisst Energie in deiner Woche, ohne dass es einen klaren Output hat?' }
            ] },
          { name: 'Andere Karriere', title: 'Das parallele Leben', duration: 18*60,
            hostNote: 'Hier darf es spielerisch werden — aber bitte konkret.',
            items: [
              { accent: 'Frage 5', text: 'Was ist deine „andere Karriere“ — das Leben, das du auch hättest führen können?' },
              { accent: 'Frage 6', text: 'Wenn dein heutiges Ich mit 22 wäre — würde es deinen jetzigen Job wählen?' },
              { accent: 'Frage 7', text: 'Was würdest du tun, wenn Geld keine Rolle spielte — und was, wenn Status keine Rolle spielte? (Nicht dasselbe.)' },
              { accent: 'Frage 8', text: 'Welcher Beruf von Freund:innen oder Bekannten fasziniert dich heimlich?' }
            ] },
          { name: 'Sinn & Wert', title: 'Wofür arbeitest du eigentlich?', duration: 18*60,
            hostNote: 'Tieferer Abschnitt. Zeit lassen.',
            items: [
              { accent: 'Frage 9', text: 'Was ist die ehrlichste Antwort auf die Frage „Warum machst du diesen Job?“ — jenseits von Geld?' },
              { accent: 'Frage 10', text: 'Wenn du in 20 Jahren auf dein Berufsleben zurückblickst — woran wirst du es messen?' },
              { accent: 'Frage 11', text: 'Was machst du heute, was dich in 10 Jahren wahrscheinlich nicht mehr ausfüllt?' },
              { accent: 'Frage 12', text: 'Wenn du eine Person ein Jahr lang in deinen Job einarbeiten müsstest — was würdest du sagen, was wirklich wichtig ist? Nicht im Lehrplan.' }
            ] },
          { name: 'Schritt', title: 'Eine kleine Veränderung', duration: 10*60,
            hostNote: 'Reihum. Konkret, nicht groß.',
            question: 'Welche eine Sache an deiner Arbeit könntest du diese Woche anders machen — und was würde das verändern?' },
          { name: 'Abschluss', title: 'Was du mitnimmst', duration: 10*60,
            hostNote: 'Ein Wort oder ein Satz.',
            question: 'Welche Frage hat dich heute am meisten beschäftigt — und was tust du damit?' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie ist deine Arbeitswoche?', duration: 7*60,
            hostNote: 'Beide nacheinander, 3 Min. Andere:r hört zu.',
            question: 'Wie geht es dir gerade mit deiner Arbeit?' },
          { name: 'Einstieg', title: 'Arbeit als Spiegel', duration: 5*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'The two most important days in your life are the day you are born and the day you find out why.', author: 'Mark Twain' },
            description: 'Ein Drittel unserer wachen Zeit. Identität, Geld, Sinn, Frust. Heute schauen wir gemeinsam, was dir Arbeit gerade gibt — und nimmt.' },
          { name: 'Flow', title: 'Wann fließt die Zeit?', duration: 15*60,
            hostNote: 'Je 7 Minuten pro Frage.',
            items: [
              { accent: 'Frage 1', text: 'Wann warst du zuletzt in deiner Arbeit so vertieft, dass du die Zeit vergessen hast?' },
              { accent: 'Frage 2', text: 'Welche Tätigkeit würdest du machen, auch wenn niemand dich dafür bezahlen würde?' }
            ] },
          { name: 'Andere Karriere', title: 'Das parallele Leben', duration: 15*60,
            hostNote: 'Hier darf es spielerisch werden.',
            items: [
              { accent: 'Frage 3', text: 'Was ist deine „andere Karriere“ — das Leben, das du auch hättest führen können?' },
              { accent: 'Frage 4', text: 'Was würdest du tun, wenn Geld keine Rolle spielte — und was, wenn Status keine Rolle spielte?' }
            ] },
          { name: 'Sinn', title: 'Wofür arbeitest du eigentlich?', duration: 15*60,
            hostNote: 'Tiefer. Nachfragen ist erlaubt.',
            items: [
              { accent: 'Frage 5', text: 'Was ist die ehrlichste Antwort auf die Frage „Warum machst du diesen Job?“?' },
              { accent: 'Frage 6', text: 'Wenn du in 20 Jahren zurückblickst — woran wirst du dein Berufsleben messen?' }
            ] },
          { name: 'Abschluss', title: 'Eine Veränderung', duration: 8*60,
            hostNote: 'Konkret, sichtbar.',
            question: 'Welche eine Sache wirst du diese Woche anders machen — und wie kann ich dich dabei unterstützen?' }
        ])
      }
    }
  },

  // =====================================================================
  // FRAGEABEND: STILLE BEREICHE
  // Achtung: nur für vertraute Gruppen!
  // =====================================================================
  frageabend_tief: {
    title: 'Frageabend: Stille Bereiche',
    category: 'Frageabend',
    lead: 'Für Gruppen, die sich kennen. Fragen, die im normalen Gespräch nie gestellt werden — und manchmal das Wichtigste sind. Bitte nur, wenn ihr einander vertraut.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx3zc_372HZ2FnhMqRihODyYdH0O6QMhHorRxsi1pNG5H6yo27lR3uFj5kEpa_bZr6NyMTZMkNLzxhVFFrWOAWg62u4rwi9mqyFdCHrVY3-O-ZOBWT-4kuNVD5hHIfeuAHO8OfvTaFZmYMfj-kYak3WqVQZF6RIYra-FyBU_I2AjVbDZVt0JjNJj2RSBpOn2Us3TyGl-oc_Da2fdvd3_WYWlkDPaFgXfDXm_5WLY5Q9p-ssyPjMUjYVmwfk1RS19Dq2edt7wPpu1R2',
    philosophy1: 'Es gibt einen Bereich in jedem Menschen, der selten Worte bekommt: die leise Sorge, das ungesagte „eigentlich“, die Frage, die wir uns nicht selbst stellen wollen.',
    philosophy2: 'Dieser Abend ist nicht für jede Gruppe. Er funktioniert nur, wenn ihr einander vertraut — keine erste Begegnung, keine Networking-Runde. Was hier gesagt wird, bleibt im Raum. „Pass“ ist immer okay, oft sogar das Richtige.',
    formats: {
      group: {
        label: 'Kleine Gruppe (Vertraut)',
        duration: '~1 Std. 40 Min.',
        people: '3-5 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Womit kommst du heute hier an?', duration: 12*60,
            hostNote: 'Reihum, ein ehrlicher Satz. Auch Schwere darf da sein.',
            question: 'Was hast du diese Woche mit dir herumgetragen, was du noch niemandem erzählt hast?' },
          { name: 'Einstieg', title: 'Was wir uns nicht erzählen', duration: 8*60,
            hostNote: 'Host liest langsam vor. Danach 1 Minute Stille.',
            quote: { text: 'Die Menschen sind wie bunte Glasfenster: Sie funkeln und leuchten, wenn die Sonne scheint; doch nach Anbruch der Dunkelheit wird ihre wahre Schönheit nur offenbar, wenn sie ein inneres Licht haben.', author: 'Elisabeth Kübler-Ross' },
            description: 'In jedem Menschen gibt es einen Bereich, der selten Worte bekommt. Eine Sorge, eine Sehnsucht, ein „eigentlich“, das nie ausgesprochen wird. Heute schaffen wir Raum für genau das. Nicht alles muss geteilt werden. Aber das Ungesagte darf hier landen, wenn es will.\n\nWichtig: keine Bewertung. Kein Ratschlag. Nur zuhören. Was hier gesagt wird, bleibt im Raum.' },
          { name: 'Was du nicht aussprichst', title: 'Was du selten sagst', duration: 18*60,
            hostNote: 'Eine Frage nach der anderen. Pause vor dem Antworten erlaubt — und „pass“ jederzeit.',
            items: [
              { accent: 'Frage 1', text: 'Worüber denkst du abends manchmal nach, was du tagsüber verdrängst?' },
              { accent: 'Frage 2', text: 'Was würdest du sagen, wenn niemand zuhörte — und du wüsstest, dass es keine Folgen hat?' },
              { accent: 'Frage 3', text: 'Welche Frage hast du Angst, dir selbst zu stellen?' }
            ] },
          { name: 'Ängste', title: 'Was dich klein macht', duration: 18*60,
            hostNote: 'Tiefer. Achte auf den Energie-Level der Gruppe.',
            items: [
              { accent: 'Frage 4', text: 'Was ist eine Sorge, die du mit anderen nicht teilst — und warum nicht?' },
              { accent: 'Frage 5', text: 'Wovor hast du heimlich Angst, was die meisten Menschen wahrscheinlich nicht ahnen?' },
              { accent: 'Frage 6', text: 'Was wäre, wenn deine größte Angst tatsächlich einträte — wie würde dein Leben aussehen?' }
            ] },
          { name: 'Was bleibt unausgesprochen', title: 'Worüber du nie redest', duration: 18*60,
            hostNote: 'Achtsam. Wer pause braucht, bekommt sie.',
            items: [
              { accent: 'Frage 7', text: 'Was hast du noch nie jemandem erzählt, was eigentlich Erzählens wert wäre?' },
              { accent: 'Frage 8', text: 'Welches Gefühl trägst du oft mit dir, ohne es zu benennen?' },
              { accent: 'Frage 9', text: 'Welche Beziehung in deinem Leben fühlt sich gerade nicht gut an, und du sprichst nicht darüber?' }
            ] },
          { name: 'Was hält dich', title: 'Und was trägt dich trotzdem', duration: 12*60,
            hostNote: 'Wechsel der Energie — von schwer zu hell. Das ist wichtig nach den vorigen Fragen.',
            items: [
              { accent: 'Frage 10', text: 'Welcher Satz, den jemand mal zu dir gesagt hat, trägt dich noch heute?' },
              { accent: 'Frage 11', text: 'Was ist eine kleine tägliche Handlung, die dich stabil hält?' },
              { accent: 'Frage 12', text: 'Welche Person würde es merken, wenn du plötzlich nicht mehr da wärst — und merkst du es bei ihr?' }
            ] },
          { name: 'Abschluss', title: 'Was bleibt', duration: 10*60,
            hostNote: 'Reihum, ein Satz oder ein Wort. Was hier gesagt wurde, bleibt hier.',
            question: 'Was nimmst du aus diesem Abend mit — und was lässt du hier?' }
        ])
      },
      pair: {
        label: 'Zu zweit (Vertraut)',
        duration: '~1 Std. 15 Min.',
        people: '2 Personen, die einander vertrauen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie ehrlich bist du heute?', duration: 8*60,
            hostNote: 'Beide nacheinander.',
            question: 'Was hast du diese Woche mit dir herumgetragen, was du noch niemandem erzählt hast?' },
          { name: 'Einstieg', title: 'Raum für das Ungesagte', duration: 5*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Die Schönheit und Heiligkeit des Lebens erschließt sich in der Tiefe, nicht in der Vielzahl der Beschäftigungen.', author: 'Johannes Hartl' },
            description: 'Heute keine kleinen Fragen. Wir öffnen einen Raum für das, was selten gesagt wird. Beide haben gleich viel Platz, beide hören gleich gut zu. „Pass“ ist okay. Was hier gesagt wird, bleibt zwischen uns.' },
          { name: 'Was du nicht aussprichst', title: 'Was du selten sagst', duration: 18*60,
            hostNote: 'Je 8 Minuten erzählen, der andere nur zuhören.',
            items: [
              { accent: 'Frage 1', text: 'Worüber denkst du abends nach, was du tagsüber verdrängst?' },
              { accent: 'Frage 2', text: 'Welche Frage hast du Angst, dir selbst zu stellen?' }
            ] },
          { name: 'Ängste', title: 'Was dich klein macht', duration: 15*60,
            hostNote: 'Achtsam.',
            items: [
              { accent: 'Frage 3', text: 'Was ist eine Sorge, die du mit anderen nicht teilst — und warum nicht?' },
              { accent: 'Frage 4', text: 'Wovor hast du heimlich Angst, was die meisten Menschen wahrscheinlich nicht ahnen?' }
            ] },
          { name: 'Was hält dich', title: 'Und was trägt dich', duration: 12*60,
            hostNote: 'Aufhellen, nicht abrupt.',
            items: [
              { accent: 'Frage 5', text: 'Welcher Satz, den jemand mal zu dir gesagt hat, trägt dich noch heute?' },
              { accent: 'Frage 6', text: 'Welche kleine tägliche Handlung hält dich stabil?' }
            ] },
          { name: 'Abschluss', title: 'Was zwischen uns bleibt', duration: 8*60,
            hostNote: 'Ein Satz pro Person.',
            question: 'Was hat sich heute zwischen uns verändert — und was nehme ich mit?' }
        ])
      }
    }
  },

  // =====================================================================
  // FRAGEABEND: HUMOR & ABSURDES
  // =====================================================================
  frageabend_humor: {
    title: 'Frageabend: Humor & Absurdes',
    category: 'Frageabend',
    lead: 'Wenn der ernste Abend einfach nicht passt. Fragen, die Quatsch erlauben — und durch Quatsch oft mehr verraten als ehrliche Antworten.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKT8rovh0Bg2sBiYCzihK4d2xg68wZRDcA5CVOfjhFK8Lq_xMt-JauAkJiVQjLFp9UUeQl2Ol7emWI9MuGnPjDSas-kTya6GMXgxEvJUGMj0J94FU8-qWfiIZyzhrGNrYE2JlcZ7JbTcpgJHPQhr9GPUr46yrXhA6QwreP3M-rC0bxglm3EuO1vjc5S56wa1T3L8l1YaGCa7CqeH1qG__3IKcDU-TDTwFQsxP4NuXcMihsY_JcQdKl7XoCvvO-E0LcQjjz6s-UdEHn',
    philosophy1: 'Manchmal ist der gerade Weg in einen Menschen die völlig schräge Frage. „Welcher Instagram-Filter beschreibt deine Persönlichkeit?“ verrät oft mehr als „Was machst du beruflich?“.',
    philosophy2: 'Heute kein psychologisches Tiefbohren — sondern hypothetische Szenarien, paradoxe Wahlen und Alltagsphilosophie. Lacht viel. Aber hört auch auf das, was hinter dem Lachen liegt.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~1 Std. 20 Min.',
        people: '3-8 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie albern bist du heute?', duration: 8*60,
            hostNote: 'Reihum, eine Geste oder ein Geräusch reicht.',
            question: 'Auf einer Skala von „bügelfeucht“ bis „Karneval“ — wo bist du heute?' },
          { name: 'Einstieg', title: 'Quatsch ist auch Erkenntnis', duration: 4*60,
            hostNote: 'Eine:r liest schnell vor.',
            quote: { text: 'Der einzige Mensch, der sich vernünftig benimmt, ist mein Schneider. Er nimmt jedesmal neu Maß, wenn er mich trifft.', author: 'George Bernard Shaw' },
            description: 'Heute keine Tiefseetauchgänge. Hypothetische Szenarien, absurde Präferenzen, Pop-Kultur-Dechiffrierung. Wer am schnellsten antwortet, gewinnt nichts. Wer kreativ scheitert, gewinnt alle.' },
          { name: 'Hypothetisch', title: 'Wenn das wahr wäre…', duration: 18*60,
            hostNote: 'Schnelle Runden. Nicht groß überlegen.',
            items: [
              { accent: 'Frage 1', text: 'Welche historische Figur würde im Gruppenchat ständig auf „Nachricht gelesen“ machen — und warum gerade die?' },
              { accent: 'Frage 2', text: 'Bei einer Zombie-Apokalypse: Welches völlig unnütze Hobby würde dich überleben lassen?' },
              { accent: 'Frage 3', text: 'Du erbst ein Schloss — verlost es als Instagram-Gewinnspiel oder gründest eine Sekte? Erkläre den Plan.' },
              { accent: 'Frage 4', text: 'Welche zwei Promis würdest du zu einer Dinner-Party einladen, damit sie sich streiten?' }
            ] },
          { name: 'Absurde Wahlen', title: 'Paradoxe Präferenzen', duration: 15*60,
            hostNote: 'Eine Wahl treffen, kurz begründen.',
            items: [
              { accent: 'Frage 5', text: 'Würdest du lieber ein Jahr lang nur durch GIFs kommunizieren — oder jeden Satz mit einer Lüge beginnen?' },
              { accent: 'Frage 6', text: 'Alle deine Fotos sehen ab heute aus wie Stockbilder — oder jedes Gespräch beginnt mit „Schon mal im Gefängnis gewesen?“' },
              { accent: 'Frage 7', text: 'Dein Kühlschrank reproduziert mysteriös eine Zutat unbegrenzt — welche soll es sein und warum?' },
              { accent: 'Frage 8', text: 'Würdest du lieber wissen, wann du stirbst — oder wie?' }
            ] },
          { name: 'Pop & Kultur', title: 'Medien, neu sortiert', duration: 15*60,
            hostNote: 'Frech sein erlaubt.',
            items: [
              { accent: 'Frage 9', text: 'Welcher Film müsste neu verfilmt werden — aber als TikTok-Tanzchallenge?' },
              { accent: 'Frage 10', text: 'Welche Sportart sollte mit völlig falschen Regeln olympisch werden?' },
              { accent: 'Frage 11', text: 'Welcher Instagram-Filter beschreibt deine Persönlichkeit am besten — nicht dein Aussehen?' },
              { accent: 'Frage 12', text: 'Welche App sollte dringend eine „Das war Sarkasmus!“-Autokorrektur einführen?' }
            ] },
          { name: 'Alltag absurd', title: 'Banales neu gedacht', duration: 12*60,
            hostNote: 'Beobachtungsgabe vor Witz.',
            items: [
              { accent: 'Frage 13', text: 'Welche völlig normale Handlung wirkt auf dich wie ein Verbrechen? (z.B. Jemand sortiert Äpfel im Supermarkt um.)' },
              { accent: 'Frage 14', text: 'Welche völlig sinnlose Fähigkeit hast du in den letzten Jahren perfektioniert?' },
              { accent: 'Frage 15', text: 'Welcher Wikipedia-Artikel sollte gelöscht werden, um maximales Chaos zu verursachen?' }
            ] },
          { name: 'Abschluss', title: 'Und was war wirklich?', duration: 8*60,
            hostNote: 'Kurzer Tonwechsel: Welche Frage hat unter dem Quatsch etwas Echtes gezeigt?',
            question: 'Welche absurde Antwort heute hat dir am meisten über jemanden verraten?' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~50 Min.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie albern bist du heute?', duration: 5*60,
            hostNote: 'Eine Geste oder ein Geräusch reicht.',
            question: 'Auf einer Skala von „bügelfeucht“ bis „Karneval“ — wo bist du?' },
          { name: 'Einstieg', title: 'Quatsch ist auch Erkenntnis', duration: 4*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Der einzige Mensch, der sich vernünftig benimmt, ist mein Schneider.', author: 'George Bernard Shaw' },
            description: 'Heute keine Tiefseetauchgänge. Schräge Fragen, alberne Antworten, ehrliches Lachen. Beide gleich viel Platz, beide gleich frei zu spinnen.' },
          { name: 'Hypothetisch', title: 'Wenn das wahr wäre…', duration: 12*60,
            hostNote: 'Wer schneller antwortet, gewinnt nichts.',
            items: [
              { accent: 'Frage 1', text: 'Welche historische Figur würde im Gruppenchat ständig auf „Nachricht gelesen“ machen?' },
              { accent: 'Frage 2', text: 'Du erbst ein Schloss — was machst du damit?' },
              { accent: 'Frage 3', text: 'Welche zwei Promis würdest du zu einer Dinner-Party einladen, damit sie sich streiten?' }
            ] },
          { name: 'Paradoxe Wahlen', title: 'Entweder — oder', duration: 12*60,
            hostNote: 'Schnell wählen, kurz begründen.',
            items: [
              { accent: 'Frage 4', text: 'Würdest du lieber ein Jahr lang nur durch GIFs kommunizieren — oder jeden Satz mit einer Lüge beginnen?' },
              { accent: 'Frage 5', text: 'Würdest du lieber wissen, wann du stirbst — oder wie?' },
              { accent: 'Frage 6', text: 'Dein Kühlschrank reproduziert eine Zutat unbegrenzt — welche?' }
            ] },
          { name: 'Pop', title: 'Medien neu sortiert', duration: 10*60,
            hostNote: 'Frech sein erlaubt.',
            items: [
              { accent: 'Frage 7', text: 'Welcher Instagram-Filter beschreibt deine Persönlichkeit am besten?' },
              { accent: 'Frage 8', text: 'Welcher Film müsste als TikTok-Tanzchallenge neu verfilmt werden?' },
              { accent: 'Frage 9', text: 'Welche App sollte dringend eine „Das war Sarkasmus!“-Autokorrektur einführen?' }
            ] },
          { name: 'Abschluss', title: 'Und was war wirklich?', duration: 5*60,
            hostNote: 'Tonwechsel: kurz ehrlich.',
            question: 'Welche absurde Antwort von mir heute hat dir am meisten über mich verraten?' }
        ])
      }
    }
  }

};

// Post-process: set theme.id, derive totalMinutes per format
Object.keys(window.THEMES).forEach(id => {
  const theme = window.THEMES[id];
  theme.id = id;
  Object.values(theme.formats || {}).forEach(f => {
    f.totalMinutes = (f.stations || []).reduce((s, st) => s + st.duration, 0) / 60;
  });
});
