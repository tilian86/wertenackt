// Central data store for all KlarKreis themes.
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

window.KLARKREIS_FEEDBACK_EMAIL = 'kontakt@klarkreis.de';

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
    image: 'images/wein.jpg',
    philosophy1: 'Wir kommen mit einer Art Beziehungs-Software auf die Welt. Die ersten Bezugspersonen prägen, wie wir Nähe später erleben: ob sie sich sicher anfühlt oder bedrohlich, ob wir auf uns allein gestellt sind oder getragen.',
    philosophy2: 'Die klassische Bindungsforschung unterscheidet vier Muster. Die meisten erkennen sich in Mischungen wieder. Heute schaut ihr, wo eure Muster liegen — ohne Diagnose, ohne Therapie, einfach ehrlich.',
    featured: true,
    audio: true,
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
            hostNote: 'Audio abspielen oder selbst vorlesen. Danach 1 Minute Stille.',
            quote: { text: 'Die Liebe will nichts von dem anderen, sie will alles für den anderen.', author: 'Dietrich Bonhoeffer' },
            description: 'Ein Kind, das schreit, wird getröstet — oder nicht. Ein Kind, das Nähe sucht, wird aufgenommen — oder weggeschoben. Aus diesen tausend kleinen Momenten lernt jeder von uns: Ist Nähe sicher? Darf ich abhängig sein? Werde ich gesehen, wenn ich es brauche?\n\nDiese frühe Lektion wird zur inneren Landkarte. Wir tragen sie in jede Beziehung — mit Partner:innen, Freund:innen, am Arbeitsplatz. Heute schauen wir, welches Muster in dir heute noch wirkt.' },
          { name: 'Sicher', title: 'Muster 1: Sicher', duration: 5*60,
            hostNote: 'Audio abspielen oder vorlesen. Danach kurz: Wer erkennt sich?',
            description: 'Etwa 50 % der Menschen. Nähe ist möglich, Unabhängigkeit auch. Konflikte schrecken nicht. Vertrauen darf einfach da sein.\n\nInnere Grundannahme: Ich bin okay, andere sind okay. Wenn ich bitte, bekomme ich meistens eine Antwort. Wenn jemand geht, kommt er meistens wieder.' },
          { name: 'Ängstlich', title: 'Muster 2: Ängstlich', duration: 5*60,
            hostNote: 'Audio abspielen oder vorlesen. Wer nickt?',
            description: 'Etwa 20 %. Sehnsucht nach viel Nähe, sensible Antennen für jedes Zeichen der Distanz. Schreibt eine Nachricht, wartet auf Antwort, wartet länger, fängt an zu zweifeln.\n\nInnere Grundannahme: Ich brauche dich, und ich habe Angst, dich zu verlieren.' },
          { name: 'Vermeidend', title: 'Muster 3: Vermeidend', duration: 5*60,
            hostNote: 'Audio abspielen oder vorlesen. Kurze Reaktion.',
            description: 'Etwa 25 %. Unabhängigkeit ist oberste Priorität. Emotionale Nähe fühlt sich schnell eng an. Rückzug ist der erste Reflex, wenn’s zu dicht wird.\n\nInnere Grundannahme: Ich komme allein klar. Zu brauchen ist gefährlich.' },
          { name: 'Desorganisiert', title: 'Muster 4: Desorganisiert', duration: 5*60,
            hostNote: 'Audio abspielen oder vorlesen. Mit Feingefühl — dieses Muster berührt oft.',
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
            hostNote: 'Audio anhören — oder eine:r liest laut vor.',
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
      },
      solo: {
        label: 'Allein',
        duration: '~40 Min.',
        people: 'Nur du',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie geht es dir gerade wirklich?', duration: 4*60,
            hostNote: 'Drei tiefe Atemzüge. Kein Handy, keine Ablenkung. Schreibe kurz, wenn du magst.',
            question: 'Wie geht es dir gerade, ehrlich — und was hast du mit hierher gebracht?' },
          { name: 'Einstieg', title: 'Warum wir so lieben, wie wir lieben', duration: 6*60,
            hostNote: 'Audio anhören — gerne mit geschlossenen Augen. Oder still lesen.',
            audio: 'audio/bindung/group/02-einstieg.mp3',
            quote: { text: 'Die Liebe will nichts von dem anderen, sie will alles für den anderen.', author: 'Dietrich Bonhoeffer' },
            description: 'Ein Kind, das schreit, wird getröstet — oder nicht. Aus tausend kleinen Momenten lernt jeder: Ist Nähe sicher? Darf ich abhängig sein? Werde ich gesehen, wenn ich es brauche? Diese frühe Lektion trägst du in jede Beziehung. Heute schaust du, welches Muster in dir heute noch wirkt.' },
          { name: 'Sicher', title: 'Muster 1: Sicher (ca. 50 %)', duration: 4*60,
            hostNote: 'Audio anhören oder selbst lesen. Spür nach — wieviel davon erkennst du?',
            audio: 'audio/bindung/group/03-sicher.mp3',
            description: 'Nähe ist möglich, Unabhängigkeit auch. Konflikte schrecken nicht. Vertrauen darf einfach da sein.\n\nInnere Grundannahme: Ich bin okay, andere sind okay.' },
          { name: 'Ängstlich', title: 'Muster 2: Ängstlich (ca. 20 %)', duration: 4*60,
            hostNote: 'Audio anhören oder selbst lesen. Spür nach.',
            audio: 'audio/bindung/group/04-aengstlich.mp3',
            description: 'Sehnsucht nach viel Nähe, sensible Antennen für jedes Zeichen der Distanz. Schreibt eine Nachricht, wartet auf Antwort, fängt an zu zweifeln.\n\nInnere Grundannahme: Ich brauche dich, und ich habe Angst, dich zu verlieren.' },
          { name: 'Vermeidend', title: 'Muster 3: Vermeidend (ca. 25 %)', duration: 4*60,
            hostNote: 'Audio anhören oder selbst lesen. Spür nach.',
            audio: 'audio/bindung/group/05-vermeidend.mp3',
            description: 'Unabhängigkeit ist oberste Priorität. Emotionale Nähe fühlt sich schnell eng an. Rückzug ist der erste Reflex, wenn\'s zu dicht wird.\n\nInnere Grundannahme: Ich komme allein klar. Zu brauchen ist gefährlich.' },
          { name: 'Desorganisiert', title: 'Muster 4: Desorganisiert (ca. 5 %)', duration: 4*60,
            hostNote: 'Audio anhören oder selbst lesen. Mit Feingefühl — dieses Muster berührt oft.',
            audio: 'audio/bindung/group/06-desorganisiert.mp3',
            description: 'Gleichzeitig Sehnsucht nach Nähe und Angst davor. Beziehungen fühlen sich widersprüchlich an, oft nach frühen, schmerzhaften Erfahrungen.\n\nInnere Grundannahme: Ich will dich — bleib weg. Komm näher — nicht so nah.' },
          { name: 'Verortung', title: 'Wo erkennst du dich wieder?', duration: 10*60,
            hostNote: 'Schreibe für dich. Keine Diagnose — ein ehrliches Bauchgefühl reicht. Mischungen sind normal.',
            description: 'Nimm dir 10 Minuten. Schreibe einen kleinen Text an dich selbst — welches Muster trägst du? Wo zeigt es sich im Alltag: in Freundschaften, in Liebe, am Arbeitsplatz?',
            question: 'Welches Muster erkennst du am ehesten in dir — und wo im Alltag merkst du es?' },
          { name: 'Wurzeln', title: 'Eine Szene, die dich geformt hat', duration: 12*60,
            hostNote: 'Keine Tiefenanalyse. Ein Bild, eine Szene. Schreibe oder lass sie in dir wirken.',
            audio: 'audio/bindung/group/09-wurzeln.mp3',
            description: 'Welche Erinnerung taucht auf, wenn du nicht lange nachdenkst — zum Thema Geborgenheit, Nähe, Alleinsein?',
            question: 'Eine Szene aus deiner Kindheit. Was kommt?' },
          { name: 'Schritt', title: 'Ein kleiner konkreter Schritt', duration: 5*60,
            hostNote: 'Schreibe einen Satz auf einen Zettel — und nimm ihn mit.',
            audio: 'audio/bindung/group/10-schritt.mp3',
            description: 'Nicht „ich will sicher gebunden sein". Sondern: „Wenn Lisa am Samstag 3 h nicht antwortet, frage ich einmal nach statt mich innerlich zurückzuziehen."',
            question: 'Was ist dein nächster kleiner Schritt diese Woche? Und was nimmst du in einem Wort mit?' }
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
    image: 'images/notizbuch.jpg',
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
    image: 'images/kerze.jpg',
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
    image: 'images/kaffee.jpg',
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
    image: 'images/landschaft.jpg',
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
    image: 'images/nachthimmel.jpg',
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
    image: 'images/stilleben.jpg',
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
    image: 'images/bindung.jpg',
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
    image: 'images/kerze.jpg',
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
    image: 'images/wein.jpg',
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
  },

  // =====================================================================
  // ACHTZIG  — Was würde mein 80-jähriges Ich sagen?
  // =====================================================================
  achtzig: {
    title: 'Was würde mein 80-jähriges Ich sagen?',
    category: 'Lebensperspektive',
    lead: 'Eine einzige Perspektive lässt vieles klein wirken, was sonst groß tut: die der eigenen Zukunft. Heute borgt ihr euch die Augen einer 80-jährigen Version von euch selbst — nicht morbide, sondern wachrüttelnd.',
    image: 'images/achtzig.jpg',
    audio: true,
    philosophy1: 'Wir treffen unsere wichtigsten Entscheidungen aus einer extrem schmalen Perspektive: aus dem Moment heraus, mit dem Druck der nächsten zwei Wochen im Nacken. Was uns fast immer fehlt, ist die zweite Stimme: die Person, die wir in 40 oder 50 Jahren sein werden.',
    philosophy2: 'Diese Person ist nicht weiser als ihr. Sie hat nur weiter gesehen. Sie weiß, welche Sorgen sich aufgelöst haben, welche Beziehungen gehalten haben, welcher Mut sich ausgezahlt hat. Heute lasst ihr sie sprechen — und schaut, was sie heute zu euch sagen würde.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~1 Std. 45 Min.',
        people: '4-6 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie geht es dir, hier und jetzt?', duration: 8*60,
            hostNote: 'Reihum, 1–2 Sätze. Keine Rückfragen.',
            question: 'Wie geht es dir gerade — und was beschäftigt dich diese Woche am meisten?' },
          { name: 'Einstieg', title: 'Die Stimme, die fehlt', duration: 7*60,
            hostNote: 'Audio abspielen oder eine Person liest vor. Danach 1 Minute Stille.',
            quote: { text: 'Niemand wird je auf seinem Sterbebett wünschen, mehr Zeit im Büro verbracht zu haben.', author: 'Paul Tsongas' },
            description: 'Wir treffen unsere wichtigsten Entscheidungen meistens aus einer ungeduldigen Mitte heraus: dringend, eng, getrieben von dem, was diese Woche zählt.\n\nWas dabei fehlt, ist eine Stimme, die wir alle in uns tragen, aber selten zu Wort kommen lassen: die der Person, die wir in 40 oder 50 Jahren sein werden. Heute borgen wir uns ihre Augen.' },
          { name: 'Ankunft', title: 'Stell dir dein 80-jähriges Ich vor', duration: 10*60,
            hostNote: 'Audio anhören (gerne mit geschlossenen Augen) oder selbst vorlesen — langsam. Danach 2 Minuten Stille.',
            description: 'Stell dir vor: Es ist Morgen. Du bist 80 Jahre alt. Du sitzt irgendwo, wo du dich wohlfühlst — am Fenster, auf einer Bank, in deiner Küche. Was siehst du? Wie sitzt du? Was riechst du? Was hast du vor dir auf dem Tisch?\n\nNimm dir einen Moment, dieses Bild wirklich zu sehen. Nicht das ideale Bild — sondern das, das auftaucht, wenn du nicht steuerst.\n\nDieses ältere Ich weiß, was aus dir geworden ist. Es hat alles erlebt, was zwischen heute und damals lag. Es hat keine Eile mehr. Es schaut dich, dein heutiges Du, freundlich an.\n\nUnd jetzt fängt es an zu sprechen.' },
          { name: 'Stolz', title: 'Wofür würde es dich beneiden?', duration: 12*60,
            hostNote: 'Reihum. Nicht: „Was läuft gut.“ Sondern: was an deinem heutigen Leben würde diese ältere Version vermissen?',
            description: 'Manches, was wir heute selbstverständlich finden — dass wir laufen können, dass wir uns spontan verlieben können, dass es noch Jahrzehnte zu gestalten gibt — wird mit 80 nicht mehr selbstverständlich sein. Was davon sieht dein älteres Ich besonders deutlich?',
            question: 'Wofür würde dich dein 80-jähriges Ich heute beneiden — und merkst du das gerade selbst?' },
          { name: 'Sorge', title: 'Worüber würde es weinen?', duration: 12*60,
            hostNote: 'Reihum. Nicht der dramatische Lebensfehler — der leise, der sich gerade einschleicht.',
            description: 'Manchmal sieht das ältere Ich etwas, das das heutige Ich noch ignorieren kann: eine Beziehung, die langsam einschläft. Eine Gewohnheit, die mehr nimmt als gibt. Eine Sehnsucht, die jedes Jahr kleiner wird, weil sie nie gelebt wird.',
            question: 'Was tut dein 80-jähriges Ich weh, wenn es auf dein heutiges Leben schaut — auch wenn dein heutiges Du es noch wegerklären kann?' },
          { name: 'Mut', title: 'Wozu würde es dich drängen?', duration: 12*60,
            hostNote: 'Reihum. Nicht „mehr Sport treiben“ — eine konkrete Sache, die du seit Jahren aufschiebst.',
            description: 'Mit 80 sieht man klarer, welcher Mut sich gelohnt hat — und welcher Aufschub sich gerächt hat. Welche Mutprobe würde dein älteres Ich dir heute aufdrücken, wenn es dich am Ärmel ziehen könnte?',
            question: 'Was würde dein 80-jähriges Ich dich drängen, in den nächsten zwölf Monaten anzufangen — auch wenn dein heutiges Du Gründe findet, warum es dieses Jahr nicht passt?' },
          { name: 'Versöhnung', title: 'Mit wem hat es Frieden gemacht?', duration: 10*60,
            hostNote: 'Reihum. „Pass“ ist hier besonders explizit okay.',
            description: 'Mit 80 sind viele Wunden, die wir heute noch pflegen, leiser geworden. Manche, weil sie geheilt sind. Manche, weil die Person nicht mehr da ist. Welche heutige Verletzung schaut dein älteres Ich anders an?',
            question: 'Mit wem oder was hat dein 80-jähriges Ich Frieden gemacht — was du heute noch nicht kannst?' },
          { name: 'Brief', title: 'Ein Brief von 80 an heute', duration: 12*60,
            hostNote: 'Stille Phase. Stift und Zettel. Jede Person schreibt für sich, leise.',
            description: 'Schreibt jetzt einen kurzen Brief — von eurem 80-jährigen Ich an euer heutiges Ich. Eine halbe Seite reicht. Was würde diese ältere Version sagen, jetzt, wo sie gehört wurde?\n\nKein Ratgeber-Ton. Kein Lebenskonzept. Nur das, was sie wirklich loswerden möchte. Vielleicht ein einziger Satz. Vielleicht ein paar konkrete Dinge.' },
          { name: 'Vorlesen', title: 'Was möchtest du teilen?', duration: 12*60,
            hostNote: 'Reihum. Wer mag, liest den Brief vor — oder einen Satz daraus, oder fasst kurz zusammen. „Pass“ ist okay.',
            question: 'Wenn du magst: Lies einen Satz oder Auszug aus deinem Brief vor — oder erzähle, was beim Schreiben in dir hochkam.' },
          { name: 'Mitnahme', title: 'Eine konkrete Sache für die nächste Woche', duration: 8*60,
            hostNote: 'Reihum, ein Satz. Konkret, klein, machbar — nicht „mehr leben“, sondern „diese Woche meine Schwester anrufen“.',
            description: 'Nicht das große Lebensprojekt. Eine kleine, konkrete Geste in den nächsten sieben Tagen, die dein 80-jähriges Ich dir nicken würde. Plus ein Wort, mit dem du nach Hause gehst.',
            question: 'Was machst du in den nächsten sieben Tagen anders — und mit welchem Wort gehst du heute nach Hause?' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 20 Min.',
        people: '2 Personen (Paar oder enge Freundschaft)',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie geht es dir, ehrlich?', duration: 8*60,
            hostNote: 'Beide nacheinander, je 2 Minuten. Andere:r hört zu, ohne zu reagieren.',
            question: 'Wie geht es dir gerade wirklich — was läuft, was zerrt?' },
          { name: 'Einstieg', title: 'Die Stimme, die fehlt', duration: 6*60,
            hostNote: 'Audio anhören — oder eine:r liest laut vor.',
            quote: { text: 'Niemand wird je auf seinem Sterbebett wünschen, mehr Zeit im Büro verbracht zu haben.', author: 'Paul Tsongas' },
            description: 'Wir treffen unsere wichtigsten Entscheidungen aus einer engen Mitte heraus: getrieben vom Druck dieser Wochen.\n\nHeute borgen wir uns die Augen einer 80-jährigen Version von uns selbst — und schauen, was sie zu uns sagen würde.' },
          { name: 'Ankunft', title: 'Stell dir dein 80-jähriges Ich vor', duration: 8*60,
            hostNote: 'Audio anhören — Augen schließen ist okay. Oder eine:r liest vor.',
            description: 'Es ist Morgen. Du bist 80. Du sitzt irgendwo, wo du dich wohlfühlst. Was siehst du? Wie sitzt du? Was hast du vor dir?\n\nDieses ältere Ich weiß, was aus dir geworden ist. Es schaut dich freundlich an. Und jetzt fängt es an zu sprechen.' },
          { name: 'Stolz & Sorge', title: 'Was sieht es bei dir?', duration: 14*60,
            hostNote: 'Eine:r erzählt 5 min, die andere Person hört zu (keine Rückfragen). Dann tauschen.',
            description: 'Zwei Fragen, die du dir abwechselnd stellst — eine direkt nach der anderen.',
            items: [
              { accent: '1.', label: 'Stolz', text: 'Wofür würde dein 80-jähriges Ich dich heute beneiden?' },
              { accent: '2.', label: 'Sorge', text: 'Worüber würde es weinen, wenn es auf dein heutiges Leben schaut?' }
            ] },
          { name: 'Mut', title: 'Wozu würde es dich drängen?', duration: 14*60,
            hostNote: 'Eine:r erzählt 5 min, andere Person hört zu. Dann tauschen.',
            description: 'Konkrete Sache, die du seit Jahren aufschiebst. Nicht „mehr leben“ — eine echte Schwelle.',
            question: 'Was würde dein älteres Ich dich drängen, in den nächsten zwölf Monaten anzufangen?' },
          { name: 'Brief', title: 'Ein Brief von 80 an heute', duration: 12*60,
            hostNote: 'Stille. Stift und Zettel. Jeder schreibt leise für sich.',
            description: 'Eine halbe Seite. Brief von eurem 80-jährigen Ich an euer heutiges Du. Keine Ratschläge — was möchte es loswerden, jetzt, wo es gehört wurde?' },
          { name: 'Vorlesen', title: 'Lies vor — wenn du magst', duration: 10*60,
            hostNote: 'Eine:r liest, andere hört. Dann tauschen. Keine Kommentare. Nur danke.',
            question: 'Lies deinen Brief vor — oder einen Satz, oder fasse zusammen.' },
          { name: 'Mitnahme', title: 'Eine Sache für die nächste Woche', duration: 6*60,
            hostNote: 'Beide nacheinander, ein Satz.',
            question: 'Was machst du in den nächsten sieben Tagen anders — und mit welchem Wort gehst du heute nach Hause?' }
        ])
      },
      solo: {
        label: 'Allein',
        duration: '~45 Min.',
        people: 'Nur du',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie geht es dir, hier und jetzt?', duration: 4*60,
            hostNote: 'Drei tiefe Atemzüge. Lege das Handy weg. Eine Tasse Tee ist gut.',
            question: 'Wie geht es dir gerade — und was beschäftigt dich diese Woche?' },
          { name: 'Einstieg', title: 'Die Stimme, die fehlt', duration: 6*60,
            hostNote: 'Audio anhören — gerne mit geschlossenen Augen. Oder still lesen.',
            audio: 'audio/achtzig/group/02-einstieg.mp3',
            quote: { text: 'Niemand wird je auf seinem Sterbebett wünschen, mehr Zeit im Büro verbracht zu haben.', author: 'Paul Tsongas' },
            description: 'Wir treffen unsere wichtigsten Entscheidungen aus einer ungeduldigen Mitte heraus: dringend, eng, getrieben von dem, was diese Woche zählt.\n\nWas dabei fehlt, ist eine Stimme, die du in dir trägst, aber selten zu Wort kommen lässt: die der Person, die du in 40 oder 50 Jahren sein wirst. Heute borgst du dir ihre Augen.' },
          { name: 'Ankunft', title: 'Stell dir dein 80-jähriges Ich vor', duration: 8*60,
            hostNote: 'Audio anhören (gerne mit geschlossenen Augen). Danach 2 Minuten Stille, bevor es weitergeht.',
            audio: 'audio/achtzig/group/03-ankunft.mp3',
            description: 'Stell dir vor: Es ist Morgen. Du bist 80. Du sitzt irgendwo, wo du dich wohlfühlst. Was siehst du? Wie sitzt du? Was riechst du? Was hast du vor dir auf dem Tisch?\n\nDieses ältere Ich weiß, was aus dir geworden ist. Es schaut dich freundlich an. Und jetzt fängt es an zu sprechen.' },
          { name: 'Drei Blicke', title: 'Stolz, Sorge, Mut', duration: 15*60,
            hostNote: 'Nimm dir für jede Frage 5 Minuten. Schreib für dich auf, was kommt — ungefiltert.',
            description: 'Drei Fragen, die dein älteres Ich dir mitgeben würde. Schreibe nacheinander — ein Absatz pro Frage reicht.',
            items: [
              { accent: '1.', label: 'Stolz', text: 'Wofür würde dich dein 80-jähriges Ich heute beneiden?' },
              { accent: '2.', label: 'Sorge', text: 'Worüber würde es weinen, wenn es auf dein heutiges Leben schaut?' },
              { accent: '3.', label: 'Mut', text: 'Wozu würde es dich drängen, in den nächsten zwölf Monaten anzufangen?' }
            ] },
          { name: 'Brief', title: 'Ein Brief von 80 an heute', duration: 10*60,
            hostNote: 'Schreibe still. Eine halbe Seite reicht — kein Ratgeber-Ton, nur das, was wirklich bleiben will.',
            description: 'Schreibe einen Brief von deinem 80-jährigen Ich an dein heutiges Du. Was möchte diese ältere Version loswerden, jetzt, wo sie gehört wurde? Vielleicht ein einziger Satz. Vielleicht drei konkrete Dinge.' },
          { name: 'Mitnahme', title: 'Eine konkrete Sache für die nächste Woche', duration: 5*60,
            hostNote: 'Schreibe einen Satz auf einen Zettel — und nimm ihn mit.',
            audio: 'audio/achtzig/group/10-mitnahme.mp3',
            description: 'Nicht das große Lebensprojekt. Eine kleine, konkrete Geste in den nächsten sieben Tagen, die dein 80-jähriges Ich dir nicken würde.',
            question: 'Was machst du in den nächsten sieben Tagen anders — und mit welchem Wort gehst du jetzt weiter?' }
        ])
      }
    }
  },

  // =====================================================================
  // HEIMAT  — Was trägt mich?
  // =====================================================================
  heimat: {
    title: 'Heimat — was trägt mich?',
    category: 'Identität',
    lead: 'Heimat ist nicht der Ort, wo der Pass ausgestellt wurde. Heimat ist die Mischung aus Räumen, Menschen, Gerüchen und Tätigkeiten, die uns das Gefühl geben: hier muss ich nicht weiter. Heute sucht jede:r seine eigene.',
    image: 'images/heimat.jpg',
    audio: true,
    philosophy1: 'Heimat ist ein abgenutztes Wort, das von einer politischen Seite besetzt und von der anderen verschmäht wurde. Beides ist schade. Denn was es bezeichnet, ist eines der wenigen wirklich tragenden Gefühle, die wir haben: die Empfindung, irgendwo nicht weitermüssen.',
    philosophy2: 'Heimat ist selten ein Ort. Meistens ist sie eine Komposition: ein bestimmtes Licht in der Küche, der Klang einer Stimme, die Tätigkeit, in der man sich vergisst, der Geruch eines bestimmten Brotes. Heute sucht jede:r seine eigene Heimat-Komposition zusammen — und schaut, wo sie heute schon trägt und wo nicht mehr.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~1 Std. 45 Min.',
        people: '4-6 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wo bist du heute aufgewacht?', duration: 8*60,
            hostNote: 'Reihum, 1–2 Sätze. „Innerlich“ ist genauso valide wie „äußerlich“.',
            question: 'Wo bist du heute Morgen aufgewacht — innerlich und äußerlich?' },
          { name: 'Einstieg', title: 'Heimat ist mehr als ein Ort', duration: 7*60,
            hostNote: 'Audio abspielen oder selbst vorlesen — langsam. Danach 1 Minute Stille.',
            quote: { text: 'Heimat ist da, wo ich nicht erklären muss, was ich meine.', author: 'unbekannt' },
            description: 'Wir sind eine Generation, die mehr umzieht, mehr reist, mehr wechselt als jede Generation davor. Das Wort „Heimat“ klingt für viele von uns zu groß, zu pathetisch, zu politisch besetzt.\n\nUnd doch: jede:r kennt das Gefühl. Diesen einen Ort, diesen einen Menschen, diese eine Tätigkeit, in der man nicht weitermuss. Heute geben wir diesem Gefühl Platz — und schauen, woraus deine Heimat heute eigentlich besteht.' },
          { name: 'Drei Bedeutungen', title: 'Heimat hat drei Türen', duration: 8*60,
            hostNote: 'Audio abspielen oder vorlesen. Drei Definitionen — alle gleichzeitig wahr.',
            description: 'Heimat ist selten nur eine Sache. Meistens ist sie aus mehreren Quellen zusammengesetzt. Dieser Abend unterscheidet drei Türen, durch die Heimat in uns eintreten kann:',
            items: [
              { accent: 'Ort', label: 'Heimat als Raum', text: 'Eine Wohnung, eine Stadt, ein Land, eine Landschaft. Der physische Ort, an dem dein Körper zur Ruhe kommt.' },
              { accent: 'Mensch', label: 'Heimat als Beziehung', text: 'Eine Person, in deren Anwesenheit du nicht mehr darstellen musst. Heimat als „bei dir bin ich angekommen“.' },
              { accent: 'Tun', label: 'Heimat als Tätigkeit', text: 'Eine Sache, in der du dich vergisst — Kochen, Klettern, Schreiben, Singen, Reparieren. Heimat als „hier bin ich ich“.' }
            ] },
          { name: 'Ort', title: 'Welcher Raum trägt dich?', duration: 12*60,
            hostNote: 'Reihum. Konkret werden — nicht „Berlin“, sondern „die Bank am Maybachufer“.',
            description: 'Welcher physische Ort fühlt sich für dich heute am ehesten wie Heimat an? Vielleicht ist es nicht da, wo du gerade lebst. Vielleicht ist es ein Ort aus deiner Kindheit. Vielleicht ein Ort, den du dir gerade erst aufbaust.',
            question: 'Welcher Ort in deinem Leben trägt dich gerade — und was genau macht ihn aus?' },
          { name: 'Mensch', title: 'Welcher Mensch ist dir Heimat?', duration: 12*60,
            hostNote: 'Reihum. „Pass“ ist explizit okay — diese Frage berührt manchmal.',
            description: 'Bei welcher Person musst du nicht mehr darstellen, nicht erklären, nicht den richtigen Eindruck machen? Es muss nicht romantisch sein. Es kann jemand sein, den du selten siehst.',
            question: 'Welcher Mensch ist dir Heimat — und woran merkst du es?' },
          { name: 'Sinne', title: 'Heimat geht durch die Nase und Ohren', duration: 10*60,
            hostNote: 'Reihum. Ein konkretes Sinneserlebnis — Geruch, Klang, Geschmack, Berührung.',
            description: 'Heimat sitzt oft tiefer als unsere Worte. In einem Geruch von Brot, in dem Klang einer bestimmten Stimme, in der Wärme von Holz unter den Füßen. Was ist dein „Heimat-Sinneserlebnis“?',
            question: 'Welcher Geruch, Klang oder Geschmack zieht dich sofort dorthin, wo du dich zuhause fühlst?' },
          { name: 'Verlust', title: 'Wo hast du Heimat verloren?', duration: 12*60,
            hostNote: 'Reihum. Mit Feingefühl — manche Heimat-Verluste sind frisch.',
            description: 'Manche Heimaten verlieren wir, weil wir umziehen. Manche, weil Menschen sterben oder gehen. Manche, weil wir uns selbst verändert haben und der alte Ort nicht mehr passt.',
            question: 'Welche Heimat hast du verloren — und wie gehst du heute damit um?' },
          { name: 'Neu', title: 'Wo entsteht gerade neue Heimat?', duration: 10*60,
            hostNote: 'Reihum. Klein anfangen — neue Heimaten beginnen oft kaum sichtbar.',
            description: 'Neue Heimat entsteht meistens nicht durch große Pläne, sondern durch kleine Wiederholungen: derselbe Bäcker am Samstag, dasselbe Café am Mittwoch, derselbe Mensch am Freitagabend.',
            question: 'Wo siehst du gerade neue Heimat entstehen — vielleicht so klein, dass du fast drüber hinwegschaust?' },
          { name: 'Karte', title: 'Deine Heimat-Karte', duration: 8*60,
            hostNote: 'Stille. Stift und Zettel. Jede:r für sich.',
            description: 'Zeichne kurz für dich selbst eine kleine „Heimat-Karte“. Keine Geographie. Drei bis fünf Punkte: Orte, Menschen, Tätigkeiten, Gerüche, Klänge. Verbinde sie wenn du magst. Niemand sieht das außer dir.' },
          { name: 'Mitnahme', title: 'Was möchtest du Heimat werden lassen?', duration: 8*60,
            hostNote: 'Reihum, ein Satz. Konkret. Plus ein Wort, mit dem du nach Hause gehst.',
            description: 'Heimat passiert nicht von selbst. Sie wächst, wo wir sie pflegen — durch Wiederholung, durch Anwesenheit, durch kleine Gesten.',
            question: 'Was möchtest du in den nächsten Wochen pflegen, damit es Heimat wird oder bleibt? Und mit welchem Wort gehst du heute nach Hause?' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 15 Min.',
        people: '2 Personen (Paar, Familie, enge Freundschaft)',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wo bist du heute aufgewacht?', duration: 8*60,
            hostNote: 'Beide nacheinander, je 2 Minuten. Andere:r hört zu, ohne zu reagieren.',
            question: 'Wo bist du heute Morgen aufgewacht — innerlich und äußerlich?' },
          { name: 'Einstieg', title: 'Heimat ist mehr als ein Ort', duration: 5*60,
            hostNote: 'Audio anhören — oder eine:r liest laut vor.',
            quote: { text: 'Heimat ist da, wo ich nicht erklären muss, was ich meine.', author: 'unbekannt' },
            description: 'Heimat ist selten ein Ort allein. Meistens ist sie eine Komposition: ein bestimmtes Licht, ein Mensch, eine Tätigkeit, ein Geruch.\n\nHeute sucht ihr eure jeweilige Heimat-Komposition zusammen — und ihr werdet überrascht sein, wie unterschiedlich sie selbst bei nahen Menschen ist.' },
          { name: 'Drei Türen', title: 'Heimat hat drei Türen', duration: 5*60,
            hostNote: 'Vorlesen. Diese drei Definitionen begleiten den Abend.',
            items: [
              { accent: 'Ort', label: 'als Raum', text: 'Wo dein Körper zur Ruhe kommt.' },
              { accent: 'Mensch', label: 'als Beziehung', text: 'Wo du nicht mehr darstellen musst.' },
              { accent: 'Tun', label: 'als Tätigkeit', text: 'Wo du dich vergisst.' }
            ] },
          { name: 'Erzählen', title: 'Drei Erzählungen', duration: 18*60,
            hostNote: 'Eine:r erzählt 8 Minuten — alle drei Türen. Andere Person hört zu, keine Rückfragen. Dann tauschen.',
            description: 'Erzähle deinem Gegenüber von deiner Heimat — durch alle drei Türen. Welcher Ort, welcher Mensch, welche Tätigkeit?',
            question: 'Erzähle: dein Heimat-Ort. Dein Heimat-Mensch. Deine Heimat-Tätigkeit.' },
          { name: 'Sinne', title: 'Heimat durch Geruch und Klang', duration: 8*60,
            hostNote: 'Beide abwechselnd — ein Sinneserlebnis pro Person, dann das nächste.',
            question: 'Welcher Geruch, Klang oder Geschmack zieht dich sofort an deinen Heimat-Ort?' },
          { name: 'Verlust', title: 'Welche Heimat hast du verloren?', duration: 12*60,
            hostNote: 'Eine:r erzählt 4 min, andere hört zu. Dann tauschen.',
            question: 'Welche Heimat hast du verloren — und wie gehst du heute damit um?' },
          { name: 'Schnittmenge', title: 'Was ist eure gemeinsame Heimat?', duration: 10*60,
            hostNote: 'Gemeinsames Gespräch. Keine Vorgabe — schaut, was sich zeigt.',
            description: 'Bei nahen Menschen gibt es oft eine Schnittmenge — Orte, Menschen, Rituale, die für euch beide Heimat sind. Manchmal ist die kleiner als gedacht. Manchmal größer.',
            question: 'Was teilt ihr beide als Heimat — und was ist euch ganz allein?' },
          { name: 'Mitnahme', title: 'Was möchten wir pflegen?', duration: 6*60,
            hostNote: 'Beide nacheinander — gerne auch eine gemeinsame Sache.',
            question: 'Was möchtest du (oder ihr beide) in den nächsten Wochen pflegen, damit es Heimat bleibt oder wird?' }
        ])
      },
      solo: {
        label: 'Allein',
        duration: '~40 Min.',
        people: 'Nur du',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wo bist du heute aufgewacht?', duration: 4*60,
            hostNote: 'Drei tiefe Atemzüge. „Innerlich" ist genauso valide wie „äußerlich".',
            question: 'Wo bist du heute Morgen aufgewacht — innerlich und äußerlich?' },
          { name: 'Einstieg', title: 'Heimat ist mehr als ein Ort', duration: 6*60,
            hostNote: 'Audio anhören — gerne mit geschlossenen Augen. Oder still lesen.',
            audio: 'audio/heimat/group/02-einstieg.mp3',
            quote: { text: 'Heimat ist da, wo ich nicht erklären muss, was ich meine.', author: 'unbekannt' },
            description: 'Du gehörst zu einer Generation, die mehr umzieht, mehr reist, mehr wechselt als jede davor. Das Wort „Heimat" klingt für viele zu groß, zu pathisch, zu politisch besetzt.\n\nUnd doch: du kennst das Gefühl. Diesen einen Ort, diesen einen Menschen, diese eine Tätigkeit, in der du nicht weitermusst. Heute gibst du diesem Gefühl Platz — und schaust, woraus deine Heimat heute eigentlich besteht.' },
          { name: 'Drei Türen', title: 'Heimat hat drei Türen', duration: 4*60,
            hostNote: 'Audio anhören oder still lesen. Diese drei Definitionen begleiten dich durch die nächste Station.',
            audio: 'audio/heimat/group/03-drei-bedeutungen.mp3',
            items: [
              { accent: 'Ort', label: 'Heimat als Raum', text: 'Eine Wohnung, eine Stadt, eine Landschaft. Der physische Ort, an dem dein Körper zur Ruhe kommt.' },
              { accent: 'Mensch', label: 'Heimat als Beziehung', text: 'Eine Person, in deren Anwesenheit du nicht mehr darstellen musst.' },
              { accent: 'Tun', label: 'Heimat als Tätigkeit', text: 'Eine Sache, in der du dich vergisst — Kochen, Klettern, Schreiben, Singen.' }
            ] },
          { name: 'Drei Antworten', title: 'Deine drei Heimaten', duration: 15*60,
            hostNote: 'Für jede Tür 5 Minuten. Schreibe für dich — ungefiltert. Konkret werden: nicht „Berlin", sondern „die Bank am Maybachufer".',
            description: 'Drei Fragen, eine nach der anderen. Nimm dir Zeit für jede.',
            items: [
              { accent: 'Ort', text: 'Welcher Ort in deinem Leben trägt dich gerade — und was genau macht ihn aus?' },
              { accent: 'Mensch', text: 'Welcher Mensch ist dir Heimat — und woran merkst du es?' },
              { accent: 'Tun', text: 'In welcher Tätigkeit vergisst du dich — und wann hast du sie das letzte Mal gemacht?' }
            ] },
          { name: 'Verlust', title: 'Welche Heimat hast du verloren?', duration: 8*60,
            hostNote: 'Schreibe still. Mit Feingefühl — manche Verluste sind frisch.',
            audio: 'audio/heimat/group/07-verlust.mp3',
            description: 'Manche Heimaten verlieren wir, weil wir umziehen. Manche, weil Menschen sterben oder gehen. Manche, weil wir uns selbst verändert haben und der alte Ort nicht mehr passt.',
            question: 'Welche Heimat hast du verloren — und wie gehst du heute damit um?' },
          { name: 'Mitnahme', title: 'Was möchtest du Heimat werden lassen?', duration: 5*60,
            hostNote: 'Schreibe einen Satz auf einen Zettel — und nimm ihn mit.',
            audio: 'audio/heimat/group/10-mitnahme.mp3',
            description: 'Heimat passiert nicht von selbst. Sie wächst, wo du sie pflegst — durch Wiederholung, durch Anwesenheit, durch kleine Gesten.',
            question: 'Was möchtest du in den nächsten Wochen pflegen, damit es Heimat wird oder bleibt? Und mit welchem Wort gehst du jetzt weiter?' }
        ])
      }
    }
  }

};

