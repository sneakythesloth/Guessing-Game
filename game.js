// --- 1. DATA ARRAY (20 hints per person) ---
const celebs = [
  {
    name: "Taylor Swift",
    hints: [
      "Born in Pennsylvania in December 1989.",
      "Named after a famous folk singer-songwriter.",
      "Grew up on a Christmas tree farm.",
      "Moved to Nashville at age 14 to pursue music.",
      "Signed with Big Machine Records as a teenager.",
      "Her debut single was named after a prominent country artist.",
      "Wrote her entire second studio album by herself.",
      "Famously interrupted during an award acceptance speech in 2009.",
      "Known for hiding Easter eggs in her liner notes and music videos.",
      "Her fans are collectively known as Swifties.",
      "Has crossed over from country music to pop, synth-pop, and indie folk.",
      "Famously began re-recording her first six studio albums.",
      "Wrote and directed a 10-minute short film for one of her fan-favorite songs.",
      "Won Album of the Year at the Grammys for four different albums.",
      "Her grandmother was a professional opera singer.",
      "Known for writing songs about her highly publicized relationships.",
      "Released sister albums titled 'Folklore' and 'Evermore' in 2020.",
      "Her massive stadium tour became the highest-grossing music tour in history.",
      "Associated with the albums 'Fearless', '1989', and 'Midnights'.",
      "She sings 'Shake It Off' and 'Blank Space'."
    ]
  },
  {
    name: "Eminem",
    hints: [
      "Born Marshall Bruce Mathers III in St. Joseph, Missouri.",
      "Grew up in a predominantly Black neighborhood in Detroit, Michigan.",
      "Failed the ninth grade three times before dropping out.",
      "Competed in open mic freestyle rap battles at the Hip Hop Shop on 7 Mile.",
      "Created an aggressive, dark alter-ego persona named Slim Shady.",
      "Caught the attention of legendary producer Dr. Dre after placing second at the 1997 Rap Olympics.",
      "His major-label debut album brought him mainstream fame in 1999.",
      "Starring in the semi-autobiographical 2002 film '8 Mile'.",
      "Won an Academy Award for Best Original Song for 'Lose Yourself'.",
      "Known for his rapid-fire delivery and intricate rhyming schemes.",
      "Set a Guinness World Record for most words in a hit single with 'Rap God'.",
      "Executive produced the soundtrack to the film 'Southpaw'.",
      "Co-founded Shady Records alongside his manager Paul Rosenberg.",
      "Was part of the hip-hop group D12 and the duo Bad Meets Evil.",
      "Famously feuded with pop stars and critics throughout the early 2000s.",
      "Released comeback albums titled 'Relapse' and 'Recovery'.",
      "Adopted his daughter Hailie, who is frequently mentioned in his songs.",
      "Released 'The Death of Slim Shady (Coup de Grâce)' in 2024.",
      "Often referred to as the 'King of Hip Hop'.",
      "The Detroit rapper behind 'Real Slim Shady', 'Without Me', and 'Stan'."
    ]
  },
  {
    name: "Liam Gallagher",
    hints: [
      "Born in Burnage, Manchester, England in 1972.",
      "The youngest of three brothers in an Irish Catholic family.",
      "Joined a local Manchester band called The Rain as the lead vocalist.",
      "Invited his older brother to join the band on the condition he became the sole songwriter.",
      "Known for his distinctive singing stance with hands behind his back and chin pointing up.",
      "Adopted a signature fashion style including parkas, bucket hats, and round sunglasses.",
      "Became a figurehead of the 1990s Britpop movement.",
      "Known for his brash persona and frequent rivalries with competing bands like Blur.",
      "Fronted one of the biggest British rock bands of all time alongside his brother.",
      "Performed iconic sellout gigs at Knebworth in 1996 to over 250,000 people.",
      "Founded the clothing brand Pretty Green in 2009.",
      "Formed the band Beady Eye after his primary band split up in 2009.",
      "Launched a highly successful solo career in 2017 with the album 'As You Were'.",
      "His solo album 'C'mon You Know' debuted at number one in the UK in 2022.",
      "Released a collaborative album with Stone Roses guitarist John Squire in 2024.",
      "Known for his legendary, unfiltered posts on X (formerly Twitter).",
      "Famously feuded with his brother Noel for decades, leading to a long separation.",
      "Announced a massive 2025 reunion tour with his original band Oasis.",
      "Singing lead vocals on hits like 'Live Forever', 'Rock 'n' Roll Star', and 'Champagne Supernova'.",
      "The legendary frontman and vocalist of Oasis."
    ]
  },
  {
    name: "Noel Gallagher",
    hints: [
      "Born in Longsight, Manchester, England in 1967.",
      "Learned to play the guitar while serving probation as a teenager.",
      "Worked as a roadie and technician for the Manchester band Inspiral Carpets.",
      "Joined his younger brother's band as the principal songwriter and lead guitarist.",
      "Wrote almost the entirety of his band's first two multi-platinum albums.",
      "Known for his sharp wit, candid interviews, and dry British humor.",
      "Singing lead vocals on select iconic acoustic tracks for his band.",
      "Composed the megahit 'Wonderwall', one of the most famous rock songs of the 1990s.",
      "Became a central figure of the 'Cool Britannia' culture in the mid-1990s.",
      "Known for playing a Epiphone Supernova guitar featuring a Union Jack design.",
      "Walked out on his band in August 2009 after a confrontation backstage in Paris.",
      "Formed his own solo project named Noel Gallagher's High Flying Birds in 2010.",
      "His solo debut album sold over 800,000 copies in the UK alone.",
      "Known for his public feuds with rival musicians, pop stars, and his younger brother.",
      "Won the Ivor Novello Award for Outstanding Song Collection in 2013.",
      "Released the critically acclaimed solo album 'Council Skies' in 2023.",
      "Often described as the musical brain and chief architect behind Oasis.",
      "Announced a highly anticipated 2025 reunion tour alongside his brother Liam.",
      "Wrote iconic anthems including 'Don't Look Back in Anger' and 'Live Forever'.",
      "The lead guitarist and primary songwriter of Oasis who sang 'Don't Look Back in Anger'."
    ]
  },
  {
    name: "Elon Musk",
    hints: [
      "Born in Pretoria, South Africa in 1971.",
      "Taught himself computer programming and sold a video game code at age 12.",
      "Moved to Canada at age 17, then transferred to the University of Pennsylvania.",
      "Dropped out of a Stanford PhD program after just two days to pursue internet start-ups.",
      "Co-founded Zip2, which was acquired by Compaq in 1999.",
      "Co-founded X.com, an online financial services company that became PayPal.",
      "Netted over $100 million when eBay bought PayPal in 2002.",
      "Founded SpaceX in 2002 with the goal of reducing space transportation costs.",
      "Joined Tesla Motors as an early investor and chairman, later becoming CEO.",
      "Unveiled the Falcon Heavy rocket and launched his personal sports car into space.",
      "Co-founded Neuralink, a brain-computer interface technology company.",
      "Founded The Boring Company to construct underground traffic tunnels.",
      "Acquired the social media platform Twitter in 2022 and rebranded it to X.",
      "Promoted renewable energy products including SolarCity and the Powerwall.",
      "Known for his eccentric online presence and market-moving tweets.",
      "Unveiled futuristic vehicles like the Cybertruck and the Starship rocket.",
      "Became the richest person in the world at various points during the 2020s.",
      "Advocates for establishing a human colony on Mars.",
      "Associated with electric cars, space travel, and the social platform X.",
      "The billionaire tech mogul who leads Tesla and SpaceX."
    ]
  },
  {
    name: "Mr Drury",
    hints: [
      "They are loved by their students",
      "They are also very famous",
      "People outside of his class know and love him",
      "He teaches English",
      "His class is not subject Mr Barnes",
      "Their class is in pod 2",
      "Rylan Kidd, Lachlan Widin-Johnson, and Bayelen Dinnesh (lil' d) are in their class",
      "He is known for using Ay-eye stick figures",
      "Wha are you using Ay-eye in ma claawsroom???????"
    ]
  },


  {
    name: "Mr Barnes",
    hints: [
      "He is australian",
      "He lived in New York for 4 years",
      "Me and Mason Ma made a nickname for him called 'Crispy Buns'",
      "Millan Wang really dislikes them",
    ]
  },
  {
    name: "Dr Mann",
    hints: [
      "He is the director of history @ scots",
      "He went on a really long paddle trip",
      "Millan also really dislikes this character",
    ]
  },
];

