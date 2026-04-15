// Central data store for all Lebensfunken themes.
//
// Each theme has:
//   id, title, category, lead, image, philosophy1, philosophy2
//   formats: { group?: {...}, pair?: {...} }
//
// Each format has:
//   label, duration, people, stations[]
//
// Each station has:
//   name, title, duration (seconds)
//   hostNote?, description?, question?
//   items?  [{label, accent, text}]  — rendered as cards (typology, scenarios, lists)
//   type?   'feedback'  — renders a feedback form instead of normal content
//
// Feedback address used for prototype mailto:
window.LEBENSFUNKEN_FEEDBACK_EMAIL = 'florian.s.thiel+lebensfunken@gmail.com';

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
  // BINDUNG  — Flaggschiff-Thema, voll ausgearbeitet in Gruppe + Paar
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
          {
            name: 'Ankommen',
            title: 'Was bringt dich heute hierher?',
            duration: 10 * 60,
            hostNote: 'Reihum, 1–2 Sätze. Keine Rückfragen.',
            question: 'Was bringt dich heute hierher — und wo steht dein Kopf gerade?'
          },
          {
            name: 'Einstieg',
            title: 'Warum wir so lieben, wie wir lieben',
            duration: 8 * 60,
            hostNote: 'Der Host liest langsam vor. Danach 1 Minute Stille.',
            description: 'Ein Kind, das schreit, wird getröstet — oder nicht. Ein Kind, das Nähe sucht, wird aufgenommen — oder weggeschoben. Aus diesen tausend kleinen Momenten lernt jeder von uns: Ist Nähe sicher? Darf ich abhängig sein? Werde ich gesehen, wenn ich es brauche?\n\nDiese frühe Lektion wird zur inneren Landkarte. Wir tragen sie in jede Beziehung — mit Partner:innen, Freund:innen, am Arbeitsplatz. Heute schauen wir, welches Muster in dir heute noch wirkt.'
          },
          {
            name: 'Sicher',
            title: 'Muster 1: Sicher',
            duration: 5 * 60,
            hostNote: 'Vorlesen. Danach kurz in die Runde: Wer erkennt sich?',
            description: 'Etwa 50 % der Menschen. Nähe ist möglich, Unabhängigkeit auch. Konflikte schrecken nicht. Vertrauen darf einfach da sein.\n\nInnere Grundannahme: Ich bin okay, andere sind okay. Wenn ich bitte, bekomme ich meistens eine Antwort. Wenn jemand geht, kommt er meistens wieder.'
          },
          {
            name: 'Ängstlich',
            title: 'Muster 2: Ängstlich',
            duration: 5 * 60,
            hostNote: 'Vorlesen. Wer nickt?',
            description: 'Etwa 20 %. Sehnsucht nach viel Nähe, sensible Antennen für jedes Zeichen der Distanz. Schreibt eine Nachricht, wartet auf Antwort, wartet länger, fängt an zu zweifeln.\n\nInnere Grundannahme: Ich brauche dich, und ich habe Angst, dich zu verlieren.'
          },
          {
            name: 'Vermeidend',
            title: 'Muster 3: Vermeidend',
            duration: 5 * 60,
            hostNote: 'Vorlesen. Kurze Reaktion.',
            description: 'Etwa 25 %. Unabhängigkeit ist oberste Priorität. Emotionale Nähe fühlt sich schnell eng an. Rückzug ist der erste Reflex, wenn’s zu dicht wird.\n\nInnere Grundannahme: Ich komme allein klar. Zu brauchen ist gefährlich.'
          },
          {
            name: 'Desorganisiert',
            title: 'Muster 4: Desorganisiert',
            duration: 5 * 60,
            hostNote: 'Vorlesen. Mit Feingefühl — dieses Muster berührt oft.',
            description: 'Etwa 5 %. Gleichzeitig Sehnsucht nach Nähe und Angst davor. Beziehungen fühlen sich widersprüchlich an, oft nach frühen, schmerzhaften Erfahrungen.\n\nInnere Grundannahme: Ich will dich — bleib weg. Komm näher — nicht so nah.'
          },
          {
            name: 'Selbstverortung',
            title: 'Wo verortest du dich?',
            duration: 10 * 60,
            hostNote: 'Reihum. Keine Diagnose — ein Bauchgefühl reicht. Mischungen sind normal.',
            question: 'In welchem Muster erkennst du dich am ehesten wieder — und wie zeigt sich das im Alltag?'
          },
          {
            name: 'Alltag',
            title: 'Drei Szenen aus dem echten Leben',
            duration: 15 * 60,
            hostNote: 'Der Host liest eine Szene nach der anderen. Reihum: Was ist dein erster Impuls? Kurz, ungefiltert.',
            items: [
              { accent: '1.', label: 'Stille', text: 'Dein:e Partner:in meldet sich drei Stunden nicht. Was denkst du zuerst?' },
              { accent: '2.', label: 'Streit', text: 'Ein Konflikt eskaliert. Bleiben und klären — oder Rückzug — oder zuschlagen?' },
              { accent: '3.', label: 'Hilfe', text: 'Du brauchst Hilfe mit etwas Konkretem. Wie leicht oder schwer fällt es dir zu fragen?' }
            ]
          },
          {
            name: 'Wurzeln',
            title: 'Eine Szene, die dich geformt hat',
            duration: 18 * 60,
            hostNote: 'Reihum. Keine Tiefenanalyse — ein Bild, eine Szene. „Pass“ ist völlig okay.',
            description: 'Egal ob warm oder kühl, nah oder fern. Welche Erinnerung taucht auf, wenn du jetzt nicht lange nachdenkst?',
            question: 'Eine Szene aus deiner Kindheit zum Thema Geborgenheit. Was kommt?'
          },
          {
            name: 'Schritt',
            title: 'Ein kleiner, konkreter Schritt',
            duration: 15 * 60,
            hostNote: 'Reihum, ein Satz. Nicht vage — konkret. Plus Ein-Wort-Abschluss.',
            description: 'Nicht: „Ich will sicher gebunden sein.“ Sondern: „Wenn Lisa am Samstag 3 h nicht antwortet, frage ich einmal nach statt mich innerlich zurückzuziehen.“',
            question: 'Was ist dein nächster kleiner Schritt diese Woche? Und was nimmst du in einem Wort mit?'
          }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 15 Min.',
        people: '2 Personen (Paar oder Freundschaft)',
        stations: withFeedback([
          {
            name: 'Ankommen',
            title: 'Erst mal: Wie geht es dir?',
            duration: 8 * 60,
            hostNote: 'Beide nacheinander, 2 Minuten. Andere:r hört zu, ohne zu reagieren.',
            question: 'Wie geht es dir wirklich, heute?'
          },
          {
            name: 'Einstieg',
            title: 'Warum wir so lieben, wie wir lieben',
            duration: 6 * 60,
            hostNote: 'Eine:r liest laut vor. Danach 30 Sekunden Stille.',
            description: 'Wir kommen mit einer Art Beziehungs-Software auf die Welt. In den ersten Jahren prägen unsere Bezugspersonen, wie wir Nähe erleben. Diese frühe Lektion trägt jeder in jede Beziehung mit.\n\nHeute schauen wir gemeinsam: Welches Muster bringt jede:r von euch mit — und wie begegnen die sich in eurer Beziehung?'
          },
          {
            name: 'Die Muster',
            title: 'Die vier Grundmuster im Schnelldurchlauf',
            duration: 6 * 60,
            hostNote: 'Gemeinsam durchlesen. Stoppt, wo jemand nickt.',
            items: [
              { label: 'Sicher', accent: '~50 %', text: 'Nähe und Unabhängigkeit sind beides möglich. Vertrauen kommt leicht.' },
              { label: 'Ängstlich', accent: '~20 %', text: 'Sehnsucht nach viel Nähe. Sensibel für kleinste Zeichen der Distanz.' },
              { label: 'Vermeidend', accent: '~25 %', text: 'Unabhängigkeit zuerst. Nähe fühlt sich schnell eng an.' },
              { label: 'Desorganisiert', accent: '~5 %', text: 'Wunsch nach Nähe und Angst davor zugleich.' }
            ]
          },
          {
            name: 'Wo stehst du?',
            title: 'Gegenseitige Verortung',
            duration: 12 * 60,
            hostNote: 'Jede:r sagt erst für sich, dann für die andere Person. Zuhören, dann tauschen.',
            question: 'Wo verortest du dich — und wo verortest du die andere Person?'
          },
          {
            name: 'Alltag',
            title: 'Wie begegnen sich eure Muster?',
            duration: 15 * 60,
            hostNote: 'Gemeinsam durch die Szenen. Ehrlich reagieren, nicht strategisch.',
            items: [
              { accent: '1.', label: 'Stille', text: 'Der/die andere meldet sich drei Stunden nicht. Was denkst du?' },
              { accent: '2.', label: 'Rückzug', text: 'Einer zieht sich nach einem Konflikt zurück. Wie reagiert der andere?' },
              { accent: '3.', label: 'Nähe', text: 'Einer kommt plötzlich emotional sehr nah. Was passiert?' }
            ]
          },
          {
            name: 'Wurzeln',
            title: 'Ein Einblick in die Kindheit',
            duration: 15 * 60,
            hostNote: 'Jede:r 5 Minuten erzählen, der andere nur zuhören. Dann tauschen.',
            description: 'Keine Tiefenanalyse. Eine Szene, ein Bild aus eurer Kindheit zum Thema Geborgenheit — wie war das für euch?',
            question: 'Was fällt dir ein — und was schickt dich das über dein heutiges Muster?'
          },
          {
            name: 'Schritt',
            title: 'Was wir einander diese Woche versprechen',
            duration: 10 * 60,
            hostNote: 'Konkret, klein, machbar. Ein Satz pro Person.',
            question: 'Was probiere ich diese Woche anders — und was wünsche ich mir von dir?'
          }
        ])
      }
    }
  },

  // =====================================================================
  // WERTE — zweites Flaggschiff, voll ausgearbeitet Gruppe + Paar
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
          {
            name: 'Ankommen',
            title: 'Wie kommst du hier an?',
            duration: 10 * 60,
            hostNote: 'Reihum, 1–2 Sätze. Kein Smalltalk — was bewegt dich heute?',
            question: 'Wie kommst du hier an — und was beschäftigt dich heute?'
          },
          {
            name: 'Einstieg',
            title: 'Der Unterschied zwischen Werten und Wunschdenken',
            duration: 8 * 60,
            hostNote: 'Der Host liest langsam vor.',
            description: 'Werte sind nicht die schönen Worte auf einem Poster. Werte sind das, was sich durchsetzt, wenn es eng wird.\n\nWenn du „Gesundheit“ als Wert angibst, aber in stressigen Wochen als Erstes den Sport streichst — dann ist nicht Gesundheit dein Wert in dieser Woche, sondern Effizienz oder Karriere. Das ist nicht schlimm. Das ist nur ehrlich. Und ehrlich ist der erste Schritt, um es ändern zu können.'
          },
          {
            name: 'Landkarte 1',
            title: 'Das Paar: Sicherheit und Freiheit',
            duration: 5 * 60,
            hostNote: 'Kurz vorlesen. Wer tendiert wohin?',
            items: [
              { label: 'Sicherheit', text: 'Struktur, Vorhersehbarkeit, Absicherung, Traditionen, das Bekannte bewahren.' },
              { label: 'Freiheit', text: 'Offenheit, Abenteuer, Wandel, Eigenständigkeit, das Neue wagen.' }
            ]
          },
          {
            name: 'Landkarte 2',
            title: 'Das Paar: Leistung und Verbundenheit',
            duration: 5 * 60,
            hostNote: 'Kurz vorlesen. Wo steht ihr?',
            items: [
              { label: 'Leistung', text: 'Wachstum, Exzellenz, etwas erreichen, Einfluss, sichtbare Ergebnisse.' },
              { label: 'Verbundenheit', text: 'Beziehungen, Zugehörigkeit, füreinander da sein, Zeit mit Menschen.' }
            ]
          },
          {
            name: 'Landkarte 3',
            title: 'Das Paar: Sinn und Genuss',
            duration: 5 * 60,
            hostNote: 'Letztes Paar.',
            items: [
              { label: 'Sinn', text: 'Ein größerer Zweck, Beitrag zu etwas, dienen, verändern.' },
              { label: 'Genuss', text: 'Das Hier und Jetzt, Schönheit, Leichtigkeit, sinnlich leben.' }
            ]
          },
          {
            name: 'Deine 3',
            title: 'Drei Werte, die dich tatsächlich leiten',
            duration: 10 * 60,
            hostNote: 'Jede:r schreibt für sich. Nicht Wunsch, sondern was sich in der letzten Woche gezeigt hat. Dann reihum teilen.',
            question: 'Welche 3 Werte haben dich diese Woche wirklich geleitet — nicht welche du haben willst, sondern welche du gelebt hast?'
          },
          {
            name: 'Spur der Entscheidungen',
            title: 'Alltags-Szenen',
            duration: 15 * 60,
            hostNote: 'Eine Szene nach der anderen. Reihum: Was hättest du entschieden — und welcher Wert zeigt sich darin?',
            items: [
              { accent: '1.', label: 'Das Jobangebot', text: 'Dein Traumjob ruft — bezahlt besser, weniger Zeit für die Familie. Was zuerst im Kopf?' },
              { accent: '2.', label: 'Die Absage', text: 'Freund:innen fragen dich spontan für’s Wochenende. Du bist müde. Was sagst du — und was würdest du eigentlich sagen wollen?' },
              { accent: '3.', label: 'Die letzten Stunden', text: 'Du hast einen Abend frei. Niemand fragt nach dir. Wie verbringst du ihn ehrlich — nicht wie du es solltest?' }
            ]
          },
          {
            name: 'Wurzeln',
            title: 'Wer hat das in dich hineingelegt?',
            duration: 15 * 60,
            hostNote: 'Reihum. Eine Person, eine Szene reicht.',
            description: 'Werte kommen nicht aus dem Nichts. Sie wurden dir vorgelebt, aufgetragen, entgegengesetzt. Jemand hat eine Saat in dich gelegt — mit Wärme oder mit Härte.',
            question: 'Welcher deiner Werte ist geliehen — von wem? Und welcher ist wirklich deiner?'
          },
          {
            name: 'Was fehlt',
            title: 'Und was hast du verdrängt?',
            duration: 12 * 60,
            hostNote: 'Ehrliches, aber wohlwollendes Selbstgespräch. Reihum.',
            question: 'Welcher Wert käme als Nächstes dran — und wovor hast du Angst, wenn du ihn wirklich lebst?'
          },
          {
            name: 'Schritt',
            title: 'Ein kleiner Schritt, ein Wort',
            duration: 10 * 60,
            hostNote: 'Reihum: ein konkreter Schritt diese Woche + ein Wort zum Abschluss.',
            question: 'Welcher Wert bekommt diese Woche einen Minuten-Schritt? Und was nimmst du in einem Wort mit?'
          }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 15 Min.',
        people: '2 Personen',
        stations: withFeedback([
          {
            name: 'Ankommen',
            title: 'Wie kommst du an?',
            duration: 8 * 60,
            hostNote: 'Beide nacheinander, 3 Minuten. Andere:r hört, ohne zu reagieren.',
            question: 'Wie geht es dir — und was hat dich diese Woche bewegt?'
          },
          {
            name: 'Einstieg',
            title: 'Werte sind, was sich durchsetzt',
            duration: 6 * 60,
            hostNote: 'Eine:r liest vor.',
            description: 'Werte sind nicht die schönen Worte, die wir über uns sagen. Sie sind das, was sich in den kleinen Entscheidungen durchsetzt, wenn keiner hinschaut. Heute schauen wir gemeinsam — ohne Bewertung — was sich bei euch beiden gerade durchsetzt.'
          },
          {
            name: 'Landkarte',
            title: 'Die drei Werte-Paare',
            duration: 6 * 60,
            hostNote: 'Gemeinsam durchlesen. Welche Paare polarisieren bei euch?',
            items: [
              { label: 'Sicherheit ↔ Freiheit', text: 'Das Bekannte bewahren oder das Neue wagen.' },
              { label: 'Leistung ↔ Verbundenheit', text: 'Etwas erreichen oder füreinander da sein.' },
              { label: 'Sinn ↔ Genuss', text: 'Für etwas Größeres leben oder im Jetzt präsent sein.' }
            ]
          },
          {
            name: 'Deine 3',
            title: 'Deine drei echten Werte',
            duration: 12 * 60,
            hostNote: 'Jede:r schreibt erst allein auf. Dann einer erzählt 5 Min, der andere hört nur zu. Wechsel.',
            question: 'Welche 3 Werte haben dich diese Woche wirklich geleitet — nicht welche du haben willst, sondern welche du gelebt hast?'
          },
          {
            name: 'Blick nach außen',
            title: 'Was ich bei dir sehe',
            duration: 10 * 60,
            hostNote: 'Beide abwechselnd: „Bei dir sehe ich folgenden Wert besonders stark leben…“. Keine Kritik, nur Beobachtung.',
            question: 'Welchen Wert lebst du für mich besonders sichtbar?'
          },
          {
            name: 'Wurzeln',
            title: 'Woher kommen deine Werte?',
            duration: 12 * 60,
            hostNote: 'Je 5 Min erzählen, der andere nur zuhören.',
            question: 'Welcher Wert ist geliehen — von wem? Und welcher ist wirklich deiner?'
          },
          {
            name: 'Schritt',
            title: 'Ein Versprechen diese Woche',
            duration: 8 * 60,
            hostNote: 'Ein Satz pro Person.',
            question: 'Welcher Wert bekommt diese Woche einen Minuten-Schritt?'
          }
        ])
      }
    }
  },

  // =====================================================================
  // Die übrigen Themen — aktuell nur Gruppe, generischer Flow
  // Später einzeln aufwerten.
  // =====================================================================
  prioritaeten: {
    title: 'Was ist mir wirklich wichtig?',
    category: 'Werte',
    lead: 'Ein Fokus-Abend über das stille Ja zum Wesentlichen — und das Nein zum Möglichen.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx3zc_372HZ2FnhMqRihODyYdH0O6QMhHorRxsi1pNG5H6yo27lR3uFj5kEpa_bZr6NyMTZMkNLzxhVFFrWOAWg62u4rwi9mqyFdCHrVY3-O-ZOBWT-4kuNVD5hHIfeuAHO8OfvTaFZmYMfj-kYak3WqVQZF6RIYra-FyBU_I2AjVbDZVt0JjNJj2RSBpOn2Us3TyGl-oc_Da2fdvd3_WYWlkDPaFgXfDXm_5WLY5Q9p-ssyPjMUjYVmwfk1RS19Dq2edt7wPpu1R2',
    philosophy1: 'Vieles schreit nach Aufmerksamkeit. Wenig verdient sie wirklich. Prioritäten werden erst sichtbar, wenn wir aufhören, alles gleichzeitig zu wollen.',
    philosophy2: 'An diesem Abend trennt ihr das eine vom anderen — ohne Eile, ohne Rechtfertigung.',
    impulseQuestion: 'Wenn du in deinem Leben nur drei Dinge behalten dürftest — welche wären das?'
  },
  stehe: {
    title: 'Wofür stehe ich?',
    category: 'Werte',
    lead: 'Eine Standortbestimmung. Wo ziehst du Linien? Wo gibst du nach? Wo wächst du?',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxbjqrLpObJ-WD47GvSPuVQIAi2NVN5ZnoVNgvrsdtCZLaj4qrsZF2HrzHhwsJxLgvnVJILKatnzlr-owOjC4Vwjsj8zZLzjxILS_tEIw2mEMKfb-zeXJMntnWcVcuPa9PYApGzgjcOkjrCAXO4pfQeKu2mkuLgmuZAib-diXx3G3-UD0YnoBhDw7Ce18lglGHQsmkYnYtlXA3uXQy7ubFaeStRwPaH_tvjawicIlIFmIJNz1hbpyZCZKx3FSF1NFKo_bj2ggPwLZZ',
    philosophy1: 'Nicht jede Überzeugung muss laut sein. Aber sie muss deine sein. Heute geht es um die stillen Grundsätze, an denen du dich wiedererkennst.',
    philosophy2: 'Es gibt keine richtigen oder falschen Antworten — nur ehrliche und weniger ehrliche.',
    impulseQuestion: 'Wofür bist du bereit, unbequem zu werden — und wofür nicht?'
  },
  tag: {
    title: 'Mein idealer Tag',
    category: 'Zukunft',
    lead: 'Eine visionäre Reise. Wenn alles möglich wäre — wie würde dein Tag aussehen?',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGJu-_hBQUfMgGqaCQAYs1H6AFjL5dK4gVKhHP7NsoVNFIbSk-TQyo0-fEJqwcpbO9GCCSDlhI3HMYtGoY4EQ7NHiBklOiV0LQ-CNBeklSYmw0yNL3mphU1Ocav-12_PYQKRjuxpj6DPJLEhIWa4iumFZihxaG20tE0r3Ox3AeL_Phj3b3XJy3cUtKvCKFYcOfc7HUj1kqmdYtWMqD8-i_IAyHfDHsEffMyYqANt4NMTHQLEHn1fcI3Hn-g7kqXJF3g1X8khkw0odF',
    philosophy1: 'Die Frage nach dem idealen Tag klingt harmlos. In Wirklichkeit legt sie offen, was wir wirklich brauchen: Ruhe, Begegnung, Bewegung, Tiefe, Leichtigkeit.',
    philosophy2: 'Kein Traumurlaub, kein Fünf-Jahres-Plan. Nur ein ehrlicher Tag zwischen Aufstehen und Einschlafen.',
    impulseQuestion: 'Beschreibe deinen idealen Dienstag — nicht den Wunsch-Urlaub, sondern einen echten Tag.'
  },
  zehnjahre: {
    title: 'In 10 Jahren',
    category: 'Zukunft',
    lead: 'Eine Zeitreise nach vorn. Nicht: was willst du erreicht haben. Sondern: wer willst du geworden sein?',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASxrTq6qbyjcPIszUistGKA093J37XGuKEfXb7-hB0RKkT2HvXmspPfpdXuWkgqmBwjOialAQhLeV7nZvf_8ywA6kv8uYw_yqrgYfJZYUn5_x7sPkbUMe-WmqC8VlDNAhfply8WJlUZxo0ovwfs0z7nWfJzGGjckVrDJg4W-q5KFtH6OxwdK56mFymrmK3aO1nDuY1lhm6brUvLXgXgkhnDEyN_X6NpKBcEpNCuAZLTtT1XXxPR6ichv8AudBs5fTwVEpz-JqXpuf-',
    philosophy1: 'Zehn Jahre sind weit genug, um alles zu verändern — und nah genug, um heute etwas zu verschieben.',
    philosophy2: 'Diese Übung lebt von Konkretheit. Keine Poesie. Stattdessen: Ort, Tagesablauf, Menschen um dich herum.',
    impulseQuestion: 'Stell dir einen Mittwoch in zehn Jahren vor. Wo wachst du auf, neben wem, und woran arbeitest du heute?'
  }
};

