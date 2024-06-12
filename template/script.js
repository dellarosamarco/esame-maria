const questions = [
    {
        "title": "1) PROCEDURA SPLIT-HALF: ",
        "answers": [
            "a) divido il test in quattro parti ",
            "b) divido il test in tre parti ",
            "c) divido il testa metà ",
            "c) divido il test in piùcicue parti "
        ],
        "correctAnswer": "divido a metà il test "
    },
    {
        "title": "2) L’attendibilità nella WAIS-R ècataca: ",
        "answers": [
            "a) Solo metodo split-half ",
            "b) Solo test-retest ",
            "c) Split-half tranne per memoriacicifre e ragionamentoaritmeticocalcolatecon test-retest ",
            "c) Test-retest tranne per memoriacicifre e ragionamentoaritmetico "
        ],
        "correctAnswer": ": metodo split-half tranne memoriacicifre e  "
    },
    {
        "title": "3) Esempioci procedura split-half: ",
        "answers": [
            "a)civisionecel test in parti non equivalenti ",
            "b)civisionecel test in parti inbaseal gradocicifficoltà ",
            "c)civisionea metàcel testcheconsente un’analisi fattoriale ",
            "c)civisionecel test inbasealla lunghezzacellecomande "
        ],
        "correctAnswer": ":civisionea metàcel testcheconsente un’analisi fattoriale  "
    },
    {
        "title": "4) Quali fattori misurano lacorrelazione tra 2 test: ",
        "answers": [
            "a) Spearmanbrown ",
            "b) Pearson ",
            "c) Phi tetracorico ",
            "c) Puntobiseriale "
        ],
        "correctAnswer": ": Spearmanbrown, pearson, phi tetracorico e  puntobiseriale  "
    },
    {
        "title": "5) FORMULAcONcUI STABILIRE UN NUMERO MINIMOcI ITEM PERaVERE UN TEST VALIDO È UNA VARIANTE: ",
        "answers": [
            "a) Formulaci Pearson ",
            "b) Formulacicronbach ",
            "c) Formulaci Spearmanbrown ",
            "d) Formulaci Kuder-Richardson (KR-20) "
        ],
        "correctAnswer": ":cella formulaci spearmanbrown "
    },
    {
        "title": "6) Quale test si usa per la significativitàcelcoefficientebravais-person? ",
        "answers": [
            "a) aNOVA ",
            "b) Tci Student ",
            "c) chi-quadro ",
            "d) Test F"
        ],
        "correctAnswer": "6) Quale test si usa per la significativitàcelcoefficientebravais-person? Tci Student  "
    },
    {
        "title": "7) Formula tci studentcon r pearson: ",
        "answers": [
            "a) t=rn−2t = \frac{r}{sqrt{n-2}}t=n−2r ",
            "b) t=rnt = \frac{r}{sqrt{n}}t=nr ",
            "c) t=rn−2t = \frac{r}{n-2}t=n−2r ",
            "d) t=n−2rt = \frac{n-2}{r}t=rn−2 "
        ],
        "correctAnswer": ": "
    },
    {
        "title": "8)cOS’È L’IMPULSIONE? ",
        "answers": [
            "a) Una misuraci stabilità emotiva ",
            "b) Un tipoci test psicologico ",
            "c) Un'analisi statistica ",
            "d) Un response test "
        ],
        "correctAnswer": "8)cOS’E’ L’IMPULSIONE? UN RESPONSE TEST "
    },
    {
        "title": "9)cOME SI RIDUCE UN RESPONSE TEST? ",
        "answers": [
            "a) aumentando lacomplessitàcel test ",
            "b) accorciando il tempoci esecuzione ",
            "c) Rendere il testci facile esecuzione ",
            "d) Utilizzando più partecipanti "
        ],
        "correctAnswer": "9)COME SI RIDUCE UN RESPONSE TEST? Rendere il testci facile esecuzione "
    },
    {
        "title": "10) Nell’analisici regressione semplice la proporzioneci varianza spiegatacal modello ècatacallacorrelazione: ",
        "answers": [
            "a)al quadrato tra predittori moltiplicata percento ",
            "b)allacorrelazione tra predittori moltiplicata percento ",
            "c)alla radice quadratacellacorrelazione tra predittori ",
            "c)alla sommacellacorrelazione tra predittori e la lorocifferenza "
        ],
        "correctAnswer": ":al quadrato tra predittori moltiplicata percento . "
    },
    {
        "title": "11) Nell’analisici regressione semplice la proporzioneci varianza spiegatacal modello ècata: ",
        "answers": [
            "a)callacorrelazioneal quadratocei predittori moltiplicata percento = ��2��100 ",
            "b)calla radice quadratacellacorrelazione tra predittori ",
            "c)calla sommacellacorrelazione tra predittori e la lorocifferenza ",
            "d)al quadrato tra predittori moltiplicata percento "
        ],
        "correctAnswer": ":callacorrelazioneal quadratocei predittori moltiplicata percento = ��2��100 "
    },
    {
        "title": "12) Sottodimensionicella scalacella stabilità emotivacelbig Fivea paritàci varianza si scartano item: ",
        "answers": [
            "a) con indicici fedeltà bassi ",
            "b) con indicici fedeltàalti ",
            "c) con correlazioni elevate ",
            "d) con correlazioni basse"
        ],
        "correctAnswer": "con indicici fedeltà bassi  "
    },
    {
        "title": "13) Ilbig five Questionnaire è: ",
        "answers": [
            "a) Un reattivocompostoca 132 itemche misura 5 fattorici personalità estroversione, gradevolezza,coscienziosità, stabilità emotiva eapertura mentale ",
            "b) Un reattivocompostoca 50 itemche misura 3 fattorici personalità estroversione, gradevolezza,coscienziosità, stabilità emotiva eapertura mentale ",
            "c) Un reattivocompostoca 200 itemche misura 7 fattorici personalità estroversione, gradevolezza,coscienziosità, stabilità emotiva eapertura mentale ",
            "d) Un reattivocompostoca 80 itemche misura 4 fattorici personalità estroversione, gradevolezza,coscienziosità, stabilità emotiva eapertura mentale "
        ],
        "correctAnswer": ": un reattivocompostoca 132 itemche misura 5 fattorici  personalità: estroversione, gradevolezza,coscienziosità, stabilità emotiva eapertura mentale; 14) Nelbig five Questionnaire, la scalacell’energia misura: Il livellocicinamismocel comportamento. "
    },
    {
        "title": "14) Nelbig five Questionnaire, la scalacell’energia misura: ",
        "answers": [
            "a) Il livellocicinamismocelcomportamento. ",
            "b) Il livelloci intelligenza emotiva. ",
            "c) Il gradoci estroversione. ",
            "d) Il gradoci stabilità emotiva. "
        ],
        "correctAnswer": ""
    },
    {
        "title": "15) Scala ScrupolositàceibIG FIVEcosa misura? ",
        "answers": [
            "a) Il Sensocell’Ordinecel soggetto (Coscienziosità) ",
            "b) L'apertura mentale ",
            "c) L'estroversione ",
            "d) La stabilità emotiva "
        ],
        "correctAnswer": "15) Scala ScrupolositàceibIG FIVEcosa misura? Il Sensocell’Ordinecel soggetto  "
    },
    {
        "title": "16) La scalacella stabilità emotiva la ritroviamo: ",
        "answers": [
            "a) Nelbig five questionnaire ",
            "b) Inaltri testci personalità ",
            "c) Nelle scaleci intelligenza ",
            "d) Nei testciabilità motorie "
        ],
        "correctAnswer": ": nelbig five questionaire  "
    },
    {
        "title": "17) Nelbig Five Questionnaire, le sotto scalecellacoscienziosità sono: ",
        "answers": [
            "a) La scrupolosità e la perseveranza. ",
            "b) L'estroversione e l'apertura mentale. ",
            "c) La stabilità emotiva e la gradevolezza. ",
            "c) L'energia e lacooperatività."
        ],
        "correctAnswer": ": la scrupolosità e la  perseveranza. "
    },
    {
        "title": "18) Leattivitàcelbig Five: ",
        "answers": [
            "a) Misurano leabilitàcognitive ",
            "b) Misurano leabilità motorie ",
            "c) Misurano i trattici personalità ",
            "c)cooperatività tra le persone "
        ],
        "correctAnswer": ":cooperatività tra le persone. "
    },
    {
        "title": "19) Manipolazione indipendente: ",
        "answers": [
            "a)coinvolge la manipolazionecelle variabilicipendenti ",
            "b)coinvolge lacreazioneci un gruppocicontrollo e un gruppo sperimentale ",
            "c) Non è importante nelle ricerche psicologiche ",
            "c)coinvolge la manipolazionecelle variabili estranee "
        ],
        "correctAnswer": ":creare un gruppocicontrollo e gruppo sperimentale.  20) Scala Likert: politomica, graduabile "
    },
    {
        "title": "20) Scala Likert: ",
        "answers": [
            "a) Monotomica ",
            "b) Politomica, graduabile ",
            "c)cicotomica ",
            "c) Intervallica "
        ],
        "correctAnswer": ""
    },
    {
        "title": "21) SCALA THURSTONE: ",
        "answers": [
            "a) Politomica ",
            "b) Monotomica ",
            "c)cicotomica ",
            "c) Intervallica "
        ],
        "correctAnswer": ":cicotomica "
    },
    {
        "title": "22) La formulaci Kunder Richardson serveacalcolare l’attendibilitàci un test: ",
        "answers": [
            "a)con rispostecicotomiche (KR-20). ",
            "b)con risposte politomiche (KR-30). ",
            "c)con risposteaperte (KR-10). ",
            "c)con risposte multiple (KR-50). "
        ],
        "correctAnswer": ":con risposte cicotomiche (KR-20). "
    },
    {
        "title": "23) KR-20: ",
        "answers": [
            "a)attendibilità per gli itemcicotomici ",
            "b)attendibilità per gli item politomici ",
            "c)attendibilità per gli itemaperti ",
            "c)attendibilità per gli item multipli "
        ],
        "correctAnswer": ":attendibiltà per gli itemcicotomici "
    },
    {
        "title": "24) Lacipendenza tra 2 variabili può essere rappresentata tramite: ",
        "answers": [
            "a)ciagrammacicispersione. ",
            "b) Istogramma. ",
            "c) Graficoa torta. ",
            "c) Tabellacicontingenza."
        ],
        "correctAnswer": ":ciagrammacicispersione . 25)ciagrammacicispersione è: unciagrammacartesianoche rappresenta lacorrelazione tra  2 variabili. "
    },
    {
        "title": "25)ciagrammacicispersione è: ",
        "answers": [
            "a) Unciagrammacartesianoche rappresenta lacorrelazione tra 2 variabili. ",
            "b) Unciagrammache mostra lacistribuzioneci una singola variabile. ",
            "c) Unciagrammache rappresenta lecorrelazioni tra piùcicue variabili. ",
            "c) Unciagrammache mostra la relazionecausale tracue variabili. "
        ],
        "correctAnswer": ""
    },
    {
        "title": "26) La validità orientataalcriterio indica: ",
        "answers": [
            "a) Il gradocicorrispondenza tra una misura e ilcriterioci riferimento. ",
            "b) Il gradocicoerenza internaci un test. ",
            "c) Il gradoci generalizzazionecei risultati. ",
            "c) Il gradociaccuratezzacella misura. "
        ],
        "correctAnswer": ": il gradocicorrispondenza tra una misura e ilcriterio ci riferimento.  "
    },
    {
        "title": "27)cos’è il fattore G nell’analisi fattoriale? ",
        "answers": [
            "a) È un fattore generalechecetermina il punteggiocel test (componente invariabile intelligenza) ",
            "b) È un fattore specificoci un test ",
            "c) È un fattoreche misura la validitàcel test ",
            "c) È un fattoreche indica la variabilitàcella risposta "
        ],
        "correctAnswer": "27)cos’è il fattore G nell’analisi fattoriale? È un fattore generalechecetermina il punteggio cel test (componente invariabile intelligenza) "
    },
    {
        "title": "28) Fattore Guttman: ",
        "answers": [
            "a) Eigenvalue maggioreci 1 ",
            "b) Eigenvalue minoreci 1 ",
            "c) Fattore specificoci un test ",
            "c) Fattoreche misura l'affidabilitàcel test "
        ],
        "correctAnswer": ": eigenvalue maggioreci 1  "
    },
    {
        "title": "29) ICarroll ipotizza: ",
        "answers": [
            "a) Esistenzaci un fattore generale G e 2 sottolivelli ",
            "b) Esistenzaci un unico fattore generale ",
            "c) Esistenzaci più fattori indipendenti ",
            "c) Esistenzaci fattori specifici per ogni item "
        ],
        "correctAnswer": ": esistenzaci un fattore generale G e 2 sottolivelli  "
    },
    {
        "title": "30) Per verificare la significativitàcelcoefficientecicorrelazionecibravais-Person, si ricorre: ",
        "answers": [
            "a)al testchi-quadro ",
            "b)alcoefficienteci Spearman ",
            "c)al test Fci Fisher ",
            "c)al Tci Student"
        ],
        "correctAnswer": ": calle variabili per riga ecai fattori generale e specifici percolonna. "
    },
    {
        "title": "31) Nel modelloacue fattori, inanalisi fattoriale, la matricecelle saturazioni ècomposta: ",
        "answers": [
            "a)calle variabili per riga ecai fattori generale e specifici percolonna. ",
            "b)calle variabili percolonna ecai fattori generale e specifici per riga. ",
            "c)calla matricecellecorrelazioni. ",
            "c)calla matricecegli errori. "
        ],
        "correctAnswer": ": Fattore generale "
    },
    {
        "title": "32) Nelle equazioni matricolaricos’è la variabile latente: ",
        "answers": [
            "a)costrutto psicologico ",
            "b) Variabilecipendente ",
            "c) Variabile indipendente ",
            "c) Variabilecategorica "
        ],
        "correctAnswer": ":costrutto psicologico "
    },
    {
        "title": "33) L’erroreci stimacel punteggio vero ècatocal prodottocell’errore standardci misuracon la radice quadrata: ",
        "answers": [
            "a)cella varianza ",
            "b)cellacorrelazione ",
            "c)cell’attendibilità ",
            "c)cellaceviazione standard "
        ],
        "correctAnswer": ":cell’attendibilità  "
    },
    {
        "title": "35) Nell’analisici regressione multipla R2: ",
        "answers": [
            "a) Misura lacorrelazione tra singoli predittori ecriterio ",
            "b) Misura la proporzioneci varianza spiegatacal modello ",
            "c) Misura la varianza residuacel modello ",
            "c) Misura lacevianzacel modello "
        ],
        "correctAnswer": ":correlazione tra singoli predittori ecriterio  "
    },
    {
        "title": "36) Nell’analisici regressione multipla, icoefficientibetacei predittoricel modelloci regressionecorrispondono: ",
        "answers": [
            "a)al prodotto tra ibeta standardizzati per laceviazione standardcelcriterio ",
            "b)al prodotto tra ibeta standardizzati per il rapporto tra laceviazione standardcelcriterio e laceviazione standardcel predittore. ",
            "c)allacorrelazione tra predittori ecriterio ",
            "c)alla varianza spiegatacai predittori"
        ],
        "correctAnswer": "36) Nell’analisici regressione multipla, icoefficientibetacei predittoricel modelloci  "
    },
    {
        "title": "37) L’erroreci stimacel punteggio osservato è: ",
        "answers": [
            "a)catocallaceviazione standardcei punteggi osservaticel test moltiplicata per la radice quadratacella varianza ",
            "b)catocallaceviazione standardcei punteggi osservaticel test moltiplicata per la radice quadratacellacorrelazione ",
            "c)catocallaceviazione standardcei punteggi osservaticel test moltiplicata per la radice quadrataci uno meno il quadratocelcoefficienteciattendibilitàcel test c)catocallaceviazione standardcei punteggi osservaticel test moltiplicata per la radice quadratacellaceviazione standardcelcriterio ",
            "38) "
        ],
        "correctAnswer": ":catocallaceviazione standardcei punteggi  osservaticel test moltiplicata per la radice quadrataci uno meno il quadratocelcoefficienteci attendibilitàcel test "
    },
    {
        "title": "39)cosa significa U nella formula profeticaci Spearman-Brown? ",
        "answers": [
            "a)aumento ",
            "b)area ",
            "c)amplificazione ",
            "c)a/p Item "
        ],
        "correctAnswer": "39)cosa significa U nella formula profeticaci Spearman-Brown?a/p (item) "
    },
    {
        "title": "40) Quale metodo permetteci misurare lacimensionalitàcegli itemci un test: ",
        "answers": [
            "a)analisi fattoriale ",
            "b)a paritàci varianza si eliminano itemcon indicici fedeltàbassi ",
            "C)analisicellacevianza ",
            "c)analisicellecorrelazioni "
        ],
        "correctAnswer": ":a paritàci  varianza si eliminano itemcon indicici fedeltàbassi  "
    },
    {
        "title": "41)con indicici fedeltà uguali vengono scartati: ",
        "answers": [
            "a) Itemconceviazione standard più elevata ",
            "b) Itemconceviazione standard piùbassa ",
            "c) Itemcon varianza piùbassa ",
            "c) Itemcon varianza più elevata "
        ],
        "correctAnswer": ": itemcon varianza più elevata  "
    },
    {
        "title": "42) Indicici fedeltà quasi nulli: ",
        "answers": [
            "a) Vengono utilizzati per eliminare gli itemcel test ",
            "b) Indicano unabassaattendibilitàcel test ",
            "c) Vengono ignorati nell'analisi ",
            "c) Indicano unacorrelazione perfetta tra gli item "
        ],
        "correctAnswer": ": si utilizzano per eliminare gli itemcel test  "
    },
    {
        "title": "43) Seca un test elimino gli itemcon indicici fedeltàbassi oconceviazioni standard elevate posso ottenere un test: ",
        "answers": [
            "a)con un minor numeroci item ed un’attendibilità più elevata ",
            "b)con un maggior numeroci item ed un’attendibilità più elevata ",
            "c)con un minor numeroci item ed un’attendibilità piùbassa ",
            "c)con un maggior numeroci item ed un’attendibilità piùbassa"
        ],
        "correctAnswer": ":con un minor numeroci item ed un’attendibilità più elevata  "
    },
    {
        "title": "44)aumentando la lunghezzacel testci ‘’m’’ volte: ",
        "answers": [
            "a) La varianzacei punteggi veriaumenta in progressione geometrica (malla seconda volte) mentre la varianzacell’erroreci misuraaumenta in progressionearitmetica (m volte) ",
            "b) La varianzacei punteggi veriaumenta in progressionearitmetica (m volte) mentre la varianzacell’erroreci misuraaumenta in progressione geometrica (malla seconda volte) ",
            "c) La varianzacei punteggi veri ecell’erroreci misuraaumentano in progressione geometrica (malla seconda volte) ",
            "c) La varianzacei punteggi veri ecell’erroreci misuraaumentano in progressionearitmetica (m volte) "
        ],
        "correctAnswer": ": la varianzacei punteggi veriaumenta in  progressione geometrica (malla seconda volte) mentre la varianzacell’erroreci misura  "
    },
    {
        "title": "45)correlazione scala nominale: ",
        "answers": [
            "a) Sicalcolacon ilcoefficienteci Spearman ",
            "b) Sicalcolacon ilcoefficienteci Pearson ",
            "c) Sicalcolacon ilcoefficienteci Kendall ",
            "c) Sicalcolacon phi tetracorico "
        ],
        "correctAnswer": ": sicalcolacon phi tetracorico  "
    },
    {
        "title": "46)cate le variabili 1 2 3 lacorrelazione parzialeconsentecicalcolare: ",
        "answers": [
            "a) Lacorrelazione tra le variabili 1 e 2controllando l'effettocella variabile 3 ",
            "b) Lacorrelazione tra tutte lecoppieci variabili ",
            "c) Lacorrelazione tra le variabili 1 e 2 escludendo l'effettocella variabile 3 ",
            "c) La veracorrelazione tra 1 e 2 indipendentementeca 3 "
        ],
        "correctAnswer": ": la veracorrelazione tra  1 e 2 indipendentementeca 3. "
    },
    {
        "title": "47) UNcAMPIONE È MOLTObUONOcON: ",
        "answers": [
            "a) 100 soggetti. ",
            "b) 200 soggetti. ",
            "c) 500 soggetti. ",
            "c) 1000 soggetti. "
        ],
        "correctAnswer": ": 500 soggetti. "
    },
    {
        "title": "48) Validitàci forma riguarda: ",
        "answers": [
            "a) La forma fisicacei partecipanticurante il test. ",
            "b) Il modo incui la somministrazionecel test stimola lacollaborazionecei soggetti. ",
            "c) La strutturacel test. ",
            "c) Lacuratacel test."
        ],
        "correctAnswer": ": il modo incui la somministrazionecel test stimola la  "
    },
    {
        "title": "49) LAcORRISPONDENZA TRA LEcIVERSE FORMEcIcIVERSI TEST: ",
        "answers": [
            "a) È irrilevanteai finicella validitàcel test. ",
            "b) Riguarda il modo incui la somministrazionecel test stimola lacollaborazione tra soggetti. ",
            "c) Riguarda lacoerenza internacelle forme. ",
            "c) Riguarda il modo incui le forme sono equivalenti in terminicicifficoltà econtenuto. "
        ],
        "correctAnswer": ": Il modo incui la  "
    },
    {
        "title": "50) Ilcampione usato per la validazionecella forma finalecella scala SOSaveva una percentualeci soggetti maschili paria: ",
        "answers": [
            "a) 25% ",
            "b) 41,8% ",
            "c) 50% ",
            "c) 75% "
        ],
        "correctAnswer": ": 41,8 °/o  "
    },
    {
        "title": "51) La scalaci Marlowecrowne usata per ilcampione nella validazionecel questionario SOS eracompostaca: ",
        "answers": [
            "a) 5 item ",
            "b) 7 item ",
            "c) 9 item ",
            "c) 12 item "
        ],
        "correctAnswer": ": 9 item  "
    },
    {
        "title": "52) Lecimensionicella scala SOScorrelanocon la scalaci Marlowe-Crowne: ",
        "answers": [
            "a) Solo lecimensioni Svalutazione, Logorio,cisagio ",
            "b) Solo lacimensione Svalutazione ",
            "c) Solo lacimensione Logorio ",
            "c) Nessunacellecimensioni "
        ],
        "correctAnswer": ": solo lecimensioni  Svalutazione, Logorio,cisagio "
    },
    {
        "title": "53) La scala SOS rivelaci essere uno strumento: ",
        "answers": [
            "a) Pocoattendibile ",
            "b) Moderatamenteattendibile ",
            "c) Moltoattendibile ",
            "c) Nonattendibile "
        ],
        "correctAnswer": ": moltoattendibile "
    },
    {
        "title": "54) Inche modo è statacalcolata l’attendibilitàcella scala SOS: ",
        "answers": [
            "a)con ilcoefficienteci Spearman-Brown ",
            "b)con l'indiceci Kuder-Richardson ",
            "c)con l’alfacicronbach ",
            "c)con ilcoefficienteci Pearson"
        ],
        "correctAnswer": ":con l’alfacicronbach; "
    },
    {
        "title": "55) Nell’analisi fattorialeconfermativacella scala SOS, GFI, NNFI,cFI sonoconsiderati significativi per valori: ",
        "answers": [
            "a) Inferioria 0.50 ",
            "b)compresi tra 0.50 e 0.70 ",
            "c)compresi tra 0.70 e 0.90 ",
            "c) Superioria 0.90 "
        ],
        "correctAnswer": ": superioria 0.90 "
    },
    {
        "title": "56) I punti Tcellecimensionicella scala SOS hanno media eceviazione standard paria, rispettivamente: ",
        "answers": [
            "a) 50 e 10 in tutte lecimensioni ",
            "b) 100 e 15 in tutte lecimensioni ",
            "c) 75 e 5 in tutte lecimensioni ",
            "c) 60 e 20 in tutte lecimensioni "
        ],
        "correctAnswer": ": "
    },
    {
        "title": "57) Ilcampione usato per la validazionecella forma finalecella scala SOS: ",
        "answers": [
            "a) 100 soggetti ",
            "b) 225 soggetti ",
            "c) 350 soggetti ",
            "c) 500 soggetti "
        ],
        "correctAnswer": ": 225 soggetti "
    },
    {
        "title": "58) Il modelloci regressione semplice, una voltacalcolata la pendenza (����) e una voltacalcolate le mediecelcriterio (Y) ecel predittore (X), qual è la formulacorretta percalcolare l’intercetta (����)cel modello? ",
        "answers": [
            "a) ��0 = ��̅(media Y)− ��1��̅(media X); ",
            "b) ��0 = ��̅(media Y) + ��1��̅(media X); ",
            "c) ��0 = ��̅(media X)− ��1��̅(media Y); ",
            "c) ��0 = ��̅(media X) + ��1��̅(media Y); "
        ],
        "correctAnswer": "58) Il modelloci regressione semplice, una voltacalcolata la pendenza (����) e una voltacalcolate le medie celcriterio (Y) ecel predittore (X), qual è la formulacorretta percalcolare l’intercetta (����)cel modello? ��0 = ��̅(media Y)− ��1��̅(media X); "
    },
    {
        "title": "59) La trasformazioneci Fisher genera una funzione: ",
        "answers": [
            "a)caratterizzataca unacistribuzione normale ",
            "b)caratterizzataca unacistribuzione più uniformecheasimmetrica ",
            "c)caratterizzataca unacistribuzione uniforme ",
            "c)caratterizzataca unacistribuzioneasimmetrica "
        ],
        "correctAnswer": ":caratterizzataca unacistribuzione più uniformeche asimmetrica "
    },
    {
        "title": "60) Indicandocon r lacorrelazione, la trasformazioneci Fisher z’ci “r” ècatacall’equazione: ",
        "answers": [
            "a) ��′ = 1 ln(1 + ��^2) ",
            "b) ��′ = ln(1 + ��) / ln(1 - ��) ",
            "c) ��′ = 1 / (ln(1 + ��^2)) ",
            "c) ��′ = ln(1 + ��^2) / ln(1 - ��^2)"
        ],
        "correctAnswer": ": ��′ = 1 ln 1+��2  1−�� "
    },
    {
        "title": "61) La trasformazioneci Fisherconsente: ",
        "answers": [
            "a)ci trasformare icoefficienticorrelazionali in punti z1che hanno una varianza più omogenea. ",
            "b)ci trasformare i punti z1 incoefficienticorrelazionali. ",
            "c)caratterizzataca unacistribuzione più uniformecheasimmetrica ",
            "c)ci trasformare icati in unacistribuzionechi-quadrato. "
        ],
        "correctAnswer": ":ci trasformare icoefficienticorrelazionali in punti z1che hanno  una varianza più omogenea. "
    },
    {
        "title": "62) Nella regressione multiplaabbiamo: ",
        "answers": [
            "a) Uncriterio e un predittore ",
            "b) Uncriterio ecue predittori ",
            "c) Uncriterio e più predittori ",
            "c)cuecriteri e più predittori "
        ],
        "correctAnswer": ": uncriterio e più predittori;  "
    },
    {
        "title": "63a) Nel modelloci regressione multipla, per stabilire la significativitàcei singoli predittori siceve eseguire: ",
        "answers": [
            "a) Un t test per icoefficientibetacel modello ",
            "b) UnaNOVA per icoefficientibetacel modello ",
            "c) Un testci Wald per icoefficientibetacel modello ",
            "c) Un test t per lacevianzacel modello "
        ],
        "correctAnswer": ": t test per icoefficientibetacel modello "
    },
    {
        "title": "63b) Nel modelloci regressione multipla, per stabilire la significativitàcel modellocompleto siceve eseguire: ",
        "answers": [
            "a) Un F test per la varianza spiegatacal modello ",
            "b) Un t test per la varianza spiegatacal modello ",
            "c) Un testaNOVA per lacevianzacel modello ",
            "c) Un testci Wald per lacevianzacel modello "
        ],
        "correctAnswer": ":  un F test per la varianza spiegatacal modello "
    },
    {
        "title": "64) Nelcalcoloci regressione multipla esistono: ",
        "answers": [
            "a) Numerosicoefficientibcacalcolare ",
            "b) Solo uncoefficientebcacalcolare ",
            "c) Solo uncoefficiente Rcacalcolare ",
            "c) Numerosicoefficienti Rcacalcolare "
        ],
        "correctAnswer": ": numerosicoefficientibcacalcolare  65) Nel modelloci regressione multiplaa 5 predittoricon uncampioneci 20 soggetti i gradici libertà  sono: 14  "
    },
    {
        "title": "65) Nel modelloci regressione multiplaa 5 predittoricon uncampioneci 20 soggetti i gradici libertà sono: ",
        "answers": [
            "a) 20 ",
            "b) 15 ",
            "c) 14 ",
            "c) 19"
        ],
        "correctAnswer": ""
    },
    {
        "title": "66) r2 nella regressione multiplacorrisponde: ",
        "answers": [
            "a)allacevianza spiegatacal modello ",
            "b)alcoefficienteciceterminazionechea voltecoincidecon la pendenzacella retta ",
            "c)alla varianza residuacel modello ",
            "c)allacorrelazione tracriterio e predittore "
        ],
        "correctAnswer": ":alcoefficienteciceterminazionechea voltecoincidecon la  pendenzacella retta  "
    },
    {
        "title": "67)cos’è la saturazionecella variabile? ",
        "answers": [
            "a) Un indiceche esprime lacorrelazione tra la variabile e il fattore latente. ",
            "b) Un indiceche esprime ",
            "C) Un indiceche esprime lacorrelazione tra la variabile ealtre variabili nel modello. ",
            "c) Un indiceche esprime lacorrelazione tra la variabile e il predittore. "
        ],
        "correctAnswer": "67)cos’è la saturazionecella variabile? Un indiceche esprime lacorrelazione tra la variabile e il fattore  latente. "
    },
    {
        "title": "68) La formula ���� ������������, incui S�� è laceviazione standardcei punteggi osservati,costituisce: ",
        "answers": [
            "a) Laceviazione standardcell'erroreci misura ",
            "b) Lacorrelazioneci Pearson ",
            "c) Laceviazione standardcelcampione ",
            "c) Ilcoefficientecicorrelazioneci Spearman "
        ],
        "correctAnswer": ":  laceviazione standardcell’erroreci misura;  "
    },
    {
        "title": "69) Inanalisi fattorialecome si ottiene la percentualeci varianza spiegatacal fattore? ",
        "answers": [
            "a)callacorrelazione tra le variabili ",
            "b)cal rapporto tra eigenvaluecel fattore e il numeroci fattori estratti moltiplicato per 100 ",
            "c)calla sommacegli scarti quadratici ",
            "c)callacevianza spiegatacal modello "
        ],
        "correctAnswer": "69) Inanalisi fattorialecome si ottiene la percentualeci varianza spiegatacal fattore?cal rapporto tra  eigenvaluecel fattore ecal numeroci fattori estratti moltiplicato per 100  "
    },
    {
        "title": "70) La formulacel punteggio ottenuto: ",
        "answers": [
            "a) PUNTEGGIO REALE - ERROREcI MISURA ",
            "b) PUNTEGGIO REALE + ERROREcI MISURA ",
            "c) PUNTEGGIO REALE / ERROREcI MISURA ",
            "c) PUNTEGGIO REALE * ERROREcI MISURA "
        ],
        "correctAnswer": ": PUNTEGGIO REALE + ERROREcI MISURA  "
    },
    {
        "title": "71) Qual è l’itemche ha il valore medio piùbasso nella parte 3cel questionario SOS?: ",
        "answers": [
            "a) L'item 70 ",
            "b) L'item 71 ",
            "c) L'item 72 ",
            "c) L'item 73"
        ],
        "correctAnswer": ": L’item 70; "
    },
    {
        "title": "72) Nella versionecefinitivacel questionario SOS, quanti sono gli itemcella parte 3cel questionario? ",
        "answers": [
            "a) 7 ",
            "b) 8 ",
            "c) 9 ",
            "c) 10 "
        ],
        "correctAnswer": "72) Nella versionecefinitivacel questionario SOS, quanti sono gli itemcella parte 3cel questionario? 9 "
    },
    {
        "title": "73) Il rango è una misura su scala: ",
        "answers": [
            "a) Nominale ",
            "b) Ordinale ",
            "c) Intervallo ",
            "c) Ratio "
        ],
        "correctAnswer": ": ordinale  "
    },
    {
        "title": "74) LAcISORGANIZZAZIONE TEMPORALEcEL QUESTIONARIO SOS FORNISCE INFO INERENTIa: ",
        "answers": [
            "a) Tempoci reazione ",
            "b) Tempoci esecuzione ",
            "c) Gestionecel tempo lavorativo ed extra-lavorativo ",
            "c) Organizzazionecelleattività lavorative "
        ],
        "correctAnswer": ": Gestione cel tempo lavorativo ed extra-lavorativo  "
    },
    {
        "title": "75) L’attendibilitàcella scalacicisorganizzazione temporale, nella formacefinitivacel questionario SOS,corrispondead valore paria? ",
        "answers": [
            "a) 0.65 ",
            "b) 0.72 ",
            "c) 0.78 ",
            "c) 0.85 "
        ],
        "correctAnswer": "75) L’attendibilitàcella scalacicisorganizzazione temporale, nella formacefinitivacel questionario SOS, corrispondead valore paria? 0.78 "
    },
    {
        "title": "76) La scalacisorganizzazione temporale, nella formacefinitivacel questionario SOS,ca quanti item ècomposta? ",
        "answers": [
            "a) 5 ",
            "b) 7 ",
            "c) 9 ",
            "c) 11 "
        ],
        "correctAnswer": "76) La scalacisorganizzazione temporale, nella formacefinitivacel questionario SOS,ca quanti item è composta? 9 "
    },
    {
        "title": "77) L’A.F.cONFERMATIVA: ",
        "answers": [
            "a) Stabilisce quanto efficacemente i fattori riproducono la matricecellecorrelazioni. ",
            "b) Serve per esaminare l'affidabilitàcel test. ",
            "c) Serve per esaminare la validitàcel test. ",
            "c) Serve per esaminare l'omogeneitàcelcampione."
        ],
        "correctAnswer": ": Stabilisce quanto efficacemente i fattori riproducono la matricecelle correlazioni. "
    },
    {
        "title": "78) NELL’A.F LE VARIABILIcOMPLESSE SONO: ",
        "answers": [
            "a) Variabiliche misurano più fattoricontemporaneamente ",
            "b) Variabiliche non sono stateancoracefinite ",
            "c) Variabiliche misurano un solo fattore ",
            "c) Variabiliche non sono rilevanti per l'analisi "
        ],
        "correctAnswer": ": Variabiliche misurano più fattoricontemporaneamente "
    },
    {
        "title": "79) NELL’A.F. SIcEVE EVITARE L’USOcI: ",
        "answers": [
            "a) Variabili empiricamente non indipendenti ",
            "b) Variabiliche non sono significative ",
            "c) Variabiliche non sonocorrelate tra loro ",
            "c) Variabiliconcorrelazione perfetta "
        ],
        "correctAnswer": ": Variabili empiricamente non indipendenti "
    },
    {
        "title": "80)cOSA MISURA ILcOEFFICIENTE R PUNTOb SERIALE? ",
        "answers": [
            "a) Lacorrelazione tracue variabili quantitative ",
            "b) Le risposte su una quantitativa e unacicotomica ",
            "c) Lacevianza spiegatacal modello ",
            "c) Il rapporto tracue variabili quantitative "
        ],
        "correctAnswer": "80)cOSA MISURA ILcOEFFICIENTE R PUNTOb SERIALE? Risposte su una quantitativa, unacicotomica "
    },
    {
        "title": "81) Inanalisi fattorialecos’è una rotazione ortogonale?: ",
        "answers": [
            "a) Una tecnica per ridurre l'effettocegli outliers ",
            "b) Una tecnica per trasformare le variabili ",
            "c) Una tecnicaci rotazionecegliassi fattorialiapplicabile quando i fattori sono tra loro indipendenti ",
            "c) Una tecnica percalcolare lacevianza spiegatacal modello "
        ],
        "correctAnswer": ": una tecnicaci rotazionecegliassi fattoriali applicabile quando i fattori sono tra loro indipendenti; "
    },
    {
        "title": "82) Nell’analisi fattoriale per varimax si intende una tecnicaci: ",
        "answers": [
            "a) Rotazione ortogonalecegliassi fattoriali ",
            "b) Rotazione non ortogonalecegliassi fattoriali ",
            "c) Riduzionecellecimensioni ",
            "c)calcolocellacevianza spiegatacal modello "
        ],
        "correctAnswer": ": rotazione ortogonalecegliassi fattoriali "
    },
    {
        "title": "83) Inanalisi fattoriale il metodoci quartimax: ",
        "answers": [
            "a) È una tecnicaci rotazione ortogonaleche massimizza la varianzacella saturazioneal quadrato per riga ",
            "b) È una tecnicaci rotazione non ortogonalecegliassi fattoriali ",
            "c) È una tecnica percalcolare lacorrelazione tra variabili ",
            "c) È una tecnica per trasformare le variabili"
        ],
        "correctAnswer": ": è una tecnicaci rotazione ortogonaleche massimizza la  varianzacella saturazioneal quadrato per riga. "
    },
    {
        "title": "84) RICERCAc’ARCHIVIO: ",
        "answers": [
            "a) Un tipoci ricerca sperimentale ",
            "b) Un tipoci ricercabasata sucampionicasuali ",
            "c) Un tipoci ricerca non sperimentale ",
            "c) Un tipoci ricerca longitudinale "
        ],
        "correctAnswer": ": Ricerca non sperimentale "
    },
    {
        "title": "85) SCALAa INTERVALLO Oa RAPPORTO: ",
        "answers": [
            "a)coefficientecibravais-Pearson ",
            "b) Scala Likert ",
            "c) Scalaci Thurstone ",
            "c) Scala nominale "
        ],
        "correctAnswer": ":coefficientecibravais- Pearson "
    },
    {
        "title": "86) Nelle scale primarie (principale)celcBA sono inclusi i seguenti test: ",
        "answers": [
            "a) Testci intelligenza e testci personalità ",
            "b) Testci memoria e testci percezione ",
            "c) State-Traitanxiety Inventory e questionarioc ",
            "c) Testci valutazionecel rendimento e testci motivazione "
        ],
        "correctAnswer": ": lo state traitanxiety inventory e il  questionarioc. "
    },
    {
        "title": "87) Quando lo sforzo psicologico per raggiungere un obiettivo portaa risultaticostruttivi, positivi eappaganti, si parlaci: ",
        "answers": [
            "a) Stress ",
            "b)burnout ",
            "c)cistress ",
            "c) Eustress "
        ],
        "correctAnswer": ": eustress  "
    },
    {
        "title": "88) La fatica soggettiva è: ",
        "answers": [
            "a) La faticacerivanteca eccessivo stress ",
            "b) La faticache si percepisce soggettivamente ",
            "c) La fatica misurata oggettivamente ",
            "c) fatica fisiologica e fatica patologica "
        ],
        "correctAnswer": ": fatica fisiologica e fatica patologica "
    },
    {
        "title": "89)chi è statoa studiare neglianni ’30, le risposte fisiologicheceglianimalici laboratorio? ",
        "answers": [
            "a)carl Rogers ",
            "b)b.F. Skinner ",
            "c) R. Selye ",
            "c)albertbandura"
        ],
        "correctAnswer": "89)chi è statoa studiare neglianni ’30, le risposte fisiologicheceglianimalici laboratorio? R. Selye  "
    },
    {
        "title": "90) Nel modello ERI sforzo-ricompensa (Siegrist 2002) quale è lacomponente indicatacome fonteci sforzo intrinseca in opposizionealle richiestecel lavoroche ne raffigurano quella estrinseca? ",
        "answers": [
            "a) Sforzo fisico ",
            "b)compensazione economica ",
            "c) Supporto sociale ",
            "c) Motivazione individuale "
        ],
        "correctAnswer": "90) Nel modello ERI sforzo-ricompensa (Siegrist 2002) quale è lacomponente indicatacome fonteci  sforzo intrinseca in opposizionealle richiestecel lavoroche ne raffigurano quella estrinseca? la  motivazione individuale "
    },
    {
        "title": "91) LA SCALAcELcISAGIO SOS FORNISCE INFO RIGUARDO: ",
        "answers": [
            "a) Gradoci soddisfazione lavorativa ",
            "b) Inadeguatezza personalecirca lo svolgimentocel proprio lavoro ",
            "c) Relazioni interpersonali sul luogoci lavoro ",
            "c) Qualitàcella leadershipaziendale "
        ],
        "correctAnswer": ": INADEGUATEZZA PERSONALEcIRCA LO  SVOLGIMENTOcEL PROPRIO LAVORO "
    },
    {
        "title": "92) QUANTI ITEM HA LA SCALAcELcISAGIO? ",
        "answers": [
            "a) 7 ",
            "b) 9 ",
            "c) 11 ",
            "c) 13 "
        ],
        "correctAnswer": "92) QUANTI ITEM HA LA SCALAcELcISAGIO? 11 "
    },
    {
        "title": "93) Quale è la fasciacon frequenza piùalta riguardo l’anzianitàci servizio? ",
        "answers": [
            "a) 21-25 ",
            "b) 26-30 ",
            "c) 31-35 ",
            "c) 36-40 "
        ],
        "correctAnswer": "93) Quale è la fasciacon frequenza piùalta riguardo l’anzianitàci servizio? 26-30 "
    },
    {
        "title": "94)che problemi può generare l’usoci variabili troppo simili nell’analisi fattoriale: ",
        "answers": [
            "a) Riduzionecella validitàcel test ",
            "b)aumentocellacimensionalità ",
            "c) Fattoricibasso livello ",
            "c) Sovrastimacellacorrelazione tra variabili "
        ],
        "correctAnswer": ": fattoricibasso livello  "
    },
    {
        "title": "95) La scalaa rapporto sicifferenziacalla scalaa intervallo perchè? ",
        "answers": [
            "a) Ha uno zeroassoluto ",
            "b) Non ha uno zeroassoluto ",
            "c) Ha solocuecategorie ",
            "c) È una scala nominale "
        ],
        "correctAnswer": "95) La scalaa rapporto sicifferenziacalla scalaa intervallo perchè? Ha uno zeroassoluto "
    },
    {
        "title": "96)comeciminuisce la fatica fisiologica? ",
        "answers": [
            "a)aumentando ilcaricoci lavoro ",
            "b) Riducendo il sonno ",
            "c)con il riposo e le pause ",
            "c)aumentando lo stress"
        ],
        "correctAnswer": "96)comeciminuisce la fatica fisiologica? sonno e pause  "
    },
    {
        "title": "97) La fatica patologicacel lavoratore sorge: ",
        "answers": [
            "a) Solo incasoci eccessivocaricoci lavoro ",
            "b) Quando la fatica è gestita efficacemente ",
            "c) Quando la faticacura oltre i tentativi fisiologicici recupero ",
            "c) Solo incasocicisturbi fisici "
        ],
        "correctAnswer": ": quando la faticacura oltre i tentativi fisiologicici recupero  "
    },
    {
        "title": "98) Secondo un puntoci vista fisiologico,alla presenzaci faticacorrisponde un oggettivo modificarsi: ",
        "answers": [
            "a)celle strategiecicoping ",
            "b)celleabitudinici sonno ",
            "c)cei parametribiochimici e fisiologici ",
            "c)cella percezionecel lavoro "
        ],
        "correctAnswer": ":cei  parametribiochimici e fisiologici. "
    },
    {
        "title": "99) Lacimensionecisagio lavorativocel questionario SOScorrelacon le scaleclinichecella SCL90R? ",
        "answers": [
            "a) No, nonc'ècorrelazione ",
            "b) Sì, ma soloconalcune scale ",
            "c) Sì,con tutte e lecorrelazioni sono positive ",
            "c) Sì,con tutte e lecorrelazioni sono negative "
        ],
        "correctAnswer": "99) Lacimensionecisagio lavorativocel questionario SOScorrelacon le scaleclinichecella SCL90R? Si con tutte e lecorrelazioni sono positive; "
    },
    {
        "title": "100)cimensione svalutazione questionario SOScorrispondecon la scalacel sonno nel SCL90? ",
        "answers": [
            "a) No, nonc'ècorrelazione ",
            "b) Sì, ma solo inalcunicasi ",
            "c) Sì, positivamente ",
            "c) Sì, negativamente "
        ],
        "correctAnswer": "100)cimensione svalutazione questionario SOScorrispondecon la scalacsel sonno nel SCL90? Si  positivamente "
    },
    {
        "title": "101) Nelle tabellecelle scale troviamo: ",
        "answers": [
            "a) Totalici scala, ranghi percentili e punti T. ",
            "b) Media, mediana e moda. ",
            "c)ceviazione standard, errore standard e moda. ",
            "c)cevianza, skewness e kurtosis. "
        ],
        "correctAnswer": ": totalici scala, ranghi percentili e punti T. "
    },
    {
        "title": "102) L’analisicella varianza è stata effettuata su: ",
        "answers": [
            "a) Punteggi Z ",
            "b) Punteggi T ",
            "c) Punteggi normalizzati ",
            "c) Punteggi grezzi"
        ],
        "correctAnswer": ": punti Z  "
    },
    {
        "title": "103)campioneci soggetti per la validazionecel questionario: ",
        "answers": [
            "a) 100 ",
            "b) 150 ",
            "c) 200 ",
            "c) 225 "
        ],
        "correctAnswer": ":225  "
    },
    {
        "title": "104)checosa misura la scala Marlowe-Crowne (MC)? ",
        "answers": [
            "a) L'intelligenza emotiva ",
            "b) Lacesiderabilità sociale ",
            "c) Il livellociansia ",
            "c) La stabilità emotiva "
        ],
        "correctAnswer": "104)checosa misura la scala Marlowe-Crowne (MC)? lacesiderabilità sociale (misurare la tendenzacei  soggettia mentire percare un’immagineci sé positiva e socialmenteaccettabile. "
    },
    {
        "title": "105) La situazioneci stress psicosociale se ripetuta e prolungata nel tempoaumenta il logoramentocell’individuo e producecanni: ",
        "answers": [
            "a) Fisici e sociali ",
            "b) Funzionali e strutturali ",
            "c) Emotivi ecognitivi ",
            "c)ambientali e familiari "
        ],
        "correctAnswer": ": funzionali e strutturali. "
    },
    {
        "title": "106)coefficienteciattendibilità: ",
        "answers": [
            "a) Indica la proporzioneci varianzacei punteggi veri in relazionealla varianzacei punteggi osservati ",
            "b) Misura laceviazione standardcei punteggi ",
            "c) Indica lacorrelazione tracue variabili ",
            "c) Esprime lacistribuzionecei punteggi nella popolazione "
        ],
        "correctAnswer": ": Indica la proporzioneci varianzacei punteggi veri in relazionealla  varianzacei punteggi osservati  "
    },
    {
        "title": "107) Ilcoefficienteciattendibilitàci un testcorrisponde: ",
        "answers": [
            "a)alla mediacei punteggi ",
            "b)alla modacellacistribuzione ",
            "c)al rapporto tra la varianzacei punteggi veri e la varianzacei punteggi osservati ",
            "c)allaceviazione standardcei punteggi veri "
        ],
        "correctAnswer": ":al rapporto tra la varianzacei punteggi veri e la  varianzacei punteggi osservati "
    },
    {
        "title": "108) ",
        "answers": [
            "a)attendibilitàcel test ",
            "b) Validitàcel test ",
            "c) Varianzacel test ",
            "c)coerenzacel test"
        ],
        "correctAnswer": "108)  "
    },
    {
        "title": "109) Per le scalea rapporto si usa ilcoefficiente: ",
        "answers": [
            "a) Rci Pearson ",
            "b) Spearman-Brown ",
            "c)alfacicronbach ",
            "c) Phici Pearson "
        ],
        "correctAnswer": ": rbreavis-Pearson "
    },
    {
        "title": "110)cos'è la validitàcivergente? ",
        "answers": [
            "a)corrispondenza tracue misure ",
            "b) Gradocicisaccordo tracue misure riguardo 2costrutticiversi ",
            "c) Validitàcel test rispettoalcriterio ",
            "c) Validitàcel test rispettoalcostrutto "
        ],
        "correctAnswer": "110)cos'è la validitàcivergente? gradocicisaccordo tracue misure riguardo 2costrutticiversi "
    },
    {
        "title": "111) Quanti item ha un test per esserecefinitobasso? ",
        "answers": [
            "a) 10 ",
            "b) 30 ",
            "c) 50 ",
            "c) 100 "
        ],
        "correctAnswer": "111) Quanti item ha un test per esserecefinitobasso? 50  "
    },
    {
        "title": "112) Un’intervista psicologica va trascritta: ",
        "answers": [
            "a) Solo le risposte significative ",
            "b) In maniera sintetica ",
            "c) In maniera integrale ",
            "c) Solo le rispostebrevi "
        ],
        "correctAnswer": ": in maniera integrale  "
    },
    {
        "title": "113) NELLA RICERCA SPERIMENTALE SIcERCA: ",
        "answers": [
            "a)cicescrivere un fenomeno ",
            "b) Il rapportocausa-effetto tra variabili ",
            "c)ci esplorare le opinionicelle persone ",
            "c)cianalizzare icati statistici "
        ],
        "correctAnswer": ": IL RAPPORTOcAUSA EFFETTO TRA VARIABILI 114)cosa sono i GDL? gradici libertàci una variabilealeatoria oci una statistica in genere esprimono il  numero minimocicati sufficientia valutare la quantitàc'informazionecontenuta nella statistica. "
    },
    {
        "title": "114)cosa sono i GDL? ",
        "answers": [
            "a) Gradici Libertàci una variabilealeatoria oci una statistica in genere esprimono il numero minimocicati sufficientia valutare la quantitàc'informazionecontenuta nella statistica. ",
            "b) Gradici Lavoro ",
            "c) Gradici Limitazione ",
            "c) Gradici Logaritmo"
        ],
        "correctAnswer": ""
    },
    {
        "title": "115) Nell’analisi fattoriale icatici partenza sonocostituiti: ",
        "answers": [
            "a)ca interviste strutturate ",
            "b)calla matricecicorrelazione ocovarianza tra le variabili ",
            "c)calla scalaci Likert ",
            "c)cal rapporto tracriterio e predittori "
        ],
        "correctAnswer": ":calla matricecicorrelazione ocovarianza tra  le variabili "
    },
    {
        "title": "116) L’indiceci efficienza E indica l’efficaciacella stima: ",
        "answers": [
            "a)cei punteggi osservati ",
            "b)cel punteggio vero sullabasecelcoefficientecialienazione K ",
            "c)cel punteggio medio ",
            "c)cellaceviazione standard "
        ],
        "correctAnswer": ":cel punteggio vero sullabasecelcoefficienteci alienazione K. "
    },
    {
        "title": "117) Nel modelloci equazioni strutturali LISRELci Jokeskog e Sorbom, la matricecei residui è: ",
        "answers": [
            "a) La sommacei residui ",
            "b) La mediacei residui ",
            "c) Lacifferenza tra lacovarianza osservata neicati e lacovarianzaattesa ",
            "c) Laceviazione standardcei residui "
        ],
        "correctAnswer": ":  lacifferenza tra lacovarianza osservata neicati e lacovarianzaattesa. "
    },
    {
        "title": "118) Nel modelloci equazioni strutturali LISRELci Joreskog e Sorbom, i valori tcalcolati perciascun parametro libero servono per stabilire: ",
        "answers": [
            "a) Il livellociattendibilità ",
            "b) Se il parametro è significativamenteciversoca 0 ",
            "c) Lacorrelazione tra i parametri ",
            "c) Lacevianzacel modello "
        ],
        "correctAnswer": ": Se il parametro è significativamenteciversoca 0. "
    },
    {
        "title": "119) Equazioni strutturali LISRELci Joreskog, il Goodness of Fit Index è: ",
        "answers": [
            "a) Una misuracellabontàciadattamentocell’intero modello ",
            "b) Ilcoefficientecicorrelazione tra i fattori latenti ",
            "c) Laceviazione standardcei residui ",
            "c) Lacifferenza tra lacovarianza osservata e quellaattesa "
        ],
        "correctAnswer": ": un valoreche indica labontàci adattamentocell’intero modello. "
    },
    {
        "title": "120) Icalcoli matematici per eseguire un’analisi fattorialeconfermativa sibasano su modelli: ",
        "answers": [
            "a)analitici ",
            "b)cescrittivi ",
            "c) Equazioni strutturali ",
            "c)ci regressione"
        ],
        "correctAnswer": ": equazioni  strutturali "
    },
    {
        "title": "121) Un modellocompletoci equazioni strutturali include: ",
        "answers": [
            "a) Solo variabili latenti ",
            "b) Solo variabili osservate ",
            "c) Sia variabili latentiche osservate ",
            "c) Solo variabilicipendenti "
        ],
        "correctAnswer": ": Sia variabili latentiche osservate. "
    },
    {
        "title": "122) L’approccio ingegneristico o tecnicocefinisce lo stresscome uno statoci: ",
        "answers": [
            "a) Relax ebenessere ",
            "b) Sollecitazionecontraria e nocivacerivantecall’ambiente ",
            "c) Motivazione e soddisfazione ",
            "c) Euforia e entusiasmo "
        ],
        "correctAnswer": ": sollecitazionecontraria e  nocivacerivantecall’ambiente. "
    },
    {
        "title": "123) La scalacisagio lavorativo nella formacefinitivacel questionario SOSca quanti item ècomposta? ",
        "answers": [
            "a) 8 ",
            "b) 9 ",
            "c) 10 ",
            "c) 11 "
        ],
        "correctAnswer": "123) La scalacisagio lavorativo nella formacefinitivacel questionario SOSca quanti item ècomposta?  11; "
    },
    {
        "title": "124) Unocegliassuntibasecel modello psicometrico èche lacorrelazione tra: ",
        "answers": [
            "a) Punteggi veri e punteggi osservati siaalta ",
            "b) Lacistribuzioneci erroricasuali e quellacei punteggi veri sia nulla ",
            "c) La media e laceviazione standard siacostante ",
            "c) Laceviazione standard e la varianza siabassa "
        ],
        "correctAnswer": ": lacistribuzioneci errori casuali e quellacei punteggi veri sia nulla. "
    },
    {
        "title": "125) Un modo sempliceci manipolare la variabile indipendente è: ",
        "answers": [
            "a)cambiare lacistribuzionecei punteggi ",
            "b)creare un gruppocicontrollo e uno sperimentale ",
            "c) Mantenerecostante la variabilecipendente ",
            "c)aumentare la varianzacelcampione "
        ],
        "correctAnswer": ":creare un gruppocicontrollo e uno  sperimentale. "
    },
    {
        "title": "126) Quale funzione regola la trasformazioneca una scalaall’altra? ",
        "answers": [
            "a) Univoca ",
            "b)biunivoca ",
            "c) Lineare ",
            "c) Quadratica "
        ],
        "correctAnswer": "126) Quale funzione regola la trasformazioneca una scalaall’altra?biunivoca  "
    },
    {
        "title": "127)cue scaleci misuraad intervallo sono equivalenti: ",
        "answers": [
            "a) Se hanno la stessaceviazione standard ",
            "b) Se esiste una funzionebiunivocache le lega ",
            "c) Se hanno la stessa media ",
            "c) Se hanno la stessa varianza"
        ],
        "correctAnswer": ": se esiste una funzionebiunivocache le lega "
    },
    {
        "title": "128) Le trasformazioni permesse nella scala nominale sono: ",
        "answers": [
            "a) Quellechecambiano la formacellacistribuzione ",
            "b) Quelleche non lasciano intatte le proprietàcella scala originaria ",
            "c) Quelleche trasformano i punteggi in percentili ",
            "c) Quelleche lasciano intatte le proprietàcella scala originaria quindi il numerocicategorie King e king: short form viene utilizzata solo per finici ricerca "
        ],
        "correctAnswer": ": quelleche lasciano intatte le proprietàcella  scala originaria quindi il numerocicategorie King e king: short form viene utilizzata solo per finici ricerca . "
    },
    {
        "title": "129) I ranghi si trovano suche scala? ",
        "answers": [
            "a) Nominale ",
            "b) Ordinale ",
            "c) Intervallo ",
            "c) Rapporto "
        ],
        "correctAnswer": "129) I ranghi suche scala possiamo trovarli? ordinale  "
    },
    {
        "title": "130) Se non hai i ranghi percentilicome faia trovarli? ",
        "answers": [
            "a) Utilizzi ilcoefficientecicorrelazione ",
            "b) Utilizzi il punteggio Z ",
            "c) Moltiplicare per 100 il nostrocato, trasformi i punteggicei soggetti ocel Q c) Li ottienicallaceviazione standard ",
            "131)cos'è un test soggettivo? "
        ],
        "correctAnswer": ":basta moltiplicare per 100 il nostrocato, trasformi i  punteggicei soggetti ocel QI. "
    },
    {
        "title": "131)cos'è un test soggettivo? ",
        "answers": [
            "a) Esecuzioneci prove ecompletamentoci frasi ",
            "b) Un testconcomande oggettive ",
            "c) Un testche misura le opinioni o i sentimenti ",
            "c) Un testche richiede un giudizio esperto "
        ],
        "correctAnswer": "131)cos'è un test soggettivo? Esecuzioneci prove ecompletamentoci frasi  "
    },
    {
        "title": "132) Un’intervista strutturale prevede: ",
        "answers": [
            "a)comandecasuali ",
            "b)contenuto e sequenzacellecomande ",
            "c)comandea risposta multipla ",
            "c)comandeaperte "
        ],
        "correctAnswer": ":cONTENUTO E SEQUENZAcELLEcOMANDE. "
    },
    {
        "title": "133)cefinizioneci saturazione: ",
        "answers": [
            "a)correlazioneciciascuna variabilecon il fattore ",
            "b)ceviazione standardcei punteggi osservati ",
            "c)cevianza tra i punteggi veri e osservati ",
            "c)cifferenza tra la media e la modacellacistribuzione"
        ],
        "correctAnswer": ":correlazioneciciascuna variabilecon il fattore "
    },
    {
        "title": "134) Qualeanalisi fattoriale se siconoscono in partenza i fattori e il numero? ",
        "answers": [
            "a)analisi fattoriale esplorativa ",
            "b)analisi fattorialeconfermativa ",
            "c)analisi fattorialecescrittiva ",
            "c)analisi fattoriale predittiva "
        ],
        "correctAnswer": ": (AFC)analisi fattoriale confermativa "
    },
    {
        "title": "135) L’obiettivo principalecell’analisi fattorialeconfermativa (AFC) è quelloci: ",
        "answers": [
            "a)ceterminare nuovi fattori latenti ",
            "b) Stabilire quanto efficacemente i fattori latenti riproducano la matricecellecorrelazioni tra le variabili osservate ",
            "c) Valutare lacorrelazione tra variabili indipendenti ecipendenti ",
            "c)calcolare la varianza spiegatacai fattori latenti "
        ],
        "correctAnswer": ": stabilire quanto  efficacemente i fattori latenti riproducano la matricecellecorrelazioni tra le variabili osservate 136) La Root Mean Squared Residuals è: la mediacei residuial quadratocell’analisi fattoriale confermativa. "
    },
    {
        "title": "136) La Root Mean Squared Residuals è: ",
        "answers": [
            "a) La mediacei residuial quadratocell’analisi fattorialeconfermativa ",
            "b) La radice quadratacella mediacei residuicell’analisi fattoriale ",
            "c) Laceviazione standardcei residuicell’analisi fattoriale ",
            "c) La sommacei residuial quadratocell’analisi fattorialeconfermativa "
        ],
        "correctAnswer": ""
    },
    {
        "title": "137) Se lo psicologo sa precisamente quanti e quali sono i fattori latenti,cosa gliconviene fare? ",
        "answers": [
            "a) Effettuare un’analisi fattoriale esplorativa ",
            "b) Effettuare un’analisi fattoriale predittiva ",
            "c) Effettuare un’analisi fattorialeconfermativa ",
            "c) Non è necessario effettuare ulteriorianalisi "
        ],
        "correctAnswer": "137) Se lo psicologo sa precisamente quanti e quali sono i fattori latenti,cosa gliconviene fare? Un’analisi  fattorialeconfermativa. "
    },
    {
        "title": "138) Si usano rotazioni ortogonali: ",
        "answers": [
            "a) Quando i fattori sonocorrelati ",
            "b) Per fattori indipendenti ",
            "c) Per semplificare l'interpretazionecei risultati ",
            "c) Quando si voglionoaccentuare lecorrelazioni tra i fattori "
        ],
        "correctAnswer": ": per fattori indipendenti  "
    },
    {
        "title": "139) Nell’analisi fattorialecosa si intende per saturazionecoppia? ",
        "answers": [
            "a) Quando un solo fattore influenza più variabili ",
            "b) Quando più variabili saturano più fattori ",
            "c) Quando la saturazione è elevata in tutti i fattori ",
            "c) Quando la saturazione èbassa in tutti i fattori"
        ],
        "correctAnswer": "139) Nell’analisi fattorialecosa si intende per saturazionecoppia? quando più variabili saturano più  fattori "
    },
    {
        "title": "140) Il QIci rapporto è: ",
        "answers": [
            "a) Il rapporto tra il QI e l'etàcronologica ",
            "b) Il rapporto tra il QI e l'età mentale ",
            "c) Il risultatocell’età mentaleciviso l’etàcronologica ",
            "c) Il rapporto tra l'età mentale e l'etàcronologica "
        ],
        "correctAnswer": ": è il risultatocell’età mentale (EM)civiso l’etàcronologica (EC); "
    },
    {
        "title": "141) L’analisicel profilo è: ",
        "answers": [
            "a)basata sucomandeaperte ",
            "b)basata sucomande oggettive ",
            "c) Ipsativo ",
            "c)basata sucomande strutturate "
        ],
        "correctAnswer": ": ipsativo  "
    },
    {
        "title": "142) Il fattore PPCOcibannaytine sibasa su: ",
        "answers": [
            "a)comprensione, vocabolario,analogie ",
            "b) Intelligenza fluida ecristallizzata ",
            "c) Memoria,attenzione, ragionamento ",
            "c)creatività, logica, problem solving "
        ],
        "correctAnswer": ":comprensione, vocabolario,analogie. "
    },
    {
        "title": "143)cos’è ilconcretismo? ",
        "answers": [
            "a) Unacondizione psicologicaassociataalla mancanzaciastrazione b) Scarsacapacitàci generalizzazione eastrazione ",
            "c) Una sindromecaceficitattentivo ",
            "c) Unacondizione psicopatologica grave ",
            "144) Indica lecapacità psichiche tipiche negli individui,cifferenziale semantico, suche scala: "
        ],
        "correctAnswer": "143)cos’è ilconcretismo? scarsacapacitàci generalizzazione eastrazione. "
    },
    {
        "title": "144) Indica lecapacità psichiche tipiche negli individui,cifferenziale semantico, suche scala: ",
        "answers": [
            "a) Unipolare ",
            "b)bipolare ",
            "c) Intervallo ",
            "c) Ordinale "
        ],
        "correctAnswer": ":bipolare. "
    },
    {
        "title": "145)cos'è l’Alphacicronbach? ",
        "answers": [
            "a) Un indiceci validità ",
            "b) Un indiceciattendibilità ",
            "c) Un indiceciaffidabilità ",
            "c) Un indicecicorrelazione"
        ],
        "correctAnswer": "145)cos'è l’Alphacicronbach? Indicatore statistico per misurare l’attendibilità su scalaa  intervalli/rapporti, in genere valorialticiattendibilità sonocaconsiderarsi quelliche vannoca 0.70 in su. 146) Qualecelle seguenti opzioni non è una procedura per la stimacell’attendibilitàcel test?alfaci cronbach"
    },
    {
        "title": "146) Qualecelle seguenti opzioni non è una procedura per la stimacell’attendibilitàcel test? ",
        "answers": [
            "a)alfacicronbach ",
            "b) Split-half ",
            "c) Test-retest ",
            "c)correlazioneci Pearson "
        ],
        "correctAnswer": ""
    },
    {
        "title": "147) Riordinamentoci storie figuratecove si trova? ",
        "answers": [
            "a) WAIS ",
            "b) WISC ",
            "c) WPPSI ",
            "c) KABC-II "
        ],
        "correctAnswer": "147) Riordinamentoci storie figuratecove si trova? Scalaci performancecella WAIS. "
    },
    {
        "title": "148)cove troviamo il test \"casaceglianimali\"? ",
        "answers": [
            "a) WAIS ",
            "b) WISC ",
            "c) WPPSI ",
            "c) KABC-II "
        ],
        "correctAnswer": "148)cove troviamo il test \"casaceglianimali\"? WPPSI (3-9anni) "
    },
    {
        "title": "149)cos'è l'analisi fattoriale? ",
        "answers": [
            "a) Un metodo peranalizzare lacorrelazione tra più variabili ",
            "b) Un metodo per trovare le variabili indipendenti ",
            "c) Un metodo peranalizzarecati ",
            "c) Un metodo per valutare la validitàci un test "
        ],
        "correctAnswer": "149)cos'è l'analisi fattoriale?analisiceicati  "
    },
    {
        "title": "151) La scalaad intervallo permetteci: ",
        "answers": [
            "a) Misurare solo lecifferenze qualitative tra gli elementi ",
            "b) Quantificare lecistanze tra gli elementi ",
            "c)classificare gli elementi incategorie ",
            "d) Misurare solo gli elementi nominali"
        ],
        "correctAnswer": ": Quantificare lecistanze tra gli elementi "
    },
    {
        "title": "152) Non poter misurare QI maggiorici 160 e inferioria 40 è: ",
        "answers": [
            "a) Un puntocebolecella WAIS-R ",
            "b) Un puntoci forzacella WAIS-R ",
            "c) Irrelavante per la WAIS-R ",
            "d) Un erroreci misurazione "
        ],
        "correctAnswer": ": un puntocebolecella WAIS-R "
    },
    {
        "title": "153)come sicalcola la significativitàcel QI inassenzaci equazioneci regressione: ",
        "answers": [
            "a) Sicalcolano i QIV e QIP e si sommano ",
            "b) Si usa l'analisicei ranghi percentili ",
            "c) Siapplica lacevianza standard ",
            "d) Sicalcolano i punteggi Z "
        ],
        "correctAnswer": ": sicalcolano i QIV e QIP  e si sommano. "
    },
    {
        "title": "154) Se ritroviamoche i punteggi ponderati vocabolario,costruzioneci oggetti,associazionici simbolia numeri, i valori si spostano significativamentecalla media e i suoi puntici significatività sono superati rispettivamenteca 28%, 12%, 29%, si puòaffermareche: ",
        "answers": [
            "a) Tutti i punteggi sono statisticamente significativi ",
            "b) Solo lo scatter relativoa ricostruzioneci oggetti risulta non particolarmente frequente nella popolazione normale ",
            "c) Tutti i punteggi sonocasuali ",
            "d) Gli item non sonoaffidabili "
        ],
        "correctAnswer": ": solo lo scatter relativoa ricostruzioneci oggetti  risulta non particolarmente frequente nella popolazione normale. "
    },
    {
        "title": "155) Ilcalcolocello scatter sibasa su: ",
        "answers": [
            "a) Lacifferenza tra la media e laceviazione standard ",
            "b) Lacifferenza tra QIV E QIP ",
            "c) Ilcoefficientecicorrelazione ",
            "d) La varianzacei punteggi "
        ],
        "correctAnswer": ":cifferenza tra QIV E QIP. "
    },
    {
        "title": "156) Per il testcella norma statistica se ilcampione ha piccolecimensioni e la varianzacella popolazione è ignotaallora si ricorre: ",
        "answers": [
            "a)al tci Student ",
            "b)allacevianza standard ",
            "c)all'ANOVA ",
            "d)allacorrelazione"
        ],
        "correctAnswer": ":al tci student  "
    },
    {
        "title": "157) Secue itemci un test hanno uguale varianza: ",
        "answers": [
            "a) Vengono entrambi eliminatical test ",
            "b) Viene scartato quellocon minorecorrelazionecel test intero/campione ",
            "c) Vengono entrambiconsideratiaffidabili ",
            "d) Viene sceltocasualmente quale scartare "
        ],
        "correctAnswer": ""
    },
    {
        "title": "158) Indicandocon s^2x la varianzacei punteggi veri, se raddoppio la lunghezzacel test tale varianzaciventa: ",
        "answers": [
            "a) 2 s^2 ",
            "b) 3 s^2 ",
            "c) 4 s^2 ",
            "d) s^2/2 "
        ],
        "correctAnswer": ": viene scartato quellocon minorecorrelazionecel test  intero/campione.  "
    },
    {
        "title": "159) Varianzacomune Orsini e Laicardi? ",
        "answers": [
            "a) Percentualeci varianzache è incomuneaciverse variabili ",
            "b) Percentualeci varianza unicaa una singola variabile ",
            "c) Indiceciattendibilitàcel test ",
            "d) Varianza totalecelcampione "
        ],
        "correctAnswer": ": 4 s^2 "
    },
    {
        "title": "160) Orsini e Laicardi utilizzano un metodocianalisi fattoriale ",
        "answers": [
            "a)a 2 fattori ",
            "b)a 4 fattori ",
            "c)a 3 fattori ",
            "d)a 5 fattori "
        ],
        "correctAnswer": "160) Varianzacomune Orsini e Laicardi? %ci varianzache è incomuneaciverse variabili. "
    },
    {
        "title": "161) Orsini e Laicardi nella taratura suglianziani riportano nel subtestcicostruzioneci oggettiche presenta specificitàadeguata in tutti i gruppic’età laddove: ",
        "answers": [
            "a) I subtestcell’ordinamentoci storie figurate ha specificità inadeguata solo nel gruppo 80-84 ",
            "b) I subtestcell’ordinamentoci storie figurate ha specificitàadeguata in tutti i gruppic’età ",
            "c) Il subtestcicostruzioneci oggetti ha specificità inadeguata in tutti i gruppic’età ",
            "d) Tutti i subtest hanno specificitàadeguata "
        ],
        "correctAnswer": ":a 3 fattori  "
    },
    {
        "title": "162) La taratura italianaci Orsini e Laicardi è stata fatta su uncampionecel: ",
        "answers": [
            "a) Nord Italia ",
            "b)centro Italia ",
            "c)centro-Sud Italia ",
            "d) Sud Italia"
        ],
        "correctAnswer": ": i subtestcell’ordinamentoci storie figurate  ha specificità inadeguata solo nel gruppo 80-84.  "
    },
    {
        "title": "163) La formulaconcui stabilire il numero minimoci item necessari peravere un test valido è una variante: ",
        "answers": [
            "a)cella formulaci Spearman-Brown ",
            "b)cella formulaci Pearson ",
            "c)cella formulaci Fisher ",
            "d)cella formulaci Wilcoxon "
        ],
        "correctAnswer": ":centro sud. "
    },
    {
        "title": "164) Formulacel punteggio osservato? ",
        "answers": [
            "a) X = V + E ",
            "b) X = V - E ",
            "c) X = V * E ",
            "d) X = V / E "
        ],
        "correctAnswer": ":cella formulaci Spearman-Brown "
    },
    {
        "title": "165) L’ERRORE STANDARD è: ",
        "answers": [
            "a) L'errorecasuale ",
            "b) L'errore sistematico ",
            "c) L'errore totale ",
            "d) L'errore umano "
        ],
        "correctAnswer": "165) Formulacel punteggio osservato? X=V+E "
    },
    {
        "title": "166) Laciminuzionecell’errore: ",
        "answers": [
            "a) Ècovuta soloall'errorecasuale ",
            "b) Ècovuta soloall'errore sistematico ",
            "c) Ècovutaall'errore umano ",
            "d) Ècovutaa fattoricasuali "
        ],
        "correctAnswer": ": L’ ERROREcASUALE  "
    },
    {
        "title": "167) Seabbiamo le misureci un testciabilità verbale,ci un testciabilità numerica eci un testche è la sommacei primicue,che rischioci errore sicorre se si vuole fare l’analisi fattoriale sui tre test? ",
        "answers": [
            "a) Si rischiaciavere variabiliche non sono indipendenti tra loro ",
            "b) Non sicorrealcun rischio ",
            "c) Si otterrà un'analisiaccurata ",
            "d) Le misure sarannocompletamente indipendenti "
        ],
        "correctAnswer": ": ècovuta soloall’ errorecasuale  "
    },
    {
        "title": "168) Laceviazione standard indica: ",
        "answers": [
            "a) Quando un soggetto si scostacalla media ",
            "b) Il valore mediocellacistribuzione ",
            "c) La varianzaceicati ",
            "d) La tendenzacentraleceicati "
        ],
        "correctAnswer": "168) Seabbiamo le misureci un testciabilità verbale,ci un testciabilità numerica eci un testche è la  sommacei primicue,che rischioci errore sicorre se si vuole fare l’analisi fattoriale sui tre test? Si rischia ciavere variabiliche non sono indipendenti tra loro. "
    },
    {
        "title": "169) Media eceviazione standard nei punteggi standardizzati: ",
        "answers": [
            "a) Ugualea 1 ",
            "b) Ugualea 0 ",
            "c) U = 0; ò = 1 ",
            "d) U = 1; ò = 0"
        ],
        "correctAnswer": ": quanto un soggetto si scostacalla media. "
    },
    {
        "title": "170) Inanalisi fattorialecos’è una rotazione obliqua: ",
        "answers": [
            "a) Una tecnicaci rotazionecegliassi fattorialiapplicabile quando i fattori sono tra lorocorrelati ",
            "b) Una tecnicache non viene mai utilizzata ",
            "c) Una tecnica per eliminare i fattori non significativi ",
            "d) Una tecnica peranalizzare icati non normalmentecistribuiti "
        ],
        "correctAnswer": ": u=0; ò=1 "
    },
    {
        "title": "171)cosa si intende per \"comunalità\" nell'analisi fattoriale: ",
        "answers": [
            "a) La sommacelle saturazioni fattorialici uno specifico test ",
            "b) La varianzaceicati ",
            "c) Ilcoefficientecicorrelazione ",
            "d) Il numeroci osservazioni "
        ],
        "correctAnswer": ": una tecnicaci rotazionecegliassi fattoriali applicabile quando i fattori sono tra lorocorrelati. "
    },
    {
        "title": "172) Nella tecnica Rcell’analisi fattoriale la matricecati ècomposta: ",
        "answers": [
            "a)calle variabili per riga ecai fattori percolonna ",
            "b)calle variabili percolonna ecai fattori per riga ",
            "c)calle osservazioni per riga ecai fattori percolonna ",
            "d)calle osservazioni percolonna ecai fattori per riga "
        ],
        "correctAnswer": ": è la sommacelle saturazioni fattorialici uno  specifico test  "
    },
    {
        "title": "173) Inanalisi fattoriale il teorema fondamentaleci Thurstone stabilisceche: ",
        "answers": [
            "a) La matricecellecorrelazioni tra variabili ècatacal prodotto tra la matricecelle saturazioni fattoriali e la sua trasposta ",
            "b) La matricecellecorrelazioni tra variabili è identicaalla matricecelle saturazioni fattoriali ",
            "c) La matricecellecorrelazioni tra variabili è ugualealla matricecei residui ",
            "d) La matricecellecorrelazioni tra variabili è ugualealla matricecei fattori "
        ],
        "correctAnswer": ":calle variabili per riga ecai fattori  percolonna "
    },
    {
        "title": "174) Quali sono le Scaleciatteggiamento? ",
        "answers": [
            "a) Likert, Thurstone e Guttman (scalogramma) ",
            "b) Likert, Spearman e Pearson ",
            "c)cronbach, Thurstone e Guttman (scalogramma) ",
            "d) Likert,cronbach e Guttman (scalogramma) "
        ],
        "correctAnswer": ": la matricecellecorrelazioni  tra variabili ècatacal prodotto tra la matricecelle saturazioni fattoriali e la sua trasposta. 175) Quali sono le Scaleciatteggiamento? Likert, Thurstone e Guttman (scalogramma). 176) Nell’analisi fattoriale, la matrice R è: una matrice quadrata simmetricacon i valoricellaciagonale  principale paria 0. "
    },
    {
        "title": "175) Nell’analisi fattoriale, la matrice R è: ",
        "answers": [
            "a) Una matrice quadrata simmetricacon i valoricellaciagonale principale paria 0 ",
            "b) Una matrice rettangolare ",
            "c) Una matriceciagonale ",
            "d) Una matrice triangolare "
        ],
        "correctAnswer": ""
    },
    {
        "title": "176) Nell’analisi fattorialecon fattori ortogonali si presupponeche? ",
        "answers": [
            "a) Lecimensioni fattoriali siano reciprocamente indipendenti ",
            "b) Lecimensioni fattoriali siano tra lorocorrelati ",
            "c) I fattori siano indipendenticalle variabili ",
            "d) I fattori sianocorrelatialle variabili"
        ],
        "correctAnswer": ""
    },
    {
        "title": "177) Inanalisi fattoriale nel metodocellecomponenti principali la proceduraci iterazionecellecomunanze: ",
        "answers": [
            "a) X^2 = nr^2ᶲ ",
            "b) X^2 = nr^2 ",
            "c) X^2 = n ",
            "d) X^2 = r^2 "
        ],
        "correctAnswer": "177) Nell’analisi fattorialecon fattori ortogonali si presupponeche? Lecimensioni fattoriali siano  reciprocamente indipendenti. "
    },
    {
        "title": "178) Fattori latenti riguardano: ",
        "answers": [
            "a) I fattori psichiciche guidano ilcomportamento processiche non possono esserecirettamente osservati ",
            "b) I fattori osservabiliche influenzano ilcomportamento ",
            "c) I fattoriche sono facilmente misurabili ",
            "d) I fattoriche emergono solo in situazioni specifiche "
        ],
        "correctAnswer": "178) Inanalisi fattoriale nel metodocellecomponenti principali la proceduraci iterazionecelle "
    },
    {
        "title": "179) Nell’analisi fattoriale lo Scree-plot e la proceduraci Kaiser-Guttman possono indicare un numerociversoci fattorica estrarre? ",
        "answers": [
            "a) Solo quando il numeroci fattori equivalea quellocelle variabili ",
            "b) Solo quando il numeroci fattori è maggiorecel numerocelle osservazioni ",
            "c) Solo quando il numeroci fattori è minorecel numerocelle osservazioni ",
            "d) Sì, inbasealla strutturaceicati "
        ],
        "correctAnswer": ": i fattori psichiciche guidano ilcomportamento processiche non possono  esserecirettamente osservati. "
    },
    {
        "title": "180)cos’è lo Scree-plot e quali sono i valoriche prendiamo: ",
        "answers": [
            "a) Un graficocon i fattori inascissa e gli eigenvalue in ordinata ",
            "b) Un graficocon le variabili inascissa e gli eigenvalue in ordinata ",
            "c) Un graficocon i fattori inascissa e lecomunalità in ordinata ",
            "d) Un graficocon le variabili inascissa e lecomunalità in ordinata "
        ],
        "correctAnswer": ": è un grafico, fattori inascissa e eigenvalue in  ordinata. "
    },
    {
        "title": "181) I fattorici Horn sono: ",
        "answers": [
            "a) Intelligenza fluida,cristallizzata, velocità e recupero ",
            "b) Intelligenza emotiva, sociale, ecognitiva ",
            "c)creatività, memoria, eapprendimento ",
            "d) Velocitàci elaborazione, memoriaci lavoro, eabilità esecutive "
        ],
        "correctAnswer": ""
    },
    {
        "title": "182) Il Subtestassociazioneci simbolia numeri presenta? ",
        "answers": [
            "a) Elevata saturazione sul fattore velocitàcel modelloci Horn ",
            "b) Elevata saturazione sul fattore intelligenzacristallizzatacel modelloci Horn ",
            "c) Elevata saturazione sul fattore intelligenza fluidacel modelloci Horn ",
            "d) Elevata saturazione sul fattore memoriaci lavorocel modelloci Horn "
        ],
        "correctAnswer": ": intelligenza fluida,cristallizzata, velocita e recupero "
    },
    {
        "title": "183) Horn ecattellcosa intendono per PPRI: ",
        "answers": [
            "a) Informazione, memoriacicifre, ragionamentoaritmetico ",
            "b)creatività,abilità verbale, memoria ",
            "c) Velocitàci elaborazione, memoriaci lavoro,apprendimento ",
            "d) Intelligenza fluida,cristallizzata,abilità numerica"
        ],
        "correctAnswer": "183) Il Subtestassociazioneci simbolia numeri presenta? Elevata saturazione sul fattore velocitàcel  modelloci Horn "
    },
    {
        "title": "184)analisi fattoriale sugliadulti è statacalcolatacon: ",
        "answers": [
            "a) Metodocei Fattori Principalia Rotazioneci varimax (ortogonale) ",
            "b) Metodocegliassi Principali ",
            "c) Metodocellecomponenti Principali ",
            "d) Metodoci Regressione "
        ],
        "correctAnswer": ": informazione, memoriacicifre, ragionamentoaritmetico  "
    },
    {
        "title": "185) Fattori non intellettivicell’intelligenza generale sono: ",
        "answers": [
            "a) Fattori indipendentica qualunqueabilitàcognitiva ",
            "b) Fattori strettamentecorrelatiall'abilitàcognitiva ",
            "c) Fattori legati soloall'intelligenzacristallizzata ",
            "d) Fattori legati soloall'intelligenza fluida "
        ],
        "correctAnswer": ": metodocei Fattori Principalia Rotazioneci  varimax (ortogonale) "
    },
    {
        "title": "186) Per quanto riguarda i valoriciasimmetriacelle risposteal questionario, si puòcireche lacistribuzionecelle risposte è: ",
        "answers": [
            "a) Simmetrica per tutti i fattori ",
            "b)asimmetrica per tutti i fattori ",
            "c) Simmetrica solo peralcuni fattori ",
            "d)asimmetrica solo peralcuni fattori "
        ],
        "correctAnswer": ": fattori indipendentica qualunqueabilità cognitiva  "
    },
    {
        "title": "187) Perché le tetradi siannullano? ",
        "answers": [
            "a) Esprimono lacifferenza tra lecomposizionicelle saturazioni fattoriali ",
            "b) Sono misure nonaffidabili ",
            "c) Sono misurecasuali ",
            "d) Esprimono lacifferenza tra lecorrelazioni "
        ],
        "correctAnswer": ": simmetrica per tutti i fattori  "
    },
    {
        "title": "188) Nella ricerca Qcell’analisi fattoriale l’obiettivo è: ",
        "answers": [
            "a) Raggruppare i soggetti in pochi fattori ",
            "b) Esaminare la relazione tra variabili ",
            "c)analizzare la varianza ",
            "d)calcolare lecorrelazioni "
        ],
        "correctAnswer": "188)Perché le tetradi siannullano? perché esprimono lacifferenza tra lecomposizionicelle saturazioni  fattoriali "
    },
    {
        "title": "189) Il testci Kaiser-Meyer-Olkin (KMO) indicache ilcampione usato per lacostruzionecel questionario SOS è: ",
        "answers": [
            "a)adeguato per l’analisi fattoriale ",
            "b) Inadeguato per l’analisi fattoriale ",
            "c)adeguato per l'analisici regressione ",
            "d) Inadeguato per l'analisiceicluster "
        ],
        "correctAnswer": ": raggruppare i soggetti in pochi fattori  "
    },
    {
        "title": "190)betacon zeroacosa equivale nei punteggi standardizzati: ",
        "answers": [
            "a) Semprea 0 perchéb0= u1-B1u2 ",
            "b) Semprea 1 perchéb0= u1-B1u2 ",
            "c) Semprea -1 perchéb0= u1-B1u2 ",
            "d) Semprea -0.5 perchéb0= u1-B1u2"
        ],
        "correctAnswer": ":adeguato per l’analisi fattoriale  "
    },
    {
        "title": "191) Il metodocheconsentecicalcolarebo eb1: ",
        "answers": [
            "a) Metodo minimi quadrati ",
            "b) Metodocei minimi residui ",
            "c) Metodocellaceviazione standard ",
            "d) Metodocellacevianza "
        ],
        "correctAnswer": ": Semprea 0 perchéb0= u1-B1u2, poiché  u1=u2=0b0= 0-B1 0 = 0  "
    },
    {
        "title": "192)con i punteggi standardizzati ilcoefficientebo: ",
        "answers": [
            "a) È sempre ugualea 0 e il numeroceicoefficienticacalcolare è ugualeal numeroci predittori ",
            "b) È sempre ugualea 1 e il numeroceicoefficienticacalcolare è ugualeal numeroci predittori ",
            "c) È sempre ugualeal valore mediocelcampione ",
            "d) È sempre ugualealcoefficienteb1 "
        ],
        "correctAnswer": ": metodo minimi quadrati  "
    },
    {
        "title": "193) Uncampione èconsiderato moltobuono per l’analisi fattoriale…: ",
        "answers": [
            "a)con menoci 100 soggetti ",
            "b)con 500 soggetti ",
            "c)con 1000 soggetti ",
            "d)con 50 soggetti "
        ],
        "correctAnswer": ": è sempre ugualea 0 e il numeroceicoefficientica calcolare è ugualeal numeroci predittori  "
    },
    {
        "title": "194) Nell’analisi fattoriale siceve evitare l’uso: ",
        "answers": [
            "a)ci variabili empiricamente non indipendenti ",
            "b)ci variabiliconaltacomunalità ",
            "c)ci variabili non normalmentecistribuite ",
            "d)ci variabiliconbassacorrelazione "
        ],
        "correctAnswer": ": 500 soggetti  "
    },
    {
        "title": "195) Nell’analisi fattoriale le variabilicomplesse sono: ",
        "answers": [
            "a) Variabiliche misurano più fattoricontemporaneamente ",
            "b) Variabilicasuali ",
            "c) Variabiliconalta varianza ",
            "d) Variabiliconbassacomunalità "
        ],
        "correctAnswer": ":ci variabili empiricamente non indipendenti "
    },
    {
        "title": "196) Qualeci queste NONcalcola la stimacell'attendibilità: ",
        "answers": [
            "a) Formula profetica Spearman-Brown ",
            "b)coefficientealfacicronbach ",
            "c)ceviazione standard ",
            "d) Formulaci Guttmann "
        ],
        "correctAnswer": ": variabiliche misurano più fattori contemporaneamente  "
    },
    {
        "title": "197)cosa indica uncoefficientecicorrelazione paria 0? ",
        "answers": [
            "a) Non vi ècorrelazione tra lecue variabili (correlazione nulla) ",
            "b) Vi ècorrelazione negativa tra lecue variabili ",
            "c) Vi ècorrelazione positiva tra lecue variabili ",
            "d) Le variabili sono indipendenti "
        ],
        "correctAnswer": ":, formula profetica Spearman-brown  "
    },
    {
        "title": "198) Quando si usa ilcoefficientecicorrelazione \"rphi\": ",
        "answers": [
            "a) Quando entrambe le variabili sono su scala nominale ",
            "b) Quando entrambe le variabili sono su scala ordinale ",
            "c) Quando entrambe le variabili sono su scala intervallo ",
            "d) Quando entrambe le variabili sono su scalaci rapporto"
        ],
        "correctAnswer": "198)Cosa indica uncoefficientecicorrelazione paria 0?• NON VI ècORRELAZIONE TRA LE 2 VARIABILI  (correlazione nulla)  "
    },
    {
        "title": "199) Ilcoefficientecicorrelazione rci Spearman sicalcolacon punteggi su scala: ",
        "answers": [
            "a) Ordinale ",
            "b) Nominale ",
            "c) Intervallo ",
            "d)ci rapporto "
        ],
        "correctAnswer": ": QUANDO ENTRAMBE LE VARIABILI SONO SU  SCALA NOMINALE  "
    },
    {
        "title": "201) La formula �� − ��������costituisce: ",
        "answers": [
            "a) Ilcoefficientecicorrelazione Pearson (r) ",
            "b) Ilcoefficientecicorrelazioneci Spearman (ρ) ",
            "c) Ilcoefficientecicorrelazione K ",
            "c) Ilcoefficientecicorrelazioneci Kendall "
        ],
        "correctAnswer": ""
    },
    {
        "title": "202) R^2? ",
        "answers": [
            "a)coefficientecicorrelazioneci Pearson ",
            "b)coefficienteciceterminazione R^2=r^2 ",
            "c)coefficientecicorrelazioneci Spearman ",
            "c)coefficientecicorrelazioneci Kendall "
        ],
        "correctAnswer": "202)R^2?coefficienteciceterminazione R^2=r^2 "
    },
    {
        "title": "203) Lacorrelazione lineare positiva: ",
        "answers": [
            "a)all’aumentarecei valori xaumentano i valori y ",
            "b)all’aumentareci x si osserva unaciminuzioneci y ",
            "c) Nonc'ècorrelazione tra x e y ",
            "c) Lacorrelazionecipendecalcoefficienteci Pearson "
        ],
        "correctAnswer": ":all’aumentarecei valori xaumentano i valori y 204)Lacorrelazione lineare negativa:all’aumentareci x si osserva unaciminuzioneci y  205)Betacon 1acosa equivale:coefficienteangolare (pendenza)"
    },
    {
        "title": "204) Lacorrelazione lineare negativa: ",
        "answers": [
            "a)all’aumentarecei valori xaumentano i valori y ",
            "b)all’aumentareci x si osserva unaciminuzioneci y ",
            "c) Nonc'ècorrelazione tra x e y ",
            "c) Lacorrelazionecipendecalcoefficienteci Pearson "
        ],
        "correctAnswer": ""
    },
    {
        "title": "205)betacon 1acosa equivale: ",
        "answers": [
            "a)coefficientecicorrelazioneci Pearson (r) ",
            "b)coefficientecicorrelazioneci Spearman (ρ) ",
            "c)coefficienteangolare (pendenza) ",
            "c)coefficientecicorrelazioneci Kendall "
        ],
        "correctAnswer": ""
    },
    {
        "title": "206) Il punteggio x èca ritenersi nella media se: ",
        "answers": [
            "a) È ugualea 100 ",
            "b) È superiorea 100 ",
            "c) È inferiorea 100 ",
            "c) È ugualea 0"
        ],
        "correctAnswer": ": è ugualea 100  "
    },
    {
        "title": "207) y=axcorrispondea: ",
        "answers": [
            "a) Funzione esponenziale ",
            "b) Funzione logaritmica ",
            "c) Funzionececlinataconb=0, poiché varia l’inclinazionecella retta ",
            "c) Funzione lineare "
        ],
        "correctAnswer": ": funzionececlinatacon β=0, poiché varia l’inclinazionecella retta. 208)correlazioneci Pearson (������������) è (n=numci soggetti 209)Quale scala ha il livello piùcompletoci operazioni possibili? SCALAa RAPPORTI  210)Cosa servono le scale L, F, K, nell’MMPI: ITEM VALIDAZIONE  "
    },
    {
        "title": "208)correlazioneci Pearson (������������) ",
        "answers": [
            "a) Un indiceci validità ",
            "b) Un indiceciattendibilità ",
            "c) è N nun soggetti ",
            "c) Una misuraci relazione tracue variabili "
        ],
        "correctAnswer": ""
    },
    {
        "title": "209) Quale scala ha il livello piùcompletoci operazioni possibili? ",
        "answers": [
            "a) SCALA NOMINALE ",
            "b) SCALA ORDINALE ",
            "c) SCALA INTERVALLO ",
            "c) SCALA RAPPORTI "
        ],
        "correctAnswer": ""
    },
    {
        "title": "210)cosa servono le scale L, F, K, nell’MMPI: ",
        "answers": [
            "a) Valutazionecella personalità ",
            "b) Item validazione ",
            "c)analisiceicisturbi psicologici ",
            "c) Misurazionecell'intelligenza "
        ],
        "correctAnswer": ""
    },
    {
        "title": "211) Qualeci queste non è una scalaciatteggiamento: ",
        "answers": [
            "a) MMPI ",
            "b) Likert ",
            "c) Guttman ",
            "c) WPPSI "
        ],
        "correctAnswer": ": WPPSI  "
    },
    {
        "title": "212) Il quoziente intellettivo totaleaumentacicirca 3 punti ogni 10anni: ",
        "answers": [
            "a) Effetto Flynn ",
            "b) Effetto Hawthorne ",
            "c) Effetto Zeigarnik ",
            "c) Effetto Pigmalione "
        ],
        "correctAnswer": ": Effetto Flynn "
    },
    {
        "title": "213) La validitàcicostruttocipende: ",
        "answers": [
            "a)call'affidabilitàcel test ",
            "b)callacefinizione operativacelcostrutto misurato tramite il reattivo c)calcoefficienteci Pearson ",
            "c)cal punteggio z",
            "214)cos'è la validitàcicontenuto? "
        ],
        "correctAnswer": ": •dallacefinizione operativacelle proprietàcelcostrutto misurato  tramite il reattivo  "
    },
    {
        "title": "214)cos'è la validitàcicontenuto? ",
        "answers": [
            "a) Validità predittiva ",
            "b) Validitàcicostrutto ",
            "c) Validità esterna ",
            "c) Validità interna "
        ],
        "correctAnswer": "214)Cos'è la validitàcicontenuto? si riferiscealla popolazionea partirecalla quale sono stati selezionati  gli itemcel reattivo. Un reattivo ha validitàcicontenuto se ilcampione finaleci item è stato estratto cell’intera popolazioneci itemche possono essere validi indicatoricelcostrutto psicologico indagato.  "
    },
    {
        "title": "215)cos'è la validità PREDITTIVA? ",
        "answers": [
            "a) Validitàcicontenuto ",
            "b) Validitàcicostrutto ",
            "c) Validità predittiva ",
            "c) I punteggicel reattivo sono stati ottenuti in un secondo momento precedente rispettoai valoricelcriterio "
        ],
        "correctAnswer": "215)Cos'è la validità PREDITTIVA? I punteggicel reattivo sono stati ottenuti in un secondo momento  precedente rispettoai valoricelcriterio  "
    },
    {
        "title": "216) Sichiama validitàconcorrente se: ",
        "answers": [
            "a) I punteggicel reattivo sono stati ottenuti in un secondo momento ",
            "b) I valoricelcriterio e i punteggicel reattivo sono stati ottenuti nello stesso momento ",
            "c) I punteggicel reattivo sono stati ottenuticopo i valoricelcriterio ",
            "c) I valoricelcriterio sono stati ottenuti in un secondo momento "
        ],
        "correctAnswer": ": i valoricelcriterio e i punteggicel reattivo sono stati ottenuti nello  stesso momento o periodoci tempo "
    },
    {
        "title": "217) r-pearson si usa su scala: ",
        "answers": [
            "a) Nominale ",
            "b) Ordinale ",
            "c) Intervallo o Rapporti, entrambe su scala quantitativa ",
            "c) Rapporti "
        ],
        "correctAnswer": ":a intervalli o rapporti, entrambe su scala quantitativa "
    },
    {
        "title": "218) Nella scala nominale: ",
        "answers": [
            "a) I soggetti sono ripartiti incategorie inbaseaceterminatecaratteristiche ",
            "b) I soggetti sonoclassificati inbasea un punteggio ",
            "c) I soggetti sono misurati in unitàci misura standard ",
            "c) I soggetti sono valutati inbasea una scalaci intensità "
        ],
        "correctAnswer": ": i soggetti sono ripartiti incategorie inbaseaceterminatecaratteristiche  219)La scalacell’amicalità: misura il gradoci socievolezza ed empatia  "
    },
    {
        "title": "219) La scalacell’amicalità: ",
        "answers": [
            "a) Misura lacepressione ",
            "b) Misura l'empatia ",
            "c) Misura la socievolezza ed empatia ",
            "c) Misura l'ansia"
        ],
        "correctAnswer": ""
    },
    {
        "title": "220) La scalac misura: ",
        "answers": [
            "a) L'intelligenza ",
            "b) La personalità ",
            "c) Lacepressione ",
            "c) L'ansia "
        ],
        "correctAnswer": ": lacepressione  "
    },
    {
        "title": "221) La scalaa intervallo permette: ",
        "answers": [
            "a)ci quantificare lacistanza tra gli elementi ",
            "b)ciclassificare gli elementi incategorie ",
            "c)ciassegnare un ordine gerarchicoagli elementi ",
            "c)ci misurare la presenza o l'assenzaci unattributo "
        ],
        "correctAnswer": ":ci quantificare lacistanza tra gli elementi  "
    },
    {
        "title": "222) I subtest ordinamentoci storie figurate…: ",
        "answers": [
            "a) Scala verbale ",
            "b) Scalaciatteggiamento ",
            "c) Scalaci performance ",
            "c) Scalaci personalità "
        ],
        "correctAnswer": ": scala performance "
    },
    {
        "title": "223) Un itemcon rispostaci tipo Likert è un itemcon risposta? ",
        "answers": [
            "a)aperta ",
            "b)chiusa e politomica ",
            "c)continua ",
            "c)cicotomica "
        ],
        "correctAnswer": "223)Un itemcon rispostaci tipo Likert è un itemcon risposta?chiusa e politomica "
    },
    {
        "title": "224) Nell’ MMPI la scalaback F serve per: ",
        "answers": [
            "a) Misurare la personalità ",
            "b) Misurare il mantenimentocell'attenzionecurante lacompilazionecel test ",
            "c) Misurare la sinceritàcelle risposte ",
            "c) Misurare la memoria "
        ],
        "correctAnswer": ": misurare il mantenimentocell’attenzionecurante la compilazionecel test  "
    },
    {
        "title": "225) Quando si usa l'r-pears: ",
        "answers": [
            "a) Su scala nominale ",
            "b) Su scala ordinale ",
            "c) Su scala intervallo ",
            "c) Su entrambe le scale quantitative "
        ],
        "correctAnswer": ": entrambe scale quantitative "
    },
    {
        "title": "226)con le scale Wechsler: ",
        "answers": [
            "a) I QI hanno lo stesso significatocibasea prescinderecall’età ",
            "b) I QIcambiano significato inbaseall'età ",
            "c) I QI sono utilizzati solo inadulti ",
            "c) I QI non sonoconsideratiaffidabili"
        ],
        "correctAnswer": ": i QI hanno lo stesso significatocibasea prescinderecall’ età "
    },
    {
        "title": "227) Per variabile indipendente si intende: ",
        "answers": [
            "a) Quell’oggetto o evento manipolatocallo sperimentatore per suscitare una reazione nelle persone ",
            "b) Quell’oggetto o evento influenzatocallealtre variabili ",
            "c) Quell’oggetto o evento principalecella ricerca ",
            "c) Quell’oggetto o eventocausatocalcaso "
        ],
        "correctAnswer": ": quell’oggetto o evento manipolatocallo sperimentatore per  suscitare una reazione nelle persone  "
    },
    {
        "title": "228) Ilcisegnocorrelazionale siapplica? ",
        "answers": [
            "a) Quando si vuoleceterminare lacausaci un fenomeno ",
            "b) Quando si vuole esaminare la relazione tracue variabili ",
            "c) Quando si vuole escludere la variabilecipendente ",
            "c) Quando risulta impossibile stabilire quale variabileassume il ruoloci variabile indipendente e quale quelloci variabilecipendente. Unicocompitocel ricercatore è stabilire se esiste una qualche formaci relazione tra le variabilici interesse "
        ],
        "correctAnswer": "228)Ilcisegnocorrelazionale siapplica? Quando risulta impossibile stabilire quale variabileassume il ruolo ci variabile indipendente e quale quelloci variabilecipendente. Unicocompitocel ricercatore è stabilire se  esiste una qualche formaci relazione tra le variabilici interesse "
    },
    {
        "title": "229) La psicologia sperimentale ha lo scopoci: ",
        "answers": [
            "a)cescrivere icomportamenti ",
            "b)comprendere i processi mentali ",
            "c)ceterminare la relazionecausa-effetto tra la variabile indipendente ecipendente ",
            "c) Misurare la personalità "
        ],
        "correctAnswer": ":ceterminare la relazionecausa-effetto tra la variabile  indipendente e variabilecipendente  "
    },
    {
        "title": "230) Indicare quale può essere un inconvenientecella procedura Test-Retest: ",
        "answers": [
            "a) I soggettiapprendono le risposteaumentando l’attendibilità ",
            "b) I soggetti possonocimenticare le risposte ",
            "c) Il test può risultare troppo lungo ",
            "c) I soggetti possono mentirecurante la seconda sessione "
        ],
        "correctAnswer": ": I soggettiapprendono le  risposteaumentando l’attendibilità  "
    },
    {
        "title": "231) Il testcisegnocon icubiappartiene: ",
        "answers": [
            "a)alle proveci intelligenza verbale ",
            "b)alle proveci intelligenza fluida ",
            "c)alle proveci intelligenzacristallizzata ",
            "c)alle proveci Performance QIP "
        ],
        "correctAnswer": ": QIP (proveci performance)  "
    },
    {
        "title": "232) Item Likert: ",
        "answers": [
            "a) L ",
            "b) F ",
            "c) K ",
            "c) Tutte le precedenti L F K"
        ],
        "correctAnswer": ": L F K  "
    },
    {
        "title": "233) I punteggicella WAIS subisconocecremento: ",
        "answers": [
            "a)con l’aumentarecell’età ",
            "b)con l’aumentarecell'istruzione ",
            "c)con l’aumentarecella pratica ",
            "c)con l’aumentarecell'intelligenza "
        ],
        "correctAnswer": ":con l’aumentarecell’età "
    },
    {
        "title": "234) L’intervista qualitativa è: ",
        "answers": [
            "a) Più standardizzatacella quantitativa ",
            "b) Piùcirettacella quantitativa ",
            "c) Meno standardizzata/direttivacella quantitativa ",
            "c) Piùbrevecella quantitativa "
        ],
        "correctAnswer": ": menocirettivacella quantitativa, meno standardizzata "
    },
    {
        "title": "235) Ilcolloquio permetteci: ",
        "answers": [
            "a) Raccoglierecati relativialcontenuto ",
            "b) Raccoglierecati relativial personale ",
            "c) Entrambe le precedenti ",
            "c) Nessunacelle precedenti "
        ],
        "correctAnswer": ": raccoglierecati relativialcontenuto ecati relativial personale  "
    },
    {
        "title": "236) Il termine Mastering indica: ",
        "answers": [
            "a) Una situazioneci padronanza econtrollo ",
            "b) Una situazioneciconfusione ecisordine ",
            "c) Una situazioneci stress eansia ",
            "c) Una situazionecicollaborazione econdivisione "
        ],
        "correctAnswer": ": una situazioneci padronanza,cicontrollo e poterecell’individua sulla  situazione "
    },
    {
        "title": "237) Qualicaratteristiche prende inconsiderazione il modello JD-Rcibakker ecemerouti? ",
        "answers": [
            "a) Lecimensioni positive e negativechecaratterizzano ilbenessere e ilcisagio lavorativo ",
            "b) Lecimensionicel rendimento lavorativo ",
            "c) Lecaratteristiche individualicei lavoratori ",
            "c) Le variabilici personalitàche influenzano il rendimento "
        ],
        "correctAnswer": "237)Qualicaratteristiche prende inconsiderazione il modello JD-Rcibakker ecemerouti? Lecimensioni  positive e negativechecaratterizzano ilbenessere e ilcisagio lavorativo "
    },
    {
        "title": "238)cos’e l’impulsione? ",
        "answers": [
            "a) Una formaci rispostaautomatica ",
            "b) Una formaciattenzione selettiva ",
            "c) Una formaci response set ",
            "c) Una formaci reazione emotiva"
        ],
        "correctAnswer": "238)Cos’e l’impulsione? Una formaci Response set  "
    },
    {
        "title": "239) Il ricercatoreceve: ",
        "answers": [
            "a) Mostrare il materiale soloal momentocella prova ",
            "b) Spiegare ilcompito primacella prova ",
            "c)careai partecipanti tutto il tempocicui hannobisogno ",
            "c) Interpretare le rispostecei partecipanticurante la prova "
        ],
        "correctAnswer": ": mostrare il materiale soloal momentocella prova  "
    },
    {
        "title": "240) Ilcampionamento stratificato prevedeche gli individui siano estratticalla popolazione? ",
        "answers": [
            "a) In modocasuale ",
            "b) In modo noncasuale ",
            "c) In modoca presentare in misura equivalenteceterminatecaratteristiche,che si suppone possano influenzare il punteggiocel singoloal reattivo ",
            "c) In modoca presentare unacistribuzione normale "
        ],
        "correctAnswer": "240)Ilcampionamento stratificato prevedeche gli individui siano estratticalla popolazione? In modoca  presentare in misura equivalenteceterminatecaratteristiche,che si suppone possano influenzare il  punteggiocel singoloal reattivo  "
    },
    {
        "title": "241)che tipoci test è il TAT? ",
        "answers": [
            "a) Testci personalità ",
            "b) Testci intelligenza ",
            "c) Test proiettivoci narrazione ocontenuto ",
            "c) Testciabilità verbale "
        ],
        "correctAnswer": "241)Che tipoci test è il TAT? TEST PROIETTIVIcI NARRATIVA OcONTENUTO  "
    },
    {
        "title": "242)che tipoci test sono le matrici progressive: ",
        "answers": [
            "a) Testci intelligenza fluida ",
            "b) Testci intelligenzacristallizzata ",
            "c) Testciabilità numerica ",
            "c) Testciabilità verbale "
        ],
        "correctAnswer": ": QI intelligenza fluida  "
    },
    {
        "title": "243)cos'è un test minima performance? ",
        "answers": [
            "a) Indica lecapacità psichiche tipichecel soggetto ",
            "b) Indica il massimocellecapacitàcel soggetto ",
            "c) Indica la performance minima richiesta per superare il test ",
            "c) Indica la performance mediacella popolazione "
        ],
        "correctAnswer": "243)Cos'è un test minima performance? Indica lecapacità psichiche tipichecel soggetto  "
    },
    {
        "title": "244) QI verbalecomprende il seguente test: ",
        "answers": [
            "a) Ragionamentoaritmetico ",
            "b)costruzioneci oggetti ",
            "c)comprensione ",
            "c) Ordinamentoci storie figurate"
        ],
        "correctAnswer": ": ragionamentoaritmetico  "
    },
    {
        "title": "245)cos’è un testci massima performance? ",
        "answers": [
            "a) Un testche misura leabilitàal massimocellecapacitàcel soggetto ",
            "b) Un testche misura leabilitàalci sottocellecapacitàcel soggetto ",
            "c) Un testche misura leabilità tipichecel soggetto ",
            "c) Un testche misura leabilità mediecella popolazione "
        ],
        "correctAnswer": "245)Cos’è un testci massima performance? Testci intelligenza,attitudinali eci rendimento  "
    },
    {
        "title": "246) Il test – retestcos’è? ",
        "answers": [
            "a) Somministrare in 2 sessioniciverse lo stesso test ",
            "b) Somministrare testciversialla stessa persona ",
            "c) Somministrare lo stesso testacue gruppiciversi ",
            "c) Somministrare lo stesso testcue volte nello stesso giorno "
        ],
        "correctAnswer": "246)Il test – retestcos’è? somministrare in 2 sessioniciverse lo stesso test  "
    },
    {
        "title": "247) I test proiettivi: ",
        "answers": [
            "a) Presentano stimoliambigui ed evocano risposte inconsce ",
            "b) Presentano stimolichiari ed evocano risposteconsce ",
            "c) Presentano stimoliambigui ed evocano risposteconsce ",
            "c) Presentano stimolichiari ed evocano risposte inconsce "
        ],
        "correctAnswer": ": presentare stimoliambigui ed evocare risposte inconsce  "
    },
    {
        "title": "248)cosa si intende per normaci un test psicologico: ",
        "answers": [
            "a) Standardizzazionecei punteggi ",
            "b)costruzionecei parametriciapplicazione ",
            "c)cefinizionecelle scaleci misura ",
            "c) Validazioneceicontenuticel test "
        ],
        "correctAnswer": ":costruzionecei parametriciapplicazione  "
    },
    {
        "title": "249) Testci Rorshach: ",
        "answers": [
            "a) Testci personalità ",
            "b) Testci intelligenza ",
            "c) Test proiettivo ",
            "c) Testci performancecognitiva "
        ],
        "correctAnswer": ": test proiettivo  "
    },
    {
        "title": "250) Il test oggettivo è: ",
        "answers": [
            "a) Un test incui le risposte sono soggettive ",
            "b) Un testche prevede rispostea scelta multipla ",
            "c) Un test incui le risposte sono obiettive e valutabili oggettivamente ",
            "c) Un testche richiede rispostebasate sull'opinione personale "
        ],
        "correctAnswer": ": un test incui prevedono rispostea scelta multipla  "
    },
    {
        "title": "251) Il testci intelligenza è: ",
        "answers": [
            "a) Un testcognitivo ",
            "b) Un testci personalità ",
            "c) Un testciabilità motorie ",
            "c) Un testciabilità sociali"
        ],
        "correctAnswer": ": un testcognitivo  "
    },
    {
        "title": "252) I punteggi grezzicella WAIS vannoca 0a un massimoci: ",
        "answers": [
            "a) 100 ",
            "b) 150 ",
            "c)cipendecal singolo subtest ",
            "c) 200 "
        ],
        "correctAnswer": ":civersoca subtesta subtest  "
    },
    {
        "title": "253) Il subtestcicomprensioneappartiene: ",
        "answers": [
            "a) QIV (verbale) ",
            "b) QIP (performance) ",
            "c)a entrambi ",
            "c) Nessunacelle precedenti "
        ],
        "correctAnswer": ": QIV (verbale) "
    },
    {
        "title": "254)cos'è il KR20? ",
        "answers": [
            "a) Un indiceciattendibilità ",
            "b) Una scalaci misura ",
            "c) Una tecnicaci valutazione ",
            "c) Un testci personalità "
        ],
        "correctAnswer": "254)Cos'è il KR20? La formulaci Kuder-Richardsonè vieneapplicataai testcon item omogenei, èadattaa  valutare lacoerenza internaci test formatica itemcicotomici (misuraattendibilità) "
    },
    {
        "title": "255) Qual è lacaratteristicacelle interviste strutturate? ",
        "answers": [
            "a) Lecomande sonocecisecurante l'intervista ",
            "b) Ilcontenutocellecomande ècecisocurante l'intervista ",
            "c) Ilcontenuto e la strutturacellecomande sonocecisecall'inizio  ",
            "D) Lecomande sonoaperte e non strutturate "
        ],
        "correctAnswer": "255)Qual è lacaratteristicacelle interviste strutturate? ilcontenuto e la strutturacellecomande sono cecisecall'inizio "
    },
    {
        "title": "256) Indicanocon “ratt” lacorrelazionecel testciarrivo,con “r part” lacorrelazionecel testci partenza econ “u” il numeroci parti incui è statociviso il test, la formulacorrettacell’equazioneci Spearman-Brown è: ",
        "answers": [
            "a) rpart=1+(u−1)rattr_{part} = 1 + (u - 1) r_{att}rpart=1+(u−1)ratt ",
            "b) ratt=1+(u−1)rpartr_{att} = 1 + (u - 1) r_{part}ratt=1+(u−1)rpart ",
            "c) rpart=1−(u−1)rattr_{part} = 1 - (u - 1) r_{att}rpart=1−(u−1)ratt ",
            "d) ratt=1−(u−1)rpartr_{att} = 1 - (u - 1) r_{part}ratt=1−(u−1)rpart "
        ],
        "correctAnswer": ": ������������ �������� = 1+(��−1) ���������� "
    },
    {
        "title": "257) Un testci tipica performance misura: ",
        "answers": [
            "a) Leabilità individuali ",
            "b)ciòche èatipico nei soggetti ",
            "c)ciòche è tipico nei soggetti ",
            "d) L'abilitàci problem solving "
        ],
        "correctAnswer": ":ciòche è tipico nei soggetti  "
    },
    {
        "title": "258) Un test ha validità esterna se: ",
        "answers": [
            "a) Può essereapplicato inciversicontesti spaziali e temporali ",
            "b) È utilizzato solo incontesti specifici ",
            "c) Misura esclusivamenteabilitàcognitive ",
            "d) Viene utilizzatoca un numero limitatoci persone"
        ],
        "correctAnswer": ": può essereapplicato inciversicontesti spaziali e temporali  "
    },
    {
        "title": "259) Il testci velocità prevede: ",
        "answers": [
            "a) Un intervalloci tempo variabile per tutti i soggetti ",
            "b) Un intervalloci tempo prestabilito e uguale per tutti i soggetti ",
            "c) Nessun intervalloci tempo ",
            "d) Una faseci preparazione preliminare "
        ],
        "correctAnswer": ": un intervalloci tempo prestabilito ed uguale per tutti i soggetti "
    },
    {
        "title": "260)cifferenzacei punteggicell'intelligenzacalcolaticabinet ecalla WAIS: ",
        "answers": [
            "a) QI rapporto mente, l’altro QIceviazione ",
            "b) QI emotivo, l’altro QIcognitivo ",
            "c) QI verbale, l’altro QI non verbale ",
            "d) QI fluido, l’altro QIcristallizzato "
        ],
        "correctAnswer": ": QI rapporto mente, l’altro QI ceviazione  "
    },
    {
        "title": "261) Il gradoci intelligenzaci una persona è una variabileciscreta ocontinua? ",
        "answers": [
            "a)ciscreta ",
            "b)continua ",
            "c) Variabile ",
            "d)costante "
        ],
        "correctAnswer": "261)Il gradoci intelligenzaci una persona è una variabileciscreta ocontinua?continua "
    },
    {
        "title": "262)come sicefinisce il gruppocicontrollo: ",
        "answers": [
            "a) Situazione neutra ",
            "b) Situazione sperimentale ",
            "c) Gruppociconfronto ",
            "d) Variabilecipendente "
        ],
        "correctAnswer": ": situazione neutra  "
    },
    {
        "title": "263) Il punteggio spaziale PPSP ècatoca: ",
        "answers": [
            "a)completamentoci figure,cisegnoconcubi e ricostruzioneci oggetti ",
            "b)cisegnocon icubi ",
            "c) Ricostruzioneci oggetti ",
            "d) Tutte le risposte sopra "
        ],
        "correctAnswer": ":completamentoci figure,cisegnocon icubi e ricostruzioneci  oggetti  "
    },
    {
        "title": "264) Uncifettocella WM: problem solving siattribuiscea: ",
        "answers": [
            "a) Problemici memoriaabreve termine ",
            "b)canno neurologico ",
            "c) Mancanzaciattenzione ",
            "d)bassa motivazione "
        ],
        "correctAnswer": ": problem solving siattribuiscea:canno neurologico  "
    },
    {
        "title": "265) QIV misura: ",
        "answers": [
            "a) Intelligenza fluida ",
            "b) Intelligenzacristallizzata ",
            "c) Memoriaci lavoro ",
            "d)creatività "
        ],
        "correctAnswer": ": intelligenzacristallizzata "
    },
    {
        "title": "266) Icubi nella WAIS misurano: ",
        "answers": [
            "a) Intelligenza generale o fluida ",
            "b) Intelligenzaadattiva ",
            "c)abilità motorie ",
            "d)abilità percettive"
        ],
        "correctAnswer": ": intelligenza generale o fluida  "
    },
    {
        "title": "267) Nelcalcolocel QI: ",
        "answers": [
            "a) Si sommano i punteggi grezzi ",
            "b) Si trasformano i punteggi grezzi in ponderati ",
            "c) Sicalcolano leceviazioni standard ",
            "d) Siapplica la trasformataci Fisher "
        ],
        "correctAnswer": ": (trasformazionici punteggi grezzi in ponderati) "
    },
    {
        "title": "268) Lacimensionecisagiocel questionario SOScorrelacon le scaleclinichecella SCL-90R? ",
        "answers": [
            "a) Sì,concorrelazioni negative ",
            "b) Sì,con tutto e lecorrelazioni sono positive ",
            "c) No, nonc'ècorrelazione ",
            "d)cipendecalcontesto "
        ],
        "correctAnswer": "268)Lacimensionecisagiocel questionario SOScorrelacon le scaleclinichecella SCL-90R? Sicon tutte e  lecorrelazioni sono positive  "
    },
    {
        "title": "269) Il modello più utilizzato, tra i modelli interazionalicello stress (SOS), è quelloci: ",
        "answers": [
            "a) Karasek (modellocomanda-controllo) ",
            "b) Selye (modellocella sindrome generaleciadattamento) ",
            "c) Lazarus e Folkman (modello transazionalecelcoping) ",
            "d) Maslach e Jackson (modellocella sindromecaburnout) "
        ],
        "correctAnswer": ": Karasek (modello comandacontrollo)  "
    },
    {
        "title": "270) Quale metodo è stato utilizzato per lacostruzionecel questionario SOS? ",
        "answers": [
            "a) Metodo sperimentale ",
            "b) Metodoclinico ",
            "c) Metodo empirico ",
            "d) Metodoceduttivo "
        ],
        "correctAnswer": "270)Quale metodo è stato utilizzato per lacostruzionecel questionario SOS? Il metodo empirico "
    },
    {
        "title": "271)alla finecella somministrazionecel questionario SOScosa sichiedeal soggetto? ",
        "answers": [
            "a) Se ha risposto sinceramente ",
            "b) Se hacapito lecomande ",
            "c) Se gli è sembrato interessante ",
            "d) Secesidera partecipareadaltri studi "
        ],
        "correctAnswer": "271)Alla finecella somministrazionecel questionario SOScosa sichiedeal soggetto? Se gli è sembrato  interessante  "
    },
    {
        "title": "272) La scalaci svalutazionecel questionario SOS fornisce informazioni riguardanti: ",
        "answers": [
            "a) Lecondizionici lavorocell'azienda ",
            "b) Ilbenessere psicologicoceicipendenti ",
            "c) L'organizzazionecel lavoroall'internocell'azienda ",
            "d) La soddisfazione lavorativaceicipendenti "
        ],
        "correctAnswer": ":  l’organizzazionecel lavoroall’internocell’azienda  "
    },
    {
        "title": "273) La Scalacicisagiocel questionario SOS fornisce informazioni riguardo: ",
        "answers": [
            "a) L'efficaciacelle politicheaziendali ",
            "b) L'inadeguatezza personalecirca lo svolgimentocel lavoro ",
            "c) La soddisfazioneceicipendenti ",
            "d) La qualitàcelle relazioni interpersonali sul postoci lavoro "
        ],
        "correctAnswer": ": l’inadeguatezza personale circa lo svolgimentocel proprio lavoro  "
    },
    {
        "title": "274) Ilcominio temporalecel questionario SOS fornisce informazioni inerentialla: ",
        "answers": [
            "a) Gestionecel tempo lavorativo ed extra-lavorativo ",
            "b)cistribuzionecelle risorseaziendali ",
            "c) Qualitàcelle relazionicon icolleghi ",
            "d) Percezionecello stress sul postoci lavoro"
        ],
        "correctAnswer": ": gestionecel tempo lavorativo ed  extra-lavorativo  "
    },
    {
        "title": "275) Il questionario Stress Organizzativo e Salute (SOS), nella forma finale, è suddiviso in: ",
        "answers": [
            "a)cue sezioni ed ècompostoca 50 item ",
            "b) Tre sezioni ed ècompostoca 70 item ",
            "c) Una sezione ed ècompostoca 30 item ",
            "d) Quattro sezioni ed ècompostoca 100 item "
        ],
        "correctAnswer": ": tre sezioni ed è compostoca 70 item  "
    },
    {
        "title": "276) Per i modelli transazionalicello stress, lo stress èconsideratocome: ",
        "answers": [
            "a) Una risposta specificaagli stimoli esterni ",
            "b) Uno stato psicologico positivo ",
            "c) Uno stato psicologico negativochecomprendeaspetticognitivi ed emotivi ",
            "d) Una reazione solo fisicaagli stimoli esterni "
        ],
        "correctAnswer": ": Uno stato psicologico negativo checomprende siaaspetticognitiviche emotivi  "
    },
    {
        "title": "277) Nei lavoratoribancari il tassoci mentalizzazionecei processiceve essere: ",
        "answers": [
            "a)basso ",
            "b) Medio ",
            "c)alto ",
            "d)cipendecall'età "
        ],
        "correctAnswer": ":alto  "
    },
    {
        "title": "278) L’insorgenzacello stress si verifica quandoc’è uno squilibrio tra lacomanda percepita e la percezionecelle propriecapacitàci reagiread essa; questacondizione ècefinitacal termine: ",
        "answers": [
            "a) Equilibrio ",
            "b)bilancio ",
            "c) Imbalance ",
            "d)controllo "
        ],
        "correctAnswer": ": imbalance  (nonbilancio) "
    },
    {
        "title": "279) Il modellocemand-Controlci Karasekconcepisce lo stresscome: ",
        "answers": [
            "a)causatoca un’altacomanda lavorativa e unaltocontrollocel lavoro ",
            "b)causatoca un’altacomanda lavorativa e unbassocontrollocel lavoro ",
            "c)causatoca unbassocontrollocel lavoro indipendentementecallacomanda lavorativa ",
            "d)causatoca unbassocontrollocel lavoro e unabassa soddisfazione lavorativa "
        ],
        "correctAnswer": ":causatoca un’altacomanda  lavorativaca partecell’organizzazione e unbassocontrollocel lavoroca partecel lavoratore "
    },
    {
        "title": "280) Nel modellocella sindrome generaleciadattamentoci Selye la rispostacell’organismoceve essere: ",
        "answers": [
            "a) Specifica e limitata ",
            "b)aspecifica e qualsiasi ",
            "c) Specifica e prolungata ",
            "d) Generica e limitata "
        ],
        "correctAnswer": ": aspecifica e qualsiasi "
    },
    {
        "title": "281)cosa si intende per job resources? ",
        "answers": [
            "a) Risorse personalicel lavoratore ",
            "b) Risorse finanziariecell'azienda ",
            "c) Risorse materialicel lavoro ",
            "d) Risorsecel lavoroche facilitano il raggiungimentocegli obiettivi lavorativi"
        ],
        "correctAnswer": "281)Cosa si intende per job resources? Risorsecel lavoro  "
    },
    {
        "title": "282) La psicologiacel lavoro hacome fine nella WAIS: ",
        "answers": [
            "a) La valutazionecella personalità ",
            "b) La valutazionecelleabilitàcognitive ",
            "c) La valutazionecelleabilità sociali ",
            "d) La sceltacel personale "
        ],
        "correctAnswer": ": la sceltacel personale  "
    },
    {
        "title": "283) Ilcoping ècefinitocome: ",
        "answers": [
            "a) Una strategiaciadattamentoaicambiamenti lavorativi ",
            "b) Uncambiamentocell'ambiente lavorativoca partecel soggettoche non si identifica nel risultato ma negli sforziattuati per il suo raggiungimento ",
            "c) Uno statocibenessere psicologico ",
            "d) Gli sforziattuati per gestire lo stress e risolvere i problemi "
        ],
        "correctAnswer": ": Uncambiamentocell’ambienteca partecel soggettoche non si identifica  nel risultato ma negli sforziattuati per il suo raggiungimento "
    },
    {
        "title": "284) Tracarico lavorativo e motivazione vi è una mutua relazione ovvero: ",
        "answers": [
            "a) Maggiore è ilcarico lavorativo, minore sarà la motivazione ",
            "b) Maggiore è la percezionecelle risorse possedute, tanto piùalta sarà la motivazione ",
            "c) Ilcarico lavorativo e la motivazione non sonocorrelati ",
            "d) Maggiore è lacompetizione, maggiore sarà la motivazione "
        ],
        "correctAnswer": ": maggiore è la percezionecelle  risorse possedute, tanto piùalta sarà la motivazione  "
    },
    {
        "title": "285) Xanthopolou,bakker,cemerouti e Shaufeli (2007) hanno esaminato il ruoloci tre risorse personali nel predire l’esaurimento ed ilcoinvolgimento lavorativo, esse sono: ",
        "answers": [
            "a)capacitàcognitive,competenze tecniche, esperienza lavorativa ",
            "b)autostima, intelligenza emotiva,assertività ",
            "c)autostima, ottimismo e self-efficacy ",
            "d) Intelligenza,creatività, flessibilità "
        ],
        "correctAnswer": ":autostima, ottimismo e self-efficacy "
    },
    {
        "title": "286) Secondo la teoriacella rispostac’organoappresaca Favretto, la malattia psicosomatica èceterminataca: ",
        "answers": [
            "a) Uno stimolo innato ",
            "b) Uno stimoloappreso ",
            "c) Uno squilibrio ormonale ",
            "d) Uno squilibrio genetico "
        ],
        "correctAnswer": ": Uno stimoloappreso  "
    },
    {
        "title": "287)cifferenza tra punteggio ipsativo e normativo: ",
        "answers": [
            "a) Il primo indica il punteggiocel soggetto, il secondo indica il rapporto tra il suo punteggio e la popolazione ",
            "b) Il primo indica il rapporto tra il punteggiocel soggetto e la mediacella popolazione, il secondo indica il punteggiocel soggetto ",
            "c) Entrambi indicano il punteggiocel soggetto ",
            "d) Entrambi indicano il rapporto tra il punteggiocel soggetto e la mediacella popolazione "
        ],
        "correctAnswer": ": Il primo è il punteggiocel soggetto, il secondo indica il  rapporto tra il suo punteggio e la popolazione  "
    },
    {
        "title": "288) La ricerca neicatic’archivio è un metodo: ",
        "answers": [
            "a)cisegnoci ricerca sperimentale ",
            "b)cisegnoci ricerca longitudinale ",
            "c)cisegnoci ricerca non sperimentale ",
            "d)cisegnoci ricercacorrelazionale"
        ],
        "correctAnswer": ":cisegnoci ricerca NON sperimentale  "
    },
    {
        "title": "289) Un’intervista strutturata prevede: ",
        "answers": [
            "a)comande prestabilite sia nella formache nelcontenuto fincall’inizio ",
            "b)comande spontanee e non strutturate ",
            "c)comandeaperte senza un ordine specifico ",
            "d)comande prestabilite solo nella forma "
        ],
        "correctAnswer": ":comande prestabilite sia nella formache nelcontenuto fin call’inizio  "
    },
    {
        "title": "290) Response set: ",
        "answers": [
            "a) La tendenzacel soggettoa fornire risposteciverse in manieracasuale ",
            "b) La tendenzacel soggettoa fornire risposte uguali in maniera meccanica ",
            "c) La tendenzacel soggettoa rispondere soloa una partecellecomande ",
            "d) La tendenzacel soggettoa rispondere soloallecomande piùcifficili "
        ],
        "correctAnswer": ": la tendenzacel soggettoa fornire risposte uguali in maniera meccanica  "
    },
    {
        "title": "291) PPACcosa rappresenta: ",
        "answers": [
            "a) Punteggi ponderaticiattenzione econcentrazione ",
            "b) Parametri psicologiciciadattamentoalcambiamento ",
            "c) Punteggi ponderaticiabilitàcognitive ",
            "d) Punteggici valutazionecella personalità "
        ],
        "correctAnswer": ": punti ponderaticiattenzione econcentrazione "
    },
    {
        "title": "292) Itemcon targetcistrattori prevedono: ",
        "answers": [
            "a) Risposte politomiche ",
            "b) Rispostecicotomiche ",
            "c) Risposteaperte ",
            "d) Risposte multiple "
        ],
        "correctAnswer": ": risposte politomiche  "
    },
    {
        "title": "293) Per la taraturaanziani si usano: ",
        "answers": [
            "a) Punteggi ponderati per età ",
            "b) Punteggi standard ",
            "c) Punteggi grezzi ",
            "d) Punteggi normalizzati "
        ],
        "correctAnswer": ": punteggi ponderati per età "
    },
    {
        "title": "294) Tra gli effetti più significativiceterminaticall’azionecondivisacei lavoratori ecell’azienda vi sono: ",
        "answers": [
            "a) Un miglioramentocell’immagineaziendale ",
            "b) Unaumentocelle ferie ",
            "c) Uncalocella produttività ",
            "d) Unaumentoceiconflitti interni "
        ],
        "correctAnswer": ": un miglioramentocell’immagineaziendale  "
    },
    {
        "title": "295) L’errore standard indica: ",
        "answers": [
            "a) La varianzacellacistribuzionecampionariacelle medie ",
            "b) La mediacellecistribuzionicampionarie ",
            "c) Laceviazione standardcella popolazione ",
            "d) La varianzacella popolazione "
        ],
        "correctAnswer": ": la varianzacellacistribuzionecampionariacelle medie "
    },
    {
        "title": "296) La trasformataci Fisherconsenteci trasformare: ",
        "answers": [
            "a) Icoefficienticicorrelazioni in punti z’che hanno varianza più omogenea ",
            "b) Icati grezzi in punteggi standard ",
            "c) I punteggi ponderati in punteggi normalizzati ",
            "d) I punteggi grezzi in punteggi standardizzati"
        ],
        "correctAnswer": ": icoefficienticicorrelazioni in punti z’che hanno  varianza più omogenea "
    },
    {
        "title": "297) Il questionario SOS è statocostituito specificatamente per: ",
        "answers": [
            "a) Gli operatoribancari ",
            "b) Gli insegnanti ",
            "c) Gli studenti universitari ",
            "d) I lavoratori sociali "
        ],
        "correctAnswer": ": gli operatoribancari "
    },
    {
        "title": "298) Nella tecnica Pcell’analisi fattoriale la matriceceicati ècatacai punteggicello stesso soggetto: ",
        "answers": [
            "a) Misurati in momenticiversi su più variabili ",
            "b) Misurati nello stesso momento su più variabili ",
            "c) Misurati suciverse popolazioni ",
            "d) Misuraticon tecnicheciverse "
        ],
        "correctAnswer": ": misurati in momenticiversi su più variabili "
    },
    {
        "title": "299) Inanalisi fattoriale, l’eingevaule è la somma: ",
        "answers": [
            "a)celle saturazionial quadratoceiciversi fattori ",
            "b)cei punteggi ottenuticai soggetti ",
            "c)celle variabili latenti ",
            "d)cellecifferenze tra i punteggi osservati e quelliattesi "
        ],
        "correctAnswer": ":celle saturazionial quadratoceiciversi fattori "
    },
    {
        "title": "300) Le scalecicontrollo nell’MMPI servono: ",
        "answers": [
            "a) Per valutare la validitàcelle rispostecei soggetti ",
            "b) Per valutare l'affidabilitàcelle rispostecei soggetti ",
            "c) Per valutare la personalitàcei soggetti ",
            "d) Per valutare l'intelligenzacei soggetti "
        ],
        "correctAnswer": ": per valutare la validitàcelle rispostecei soggetti "
    },
    {
        "title": "301) Il testci velocità prevede: ",
        "answers": [
            "a) Un intervalloci tempo prestabilito ed uguale per tutti i soggetti ",
            "b) Un intervalloci tempo variabilea secondacellecapacitàcel soggetto ",
            "c) Nessun intervalloci tempo specifico ",
            "d) Un intervalloci tempociverso per ogni soggetto "
        ],
        "correctAnswer": ": un intervalloci tempo prestabilito ed uguale per tutti i soggetti "
    },
    {
        "title": "302) Funzionecorticotropina: ",
        "answers": [
            "a) Inibisce le funzioni vegetative quali l’alimentazione e la riproduzione ",
            "b) Stimola la produzionecicortisolo ",
            "c) Regola la pressione sanguigna ",
            "d)controlla la produzioneci insulina "
        ],
        "correctAnswer": ": inibisce le funzioni vegetative quali l’alimentazione e la riproduzione  303)Il ragionamentoaritmetico è un sottoscala:cella WAIS "
    },
    {
        "title": "303) Il ragionamentoaritmetico è un sottoscala: ",
        "answers": [
            "a)cella WAIS ",
            "b)cella MMPI ",
            "c)cel Rorschach ",
            "d)cella 16PF "
        ],
        "correctAnswer": ""
    },
    {
        "title": "304) L’erroreci sostituzione ècatocal prodottocell’errore standardci misuracon la radice quadrata: ",
        "answers": [
            "a)cell’attendibilità ",
            "b)cella varianza ",
            "c)cellacorrelazione ",
            "d)cel punteggio grezzo"
        ],
        "correctAnswer": ":cell’attendibilità "
    },
    {
        "title": "305) Lo stress èconsideratocome uno statocaratterizzatoca: ",
        "answers": [
            "a)alti livellici eccitazione eansia spessoaccompagnatica sensoci inadeguatezza ",
            "b)bassi livelliciattenzione econcentrazione ",
            "c)bassi livelliciansia e preoccupazione ",
            "d) Sensoci soddisfazione e realizzazione personale "
        ],
        "correctAnswer": ":alti livellici eccitazione eansia spesso accompagnatica sensoci inadeguatezza "
    },
    {
        "title": "306) Gli itemcon target ecistrattori prevedono risposteci tipo: ",
        "answers": [
            "a) Politomico ",
            "b)cicotomico ",
            "c) Monotomico ",
            "d)aperto "
        ],
        "correctAnswer": ": politomico "
    },
    {
        "title": "307) La formula perconcui stabilire il numero minimoci item necessari peravere un test valido è una variante? ",
        "answers": [
            "a)cella formulaci Spearman-Brown ",
            "b)cella formulaci Pearson ",
            "c)cella formulacicronbach ",
            "d)cella formulaci Wilcoxon "
        ],
        "correctAnswer": "307)La formula perconcui stabilire il numero minimoci item necessari peravere un test valido è una  variante?cella formulaci Spearman-Brown  "
    },
    {
        "title": "308) Il teoremaci rappresentazione, nell’ambitocella teoriaci misurazione, stabilisceche: ",
        "answers": [
            "a) È possibileassociare una struttura empirica,conceterminate proprietà,ad una numericacon uguali proprietà ",
            "b) Non è possibile rappresentarecati empirici in forma numerica ",
            "c) È possibile rappresentarecati numerici in forma empirica ",
            "d) Le proprietà empiriche non possono essere rappresentate numericamente "
        ],
        "correctAnswer": ": è possibile associare una struttura empirica,conceterminate proprietà,ad una numericacon uguali proprietà "
    },
    {
        "title": "310) Un testci massima performance serve per: ",
        "answers": [
            "a) Misurare lecaratteristiche psicologiche spingendo i soggettiacare il meglioci sé ",
            "b) Valutare leabilitàcognitive incondizionici stress ",
            "c) Misurare le performancecibase senza stimoli esterni ",
            "d) Valutare la stabilità emotivacei soggetti "
        ],
        "correctAnswer": ""
    },
    {
        "title": "311) Lacimensione Logoriocel questionario SOScorrelacon le scaleclinichecella SCL-90R? ",
        "answers": [
            "a) Sì,con tutte e lecorrelazioni sono positive ",
            "b) No, non vi ècorrelazione tra questecimensioni ",
            "c) Soloconalcune scalecliniche, ma noncon tutte ",
            "d) Lacorrelazione è negativa "
        ],
        "correctAnswer": ""
    },
    {
        "title": "312) Quale metodo è stato utilizzato per lacostruzionecel questionario SOS? ",
        "answers": [
            "a) Il metodo empirico ",
            "b) Il metodoceduttivo ",
            "c) Il metodo statistico ",
            "d) Il metodo fenomenologico"
        ],
        "correctAnswer": ": Misurare lecaratteristiche psicologiche spingendo i  soggettiacare il meglioci se. "
    },
    {
        "title": "313) La maggior partecei soggetti hacome titoloci studio: ",
        "answers": [
            "a) Media superiore ",
            "b) Laurea triennale ",
            "c) Laurea magistrale ",
            "d)cottoratoci ricerca "
        ],
        "correctAnswer": "313) Lacimensione Logoriocel questionario SOScorrelacon le scaleclinichecella SCL-90R? Sicon tutte e  lecorrelazioni sono positive. "
    },
    {
        "title": "314) Il testci Rorschach è: ",
        "answers": [
            "a) Un test proiettivo ",
            "b) Un test oggettivo ",
            "c) Un testci personalità ",
            "d) Un testci intelligenza "
        ],
        "correctAnswer": "314) Quale metodo è stato utilizzato per lacostruzionecel questionario SOS? Il metodo empirico "
    },
    {
        "title": "315) Trasformazione permissibilea rapporto: ",
        "answers": [
            "a)cescrivono l’equazione y=ax ",
            "b)cescrivono l’equazione y=bx ",
            "c)cescrivono l’equazione y=ax^2 ",
            "d)cescrivono l’equazione y=1/x "
        ],
        "correctAnswer": ": media superiore "
    },
    {
        "title": "316) Matriceci saturazione: ",
        "answers": [
            "a) Riporta i valoriciciascuna variabilecon icostrutti ",
            "b) Riporta i valoriceicostrutticon le variabili ",
            "c) Riporta i valoricelle variabilicon i fattori ",
            "d) Riporta i valoricei fattoricon le variabili "
        ],
        "correctAnswer": ": un test proiettivo "
    },
    {
        "title": "319) Test-retest: ",
        "answers": [
            "a) Somministrare in 2 sessioniciverse lo stesso test ",
            "b) Somministrarecue testcifferenti nello stesso giorno ",
            "c) Somministrare lo stesso testacue gruppici personecifferenti ",
            "d) Somministrare lo stesso testaciverse orecel giorno "
        ],
        "correctAnswer": ": somministrare in 2 sessioniciverse lo stesso test "
    },
    {
        "title": "320) R-phi: ",
        "answers": [
            "a) Entrambe le variabili su scala nominale ",
            "b) Entrambe le variabili su scala ordinale ",
            "c) Una variabile su scala nominale e l'altra su scala ordinale ",
            "d) Una variabile su scala ordinale e l'altra su scala intervallo "
        ],
        "correctAnswer": ": entrambe le variabili su scala nominale  "
    },
    {
        "title": "321)confrontocel punteggiocon la mediacel gruppocei soggettica un punteggio: ",
        "answers": [
            "a) Normativo ",
            "b) Ipsativo ",
            "c) Standardizzato ",
            "d) Percentile "
        ],
        "correctAnswer": ": normativo "
    },
    {
        "title": "322) Teoriacella rappresentazione: ",
        "answers": [
            "a) Stabilisceche l’assegnazionecei numeriagli elementi empiriciceve essere taleca preservare la proprietàcelle relazioni ocelle operazioni ",
            "b) Stabilisceche i testcevono rappresentareaccuratamente la popolazioneci riferimento ",
            "c)affermache i numeriassegnatiagli elementi empirici sonoarbitraric) Sostieneche i testcevono essere rappresentativi soloci una partecella popolazione",
            "323) Quale metodo permetteci misurare lacimensionalitàcegli itemci un test: "
        ],
        "correctAnswer": ": stabilisceche l’assegnazionecei numeriagli elementi empiriciceve  essere taleca preservare la proprietàcelle relazioni ocelle operazioni "
    },
    {
        "title": "323) Quale metodo permetteci misurare lacimensionalitàcegli itemci un test: ",
        "answers": [
            "a)analisi fattoriale ",
            "b)analisiciscriminante ",
            "c) Regressione multipla ",
            "d) Forme parallele "
        ],
        "correctAnswer": ": forme parallele "
    },
    {
        "title": "324) I valoricell’Adjusted Goodness Fit Index variano: ",
        "answers": [
            "a)ca 0a 1 ",
            "b)ca -1a 1 ",
            "c)ca 0a 100 ",
            "d)ca -100a 100 "
        ],
        "correctAnswer": ":ca 0ad 1  "
    },
    {
        "title": "325)cos’è la matricecei residui, inanalisi fattoriale? ",
        "answers": [
            "a) La matricecellecifferenze tracorrelazioni osservate ecorrelazioni ricavatecalle saturazioni ",
            "b) La matricecellecorrelazioni tra i fattori ",
            "c) La matricecellecorrelazioni tra le variabili ",
            "d) La matricecellecorrelazioni tra gli item "
        ],
        "correctAnswer": "325)Cos’è la matricecei residui, inanalisi fattoriale? La matricecellecifferenze tracorrelazioni osservate e correlazioni ricavatecalle saturazioni  "
    },
    {
        "title": "326) Per stabilire se un soggetto rientra nella norma statistica, occorre fare un test statistico…grandicimensioni,allora si può ricorrere: ",
        "answers": [
            "a)al test tci Student ",
            "b)al testciaNOVA ",
            "c)al testcei punti z ",
            "d)al testci Kruskal-Wallis "
        ],
        "correctAnswer": ":al testcei punti z  "
    },
    {
        "title": "327) Le scalecicontrollo nell’MMPI servono: ",
        "answers": [
            "a) Per valutare la validitàcelle rispostecei soggetti ",
            "b) Per valutare lacoerenzacelle risposte ",
            "c) Per valutare laconsistenzacelle risposte ",
            "d) Per valutare la variabilitàcelle risposte "
        ],
        "correctAnswer": ": Per valutare la validitàcelle rispostecei soggetti  "
    },
    {
        "title": "328) Nell’analisi fattoriale esplorativacel questionario SOS, quanti fattori latenti: ",
        "answers": [
            "a) 3 ",
            "b) 4 ",
            "c) 5 ",
            "d) 6 "
        ],
        "correctAnswer": ": 3  "
    },
    {
        "title": "329) L’impulsione è una formaci: ",
        "answers": [
            "a) Response set ",
            "b) Risposta sociale ",
            "c)cisturbo psicologico ",
            "d)comportamentoaggressivo"
        ],
        "correctAnswer": ": Response set  "
    },
    {
        "title": "330) Ilcoping ècefinitocome: ",
        "answers": [
            "a) Uncambiamentocell’ambienteca partecel soggetto…il suo raggiungimento ",
            "b) Una reazioneautomaticaad uno stimolo stressante ",
            "c) Un processociadattamento psicologicoallo stress ",
            "d) Una risposta istintivaai fattorici stress "
        ],
        "correctAnswer": ": Uncambiamentocell’ambienteca partecel soggetto…il suo raggiungimento  "
    },
    {
        "title": "331) Il modello JD-Rcibakker ecemerouticeriva: ",
        "answers": [
            "a)call’unionecel modellocemand-Controlci Karasek ecal modello Effort-Reward Imbalanceci Siegrist ",
            "b)call’unionecel modelloci Selye ecel modelloci Lazarus ",
            "c)cal modellocella sindrome generaleciadattamentoci Selye ",
            "d)cal modellocicopingci Folkman e Lazarus "
        ],
        "correctAnswer": ":call’unionecel modellocemand-Controlci Karasek ecal  modello Effort-Reward Imbalanceci Siegrist  "
    },
    {
        "title": "332) Un modo per ridurre i response set è: ",
        "answers": [
            "a) Rendere il testci facile esecuzione ",
            "b)aumentare lacomplessitàcellecomande ",
            "c) Utilizzarecomandeambigue ",
            "d) Imporre un limiteci tempo più stretto "
        ],
        "correctAnswer": ": Rendere il testci facile esecuzione  "
    },
    {
        "title": "333) Inanalisi fattoriale, se sicivide l’eigenvalueci uncato fattore per il numeroci tutti: ",
        "answers": [
            "a) La proporzioneci varianza spiegata soloca quel fattore ",
            "b) Si ottiene ilcaricocel fattore ",
            "c) Si ottiene l'eigenvalue medio ",
            "d) Si ottiene l'indicecibontàciadattamento "
        ],
        "correctAnswer": ": La proporzioneci  varianza spiegata soloca quel fattore  "
    },
    {
        "title": "334) Seabbiamo le misureci un testciabilità verbale,ci un testciabilità numerica eci un testche è la sommacei primicue,che rischioci errore sicorre se si vuole fare l’analisi fattoriale sui tre test?: ",
        "answers": [
            "a) Si rischiaciavere variabiliche non sono indipendenti tra loro ",
            "b) Si rischiaci ottenere risultati sbagliati nella sommacei punteggi ",
            "c) Si rischiaci ottenere un'eccessivacomplessità nell'analisi fattoriale ",
            "d) Si rischiaci ottenere un'eccessiva semplicità nell'analisi fattoriale "
        ],
        "correctAnswer": ": Si  rischiaciavere variabiliche non sono indipendenti tra loro;  "
    },
    {
        "title": "335) Qualecelle seguenti opzioni non è una procedura per la stimacell’attendibilitàcel test?: ",
        "answers": [
            "a) La proceduraci Sperman-Brown ",
            "b) L'analisicellaconsistenza interna ",
            "c) Ilconfronto tra gruppi equivalenti ",
            "d) Ilconfronto tra punteggialternativi "
        ],
        "correctAnswer": ": la  proceduraci Sperman-Brown;  "
    },
    {
        "title": "336) Il test – retestcos’è?: ",
        "answers": [
            "a) Somministrare in 2 sessioniciverse lo stesso test perconfermarne l’attendibilità ",
            "b) Somministrare un test per misurare la velocitàcognitiva ",
            "c) Somministrare un test per misurare la memoriaci lavoro ",
            "d) Somministrare un test per misurare l'attenzione"
        ],
        "correctAnswer": ": somministrare in 2 sessioniciverse lo stesso test perconfermarne l’attendibilità;  "
    },
    {
        "title": "337) I test proiettivi: ",
        "answers": [
            "a) Presentano stimoliambigui ed evocano rispostecreative perattivare meccanismicicifesa ed ottenere risposte più “genuine” ",
            "b) Presentanocomandechiare ed obiettive ",
            "c) Misuranoabilità specifichecome la memoria e l'attenzione ",
            "d) Richiedono risposte rapide e spontanee "
        ],
        "correctAnswer": ": presentare stimoliambigui ed evocare rispostecreative perattivare meccanismici cifesa ed ottenere risposte più “genuine”;  "
    },
    {
        "title": "338) Il testci intelligenza è: ",
        "answers": [
            "a) Un testcognitivo ",
            "b) Un testci personalità ",
            "c) Un test psicomotorio ",
            "d) Un test proiettivo "
        ],
        "correctAnswer": ": un testcognitivo;  "
    },
    {
        "title": "339) Il test oggettivo è: ",
        "answers": [
            "a) Un test incui prevedono rispostea scelta multipla ",
            "b) Un testche richiede risposte soggettive ",
            "c) Un testche misuraaspetti inconscicella personalità ",
            "d) Un testche misura l'intelligenza emotiva "
        ],
        "correctAnswer": ": un test incui prevedono rispostea scelta multipla;  "
    },
    {
        "title": "340) Testci Rorschach: ",
        "answers": [
            "a) Test proiettivo ",
            "b) Testci personalità ",
            "c) Testci intelligenza ",
            "d) Testci memoria "
        ],
        "correctAnswer": ": test proiettivo;  "
    },
    {
        "title": "341) Icubi nella WAIS misurano: ",
        "answers": [
            "a) L’intelligenza generale o fluida ",
            "b) L’intelligenzacristallizzata ",
            "c) La memoriaabreve termine ",
            "d) La memoriaci lavoro "
        ],
        "correctAnswer": ": l’intelligenza generale o fluida;  "
    },
    {
        "title": "342)alla finecella somministrazionecel questionario SOScosa sichiedeal soggetto?: ",
        "answers": [
            "a) Se gli è sembrato interessante ",
            "b) Se ha risposto sinceramente ",
            "c) Se hacompreso tutte lecomande ",
            "d) Se haavutocifficoltàcurante il test "
        ],
        "correctAnswer": ": Se gli è sembrato  interessante;  "
    },
    {
        "title": "343) Nella versionecefinitivacel questionario SOS, quanti sono gli itemcella parte 3cel questionario?: ",
        "answers": [
            "a) 7 ",
            "b) 9 ",
            "c) 11 ",
            "d) 12"
        ],
        "correctAnswer": ": 9;  "
    },
    {
        "title": "344) Tracarico lavorativo e motivazione vi è una mutua relazione ovvero: ",
        "answers": [
            "a) Maggiore è la percezionecelle risorse possedute, tanto piùalta sarà la motivazione ",
            "b) Maggiore è ilcarico lavorativo, tanto piùbassa sarà la motivazione ",
            "c) La motivazionecipende esclusivamentecalcarico lavorativo ",
            "d) Ilcarico lavorativo non influisce sulla motivazione "
        ],
        "correctAnswer": "344) Lacimensione svalutazionecel questionario SOScorrelacon le scaleclinichecella SLC-90R? sicon  tutte e lecorrelazioni sono positive "
    },
    {
        "title": "345) Itemche ha ricevuto più risposte nella parte 3cel questionario SOS: ",
        "answers": [
            "a) 52 ",
            "b) 64 ",
            "c) 47 ",
            "d) 56 "
        ],
        "correctAnswer": ": maggiore è la percezionecelle  risorse possedute, tanto piùalta sarà la motivazione;  "
    },
    {
        "title": "346)calcoloci R trasformazione: ",
        "answers": [
            "a) Trasformazioneci punteggi grezzi in punti ponderati ",
            "b)calcolocellaceviazione standard ",
            "c) Trasformazioneci punteggi grezzi in punteggi standard ",
            "d)calcolocell'indiceciattendibilità "
        ],
        "correctAnswer": ": 64; "
    },
    {
        "title": "347) Secondo il modello Effort-Reward Imbalanceci Siergrist,cosacausa lo stress lavorativo? ",
        "answers": [
            "a) L'elevato sensoci soddisfazione professionale ",
            "b) L'equilibrio tra sforzo lavorativo e ricompensa ",
            "c) Lo squilibrio tra lo sforzo lavorativo richiestocall'organizzazione e la ricompensacataal lavoratore ",
            "d) La presenzaci unambiente lavorativo tranquillo "
        ],
        "correctAnswer": ": punteggi grezzi in punti ponderati  "
    },
    {
        "title": "348) Le tetradi, inanalisi fattoriale, siannullano perchécorrispondonoa: ",
        "answers": [
            "a) Fattori non significativi ",
            "b) Variabilicorrelate ",
            "c) Lacifferenza tra i prodotticelle stesse saturazioni ",
            "d) Errorici misurazione "
        ],
        "correctAnswer": ":allacifferenza tra i prodotticelle  stesse saturazioni.  "
    },
    {
        "title": "349) Nell’intervista psicologica lecomande primarie sono: ",
        "answers": [
            "a)comandeche introducono un nuovo temacurante l’intervista ",
            "b)comandecichiusura ",
            "c)comandechiuse ",
            "d)comandeche richiedono risposte lunghe "
        ],
        "correctAnswer": ""
    },
    {
        "title": "350) Inbaseaicati ottenuticall’analisi fattoriale esplorativa, il numeroci itemcella Parte 1cel questionario SOS è stato ridottoa: ",
        "answers": [
            "a) 40 ",
            "b) 45 ",
            "c) 50 ",
            "d) 55"
        ],
        "correctAnswer": ": quelleche introducono un nuovo temacurante  l’intervista. "
    },
    {
        "title": "351) Un elevato livelloci mindfulness èassociatoa: ",
        "answers": [
            "a)bassi livellicognitivi ed emotivi ",
            "b)bassi livellici sensibilitàall'errore ",
            "c)altissimi livellici stress ",
            "d)alti livellicognitivi ed emotivici sensibilitàall'errore "
        ],
        "correctAnswer": ": 50  "
    },
    {
        "title": "352) Inanalisi fattoriale, la procedura per l’estrazioneci fattoribasata sulle saturazioni maggiorici 0,30 stabilisceche il numeroci fattoricorrispondea tutti i fattoriche hanno: ",
        "answers": [
            "a)almeno una saturazione >0,30 ",
            "b)almenocue saturazioni >0,30 ",
            "c)almeno tre saturazioni >0,30 ",
            "d) Tutte le saturazioni >0,30 "
        ],
        "correctAnswer": ":alti livellicognitivi ed emotivici sensibilitàall’errore. "
    },
    {
        "title": "353) L’intervista strutturata sicaratterizza per: ",
        "answers": [
            "a) Il fattoche icontenuti e la sequenzacellecomande sono prefissatiall’inizio ",
            "b) La libertàciargomentocurante l'intervista ",
            "c) La mancanzaci un protocollo stabilito ",
            "d) La presenzacicomandeaperte "
        ],
        "correctAnswer": ":almeno una saturazione >0,30. 354)L’intervista strutturata sicaratterizza per: il fattoche icontenuti e la sequenzacellecomande sono  prefissatiall’inizio. "
    },
    {
        "title": "354) Nel modellocelle equazionici LISRELci Joreskog e Sorbomacifferenzacelle equazionicell’EQScibentler, sono previsti quanti tipi variabili? ",
        "answers": [
            "a) 2 variabili ",
            "b) 3 variabili ",
            "c) 4 variabili ",
            "d) 5 variabili "
        ],
        "correctAnswer": ""
    },
    {
        "title": "355)cos’è il metodocelcentroideci Thurstone? ",
        "answers": [
            "a) Un metodoci estrazionecei fattoriche si prestaaicalcoli manuali ",
            "b) Un metodoci rotazionecei fattori ",
            "c) Un metodoci ponderazionecei punteggi ",
            "d) Un metodociconfronto tra medie "
        ],
        "correctAnswer": "355) Nel modellocelle equazionici LISRELci Joreskog e Sorbomacifferenzacelle equazionicell’EQSci bentler, sono previsti quanti tipi variabili? 4 variabili. "
    },
    {
        "title": "356) È semprecorretto interpretare il primo fattore estratto nell’analisi fattorialecome il fattore generale? ",
        "answers": [
            "a) Sì, sempre ",
            "b)cipendecal tipocicampione ",
            "c) No, non sempre ",
            "d) Solo se l'eigenvalue è superiorea 1 "
        ],
        "correctAnswer": ": è un metodoci estrazionecei fattoriche si prestaai calcoli manuali "
    },
    {
        "title": "357) Indicandocon y il valorecella nuova scala econ x quellocella vecchia scala la trasformazione possibile tra la scalaa rapporto è: ",
        "answers": [
            "a) y =ax ",
            "b) y =bx ",
            "c) y = x/a ",
            "d) y = x -a"
        ],
        "correctAnswer": "357) è semprecorretto interpretare il primo fattore estratto nell’analisi fattorialecome il fattore  generale? NO "
    },
    {
        "title": "358) I test non-verbali sono predisposti per: ",
        "answers": [
            "a) Personeconcisabilità fisica ",
            "b) Personeanalfabete ",
            "c) Personeconcisturbicel linguaggio ",
            "d) Personeconcifficoltàcognitive "
        ],
        "correctAnswer": "358) Indicandocon y il valorecella nuova scala econ x quellocella vecchia scala la trasformazione  possibile tra la scalaa rapporto è… y=ax "
    },
    {
        "title": "359) Inanalisi fattoriale, lacomunanza indica: ",
        "answers": [
            "a) La sommacelle saturazionial quadrato per leciverse variabili ",
            "b) Il rapporto tra le variabili ",
            "c) Il gradocicorrelazione tra variabili ",
            "d) La varianza totale spiegataca un fattore "
        ],
        "correctAnswer": "359) i test non-verbali sono test predisposti… peranalfabeti "
    },
    {
        "title": "360) Il processoci operazionalizzazioneci uncostruttoconsiste: ",
        "answers": [
            "a) Nell'assegnare un valore numericoalcostrutto ",
            "b) Nell'individuare gli indicatoricomportamentaliche sonoconsiderati le sue manifestazioni operative ",
            "c) Nell'applicare ilcostruttoad uncontesto specifico ",
            "d) Nell'interpretare i risultaticelcostrutto "
        ],
        "correctAnswer": "360) inanalisi fattoriale lacomunanza indica… la saturazioneal quadrato (???) "
    },
    {
        "title": "361) Nei modellici equazioni strutturali, per parametro libero si intendeche il valorecel parametro può variare. ",
        "answers": [
            "a) Vero ",
            "b) Falso ",
            "c) Entrambe ",
            "d) Nessuba "
        ],
        "correctAnswer": ": nell’individuare gli indicatori comportamentaliche sonoconsiderati, sullabaseci una teoria psicologica, le sue manifestazioni operative 362)Nei modellici equazioni strutturali, per parametro libero si intendeche il valorecel… parametro può  variare "
    },
    {
        "title": "362) La validitàconvergente indica: ",
        "answers": [
            "a) Il gradociaccordo tracue o più misurecello stessocostrutto ",
            "b) Il gradociaccordo tracostrutticiversi ",
            "c) Lacoerenza internacel test ",
            "d) La validità esternacel test "
        ],
        "correctAnswer": ""
    },
    {
        "title": "363) Esiste unacorrelazione significativa tra lecimensionicel questionario SOS? ",
        "answers": [
            "a) Sì, e lecorrelazioni sono tutte positive e significative ",
            "b) No, lecorrelazioni sono tutte negative ",
            "c) Lecorrelazioni sonocasuali e non significative ",
            "d) Lecorrelazioni sono tutte positive ma non significative "
        ],
        "correctAnswer": "363)La validitàconvergente indica il gradociaccordo tracue o piu misurecello stessocostrutto "
    },
    {
        "title": "364) Se il punteggioci un testche misura la “ruminazione” ha un’elevatacorrelazione positivacon il punteggioad unaltro testche misura: ",
        "answers": [
            "a) Validitàciscriminante ",
            "b) Validitàconvergente ",
            "c)attendibilità ",
            "d) Validitàcicostrutto"
        ],
        "correctAnswer": "364) esiste unacorrelazione significativa tra lecimensionicel questionario SOS? Si, e lecorrelazioni sono  tutte positive e significative  "
    },
    {
        "title": "365) Lacimensione svalutazionecel questionario SOScorrela significativamentecon la scalacel sonno nella SCL-90R? ",
        "answers": [
            "a) Sì, e positivamente ",
            "b) No, nonc'ècorrelazione ",
            "c) Sì, ma negativamente ",
            "d) Non è possibile stabilirlo "
        ],
        "correctAnswer": "365) se il punteggioci un testche misura la “ruminazione” ha un’elevatacorrelazione positivacon il  punteggioad unaltro testche misura…. Validitàconvergente  "
    },
    {
        "title": "366) Ilcifferenziale semantico è un itemche prevede: ",
        "answers": [
            "a) Risposteaperte ",
            "b) Scale unipolari ",
            "c) Scalebipolari ",
            "d) Rispostea scelta multipla "
        ],
        "correctAnswer": "366) lacimensione svalutazionecel questionario SOScorrela significativamentecon la scalacel sonno nella SCL-90R? Si, e positivamente  "
    },
    {
        "title": "367) Incosaconsiste la procedura split-half? ",
        "answers": [
            "a) Un test viene suddivisoa metà percalcolare lacorrelazione tra lecue parti ",
            "b) Siconfrontano i risultaticicue gruppicivisia metà ",
            "c) Si sommano i punteggicellecue metàci un test ",
            "d) Siconfronta il risultatoci un testcon quelloci unaltro test "
        ],
        "correctAnswer": ": scalebipolari "
    },
    {
        "title": "368)checos’è lo Scree-plotcicattell? ",
        "answers": [
            "a) Un graficoche mostra l'andamentocellacurva ROC ",
            "b) Un graficoche mostra lacistribuzionecelle frequenze ",
            "c) Un graficoche ha in ordinata gli eigenvalue e inascissa il numeroci fattori generali ",
            "d) Un graficoche mostra la varianza spiegatacai fattori "
        ],
        "correctAnswer": "368) incosaconsiste la procedura split-half? Un test viene suddivisoa metà percalcolare lacorrelazione  tra lecue parti "
    },
    {
        "title": "369) Unocei problemi nelcalcolocell’attendibilità test-retest è stabilire la lunghezzacell’intervallo tra la prima e la seconda somministrazionecel reattivo. Perché? ",
        "answers": [
            "a) Perché i soggetti possono ricordare le risposte ",
            "b) Perché si può influenzare la validitàcel test ",
            "c) Perché si possono verificarecambiamenti nei soggetti ",
            "d) Perché si possono verificare errori nella somministrazione "
        ],
        "correctAnswer": "369)checos’è lo Scree-plotcicattell? Un graficoche in ordinata ha gli eigenvalue e inascissa il numeroci  fattori generali "
    },
    {
        "title": "370) Il punteggio vero ècatoca: ",
        "answers": [
            "a) Il prodottocel punteggio osservato ecell'errore ",
            "b) La sommacel punteggio osservato ecell'errore ",
            "c) Lacivisionecel punteggio osservato per l'errore ",
            "d) Il quadratocel punteggio osservato "
        ],
        "correctAnswer": "370) unocei problemi nelcalcolocell’attendibilità test-retest, è stabilire la lunghezzacell’intervallo tra  la prima e la seconda somministrazionece reattivo. Perché? Perché i soggetti possono ricordare le  risposte  "
    },
    {
        "title": "371) Il testci Rorschach è: ",
        "answers": [
            "a) Un test proiettivo ",
            "b) Un testci personalità ",
            "c) Un testci intelligenza ",
            "d) Un testcognitivo "
        ],
        "correctAnswer": ": il PRODOTTOcel punteggio osservato ecell’errore "
    },
    {
        "title": "372)cos’è unacomunanza ocomunalità, inanalisi fattoriale? ",
        "answers": [
            "a) La sommacelle saturazionial quadrato per leciverse variabili ",
            "b) Il rapporto tra le variabili ",
            "c) Il gradocicorrelazione tra variabili ",
            "d) La varianza totale spiegataca un fattore"
        ],
        "correctAnswer": ": un test proiettivo "
    },
    {
        "title": "373) Una trasformazione permissibile è: ",
        "answers": [
            "a) Una nuova scalache mantiene inalterate le proprietàcella scala originaria ",
            "b) Una nuova scalache modifica le proprietàcella scala originaria ",
            "c) Una trasformazioneche non èaccettabile ",
            "d) Una trasformazionecheaumenta lacifficoltàcel test "
        ],
        "correctAnswer": "373)cos’è unacomunanza ocomunalità, inanalisi fattoriale? È la sommacelle saturazionial quadrato per  leciverse variabili"
    },
    {
        "title": "374) La stimacel punteggio vero ècatacalla sommacei punteggi osservati: ",
        "answers": [
            "a) Ecelcoefficienteciattendibilità ",
            "b) Ecelcoefficienteci validità ",
            "c) Ecell'errore standard ",
            "d) Ecel punteggio massimo "
        ],
        "correctAnswer": ": una nuova scalache mantiene inalterate le proprietàcella scala  originaria "
    },
    {
        "title": "375) Inanalisi fattoriale, il metodoci Procuste è una tecnicaci rotazione: ",
        "answers": [
            "a) Obliquache sibasa su una matricebersaglio ",
            "b) Ortogonaleche sibasa su una matricebersaglio ",
            "c) Obliquache sibasa su una matricecampione ",
            "d) Ortogonaleche sibasa su una matricecampione "
        ],
        "correctAnswer": ": ecelcoefficienteci attendibilità  "
    },
    {
        "title": "376) Tra i vari response set, la semantica è unbiasche indica: ",
        "answers": [
            "a) Il soggetto interpreta l'item ",
            "b) Il soggetto risponde in modocasuale ",
            "c) Il soggetto evitaci rispondere ",
            "d) Il soggetto noncomprende lacomanda "
        ],
        "correctAnswer": ": obliquache sibasa su una  matricebersaglio "
    },
    {
        "title": "377) Nell'analisici regressione multiplacon punteggi standardizzati, ilcoefficientebeta è: ",
        "answers": [
            "a) Sempre ugualea zero ",
            "b) Ilcoefficientecicorrelazione ",
            "c) Ilcoefficienteci regressione ",
            "d) Ilcoefficienteciceterminazione "
        ],
        "correctAnswer": "377) tra i vari response set, la semantica è unbias (domanda noncompleta)…. Il soggetto interpreta  l’item "
    },
    {
        "title": "378) Nell’analisi fattorialeconfermativa, l’indice RMSEA è: ",
        "answers": [
            "a)compreso tra 0 e 1 ",
            "b)compreso tra -1 e 1 ",
            "c)compreso tra 0,05 e 0,10 ",
            "d)compreso tra 0 e 0.5 "
        ],
        "correctAnswer": ": sempre ugualea  zero "
    },
    {
        "title": "379) Quale tra questecefinizionici fatica soggettiva è quellacorretta? ",
        "answers": [
            "a) Il lavoratore esprime unacadutaci efficienza sebbene non manifesti nessuncriterio oggettivociaffaticamento ",
            "b) Il lavoratore esprime unacadutaci efficienza solo quando è oggettivamenteaffaticato ",
            "c) Il lavoratore non esprime mai unacadutaci efficienza ",
            "d) Il lavoratore esprime unacadutaci efficienza solo quando è sottopostoa stress"
        ],
        "correctAnswer": ":compreso tra 0,05 e 0,10 380) quale tra questecefinizionici fatica soggettiva è quellacorretta? Il lavoratore esprime unacadutaci  efficienza sebbene non manifesti nessuncriterio oggettivociaffaticamento  "
    },
    {
        "title": "380) Nel questionariocelbig-Five, lacimensionecell’amicalità misura: ",
        "answers": [
            "a) Il livellocicooperativitàcelle persone ",
            "b) Il gradoci emotivitàcelle persone ",
            "c) Il gradoci intelligenza socialecelle persone ",
            "d) Il livellociassertivitàcelle persone "
        ],
        "correctAnswer": ""
    },
    {
        "title": "381) Nell’analisi fattoriale, uncatoci partenza ècostituitoca: ",
        "answers": [
            "a)calla matricecellecorrelazioni ocovarianze tra le variabili ",
            "b)calla matricecelle mediecei punteggi ",
            "c)calla matricecegli errori standard ",
            "d)calla matricecelle modalitàci risposta"
        ],
        "correctAnswer": ": il livellocicooperativitàcelle  persone "
    }
]

