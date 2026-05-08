// Lightweight i18n — applies translations via [data-i18n="key"]
// Persists choice in localStorage. Cycles on click; opens menu on hover (desktop).

(function(){
  const LANGS = ['en','es','fr','it','nl'];
  const LABELS = {en:'EN',es:'ES',fr:'FR',it:'IT',nl:'NL'};
  const NAMES  = {en:'English',es:'Español',fr:'Français',it:'Italiano',nl:'Nederlands'};

  const T = {
    en:{
      'nav.about':'About','nav.ensembles':'Ensembles &amp; Programmes','nav.agenda':'Agenda','nav.contact':'Contact','nav.home':'Home',
      'sub.ensembles':'Ensembles','sub.programmes':'Programmes',
      'hero.eyebrow':'Viola da gamba · Violone',
      'hero.roles':'Performer and artistic director — between European early music and the traditions of Latin America.',
      'hero.locale':'Brussels — based since 2024',
      'agenda.heading':'Agenda<em>.</em>','agenda.upcoming':'Upcoming','agenda.recent':'Recent concerts',
      'contact.heading':'Get in <em>touch</em>.',
      'contact.meta':'For booking, programming or research enquiries — write directly or use the form.',
      'contact.email':'Email','contact.phone':'Phone',
      'form.name':'Name','form.email':'Email','form.subject':'Subject','form.message':'Message','form.send':'Send message',
      'ens.heading':'Ensembles<em>.</em>','prog.heading':'Programmes<em>.</em>',
      'prog.note':'Three programmes currently on tour — select one to see its repertoire.',
      'about.lede':"I'm passionate about the expressiveness of music and the stories that I can convey with my <em>programmes</em>.",
      'about.bio.p1':'Jose Huamani is a viola da gamba player and musicologist born in Lima, Peru, and residing in Brussels since 2024. As a musicologist, he studied with two main teachers, <em>Omar Ponce</em>, leader in ethnomusicology, and <em>Aurelio Tello Malpartida</em>, one of the most important figures of Latin American early music revival. He decided to study viola da gamba in France with Myriam Rignol, both in Besançon and Lyon’s conservatories, and moved to Brussels for his Master degree with Kaori Uemura.',
      'about.bio.p2':'His musical projects combine social engagement and a deep will to develop the visibility of Latin American cultures and their connections to early music. He founded a student festival in Lima and directed it for two years before the COVID pandemic, then founded two ensembles in Europe — <em>Ensemble Transatlantique</em> (Lyon) and <em>Auroras Mestizas</em> (Brussels) — both working on different sides of the Latin American repertoire. He is now not only an artistic director, but also part of EMA’s IDEA task force and a founding member of the new Latin American early music network, where he wishes to represent the Latin American community in Europe and the Peruvian emerging early-music world.',
      'ens.colibri.idx':'I — Duo','ens.colibri.role':'Co-founder · Viola da gamba',
      'ens.colibri.desc':'A duo of viole da gamba with Adele Serena (Vicenza · Brussels). Two players, two schools, one instrument family — French, English and Italian solo repertoire, plus arrangements for historical instruments.',
      'ens.colibri.meta1':'Two viole da gamba','ens.colibri.meta2':'with Adele Serena',
      'ens.auroras.idx':'II — 2025 · Brussels','ens.role.founder':'Founder · Artistic director','ens.role.founder2':'Founder · Artistic director',
      'ens.auroras.desc':'A young ensemble dedicated to the music of the 18th century, read with the American continent inside the frame rather than outside it. Latin-American archives meet late-baroque and galant repertoire from Europe.',
      'ens.auroras.meta1':'Voices · violins · violone · theorbo',
      'ens.transat.idx':'III — 2022 · Lyon',
      'ens.transat.desc':'Founded inside the CNSMD of Lyon. A variable-formation ensemble bringing young European and Latin-American artists together around early-music repertoires, oral traditions, and ongoing research.',
      'ens.transat.meta1':'Variable, 4–10 artists',
      'ptab.echoes.ttl':'Echoes of a lost dream','ptab.echoes.who':'A voyage across oneiric sentiments',
      'ptab.love.ttl':'Love against (divine) tempests','ptab.love.who':'Soprano · violins · violone · theorbo',
      'ptab.america.ttl':'América Popular','ptab.america.who':'At the origins of the tradition',
      'pp.echoes.who':'Due Colibrí · Two viole da gamba','pp.echoes.title':'Echoes of a lost dream','pp.echoes.sub':'a voyage across oneiric sentiments on the viol',
      'pp.echoes.epigraph':'Forgetting oneself in the deepest dreams: from the intense lethargy that precedes the oneiric world, to the marvelous fantasies that blur into reality, only to be hidden forever in oblivion.',
      'pp.echoes.body':'The phases of human dreams are anything but monotonous stories — yet only rarely do their traces remain with us.',
      'pp.love.who':'Auroras Mestizas · Soprano &amp; chamber forces','pp.love.title':'Love against (divine) tempests','pp.love.sub':'an audacious reading of the early eighteenth century',
      'pp.love.epigraph':'…But no Man moved Me — till the Tide<br />Went past my simple Shoe —<br />And past my Apron — and my Belt<br />And past my Boddice — too —',
      'pp.love.body':'Auroras Mestizas doesn\'t limit itself by isolating or juxtaposing musical worlds — instead, it looks for the common spaces they share. Figures like José de Orejón y Aparicio and Manuel de Zumaya dialogue naturally with Scarlatti, Porpora and Nebra, offering an audacious and innovative reading of early music.',
      'pp.america.who':'Ensemble Transatlantique · 4 artists','pp.america.title':'América Popular','pp.america.sub':'at the origins of the tradition',
      'pp.america.epigraph':'Far from the courts, beyond the cathedral walls — the music of inhabitants whose origins are diverse, but who would live and shape their lives in the new world.',
      'pp.america.body':'América Popular shows the origins of the diversity and the colours of Latin-American popular music — heir to Western early music, to African rhythms, and to the native musics of the continent. A repertoire with an identity proper and proud, of the American peoples.',
      'specs.disposition':'Disposition','specs.duration':'Duration','specs.budget':'Budget','specs.adaptable':'Adaptable',
      'specs.echoes.disp':'2 viole da gamba','specs.echoes.dur':'45–70 min','specs.echoes.budget':'from 700\u202f€',
      'specs.love.disp':'Soprano · 2 violins · violone · theorbo','specs.love.dur':'45–75 min','specs.love.budget':'from 1\u202f750\u202f€',
      'specs.america.disp':'Voices · traditional American instruments · continuo','specs.america.dur':'60 min','specs.america.budget':'from 1\u202f500\u202f€','specs.america.adapt':'School interventions'
    },
    es:{
      'nav.about':'Sobre mí','nav.ensembles':'Ensembles y programas','nav.agenda':'Agenda','nav.contact':'Contacto','nav.home':'Inicio',
      'sub.ensembles':'Ensembles','sub.programmes':'Programas',
      'hero.eyebrow':'Viola da gamba · Violone',
      'hero.roles':'Intérprete y director artístico — entre la música antigua europea y las tradiciones de América Latina.',
      'hero.locale':'Bruselas — desde 2024',
      'agenda.heading':'Agenda<em>.</em>','agenda.upcoming':'Próximos','agenda.recent':'Conciertos recientes',
      'contact.heading':'Ponte en <em>contacto</em>.',
      'contact.meta':'Para contrataciones, programación o consultas de investigación — escribe directamente o usa el formulario.',
      'contact.email':'Correo','contact.phone':'Teléfono',
      'form.name':'Nombre','form.email':'Correo','form.subject':'Asunto','form.message':'Mensaje','form.send':'Enviar mensaje',
      'ens.heading':'Ensembles<em>.</em>','prog.heading':'Programas<em>.</em>',
      'prog.note':'Tres programas actualmente en gira — selecciona uno para ver su repertorio.',
      'about.lede':'Me apasiona la expresividad de la música y las historias que puedo transmitir a través de mis <em>programas</em>.',
      'about.bio.p1':'Jose Huamani es violagambista y musicólogo, nacido en Lima, Perú, y residente en Bruselas desde 2024. Como musicólogo estudió con dos maestros principales: <em>Omar Ponce</em>, referente en etnomusicología, y <em>Aurelio Tello Malpartida</em>, una de las figuras más importantes del renacimiento de la música antigua latinoamericana. Decidió estudiar viola da gamba en Francia con Myriam Rignol, en los conservatorios de Besançon y Lyon, y se trasladó a Bruselas para realizar su máster con Kaori Uemura.',
      'about.bio.p2':'Sus proyectos musicales combinan el compromiso social con una profunda voluntad de visibilizar las culturas latinoamericanas y sus vínculos con la música antigua. Fundó un festival estudiantil en Lima y lo dirigió durante dos años antes de la pandemia de COVID, y luego fundó dos ensembles en Europa: <em>Ensemble Transatlantique</em> (Lyon) y <em>Auroras Mestizas</em> (Bruselas), ambos dedicados a distintas vertientes del repertorio latinoamericano. Hoy no solo es director artístico, sino también miembro del IDEA task force de EMA y fundador de la nueva red latinoamericana de música antigua, donde desea representar a la comunidad latinoamericana en Europa y al emergente mundo peruano de la música antigua.',
      'ens.colibri.idx':'I — Dúo','ens.colibri.role':'Cofundador · Viola da gamba',
      'ens.colibri.desc':'Dúo de violas da gamba con Adele Serena (Vicenza · Bruselas). Dos intérpretes, dos escuelas, una misma familia de instrumentos — repertorio solista francés, inglés e italiano, junto a arreglos para instrumentos históricos.',
      'ens.colibri.meta1':'Dos violas da gamba','ens.colibri.meta2':'con Adele Serena',
      'ens.auroras.idx':'II — 2025 · Bruselas','ens.role.founder':'Fundador · Director artístico','ens.role.founder2':'Fundador · Director artístico',
      'ens.auroras.desc':'Un joven ensemble dedicado a la música del siglo XVIII, leída con el continente americano dentro del marco y no fuera de él. Los archivos latinoamericanos dialogan con el repertorio tardobarroco y galante de Europa.',
      'ens.auroras.meta1':'Voces · violines · violone · tiorba',
      'ens.transat.idx':'III — 2022 · Lyon',
      'ens.transat.desc':'Fundado en el CNSMD de Lyon. Un ensemble de formación variable que reúne a jóvenes artistas europeos y latinoamericanos en torno a los repertorios de la música antigua, las tradiciones orales y la investigación.',
      'ens.transat.meta1':'Variable, 4–10 artistas',
      'ptab.echoes.ttl':'Ecos de un sueño perdido','ptab.echoes.who':'Un viaje a través de los sentimientos oníricos',
      'ptab.love.ttl':'Amor contra (divinas) tempestades','ptab.love.who':'Soprano · violines · violone · tiorba',
      'ptab.america.ttl':'América Popular','ptab.america.who':'En los orígenes de la tradición',
      'pp.echoes.who':'Due Colibrí · Dos violas da gamba','pp.echoes.title':'Ecos de un sueño perdido','pp.echoes.sub':'un viaje a través de los sentimientos oníricos en la viola',
      'pp.echoes.epigraph':'Olvidarse de uno mismo en los sueños más profundos: del intenso letargo que precede al mundo onírico, a las maravillosas fantasías que se confunden con la realidad, antes de quedar para siempre en el olvido.',
      'pp.echoes.body':'Las fases de los sueños humanos son cualquier cosa menos historias monótonas — y, sin embargo, sus huellas rara vez permanecen con nosotros.',
      'pp.love.who':'Auroras Mestizas · Soprano y formaciones de cámara','pp.love.title':'Amor contra (divinas) tempestades','pp.love.sub':'una lectura audaz del comienzo del siglo XVIII',
      'pp.love.epigraph':'…But no Man moved Me — till the Tide<br />Went past my simple Shoe —<br />And past my Apron — and my Belt<br />And past my Boddice — too —',
      'pp.love.body':'Auroras Mestizas no se limita a separar o yuxtaponer mundos musicales — busca, al contrario, los espacios comunes que comparten. Figuras como José de Orejón y Aparicio o Manuel de Zumaya dialogan con naturalidad con Scarlatti, Porpora y Nebra, ofreciendo una lectura audaz e innovadora de la música antigua.',
      'pp.america.who':'Ensemble Transatlantique · 4 artistas','pp.america.title':'América Popular','pp.america.sub':'en los orígenes de la tradición',
      'pp.america.epigraph':'Lejos de las cortes, más allá de los muros de las catedrales — la música de habitantes de orígenes diversos que vivieron y moldearon sus vidas en el nuevo mundo.',
      'pp.america.body':'América Popular muestra los orígenes de la diversidad y los colores de la música popular latinoamericana — heredera de la música antigua occidental, de los ritmos africanos y de las músicas originarias del continente. Un repertorio con identidad propia y orgullosa, de los pueblos americanos.',
      'specs.disposition':'Formación','specs.duration':'Duración','specs.budget':'Presupuesto','specs.adaptable':'Adaptable',
      'specs.echoes.disp':'2 violas da gamba','specs.echoes.dur':'45–70 min','specs.echoes.budget':'desde 700\u202f€',
      'specs.love.disp':'Soprano · 2 violines · violone · tiorba','specs.love.dur':'45–75 min','specs.love.budget':'desde 1\u202f750\u202f€',
      'specs.america.disp':'Voces · instrumentos tradicionales americanos · continuo','specs.america.dur':'60 min','specs.america.budget':'desde 1\u202f500\u202f€','specs.america.adapt':'Intervenciones escolares'
    },
    fr:{
      'nav.about':'À propos','nav.ensembles':'Ensembles et programmes','nav.agenda':'Agenda','nav.contact':'Contact','nav.home':'Accueil',
      'sub.ensembles':'Ensembles','sub.programmes':'Programmes',
      'hero.eyebrow':'Viole de gambe · Violone',
      'hero.roles':'Interprète et directeur artistique — entre la musique ancienne européenne et les traditions de l’Amérique latine.',
      'hero.locale':'Bruxelles — depuis 2024',
      'agenda.heading':'Agenda<em>.</em>','agenda.upcoming':'À venir','agenda.recent':'Concerts récents',
      'contact.heading':'Prendre <em>contact</em>.',
      'contact.meta':'Pour toute demande de concert, programmation ou recherche — écrivez directement ou utilisez le formulaire.',
      'contact.email':'Courriel','contact.phone':'Téléphone',
      'form.name':'Nom','form.email':'Courriel','form.subject':'Objet','form.message':'Message','form.send':'Envoyer le message',
      'ens.heading':'Ensembles<em>.</em>','prog.heading':'Programmes<em>.</em>',
      'prog.note':'Trois programmes actuellement en tournée — sélectionnez-en un pour voir le répertoire.',
      'about.lede':'Je suis passionné par l’expressivité de la musique et par les histoires que je peux transmettre à travers mes <em>programmes</em>.',
      'about.bio.p1':'Jose Huamani est violiste de gambe et musicologue, né à Lima, au Pérou, et résidant à Bruxelles depuis 2024. Comme musicologue, il a étudié avec deux maîtres principaux : <em>Omar Ponce</em>, figure de l’ethnomusicologie, et <em>Aurelio Tello Malpartida</em>, l’une des figures majeures du renouveau de la musique ancienne latino-américaine. Il a choisi d’étudier la viole de gambe en France avec Myriam Rignol, aux conservatoires de Besançon et de Lyon, puis s’est installé à Bruxelles pour son Master avec Kaori Uemura.',
      'about.bio.p2':'Ses projets musicaux conjuguent engagement social et volonté profonde de rendre visibles les cultures latino-américaines dans leurs liens avec la musique ancienne. Il a fondé un festival étudiant à Lima et l’a dirigé pendant deux ans avant la pandémie de COVID, puis a créé deux ensembles en Europe : <em>Ensemble Transatlantique</em> (Lyon) et <em>Auroras Mestizas</em> (Bruxelles), travaillant chacun sur des facettes différentes du répertoire latino-américain. Il est aujourd’hui non seulement directeur artistique, mais aussi membre de l’IDEA task force d’EMA et membre fondateur du nouveau réseau européen de musique ancienne latino-américaine, où il souhaite représenter la communauté latino-américaine en Europe et le monde émergent de la musique ancienne péruvienne.',
      'ens.colibri.idx':'I — Duo','ens.colibri.role':'Cofondateur · Viole de gambe',
      'ens.colibri.desc':'Un duo de violes de gambe avec Adele Serena (Vicence · Bruxelles). Deux interprètes, deux écoles, une même famille d’instruments — répertoire soliste français, anglais et italien, ainsi que des arrangements pour instruments historiques.',
      'ens.colibri.meta1':'Deux violes de gambe','ens.colibri.meta2':'avec Adele Serena',
      'ens.auroras.idx':'II — 2025 · Bruxelles','ens.role.founder':'Fondateur · Directeur artistique','ens.role.founder2':'Fondateur · Directeur artistique',
      'ens.auroras.desc':'Un jeune ensemble consacré à la musique du XVIIIᵉ siècle, lue avec le continent américain dans le cadre, et non en dehors. Les archives latino-américaines y rencontrent le répertoire tardo-baroque et galant européen.',
      'ens.auroras.meta1':'Voix · violons · violone · théorbe',
      'ens.transat.idx':'III — 2022 · Lyon',
      'ens.transat.desc':'Fondé au CNSMD de Lyon. Un ensemble à formation variable réunissant de jeunes artistes européens et latino-américains autour des répertoires de musique ancienne, des traditions orales et de la recherche.',
      'ens.transat.meta1':'Variable, 4–10 artistes',
      'ptab.echoes.ttl':'Échos d’un rêve perdu','ptab.echoes.who':'Un voyage à travers les sentiments oniriques',
      'ptab.love.ttl':'L’amour contre les (divines) tempêtes','ptab.love.who':'Soprano · violons · violone · théorbe',
      'ptab.america.ttl':'América Popular','ptab.america.who':'Aux origines de la tradition',
      'pp.echoes.who':'Due Colibrí · Deux violes de gambe','pp.echoes.title':'Échos d’un rêve perdu','pp.echoes.sub':'un voyage à travers les sentiments oniriques sur la viole',
      'pp.echoes.epigraph':'S’oublier dans les rêves les plus profonds : de l’intense léthargie qui précède le monde onirique aux merveilleuses fantaisies qui se confondent avec la réalité, avant d’être à jamais effacées par l’oubli.',
      'pp.echoes.body':'Les phases des rêves humains sont tout sauf des histoires monotones — et pourtant, leurs traces ne demeurent que rarement avec nous.',
      'pp.love.who':'Auroras Mestizas · Soprano et formations de chambre','pp.love.title':'L’amour contre les (divines) tempêtes','pp.love.sub':'une lecture audacieuse du début du XVIIIᵉ siècle',
      'pp.love.epigraph':'…But no Man moved Me — till the Tide<br />Went past my simple Shoe —<br />And past my Apron — and my Belt<br />And past my Boddice — too —',
      'pp.love.body':'Auroras Mestizas ne se contente pas d’isoler ou de juxtaposer des mondes musicaux — il cherche au contraire les espaces communs qu’ils partagent. Des figures comme José de Orejón y Aparicio ou Manuel de Zumaya dialoguent naturellement avec Scarlatti, Porpora et Nebra, offrant une lecture audacieuse et innovante de la musique ancienne.',
      'pp.america.who':'Ensemble Transatlantique · 4 artistes','pp.america.title':'América Popular','pp.america.sub':'aux origines de la tradition',
      'pp.america.epigraph':'Loin des cours, au-delà des murs des cathédrales — la musique d’habitants aux origines diverses, qui allaient vivre et façonner leur existence dans le nouveau monde.',
      'pp.america.body':'América Popular montre les origines de la diversité et des couleurs de la musique populaire latino-américaine — héritière de la musique ancienne occidentale, des rythmes africains et des musiques autochtones du continent. Un répertoire à l’identité propre et fière, des peuples américains.',
      'specs.disposition':'Formation','specs.duration':'Durée','specs.budget':'Budget','specs.adaptable':'Adaptable',
      'specs.echoes.disp':'2 violes de gambe','specs.echoes.dur':'45–70 min','specs.echoes.budget':'à partir de 700\u202f€',
      'specs.love.disp':'Soprano · 2 violons · violone · théorbe','specs.love.dur':'45–75 min','specs.love.budget':'à partir de 1\u202f750\u202f€',
      'specs.america.disp':'Voix · instruments traditionnels américains · continuo','specs.america.dur':'60 min','specs.america.budget':'à partir de 1\u202f500\u202f€','specs.america.adapt':'Interventions scolaires'
    },
    it:{
      'nav.about':'Bio','nav.ensembles':'Ensembles e programmi','nav.agenda':'Agenda','nav.contact':'Contatti','nav.home':'Home',
      'sub.ensembles':'Ensembles','sub.programmes':'Programmi',
      'hero.eyebrow':'Viola da gamba · Violone',
      'hero.roles':'Interprete e direttore artistico — tra la musica antica europea e le tradizioni dell’America Latina.',
      'hero.locale':'Bruxelles — dal 2024',
      'agenda.heading':'Agenda<em>.</em>','agenda.upcoming':'Prossimi','agenda.recent':'Concerti recenti',
      'contact.heading':'Mettiti in <em>contatto</em>.',
      'contact.meta':'Per richieste di concerti, programmazione o ricerca — scrivi direttamente o usa il modulo.',
      'contact.email':'Email','contact.phone':'Telefono',
      'form.name':'Nome','form.email':'Email','form.subject':'Oggetto','form.message':'Messaggio','form.send':'Invia messaggio',
      'ens.heading':'Ensembles<em>.</em>','prog.heading':'Programmi<em>.</em>',
      'prog.note':'Tre programmi attualmente in tournée — seleziona uno per vedere il repertorio.',
      'about.lede':'Sono appassionato dell’espressività della musica e delle storie che posso trasmettere attraverso i miei <em>programmi</em>.',
      'about.bio.p1':'Jose Huamani è violista da gamba e musicologo, nato a Lima, in Perù, e residente a Bruxelles dal 2024. Come musicologo ha studiato con due maestri principali: <em>Omar Ponce</em>, figura di riferimento in etnomusicologia, e <em>Aurelio Tello Malpartida</em>, uno dei principali protagonisti della rinascita della musica antica latinoamericana. Ha deciso di studiare la viola da gamba in Francia con Myriam Rignol, nei conservatori di Besançon e di Lione, trasferendosi poi a Bruxelles per il suo Master con Kaori Uemura.',
      'about.bio.p2':'I suoi progetti musicali uniscono l’impegno sociale e la profonda volontà di dare visibilità alle culture latinoamericane e ai loro legami con la musica antica. Ha fondato un festival studentesco a Lima dirigendolo per due anni prima della pandemia di COVID, e poi ha fondato due ensembles in Europa: <em>Ensemble Transatlantique</em> (Lione) e <em>Auroras Mestizas</em> (Bruxelles), entrambi dedicati a diverse direzioni del repertorio latinoamericano. Oggi è non solo direttore artistico, ma anche membro dell’IDEA task force di EMA e socio fondatore della nuova rete europea di musica antica latinoamericana, dove desidera rappresentare la comunità latinoamericana in Europa e il mondo emergente della musica antica peruviana.',
      'ens.colibri.idx':'I — Duo','ens.colibri.role':'Cofondatore · Viola da gamba',
      'ens.colibri.desc':'Un duo di viole da gamba con Adele Serena (Vicenza · Bruxelles). Due interpreti, due scuole, una stessa famiglia di strumenti — repertorio solistico francese, inglese e italiano, oltre ad arrangiamenti per strumenti storici.',
      'ens.colibri.meta1':'Due viole da gamba','ens.colibri.meta2':'con Adele Serena',
      'ens.auroras.idx':'II — 2025 · Bruxelles','ens.role.founder':'Fondatore · Direttore artistico','ens.role.founder2':'Fondatore · Direttore artistico',
      'ens.auroras.desc':'Un giovane ensemble dedicato alla musica del XVIII secolo, letta con il continente americano dentro la cornice anziché fuori. Gli archivi latinoamericani incontrano il repertorio tardobarocco e galante europeo.',
      'ens.auroras.meta1':'Voci · violini · violone · tiorba',
      'ens.transat.idx':'III — 2022 · Lione',
      'ens.transat.desc':'Fondato all’interno del CNSMD di Lione. Un ensemble a formazione variabile che riunisce giovani artisti europei e latinoamericani attorno ai repertori della musica antica, alle tradizioni orali e alla ricerca.',
      'ens.transat.meta1':'Variabile, 4–10 artisti',
      'ptab.echoes.ttl':'Echi di un sogno perduto','ptab.echoes.who':'Un viaggio attraverso i sentimenti onirici',
      'ptab.love.ttl':'L’amore contro le (divine) tempeste','ptab.love.who':'Soprano · violini · violone · tiorba',
      'ptab.america.ttl':'América Popular','ptab.america.who':'Alle origini della tradizione',
      'pp.echoes.who':'Due Colibrí · Due viole da gamba','pp.echoes.title':'Echi di un sogno perduto','pp.echoes.sub':'un viaggio attraverso i sentimenti onirici sulla viola',
      'pp.echoes.epigraph':'Dimenticare sé stessi nei sogni più profondi: dall’intenso letargo che precede il mondo onirico, alle meravigliose fantasie che si confondono con la realtà, fino a essere per sempre nascoste nell’oblio.',
      'pp.echoes.body':'Le fasi dei sogni umani sono tutto fuorché storie monotone — eppure le loro tracce restano con noi solo di rado.',
      'pp.love.who':'Auroras Mestizas · Soprano e formazioni da camera','pp.love.title':'L’amore contro le (divine) tempeste','pp.love.sub':'una lettura audace del primo Settecento',
      'pp.love.epigraph':'…But no Man moved Me — till the Tide<br />Went past my simple Shoe —<br />And past my Apron — and my Belt<br />And past my Boddice — too —',
      'pp.love.body':'Auroras Mestizas non si limita a isolare o giustapporre mondi musicali — cerca al contrario gli spazi comuni che essi condividono. Figure come José de Orejón y Aparicio o Manuel de Zumaya dialogano naturalmente con Scarlatti, Porpora e Nebra, offrendo una lettura audace e innovativa della musica antica.',
      'pp.america.who':'Ensemble Transatlantique · 4 artisti','pp.america.title':'América Popular','pp.america.sub':'alle origini della tradizione',
      'pp.america.epigraph':'Lontano dalle corti, oltre le mura delle cattedrali — la musica di abitanti dalle origini diverse, che avrebbero vissuto e plasmato la propria vita nel nuovo mondo.',
      'pp.america.body':'América Popular mostra le origini della diversità e dei colori della musica popolare latinoamericana — erede della musica antica occidentale, dei ritmi africani e delle musiche originarie del continente. Un repertorio dall’identità propria e fiera, dei popoli americani.',
      'specs.disposition':'Organico','specs.duration':'Durata','specs.budget':'Cachet','specs.adaptable':'Adattabile',
      'specs.echoes.disp':'2 viole da gamba','specs.echoes.dur':'45–70 min','specs.echoes.budget':'a partire da 700\u202f€',
      'specs.love.disp':'Soprano · 2 violini · violone · tiorba','specs.love.dur':'45–75 min','specs.love.budget':'a partire da 1\u202f750\u202f€',
      'specs.america.disp':'Voci · strumenti tradizionali americani · continuo','specs.america.dur':'60 min','specs.america.budget':'a partire da 1\u202f500\u202f€','specs.america.adapt':'Interventi nelle scuole'
    },
    nl:{
      'nav.about':'Bio','nav.ensembles':'Ensembles &amp; programma\u2019s','nav.agenda':'Agenda','nav.contact':'Contact','nav.home':'Home',
      'sub.ensembles':'Ensembles','sub.programmes':'Programma\u2019s',
      'hero.eyebrow':'Viola da gamba · Violone',
      'hero.roles':'Uitvoerder en artistiek leider — tussen de Europese oude muziek en de tradities van Latijns-Amerika.',
      'hero.locale':'Brussel — sinds 2024',
      'agenda.heading':'Agenda<em>.</em>','agenda.upcoming':'Komende','agenda.recent':'Recente concerten',
      'contact.heading':'Neem <em>contact</em> op.',
      'contact.meta':'Voor boekingen, programmering of onderzoek — schrijf direct of gebruik het formulier.',
      'contact.email':'E-mail','contact.phone':'Telefoon',
      'form.name':'Naam','form.email':'E-mail','form.subject':'Onderwerp','form.message':'Bericht','form.send':'Verzend bericht',
      'ens.heading':'Ensembles<em>.</em>','prog.heading':'Programma\u2019s<em>.</em>',
      'prog.note':'Drie programma\u2019s momenteel op tournee — kies er een om het repertoire te zien.',
      'about.lede':'Ik ben gepassioneerd door de expressiviteit van muziek en door de verhalen die ik via mijn <em>programma\u2019s</em> kan vertellen.',
      'about.bio.p1':'Jose Huamani is violagambist en musicoloog, geboren in Lima, Peru, en sinds 2024 woonachtig in Brussel. Als musicoloog studeerde hij bij twee belangrijke leermeesters: <em>Omar Ponce</em>, een toonaangevende figuur in de etnomusicologie, en <em>Aurelio Tello Malpartida</em>, een van de belangrijkste figuren van de Latijns-Amerikaanse oude-muziekheropleving. Hij koos ervoor om viola da gamba te studeren in Frankrijk bij Myriam Rignol, aan de conservatoria van Besançon en Lyon, en verhuisde vervolgens naar Brussel voor zijn Master bij Kaori Uemura.',
      'about.bio.p2':'Zijn muzikale projecten verbinden maatschappelijk engagement met een diepe wens om Latijns-Amerikaanse culturen en hun banden met de oude muziek zichtbaar te maken. Hij richtte een studentenfestival op in Lima en leidde het twee jaar lang vóór de COVID-pandemie, en stichtte daarna twee ensembles in Europa: <em>Ensemble Transatlantique</em> (Lyon) en <em>Auroras Mestizas</em> (Brussel), die elk verschillende kanten van het Latijns-Amerikaanse repertoire belichten. Vandaag is hij niet alleen artistiek directeur, maar ook lid van de IDEA task force van EMA en medeoprichter van het nieuwe Europese netwerk voor Latijns-Amerikaanse oude muziek, waar hij de Latijns-Amerikaanse gemeenschap in Europa en de opkomende Peruaanse oude-muziekwereld wil vertegenwoordigen.',
      'ens.colibri.idx':'I — Duo','ens.colibri.role':'Medeoprichter · Viola da gamba',
      'ens.colibri.desc':'Een duo van viole da gamba met Adele Serena (Vicenza · Brussel). Twee spelers, twee scholen, één instrumentenfamilie — Frans, Engels en Italiaans solorepertoire, samen met arrangementen voor historische instrumenten.',
      'ens.colibri.meta1':'Twee viole da gamba','ens.colibri.meta2':'met Adele Serena',
      'ens.auroras.idx':'II — 2025 · Brussel','ens.role.founder':'Oprichter · Artistiek leider','ens.role.founder2':'Oprichter · Artistiek leider',
      'ens.auroras.desc':'Een jong ensemble gewijd aan de muziek van de 18e eeuw, gelezen met het Amerikaanse continent binnen het kader in plaats van erbuiten. Latijns-Amerikaanse archieven ontmoeten het laat-barokke en galante repertoire uit Europa.',
      'ens.auroras.meta1':'Stemmen · violen · violone · theorbe',
      'ens.transat.idx':'III — 2022 · Lyon',
      'ens.transat.desc':'Opgericht binnen het CNSMD van Lyon. Een ensemble met variabele bezetting dat jonge Europese en Latijns-Amerikaanse artiesten samenbrengt rond oude-muziekrepertoire, orale tradities en lopend onderzoek.',
      'ens.transat.meta1':'Variabel, 4–10 artiesten',
      'ptab.echoes.ttl':'Echo’s van een verloren droom','ptab.echoes.who':'Een reis door onirische gevoelens',
      'ptab.love.ttl':'Liefde tegen (goddelijke) stormen','ptab.love.who':'Sopraan · violen · violone · theorbe',
      'ptab.america.ttl':'América Popular','ptab.america.who':'Aan de oorsprong van de traditie',
      'pp.echoes.who':'Due Colibrí · Twee viole da gamba','pp.echoes.title':'Echo’s van een verloren droom','pp.echoes.sub':'een reis door onirische gevoelens op de viola',
      'pp.echoes.epigraph':'Zichzelf vergeten in de diepste dromen: van de intense lethargie die aan de droomwereld voorafgaat, tot de wondere fantasieën die met de werkelijkheid versmelten en vervolgens voor altijd in de vergetelheid verdwijnen.',
      'pp.echoes.body':'De fasen van menselijke dromen zijn allesbehalve eentonige verhalen — toch blijven hun sporen slechts zelden bij ons.',
      'pp.love.who':'Auroras Mestizas · Sopraan en kamerbezetting','pp.love.title':'Liefde tegen (goddelijke) stormen','pp.love.sub':'een gedurfde lezing van de vroege achttiende eeuw',
      'pp.love.epigraph':'…But no Man moved Me — till the Tide<br />Went past my simple Shoe —<br />And past my Apron — and my Belt<br />And past my Boddice — too —',
      'pp.love.body':'Auroras Mestizas beperkt zich niet tot het isoleren of naast elkaar plaatsen van muziekwerelden — het zoekt juist naar de gemeenschappelijke ruimtes die zij delen. Figuren als José de Orejón y Aparicio of Manuel de Zumaya gaan vanzelfsprekend in dialoog met Scarlatti, Porpora en Nebra, en bieden een gedurfde en innovatieve lezing van de oude muziek.',
      'pp.america.who':'Ensemble Transatlantique · 4 artiesten','pp.america.title':'América Popular','pp.america.sub':'aan de oorsprong van de traditie',
      'pp.america.epigraph':'Ver van de hoven, voorbij de muren van de kathedralen — de muziek van bewoners met uiteenlopende oorsprong, die hun leven in de nieuwe wereld zouden vormgeven.',
      'pp.america.body':'América Popular toont de oorsprong van de diversiteit en de kleuren van de Latijns-Amerikaanse populaire muziek — erfgenaam van de westerse oude muziek, van Afrikaanse ritmes en van de inheemse muziek van het continent. Een repertoire met een eigen, fiere identiteit, van de Amerikaanse volkeren.',
      'specs.disposition':'Bezetting','specs.duration':'Duur','specs.budget':'Budget','specs.adaptable':'Aanpasbaar',
      'specs.echoes.disp':'2 viole da gamba','specs.echoes.dur':'45–70 min','specs.echoes.budget':'vanaf 700\u202f€',
      'specs.love.disp':'Sopraan · 2 violen · violone · theorbe','specs.love.dur':'45–75 min','specs.love.budget':'vanaf 1\u202f750\u202f€',
      'specs.america.disp':'Stemmen · traditionele Amerikaanse instrumenten · continuo','specs.america.dur':'60 min','specs.america.budget':'vanaf 1\u202f500\u202f€','specs.america.adapt':'Schoolvoorstellingen'
    }
  };

  function apply(lang){
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const v = (T[lang]||{})[key];
      if(v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-current-lang]').forEach(s => s.textContent = LABELS[lang]);
    document.querySelectorAll('[data-lang-menu] [data-lang-pick]').forEach(b => {
      b.setAttribute('aria-current', b.dataset.langPick === lang ? 'true' : 'false');
    });
    try{ localStorage.setItem('jh.lang', lang); }catch(e){}
  }

  function buildMenu(){
    document.querySelectorAll('.lang-switch').forEach(li => {
      if(li.querySelector('[data-lang-menu]')) return;
      const menu = document.createElement('div');
      menu.setAttribute('data-lang-menu','');
      menu.innerHTML = LANGS.map(l => `<button type="button" data-lang-pick="${l}">${LABELS[l]} <span class="lname">${NAMES[l]}</span></button>`).join('');
      li.appendChild(menu);
      menu.addEventListener('click', e => {
        const b = e.target.closest('[data-lang-pick]');
        if(!b) return;
        apply(b.dataset.langPick);
        li.classList.remove('open');
      });
    });
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const li = btn.closest('.lang-switch');
        li.classList.toggle('open');
      });
    });
    document.addEventListener('click', e => {
      if(!e.target.closest('.lang-switch')){
        document.querySelectorAll('.lang-switch.open').forEach(li => li.classList.remove('open'));
      }
    });
  }

  let saved;
  try{ saved = localStorage.getItem('jh.lang'); }catch(e){}
  const lang = LANGS.includes(saved) ? saved : 'en';

  function init(){
    buildMenu();
    apply(lang);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