// --- 2. GAME STATE VARIABLES ---
let shuffledCelebs = [];
let currentCelebIndex = 0;
let visibleHintsCount = 1;

// --- 3. CORE FUNCTIONS ---
function shuffleCelebrities() {
  shuffledCelebs = [...celebs];
  for (let i = shuffledCelebs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCelebs[i], shuffledCelebs[j]] = [shuffledCelebs[j], shuffledCelebs[i]];
  }
}

function renderHints(statusMsg = "", msgClass = "") {
  const currentCeleb = shuffledCelebs[currentCelebIndex];
  const hintContainer = document.getElementById("hint-container");

  let htmlContent = "<ul>";
  for (let i = 0; i < visibleHintsCount; i++) {
    htmlContent += `<li><strong>Hint ${i + 1}:</strong> ${currentCeleb.hints[i]}</li>`;
  }
  htmlContent += "</ul>";

  if (statusMsg) {
    htmlContent += `<div class="status-message ${msgClass}">${statusMsg}</div>`;
  }

  hintContainer.innerHTML = htmlContent;
}

function loadNextCelebrity() {
  currentCelebIndex++;
  visibleHintsCount = 1;

  if (currentCelebIndex >= shuffledCelebs.length) {
    shuffleCelebrities();
    currentCelebIndex = 0;
  }

  renderHints();
}