// =====================================================================
// SOLO-MODUS für alle Themen, die noch keinen haben
// Für Menschen, die ein Thema allein reflektieren wollen — schreibend,
// atmend, hörend. Kein „Reihum", kein Gegenüber — ein innerer Raum.
// =====================================================================
const SOLO_FORMATS = {

  werte: {
    label: 'Allein', duration: '~30 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Ankommen', title: 'Was steht gerade zwischen dir und deinem Leben?', duration: 3*60,
        hostNote: 'Drei tiefe Atemzüge. Stift und Zettel bereitlegen.',
        question: 'Wenn du ehrlich bist: was steht diese Woche zwischen dir und dem Leben, das du eigentlich führen willst?' },
      { name: 'Einstieg', title: 'Werte zeigen sich, wo es weh tut', duration: 4*60,
        hostNote: 'Still lesen. Einmal.',
        description: 'Auf Postern stehen Werte wie „Ehrlichkeit, Familie, Gesundheit". Im Alltag leben wir oft andere: Effizienz, Bequemlichkeit, Anerkennung. Das ist nicht schlimm — aber es lohnt sich, den Unterschied zu sehen. Werte zeigen sich nicht in Aussagen. Sie zeigen sich in dem, worüber du dich ärgerst, wofür du Zeit opferst, was dich nachts wach hält.' },
      { name: 'Ärger', title: 'Der letzte Ärger als Spiegel', duration: 6*60,
        hostNote: 'Schreiben. Nicht zensieren — erst ausschütten, dann nachdenken.',
        question: 'Worüber hast du dich in den letzten Tagen wirklich geärgert? Welcher Wert wurde da verletzt, dass es so weh tat?' },
      { name: 'Stolz', title: 'Der letzte stille Stolz', duration: 5*60,
        hostNote: 'Schreiben. Kein Lebenslauf-Stolz — ein kleiner Moment.',
        question: 'Welcher Moment der letzten Wochen hat dich still stolz gemacht? Und welchen Wert hast du da ausgelebt?' },
      { name: 'Drei Sätze', title: 'Mir ist wirklich wichtig …', duration: 7*60,
        hostNote: 'Schreibe drei Sätze. Die zweite Fassung ist oft ehrlicher als die erste.',
        description: 'Kein Lebenskonzept. Drei ehrliche Sätze, die gerade stimmen — auch wenn sie sich morgen ändern. Lass dir Zeit für die Formulierung. Was nicht durch die Zähne will, ist oft noch nicht wahr.',
        question: '„Mir ist wirklich wichtig …" — dreimal vollenden.' },
      { name: 'Schritt', title: 'Ein kleiner Schritt', duration: 5*60,
        hostNote: 'Schreibe auf einen Zettel — und nimm ihn mit.',
        question: 'An welcher konkreten Stelle diese Woche wirst du einen dieser Werte leben — auch wenn es unbequem ist?' }
    ])
  },

  prioritaeten: {
    label: 'Allein', duration: '~30 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Ankommen', title: 'Was ist diese Woche laut?', duration: 3*60,
        hostNote: 'Drei tiefe Atemzüge. Handy weg.',
        question: 'Was ist diese Woche am lautesten in deinem Kopf — und wird dadurch leiser, was dir wichtig ist?' },
      { name: 'Einstieg', title: 'Das Vier-Öfen-Modell', duration: 4*60,
        hostNote: 'Still lesen.',
        description: 'Stell dir vier Öfen vor, jeder braucht Holz zum Brennen: Arbeit, Beziehungen, Selbstsorge, ein persönliches Projekt. Keiner kann dauerhaft volle Lohe sein. Aber wenn zwei ausgehen, merkst du es lange nicht — bis es kalt wird. Heute schaust du nach, welche Öfen du gerade fütterst — und welche nicht.' },
      { name: 'Check', title: 'Vier Öfen — wie brennt es gerade?', duration: 10*60,
        hostNote: 'Für jeden Ofen: voll / mittel / niedrig / aus. Ein Satz Begründung.',
        description: 'Keine Bewertung, nur Beobachtung. Manche Öfen sind absichtlich runtergefahren — das ist okay. Es geht um Klarheit.',
        items: [
          { accent: 'Ofen 1', label: 'Arbeit & Berufung', text: 'Was du tust, um Wirkung in der Welt zu haben.' },
          { accent: 'Ofen 2', label: 'Beziehungen', text: 'Partner, Familie, Freunde — die Menschen, die dich tragen.' },
          { accent: 'Ofen 3', label: 'Selbstsorge', text: 'Schlaf, Bewegung, Ernährung, stille Zeit — dein Körper und Geist.' },
          { accent: 'Ofen 4', label: 'Projekt / Seele', text: 'Das eine Vorhaben, das nur du machen kannst — und das dich nährt.' }
        ] },
      { name: 'Preis', title: 'Was kostet deine aktuelle Prioritätensetzung?', duration: 6*60,
        hostNote: 'Schreibe ehrlich. Niemand sieht das außer dir.',
        question: 'Wen oder was zahlt aktuell den Preis für das, was bei dir gerade brennt — und was ist ausgegangen?' },
      { name: 'Verschiebung', title: 'Eine konkrete Verschiebung', duration: 4*60,
        hostNote: 'Schreibe auf einen Zettel — und nimm ihn mit.',
        question: 'Welcher Ofen bekommt nächste Woche mehr Holz — und wo nimmst du es her? Ein konkreter Schritt.' }
    ])
  },

  stehe: {
    label: 'Allein', duration: '~30 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Ankommen', title: 'Wie ehrlich bist du diese Woche gewesen?', duration: 3*60,
        hostNote: 'Drei tiefe Atemzüge. Ganz da sein.',
        question: 'Wann hast du diese Woche etwas nicht gesagt, obwohl du es gewusst hast?' },
      { name: 'Einstieg', title: 'Drei Ebenen des Einstehens', duration: 4*60,
        hostNote: 'Still lesen.',
        description: 'Wofür du stehst, zeigt sich auf drei Ebenen: bei dir selbst (wo ziehst du innere Grenzen?), im Nahbereich (was sagst du Menschen, die dir wichtig sind?) und draußen (wo öffnest du den Mund, wenn es Mut kostet?). Jede Ebene hat ihre eigene Schwelle.' },
      { name: 'Bei dir', title: 'Für dich selbst', duration: 6*60,
        hostNote: 'Schreibe. Sei nicht nett mit dir — sei ehrlich.',
        question: 'Wo hörst du dich selbst gerade am wenigsten — welchen inneren Satz drückst du weg?' },
      { name: 'Nahbereich', title: 'Für die Menschen, die dich kennen', duration: 6*60,
        hostNote: 'Schreibe. Konkret werden, keine Abstraktionen.',
        question: 'Welchem Menschen in deinem Leben müsstest du diese Woche etwas sagen — und was genau?' },
      { name: 'Außen', title: 'Für das, was du nicht kennst', duration: 5*60,
        hostNote: 'Schreibe.',
        question: 'Wofür würdest du in einem fremden Raum den Mund aufmachen — auch wenn es Reibung kostet?' },
      { name: 'Schritt', title: 'Eine Grenze, ein Satz', duration: 4*60,
        hostNote: 'Schreibe auf einen Zettel — und nimm ihn mit.',
        question: 'Welche Grenze ziehst du diese Woche — oder welchen Satz sagst du laut? Ein konkreter Akt.' }
    ])
  },

  tag: {
    label: 'Allein', duration: '~25 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Ankommen', title: 'Wann war ein Tag zuletzt wirklich deiner?', duration: 3*60,
        hostNote: 'Drei tiefe Atemzüge.',
        question: 'Wann hast du das letzte Mal einen Tag gehabt, nach dem du gesagt hast: „Der war richtig"?' },
      { name: 'Einstieg', title: 'Drei Säulen eines guten Tages', duration: 3*60,
        hostNote: 'Still lesen.',
        description: 'Ein guter Tag braucht drei Dinge nicht in gleicher Menge, aber ein wenig von jeder: Flow (etwas, in dem du dich vergisst), Verbindung (ein Mensch, mit dem du wirklich sprichst), und Sinn (eine Geste, die über dich hinausweist). Fehlt eine Säule zu lange, kippt das Gebäude.' },
      { name: 'Rückblick', title: 'Dein letzter wirklich guter Tag', duration: 6*60,
        hostNote: 'Schreibe konkret — die Reihenfolge der Stunden.',
        question: 'Beschreibe einen Tag aus den letzten Wochen, der sich stimmig angefühlt hat. Was hast du wann getan? Wer war dabei?' },
      { name: 'Vorwärts', title: 'Dein idealer Tag nächste Woche', duration: 8*60,
        hostNote: 'Schreibe als wäre es ein Drehbuch — in Gegenwartsform.',
        description: 'Kein Traumtag ohne Verpflichtungen. Ein realistischer Tag nächste Woche — innerhalb dessen, was du wirklich hast — aber so gestaltet, dass die drei Säulen vorkommen.',
        question: 'Wie sieht dein idealer Dienstag (oder Tag deiner Wahl) nächste Woche aus — Stunde für Stunde?' },
      { name: 'Änderung', title: 'Eine kleine Verschiebung', duration: 5*60,
        hostNote: 'Schreibe auf einen Zettel.',
        question: 'Was änderst du ganz konkret, damit dieser Tag so eintreten kann — oder ihm wenigstens nah kommt?' }
    ])
  },

  zehnjahre: {
    label: 'Allein', duration: '~30 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Ankommen', title: 'Was würdest du deinem 18-jährigen Ich sagen?', duration: 3*60,
        hostNote: 'Atme dreimal tief.',
        question: 'Wenn du deinem Ich von vor zehn Jahren in einem Satz etwas zuflüstern könntest — was wäre es?' },
      { name: 'Einstieg', title: 'Zehn Jahre sind lang. Und kurz.', duration: 4*60,
        hostNote: 'Still lesen.',
        description: 'Zehn Jahre zurück: die Person, die du warst, ist dir fremd. Und gleichzeitig weißt du, wie schnell die Zeit vergangen ist. In zehn Jahren wirst du genauso auf heute zurückblicken — mit einer Mischung aus Zärtlichkeit und Ungläubigkeit. Die Frage ist nicht, was du erreicht haben willst. Sondern wer du geworden sein willst.' },
      { name: 'Rückwärts', title: 'Wer warst du vor zehn Jahren?', duration: 6*60,
        hostNote: 'Schreibe — ohne zu urteilen.',
        question: 'Was war deiner Version von vor zehn Jahren wichtig, das heute nicht mehr zählt? Und was hast du damals vermisst, das du heute hast?' },
      { name: 'Vorwärts', title: 'Wer wirst du in zehn Jahren sein?', duration: 8*60,
        hostNote: 'Schreibe in Gegenwartsform — als wäre es schon so.',
        description: 'Keine Checkliste. Beschreibe einen typischen Montagmorgen in zehn Jahren: Wo wachst du auf? Mit wem? Was steht an? Was fällt dir ein, wenn du an deine letzten Jahre zurückdenkst?',
        question: 'Dein Leben in zehn Jahren — ein Tag daraus.' },
      { name: 'Weiche', title: 'Eine Entscheidung, die jetzt Gewicht hat', duration: 6*60,
        hostNote: 'Schreibe. Keine große Lebensentscheidung — eine, die jetzt fällig ist.',
        question: 'Welche Entscheidung, die dir in den nächsten Monaten bevorsteht, hat die meiste Wirkung auf diesen Tag-in-zehn-Jahren? Und was spricht dafür, was dagegen?' },
      { name: 'Schritt', title: 'Ein kleiner Anfang', duration: 3*60,
        hostNote: 'Schreibe auf einen Zettel.',
        question: 'Was tust du diese Woche, das in zehn Jahren noch eine Rolle spielen könnte? Klein ist okay.' }
    ])
  },

  frageabend: {
    label: 'Allein', duration: '~25 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Ankommen', title: 'Wie kommst du heute bei dir an?', duration: 3*60,
        hostNote: 'Drei Atemzüge. Stift bereit.',
        question: 'Was war das Letzte, das dich wirklich zum Nachdenken gebracht hat — und wann war das?' },
      { name: 'Einstieg', title: 'Fragen, die sich nicht jeden Tag stellen', duration: 2*60,
        hostNote: 'Still lesen.',
        description: 'Gute Fragen öffnen etwas. Allein sind sie besonders stark: Niemand wartet auf eine Antwort, niemand beobachtet. Du darfst dauern. Du darfst zurückschrecken. Du darfst die Frage ein zweites Mal lesen. Heute drei Fragen — leicht, mittel, tief.' },
      { name: 'Leicht', title: 'Zum Einsteigen', duration: 5*60,
        hostNote: 'Schreibe locker. Zwei, drei Sätze reichen.',
        question: 'Was fühlt sich in deinem Leben gerade am falschen Platz an — und was am richtigen?' },
      { name: 'Mittel', title: 'Eine Schicht tiefer', duration: 6*60,
        hostNote: 'Schreibe. Lass die erste Antwort aus — nimm die zweite.',
        question: 'Welchen Satz hörst du dich immer wieder sagen — und stimmt er eigentlich noch?' },
      { name: 'Tief', title: 'Die Frage, die du aufschiebst', duration: 7*60,
        hostNote: 'Schreibe. „Pass" ist okay — lies die Frage dann nochmal in einer Woche.',
        question: 'Was wüsstest du eigentlich über dich, wenn du ehrlich wärst, es aber lieber nicht wissen willst?' },
      { name: 'Mitnahme', title: 'Eine Frage für die Woche', duration: 2*60,
        hostNote: 'Schreibe auf einen Zettel.',
        question: 'Welche dieser Fragen trägst du diese Woche mit — und wann stellst du sie dir noch einmal?' }
    ])
  },

  frageabend_arbeit: {
    label: 'Allein', duration: '~20 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Ankommen', title: 'Wie geht es dir mit deiner Arbeit?', duration: 3*60,
        hostNote: 'Drei Atemzüge. Nicht die Kurzfassung — die echte.',
        question: 'Wenn du heute deine Arbeit in einem einzigen Wort beschreiben müsstest — welches wäre es?' },
      { name: 'Einstieg', title: 'Arbeit als Spiegel', duration: 2*60,
        hostNote: 'Still lesen.',
        description: 'Arbeit beantwortet die Frage „Was machst du eigentlich?" — aber auch leisere: Wo fließt deine Zeit? Wer bist du, wenn du sie tust? Was wäre gewesen, wenn du abgebogen wärst? Heute drei Fragen ohne Urteil.' },
      { name: 'Flow', title: 'Wann fließt deine Zeit?', duration: 4*60,
        hostNote: 'Schreibe.',
        question: 'Wann warst du zuletzt so in deiner Arbeit, dass du die Uhr vergessen hast? Und was sagt dir das?' },
      { name: 'Spiegel', title: 'Wer bist du, wenn du arbeitest?', duration: 4*60,
        hostNote: 'Schreibe.',
        question: 'Welche Version von dir zeigt sich im Job — und welche bleibt draußen?' },
      { name: 'Abzweig', title: 'Der Weg, den du nicht genommen hast', duration: 4*60,
        hostNote: 'Schreibe ohne Reue. Nur neugierig.',
        question: 'Welche Entscheidung vor Jahren hätte dich heute woanders hingestellt? Und blickst du mit Reue, Erleichterung oder Ruhe zurück?' },
      { name: 'Schritt', title: 'Eine Reibung, ein Versuch', duration: 3*60,
        hostNote: 'Schreibe auf einen Zettel.',
        question: 'Was probierst du in deiner Arbeit diese Woche anders — klein, konkret?' }
    ])
  },

  frageabend_tief: {
    label: 'Allein', duration: '~25 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Ankommen', title: 'Bist du wirklich da?', duration: 3*60,
        hostNote: 'Drei tiefe Atemzüge. Kein Handy, keine Tabs.',
        question: 'Wo ist dein Kopf gerade — und was musst du ablegen, um wirklich hier zu sein?' },
      { name: 'Einstieg', title: 'Was wir uns nicht erzählen', duration: 3*60,
        hostNote: 'Still lesen.',
        description: 'Es gibt drei Bereiche in uns: was wir offen sagen, was wir manchmal sagen, und was wir niemandem sagen — nicht einmal uns selbst. Die dritte Ebene ist das Herz dieses Abends. Du bist allein — also darfst du heute hineinsehen.' },
      { name: 'Leise', title: 'Was sagst du selten?', duration: 5*60,
        hostNote: 'Schreibe — kein Publikum, kein Urteil.',
        question: 'Welchen Satz über dich selbst drückst du meistens weg, wenn er aufsteigt?' },
      { name: 'Nie', title: 'Was sagst du niemandem?', duration: 6*60,
        hostNote: 'Schreibe. „Pass" ist okay — aber versuch es einmal.',
        question: 'Welche Wahrheit über dich kennt niemand — und wie würde sich dein Leben ändern, wenn einer sie wüsste?' },
      { name: 'Sich selbst', title: 'Was sagst du dir selbst nicht?', duration: 6*60,
        hostNote: 'Die leiseste Stimme — und oft die richtigste.',
        question: 'Welchen Satz über dich traust du dich selbst nicht zu denken — und was wäre, wenn du ihn einmal zuließest?' },
      { name: 'Schritt', title: 'Eine Zärtlichkeit mit dir', duration: 2*60,
        hostNote: 'Schreibe auf einen Zettel — nicht als Aufgabe, als Geschenk.',
        question: 'Wie wärst du diese Woche freundlicher mit dem, was gerade in dir lebt — ohne etwas ändern zu müssen?' }
    ])
  },

  frageabend_humor: {
    label: 'Allein', duration: '~20 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Ankommen', title: 'Wann hast du zuletzt wirklich gelacht?', duration: 3*60,
        hostNote: 'Drei Atemzüge.',
        question: 'Wann war das letzte Mal, dass du allein laut gelacht hast — und worüber?' },
      { name: 'Einstieg', title: 'Quatsch ist auch Erkenntnis', duration: 2*60,
        hostNote: 'Still lesen.',
        description: 'Manchmal erzählt eine absurde Antwort mehr als eine ehrliche. Der Blick von der Seite zeigt Seiten, die der ernste Blick übersieht. Heute drei Fragen, die Quatsch erlauben — und durch Quatsch manchmal zur Mitte gehen.' },
      { name: 'Was wäre', title: 'Hypothetische Biografie', duration: 5*60,
        hostNote: 'Schreibe, ohne zu zensieren. Die ersten zwei Ideen sind oft zu brav.',
        question: 'Wenn dein Leben ein Musical wäre: welches Genre, welche Szene spielt gerade, und wer singt?' },
      { name: 'An dir', title: 'Das Absurde an dir', duration: 5*60,
        hostNote: 'Schreibe — freundlich, aber ehrlich.',
        question: 'Was ist an dir selbst, ehrlich betrachtet, einfach komisch — und findest du das liebenswert oder nervig?' },
      { name: 'Unwichtiges', title: 'Ein Ranking ohne Sinn', duration: 4*60,
        hostNote: 'Schreibe. Drei Punkte.',
        question: 'Drei Dinge, die du wirklich ernst nimmst, obwohl sie völlig unwichtig sind — und drei Dinge, die wichtig wären, aber dir nicht gelingen.' },
      { name: 'Mitnahme', title: 'Ein Schmunzeln für die Woche', duration: 1*60,
        hostNote: 'Schreibe auf einen Zettel.',
        question: 'Was nimmst du mit — ein Wort, ein Bild, ein innerer Witz?' }
    ])
  }

};

Object.keys(SOLO_FORMATS).forEach(id => {
  if (window.THEMES[id] && !window.THEMES[id].formats.solo) {
    window.THEMES[id].formats.solo = SOLO_FORMATS[id];
  }
});

// Post-process: set theme.id, derive totalMinutes per format
Object.keys(window.THEMES).forEach(id => {
  const theme = window.THEMES[id];
  theme.id = id;
  Object.values(theme.formats || {}).forEach(f => {
    f.totalMinutes = (f.stations || []).reduce((s, st) => s + st.duration, 0) / 60;
  });
});