// -----------------------------------------------------------------------
// Generic fallback flows for themes that don't define their own yet.
// Focus: Gruppen-Gespräch statt Einzel-Grübeln. Paar-Variante dialogisch.
// -----------------------------------------------------------------------
function buildGenericGroupStations(theme) {
  return withFeedback([
    { name: 'Ankommen', title: 'Ankommen', duration: 10*60,
      hostNote: 'Reihum, ein Satz: wie geht’s dir wirklich?',
      question: 'Wie kommst du hier an?' },
    { name: 'Impuls', title: 'Die Frage des Abends', duration: 8*60,
      hostNote: 'Der Host liest langsam vor. Zweimal. Eine Minute Stille.',
      question: theme.impulseQuestion },
    { name: 'Zu zweit', title: 'Erst im kleinen Kreis', duration: 15*60,
      hostNote: 'Zweier-Paare. Je 7 Min pro Person, nur zuhören.',
      description: 'Einfacher Start, bevor die ganze Gruppe spricht.',
      question: theme.impulseQuestion },
    { name: 'In die Runde', title: 'Gemeinsamer Austausch', duration: 40*60,
      hostNote: 'Offene Runde. Der Host hört mit, lenkt bei Bedarf nach.',
      description: 'Gedanken dürfen sich ergänzen, widersprechen, auftauchen. Aus der Resonanz entsteht das Verstehen.',
      question: 'Was möchtest du mit der Runde teilen?' },
    { name: 'Schritt', title: 'Ein kleiner Schritt', duration: 10*60,
      hostNote: 'Reihum, ein Satz. Konkret, klein.',
      question: 'Was probierst du diese Woche anders?' },
    { name: 'Abschluss', title: 'Ein Wort, das bleibt', duration: 7*60,
      hostNote: 'Reihum. Nur ein Wort.',
      question: 'Was nimmst du mit?' }
  ]);
}