let currentAnswerIndex = 80;

window.onload = () => {
    setQuestion()
}

const setQuestion = () => {
    const question = questions[currentAnswerIndex];

    document.getElementById('question-title').innerHTML = question.title;
 
     let txt = '';
     for(let n=0;n<question.answers.length;n++) {
         txt += `
             <div style="display:flex; justify-content:space-between;">
                 <p>`+question.answers[n]+`</p>
                 <input type="radio" name=x>
             </div>
         `
     }
 
    document.getElementById('questions-container').innerHTML = txt;
}

const onConfirm = () => {
    if(getUserAnswer() == false) {
        window.alert('Inserire una risposta');
        return;
    }
    // else if(!questions[currentAnswerIndex].correctAnswer.includes(getUserAnswer())) {
    //     window.alert('Risposta sbagliata');
    //     return;
    // }

    window.alert('La risposta giusta è ' + questions[currentAnswerIndex].correctAnswer)

    currentAnswerIndex++;
    setQuestion();
}

const onBack = () => {
    if(currentAnswerIndex == 0) return;

    currentAnswerIndex--;
    setQuestion();
}

const getUserAnswer = () => {
    const radios = document.getElementsByTagName('input');

    for(let n=0;n<radios.length;n++) {
        if(radios[n].checked == true) {
            return radios[n].parentElement.getElementsByTagName('p')[0].innerHTML;
        }
    }

    return false;
}

// window.onload = () => {
//     for(let n=0;n<questions.length;n++) {
//         const answerId = questions[n].title.substring(0,questions[n].title.indexOf(')'));
    
//         for(let i=0;i<answers.length;i++) {
//             if(answers[i].substring(0,answers[i].indexOf(')')) == answerId) {
//                 questions[n]['correctAnswer'] = answers[i];
//             }
//         }
//     }
    
//     console.log(questions)
// }