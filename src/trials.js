export const commonQuestions = {
  emotion: {
    question: "Wie fühlt sie sich in diesem Moment?",
    options: [
      {
        id: "happy",
        image: "./Mom_happy.png"
      },
      {
        id: "angry",
        image: "./Mom_angry.png"
      }
    ]
  },

  why: {
    question: "Warum hat die Mutter das gesagt?"
  },

  difficulty: {
    question:
      "Wie schwierig ist es deiner Meinung nach für ein Kind, " +
      "die Aussage der Mutter in dieser Situation zu verstehen?",
    min: 0,
    max: 100,
    leftLabel: "gar nicht schwierig",
    rightLabel: "sehr schwierig"
  },

  likelihood: {
    question:
      "Wie wahrscheinlich ist es deiner Meinung nach, dass ein " +
      "Elternteil diese Aussage gegenüber einem Kind trifft?",
    min: 0,
    max: 100,
    leftLabel: "sehr unwahrscheinlich",
    rightLabel: "sehr wahrscheinlich"
  }
};

export const conditions = [
  "irony",
  "praise",
  "criticism",
  "control"
];

export const stories = [
  {
    storyId: 1,
    level: 1,
    latinPosition: 0,

    utteranceReminder: "Annas Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Koffer zu diesem Zeitpunkt gepackt oder leer?",

        options: [
        {
            id: "packed",
            text: "Gepackt"
        },
        {
            id: "empty",
            text: "Leer"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Anna fährt morgen mit ihrer Familie in den Urlaub. ` +
          `Ihre Mutter sagt: „Pack bitte deine Sachen für den Urlaub ` +
          `in den Koffer. Er steht schon in deinem Zimmer.“ ` +
          `Anna geht in ihr Zimmer und spielt mit ihrer Puppe. ` +
          `Ihre Mutter kommt herein und sagt: „Toll gemacht!“`,

        utterance: "Toll gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "packs",
              text: "Anna packt ihren Koffer",
              correct: true
            },
            {
              id: "plays",
              text: "Anna spielt mit ihrer Puppe",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "empty",
          whyTrigger: "empty"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Anna fährt morgen mit ihrer Familie in den Urlaub. ` +
          `Ihre Mutter sagt: „Pack bitte deine Sachen für den Urlaub ` +
          `in den Koffer. Er steht schon in deinem Zimmer.“ ` +
          `Anna geht in ihr Zimmer und packt ihren Koffer. ` +
          `Ihre Mutter kommt herein und sagt: „Toll gemacht!“`,

        utterance: "Toll gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "plays_after_packing",
              text:
                "Annas Koffer ist fertig gepackt und sie spielt jetzt mit ihrer Puppe",
              correct: true
            },
            {
              id: "gets_more_clothes",
              text:
                "Annas Koffer ist fertig gepackt und sie holt noch mehr Kleidung aus dem Schrank",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "packed",
          whyTrigger: "empty"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Anna fährt morgen mit ihrer Familie in den Urlaub. ` +
          `Ihre Mutter sagt: „Pack bitte deine Sachen für den Urlaub ` +
          `in den Koffer. Er steht schon in deinem Zimmer.“ ` +
          `Anna geht in ihr Zimmer und spielt mit ihrer Puppe. ` +
          `Ihre Mutter kommt herein und sagt: ` +
          `„Du hast deinen Koffer noch nicht gepackt!“`,

        utterance: "Du hast deinen Koffer noch nicht gepackt!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "packs",
              text: "Anna packt ihren Koffer",
              correct: true
            },
            {
              id: "plays",
              text: "Anna spielt mit ihrer Puppe",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "empty",
          whyTrigger: "packed"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Anna fährt morgen mit ihrer Familie in den Urlaub. ` +
          `Ihre Mutter sagt: „Pack bitte deine Sachen für den Urlaub ` +
          `in den Koffer. Er steht schon in deinem Zimmer.“ ` +
          `Anna geht in ihr Zimmer und spielt mit ihrer Puppe. ` +
          `Ihre Mutter kommt herein und sagt: ` +
          `„Mein Koffer ist schon gepackt. Ich kann dir jetzt mit deinem helfen.“`,

        utterance:
          "Mein Koffer ist schon gepackt. Ich kann dir jetzt mit deinem helfen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "pack_together",
              text: "Anna und ihre Mutter packen gemeinsam den Koffer",
              correct: true
            },
            {
              id: "plays",
              text: "Anna spielt mit ihrer Puppe",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "empty",
          whyTrigger: "packed"
        }
      }
    }
  },
];


export const latinSquare = [
  ["irony", "praise", "criticism", "control"],
  ["praise", "criticism", "control", "irony"],
  ["criticism", "control", "irony", "praise"],
  ["control", "irony", "praise", "criticism"]
];


export function createList(listNumber) {
  const listIndex = listNumber - 1;

  if (listIndex < 0 || listIndex >= 4) {
    throw new Error(
      "List number must be between 1 and 4."
    );
  }

  return stories.map((story) => {
    const condition =
      latinSquare[listIndex][
        story.latinPosition
      ];

    const version =
      story.versions[condition];

    return {
      storyId: story.storyId,
      level: story.level,
      latinPosition:
        story.latinPosition,

      list: listNumber,
      condition,

      situationQuestion:
        story.situationQuestion,
      
      utteranceReminder: story.utteranceReminder,

      ...version
    };
  });
}


export function shuffleArray(array) {
  const shuffled = [...array];

  for (
    let i = shuffled.length - 1;
    i > 0;
    i--
  ) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i]
    ];
  }

  return shuffled;
}


export function randomizeTrialOrder(trials) {
  const levels = [
    ...new Set(
      trials.map(
        trial => trial.level
      )
    )
  ];

  const shuffledLevels =
    shuffleArray(levels);

  const randomizedTrials = [];

  shuffledLevels.forEach(
    (level, levelIndex) => {

      const levelTrials =
        trials.filter(
          trial =>
            trial.level === level
        );

      const shuffledLevelTrials =
        shuffleArray(levelTrials);

      shuffledLevelTrials.forEach(
        (trial, withinLevelIndex) => {

          randomizedTrials.push({
            ...trial,

            levelOrder:
              levelIndex + 1,

            withinLevelTrial:
              withinLevelIndex + 1
          });
        }
      );
    }
  );

  return randomizedTrials.map(
    (trial, index) => ({
      ...trial,

      trialNumber:
        index + 1
    })
  );
}


export function createParticipantTrials(
  listNumber
) {
  return randomizeTrialOrder(
    createList(listNumber)
  );
}