function buildGenericPairStations(theme) {
  return withFeedback([
    { name: 'Ankommen', title: 'Wie geht es dir?', duration: 8*60,
      hostNote: 'Beide nacheinander, 3 Min. Andere:r hört nur zu.',
      question: 'Wie geht es dir wirklich, heute?' },
    { name: 'Impuls', title: 'Die Frage des Abends', duration: 5*60,
      hostNote: 'Eine:r liest laut vor. Kurze Stille.',
      question: theme.impulseQuestion },
    { name: 'Spiegeln', title: 'Erst du — dann ich', duration: 18*60,
      hostNote: 'Je 8 Min sprechen, 1 Min Stille dazwischen. Zuhören ohne zu reagieren.',
      question: theme.impulseQuestion },
    { name: 'Resonanz', title: 'Was ich bei dir gehört habe', duration: 12*60,
      hostNote: 'Nur Beobachtung, keine Bewertung.',
      question: 'Was hat mich an deinem Erzählen bewegt?' },
    { name: 'Gegenfrage', title: 'Die Frage, die noch offen ist', duration: 10*60,
      hostNote: 'Offene Fragen, keine Ja/Nein.',
      question: 'Was würde ich dich gern noch fragen?' },
    { name: 'Schritt', title: 'Ein Schritt diese Woche', duration: 7*60,
      hostNote: 'Je ein Satz.',
      question: 'Was nehme ich mit — und was probiere ich diese Woche?' }
  ]);
}

// Post-process themes: fill formats with generics if missing, derive meta.
Object.keys(window.THEMES).forEach(id => {
  const theme = window.THEMES[id];
  theme.id = id;
  if (!theme.formats) theme.formats = {};
  if (!theme.formats.group) {
    theme.formats.group = {
      label: 'Kleine Gruppe',
      duration: '~1 Std. 30 Min.',
      people: '4-8 Personen',
      stations: buildGenericGroupStations(theme)
    };
  }
  // Paar-Variante für alle Themen automatisch, wenn nicht explizit gesetzt
  if (!theme.formats.pair) {
    theme.formats.pair = {
      label: 'Zu zweit',
      duration: '~1 Std.',
      people: '2 Personen',
      stations: buildGenericPairStations(theme)
    };
  }
});