function checkGuess() {
  const inputField = document.getElementById("guess-input");
  const userGuess = inputField.value.toLowerCase().trim();
  const currentCeleb = shuffledCelebs[currentCelebIndex];

  if (userGuess === "") return;

  if (userGuess === currentCeleb.name.toLowerCase().trim()) {
    inputField.value = "";
    renderHints(`Correct! The answer was ${currentCeleb.name}! Moving to next person...`, "correct-msg");

    setTimeout(() => {
      loadNextCelebrity();
    }, 1500);
  } else {
    inputField.value = "";

    if (visibleHintsCount < currentCeleb.hints.length) {
      visibleHintsCount++;
      renderHints("Incorrect! Here is another hint:", "wrong-msg");
    } else {
      renderHints(`No more hints! The correct answer was ${currentCeleb.name}. Moving to next person...`, "wrong-msg");

      setTimeout(() => {
        loadNextCelebrity();
      }, 2500);
    }
  }
}

// --- 4. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit");
  const resetBtn = document.getElementById("reset");
  const giveUpBtn = document.getElementById("give_up");
  const inputField = document.getElementById("guess-input");

  submitBtn.addEventListener("click", checkGuess);

  inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkGuess();
    }
  });

  resetBtn.addEventListener("click", () => {
    inputField.value = "";
    loadNextCelebrity();
  });

  giveUpBtn.addEventListener("click", () => {
    const currentCeleb = shuffledCelebs[currentCelebIndex];
    inputField.value = "";
    renderHints(`You gave up! The answer was ${currentCeleb.name}. Moving to next person...`, "wrong-msg");

    setTimeout(() => {
      loadNextCelebrity();
    }, 2000);
  });

  shuffleCelebrities();
  renderHints();
});
