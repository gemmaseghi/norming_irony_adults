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
              text: "Anna spielt weiter mit ihrer Puppe",
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
          `Als sie den gepackten Koffer gerade geschlossen hat,` +
          `kommt ihre Mutter herein und sagt: „Toll gemacht!“`,

        utterance: "Toll gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "plays_after_packing",
              text:
                "Anna spielt mit ihrer Puppe",
              correct: true
            },
            {
              id: "gets_more_stuff",
              text:
                "Anna holt noch weitere Sachen aus dem Schrank",
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
              text: "Anna spielt weiter mit ihrer Puppe",
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
              text: "Anna spielt weiter mit ihrer Puppe",
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
  {
    storyId: 2,
    level: 1,
    latinPosition: 1,

    utteranceReminder: "Tobis Mutter sagt:",

    situationQuestion: {
        question:
        "Sind die Hausaufgaben zu diesem Zeitpunkt gemacht oder nicht gemacht?",

        options: [
        {
            id: "done",
            text: "Gemacht"
        },
        {
            id: "not_done",
            text: "Nicht gemacht"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Nach dem Mittagessen sagt seine Mutter zu Tobi: „Bitte ` +
          `mach jetzt deine Hausaufgaben.“ Tobi geht in sein Zimmer, ` +
          `stellt seine Schultasche in die Ecke und fängt an, auf seinem ` +
          `Computer ein Videospiel zu spielen. Seine Mutter kommt herein ` +
          `und sagt: „Sehr gut gemacht!“`,

        utterance: "Sehr gut gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "homework",
              text: "Tobi macht seine Hausaufgaben",
              correct: true
            },
            {
              id: "videogame",
              text: "Tobi spielt das Videospiel weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "not_done",
          whyTrigger: "not_done"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Nach dem Mittagessen sagt seine Mutter zu Tobi: „Bitte ` +
          `mach jetzt deine Hausaufgaben.“ Tobi geht in sein Zimmer ` +
          `und macht seine Hausaufgaben. Seine Mutter kommt herein, ` +
          `als er gerade mit allen Hausaufgaben fertig geworden ist ` +
          `und sein Buch zuklappt. Sie sagt: „Sehr gut gemacht!“`,

        utterance: "Sehr gut gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "now_videogame",
              text:
                "Tobi spielt ein Videospiel",
              correct: true
            },
            {
              id: "more_homework",
              text:
                "Tobi macht noch weitere Aufgaben",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "done",
          whyTrigger: "not_done"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Nach dem Mittagessen sagt seine Mutter zu Tobi: „Bitte ` +
          `mach jetzt deine Hausaufgaben.“ Tobi geht in sein Zimmer, ` +
          `stellt seine Schultasche in die Ecke und fängt an, auf seinem ` +
          `Computer ein Videospiel zu spielen. Seine Mutter kommt herein ` +
          `und sagt: „Du hast deine Hausaufgaben noch nicht gemacht!“`,

        utterance: "Du hast deine Hausaufgaben noch nicht gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "homework",
              text: "Tobi macht seine Hausaufgaben",
              correct: true
            },
            {
              id: "videogame",
              text: "Tobi spielt das Videospiel weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "not_done",
          whyTrigger: "done"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Nach dem Mittagessen sagt seine Mutter zu Tobi: „Bitte ` +
          `mach jetzt deine Hausaufgaben.“ Tobi geht in sein Zimmer, ` +
          `stellt seine Schultasche in die Ecke und fängt an, auf seinem ` +
          `Computer ein Videospiel zu spielen. Seine Mutter kommt herein ` +
          `und sagt: „Na komm, wir schauen uns deine Hausaufgaben mal zusammen an.“`,

        utterance:
          "Na komm, wir schauen uns deine Hausaufgaben mal zusammen an.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "homework_together",
              text: "Tobis Mutter hilft ihm mit seinen Hausaufgaben",
              correct: true
            },
            {
              id: "videogame",
              text: "Tobi spielt das Videospiel weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "not_done",
          whyTrigger: "done"
        }
      }
    }
  },
  {
    storyId: 3,
    level: 1,
    latinPosition: 2,

    utteranceReminder: "Annas Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Tisch zu diesem Zeitpunkt sauber oder angemalt?",

        options: [
        {
            id: "clean",
            text: "Sauber"
        },
        {
            id: "colored",
            text: "Angemalt"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Anna malt auf dem Esstisch ein Bild aus. Ihre Mutter sagt: ` +
          `„Bitte pass auf, dass du nur auf dem Papier malst.“ Kurz darauf ` +
          `hat Anna an mehreren Stellen auf den Tisch gemalt. Ihre Muttter ` +
          `kommt herein und sagt: „Super gemacht!”`,

        utterance: "Super gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe",
              text: "Anna wischt den Tisch sauber",
              correct: true
            },
            {
              id: "color",
              text: "Anna malt weiter ihr Bild aus",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "colored",
          whyTrigger: "colored"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Anna malt auf dem Esstisch ein Bild aus. Ihre Mutter sagt: ` +
          `„Bitte pass auf, dass du nur auf dem Papier malst.“ Anna ist ` +
          `sehr vorsichtig unhd malt ihr Bild aus, ohne dabei auf den ` +
          `Tisch zu malen. Ihre Mutter kommt herein und sagt: „Super gemacht!”`,

        utterance: "Super gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "color",
              text:
                "Anna malt weiter ihr Bild aus",
              correct: true
            },
            {
              id: "wipe",
              text:
                "Anna wischt den Tisch sauber",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "clean",
          whyTrigger: "colored"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Anna malt auf dem Esstisch ein Bild aus. Ihre Mutter sagt: ` +
          `„Bitte pass auf, dass du nur auf dem Papier malst.“ Kurz darauf ` +
          `hat Anna an mehreren Stellen auf den Tisch gemalt. Ihre Muttter ` +
          `kommt herein und sagt: „Du hast den ganzen Tisch angemalt!“`,

        utterance: "Du hast den ganzen Tisch angemalt!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe",
              text: "Anna wischt den Tisch sauber",
              correct: true
            },
            {
              id: "color",
              text: "Anna malt weiter ihr Bild aus",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "colored",
          whyTrigger: "clean"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Anna malt auf dem Esstisch ein Bild aus. Ihre Mutter sagt: ` +
          `„Bitte pass auf, dass du nur auf dem Papier malst.“ Kurz darauf ` +
          `hat Anna an mehreren Stellen auf den Tisch gemalt. Ihre Muttter ` +
          `kommt herein und sagt: „Keine Sorge, ich hole schnell einen Lappen!“`,

        utterance:
          "Keine Sorge, ich hole schnell einen Lappen!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe_together",
              text: "Anna und ihre Mutter wischen den Tisch sauber",
              correct: true
            },
            {
              id: "color",
              text: "Anna malt weiter ihr Bild aus",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "colored",
          whyTrigger: "clean"
        }
      }
    }
  },
  {
    storyId: 4,
    level: 1,
    latinPosition: 3,

    utteranceReminder: "Tobis Mutter sagt:",

    situationQuestion: {
        question:
        "Wurde das Kaninchen zu diesem Zeitpunkt schon gefüttert oder noch nicht gefüttert?",

        options: [
        {
            id: "fed",
            text: "Gefüttert"
        },
        {
            id: "not_fed",
            text: "Nicht gefüttert"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Tobi macht gerade ein Puzzle. Seine Mutter kommt mit einer ` +
          `Schüssel voller Gemüse herein und stellt sie auf den Tisch. ` +
          `Sie sagt: „Könntest du das bitte dem Kaninchen geben?“ ` +
          `Sie geht wieder und Tobi puzzelt weiter. Als seine Mutter ` +
          `zurückkommt, steht die volle Schüssel immer noch auf dem Tisch. ` +
          `Sie sagt: „Vielen Dank!“`,

        utterance: "Vielen Dank!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "feed",
              text: "Tobi füttert das Kaninchen",
              correct: true
            },
            {
              id: "puzzle",
              text: "Tobi puzzelt weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "not_fed",
          whyTrigger: "not_fed"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Tobi macht gerade ein Puzzle. Seine Mutter kommt mit einer ` +
          `Schüssel voller Gemüse herein und stellt sie auf den Tisch. ` +
          `Sie sagt: „Könntest du das bitte dem Kaninchen geben?“ ` +
          `Sie geht wieder und Tobi füttert das Kaninchen. Als seine ` +
          `Mutter zurückkommt, steht die leere Schüssel auf dem Tisch. ` +
          `Sie sagt: „Vielen Dank!“`,

        utterance: "Vielen Dank!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "puzzle",
              text:
                "Tobi puzzelt weiter",
              correct: true
            },
            {
              id: "feed_again",
              text:
                "Tobi füttert das Kaninchen erneut",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "fed",
          whyTrigger: "not_fed"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Tobi macht gerade ein Puzzle. Seine Mutter kommt mit einer ` +
          `Schüssel voller Gemüse herein und stellt sie auf den Tisch. ` +
          `Sie sagt: „Könntest du das bitte dem Kaninchen geben?“ ` +
          `Sie geht wieder und Tobi puzzelt weiter. Als seine Mutter ` +
          `zurückkommt, steht die volle Schüssel immer noch auf dem Tisch. ` +
          `Sie sagt: „Du hast das Kaninchen nicht gefüttert!“`,

        utterance: "Du hast das Kaninchen nicht gefüttert!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "feed",
              text: "Tobi füttert das Kaninchen",
              correct: true
            },
            {
              id: "puzzle",
              text: "Tobi puzzelt weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "not_fed",
          whyTrigger: "fed"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Tobi macht gerade ein Puzzle. Seine Mutter kommt mit einer ` +
          `Schüssel voller Gemüse herein und stellt sie auf den Tisch. ` +
          `Sie sagt: „Könntest du das bitte dem Kaninchen geben?“ ` +
          `Sie geht wieder und Tobi puzzelt weiter. Als seine Mutter ` +
          `zurückkommt, steht die volle Schüssel immer noch auf dem Tisch. ` +
          `Sie sagt: „Komm, wir schauen mal zusammen zum Kaninchen. ` +
          `Das hat bestimmt schon Hunger.“`,

        utterance:
          "Komm, wir schauen mal zusammen zum Kaninchen. Das hat bestimmt schon Hunger.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "feed_together",
              text: "Tobi und seine Mutter füttern das Kaninchen",
              correct: true
            },
            {
              id: "puzzle",
              text: "Tobi puzzelt weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "not_fed",
          whyTrigger: "fed"
        }
      }
    }
  },
  {
    storyId: 5,
    level: 2,
    latinPosition: 0,

    utteranceReminder: "Annas Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Tisch zu diesem Zeitpunkt gedeckt oder ungedeckt?",

        options: [
        {
            id: "set",
            text: "Gedeckt"
        },
        {
            id: "not_set",
            text: "Ungedeckt"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Anna schaut fern, während ihre Mutter das Abendessen zubereitet. ` +
          `Die Mutter kommt ins Wohnzimmer und sagt zu Anna: „Das Abendessen ` +
          `ist bald fertig. Bitte deck schon mal den Tisch.“ ` +
          `Anna bleibt vor dem Fernseher sitzen. Als das Essen fertig ist, ` +
          `läuft ihre Mutter zum Esstisch. Sie sagt: ` +
          `„Alles ist bereit fürs Abendessen.“`,

        utterance: "Alles ist bereit fürs Abendessen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "set_table",
              text: "Anna deckt den Tisch",
              correct: true
            },
            {
              id: "sit",
              text: "Anna und ihre Mutter setzen sich an den ungedeckten Tisch",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "not_set",
          whyTrigger: "not_set"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Anna schaut fern, während ihre Mutter das Abendessen zubereitet. ` +
          `Die Mutter kommt ins Wohnzimmer und sagt zu Anna: „Das Abendessen ` +
          `ist bald fertig. Bitte deck schon mal den Tisch.“ ` +
          `Anna deckt den Tisch. Als das Essen fertig ist, ` +
          `läuft ihre Mutter zum Esstisch. Sie sagt: ` +
          `„Alles ist bereit fürs Abendessen.“`,

        utterance: "Alles ist bereit fürs Abendessen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "sit_set_table",
              text:
                "Anna und ihre Mutter setzen sich an den Tisch",
              correct: true
            },
            {
              id: "set_table_again",
              text:
                "Anna holt noch mehr Geschirr",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "set",
          whyTrigger: "not_set"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Anna schaut fern, während ihre Mutter das Abendessen zubereitet. ` +
          `Die Mutter kommt ins Wohnzimmer und sagt zu Anna: „Das Abendessen ` +
          `ist bald fertig. Bitte deck schon mal den Tisch.“ ` +
          `Anna bleibt vor dem Fernseher sitzen. Als das Essen fertig ist, ` +
          `läuft ihre Mutter zum Esstisch. Sie sagt: ` +
          `Der Tisch ist nicht gedeckt!“`,

        utterance: "Der Tisch ist nicht gedeckt!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "set_table",
              text: "Anna deckt den Tisch",
              correct: true
            },
            {
              id: "sit",
              text: "Anna und ihre Mutter setzen sich an den ungedeckten Tisch",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "not_set",
          whyTrigger: "set"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Anna schaut fern, während ihre Mutter das Abendessen zubereitet. ` +
          `Die Mutter kommt ins Wohnzimmer und sagt zu Anna: „Das Abendessen ` +
          `ist bald fertig. Bitte deck schon mal den Tisch.“ ` +
          `Anna bleibt vor dem Fernseher sitzen. Als das Essen fertig ist, ` +
          `läuft ihre Mutter zum Esstisch. Sie sagt: ` +
          `„Wir brauchen noch Geschirr und dann können wir auch schon essen.“`,

        utterance:
          "Wir brauchen noch Geschirr und dann können wir auch schon essen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "set_table_together",
              text: "Anna und ihre Mutter decken den Tisch",
              correct: true
            },
            {
              id: "sit",
              text: "Anna und ihre Mutter setzen sich an den ungedeckten Tisch",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "not_set",
          whyTrigger: "set"
        }
      }
    }
  },
  {
    storyId: 6,
    level: 2,
    latinPosition: 1,

    utteranceReminder: "Tobis Mutter sagt:",

    situationQuestion: {
        question:
        "Ist die Schultasche zu diesem Zeitpunkt leer oder gepackt?",

        options: [
        {
            id: "bag_packed",
            text: "Gepackt"
        },
        {
            id: "bag_empty",
            text: "Leer"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Es ist schon spät am Abend und Tobis Mutter sagt: „Bitte pack ` +
          `deine Schultasche für morgen.“ Tobi geht in sein Zimmer und fängt an, ` +
          `ein Buch zu lesen. Seine Mutter kommt ins Zimmer und sieht, dass ` +
          `Tobis Schulbücher noch alle auf seinem Schreibtisch liegen. Sie sagt: ` +
          `„Du hast alle deine Sachen gepackt!“`,


        utterance: "Du hast alle deine Sachen gepackt!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "pack_bag",
              text: "Tobi packt seine Schultasche",
              correct: true
            },
            {
              id: "read",
              text: "Tobi liest weiter sein Buch",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "bag_empty",
          whyTrigger: "bag_empty"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Es ist schon spät am Abend und Tobis Mutter sagt: „Bitte pack ` +
          `deine Schultasche für morgen.“ Tobi geht in sein Zimmer und räumt ` +
          `alle sine Bücher in seine Schultasche. Seine Mutter kommt ins Zimmer ` +
          `und sieht, dass seine Schultasche fertig gepackt neben dem Schreibtisch ` +
          `steht. Sie sagt: „Du hast alle deine Sachen gepackt!“`,

        utterance: "Du hast alle deine Sachen gepackt!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "read_book",
              text:
                "Tobi liest ein Buch",
              correct: true
            },
            {
              id: "pack_bag_more",
              text:
                "Tobi holt noch mehr Bücher und packt sie in seine Schultasche",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "bag_packed",
          whyTrigger: "bag_empty"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Es ist schon spät am Abend und Tobis Mutter sagt: „Bitte pack ` +
          `deine Schultasche für morgen.“ Tobi geht in sein Zimmer und fängt an, ` +
          `ein Buch zu lesen. Seine Mutter kommt ins Zimmer und sieht, dass ` +
          `Tobis Schulbücher noch alle auf seinem Schreibtisch liegen. Sie sagt: ` +
          `„Du hast deine Schultasche nicht gepackt!“`,

        utterance: "Du hast deine Schultasche nicht gepackt!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "pack_bag",
              text: "Tobi packt seine Schultasche",
              correct: true
            },
            {
              id: "read",
              text: "Tobi liest weiter sein Buch",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "bag_empty",
          whyTrigger: "bag_packed"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Es ist schon spät am Abend und Tobis Mutter sagt: „Bitte pack ` +
          `deine Schultasche für morgen.“ Tobi geht in sein Zimmer und fängt an, ` +
          `ein Buch zu lesen. Seine Mutter kommt ins Zimmer und sieht, dass ` +
          `Tobis Schulbücher noch alle auf seinem Schreibtisch liegen. Sie sagt: ` +
          `„Ich habe deine Trinkflasche aufgefüllt. Die können wir auch gleich ` +
          `in deine Schultasche packen.“`,

        utterance:
          "Ich habe deine Trinkflasche aufgefüllt. Die können wir auch gleich in deine Schultasche packen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "pack_bag_together",
              text: "Tobi und seine Mutter packen die Schultasche",
              correct: true
            },
            {
              id: "read",
              text: "Tobi liest weiter sein Buch",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "bag_empty",
          whyTrigger: "bag_packed"
        }
      }
    }
  },
  {
    storyId: 7,
    level: 2,
    latinPosition: 2,

    utteranceReminder: "Annas Mutter sagt:",

    situationQuestion: {
        question:
        "Trägt Anna zu diesem Zeitpunkt ihren Schlafanzug oder ihre normale Kleidung?",

        options: [
        {
            id: "pajamas",
            text: "Schlafanzug"
        },
        {
            id: "clothes",
            text: "Normale Kleidung"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Anna spielt in ihrem Zimmer. Ihre Mutter kommt herein und sagt: ` +
          `„Es ist schon spät. Bitte mach dich fertig fürs Bett.“ Ihre Mutter ` +
          `geht wieder hinaus und Anna spielt weiter. Als Annas Mutter zurückkommt, ` +
          `sagt sie: „Du bist ja schon bettfertig!“`,

        utterance: "Du bist ja schon bettfertig!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "brush_teeth",
              text: "Anna putzt sich im Schlafanzug die Zähne",
              correct: true
            },
            {
              id: "bed_clothes",
              text: "Anna legt sich mit ihrer normalen Kleidung ins Bett",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "clothes",
          whyTrigger: "clothes"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Anna spielt in ihrem Zimmer. Ihre Mutter kommt herein und sagt: ` +
          `„Es ist schon spät. Bitte mach dich fertig fürs Bett.“ Ihre Mutter ` +
          `geht wieder hinaus. Anna zieht ihren Schlafanzug an und putzt sich die ` +
          `Zähne. Als Annas Mutter zurückkommt, sagt sie: „Du bist ja schon bettfertig!“`,

        utterance: "Du bist ja schon bettfertig!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "bed",
              text:
                "Anna legt sich ins Bett",
              correct: true
            },
            {
              id: "brush_teeth_again",
              text:
                "Anna putzt sich erneut die Zähne",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "pajamas",
          whyTrigger: "clothes"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Anna spielt in ihrem Zimmer. Ihre Mutter kommt herein und sagt: ` +
          `„Es ist schon spät. Bitte mach dich fertig fürs Bett.“ Ihre Mutter ` +
          `geht wieder hinaus und Anna spielt weiter. Als Annas Mutter zurückkommt, ` +
          `sagt sie: „Du bist ja noch gar nicht bettfertig!“`,

        utterance: "Du bist ja noch gar nicht bettfertig!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "brush_teeth",
              text: "Anna putzt sich im Schlafanzug die Zähne",
              correct: true
            },
            {
              id: "bed_clothes",
              text: "Anna legt sich mit ihrer normalen Kleidung ins Bett",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "clothes",
          whyTrigger: "pajamas"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Anna spielt in ihrem Zimmer. Ihre Mutter kommt herein und sagt: ` +
          `„Es ist schon spät. Bitte mach dich fertig fürs Bett.“ Ihre Mutter ` +
          `geht wieder hinaus und Anna spielt weiter. Als Annas Mutter zurückkommt, ` +
          `sagt sie: „Ich bin auch schon ganz müde. Wir können uns zusammen umziehen ` +
          `und unsere Zähne putzen.“`,

        utterance:
          "Ich bin auch schon ganz müde. Wir können uns zusammen umziehen und unsere Zähne putzen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "brush_teeth_together",
              text: "Anna und ihre Mutter putzen sich im Schlafanzug die Zähne",
              correct: true
            },
            {
              id: "bed_clothes",
              text: "Anna legt sich mit ihrer normalen Kleidung ins Bett",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "clothes",
          whyTrigger: "pajamas"
        }
      }
    }
  },
  {
    storyId: 8,
    level: 2,
    latinPosition: 3,

    utteranceReminder: "Tobis Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Teller zu diesem Zeitpunkt in der Spülmaschine oder auf dem Tisch?",

        options: [
        {
            id: "dishwasher",
            text: "In der Spülmaschine"
        },
        {
            id: "table",
            text: "Auf dem Tisch"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Tobis Mutter hat etwas zu essen für ihn vorbereitet. Sie sagt: „Wenn ` +
          `du fertig gegessen hast, räum den Teller bitte in die Spülmaschine.“ ` +
          `Tobi nickt und fängt an zu essen. Als er fertig ist, lässt er den Teller ` +
          `auf dem Tisch stehen und spielt mit seinen Spielsachen. Seine Mutter kommt ` +
          `zurück und sagt: „Du bist eine große Hilfe!“`,

        utterance: "Du bist eine große Hilfe!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_in_dishwasher",
              text: "Tobi räumt den Teller in die Spülmaschine",
              correct: true
            },
            {
              id: "play_with_toys",
              text: "Tobi spielt weiter mit seinen Spielsachen",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "table",
          whyTrigger: "table"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Tobis Mutter hat etwas zu essen für ihn vorbereitet. Sie sagt: „Wenn ` +
          `du fertig gegessen hast, räum den Teller bitte in die Spülmaschine.“ ` +
          `Tobi nickt und fängt an zu essen. Als er fertig ist, räumt er seinen Teller ` +
          `in die Spülmaschine. Seine Mutter kommt zurück und sagt: ` +
          `„Du bist eine große Hilfe!“`,

        utterance: "Du bist eine große Hilfe!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "play_toys",
              text:
                "Tobi spielt mit seinen Spielsachen",
              correct: true
            },
            {
              id: "put_in_dishwasher_more",
              text:
                "Tobi räumt weitere Teller in die Spülmaschine",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "dishwasher",
          whyTrigger: "table"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Tobis Mutter hat etwas zu essen für ihn vorbereitet. Sie sagt: „Wenn ` +
          `du fertig gegessen hast, räum den Teller bitte in die Spülmaschine.“ ` +
          `Tobi nickt und fängt an zu essen. Als er fertig ist, lässt er den Teller ` +
          `auf dem Tisch stehen und spielt mit seinen Spielsachen. Seine Mutter kommt ` +
          `zurück und sagt: „Du bist keine große Hilfe!“`,

        utterance: "Du bist keine große Hilfe!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_in_dishwasher",
              text: "Tobi räumt den Teller in die Spülmaschine",
              correct: true
            },
            {
              id: "play_with_toys",
              text: "Tobi spielt weiter mit seinen Spielsachen",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "table",
          whyTrigger: "dishwasher"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Tobis Mutter hat etwas zu essen für ihn vorbereitet. Sie sagt: „Wenn ` +
          `du fertig gegessen hast, räum den Teller bitte in die Spülmaschine.“ ` +
          `Tobi nickt und fängt an zu essen. Als er fertig ist, lässt er den Teller ` +
          `auf dem Tisch stehen und spielt mit seinen Spielsachen. Seine Mutter kommt ` +
          `zurück und sagt: „Hier stehen noch ein paar Gläser. Die können wir auch `+
          `direkt in die Spülmaschine räumen.“`,

        utterance:
          "Hier stehen noch ein paar Gläser. Die können wir auch direkt in die Spülmaschine räumen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_in_dishwasher_together",
              text: "Tobi und seine Mutter räumen das Geschirr in die Spülmaschine",
              correct: true
            },
            {
              id: "play_with_toys",
              text: "Tobi spielt weiter mit seinen Spielsachen",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "table",
          whyTrigger: "dishwasher"
        }
      }
    }
  },
  {
    storyId: 9,
    level: 3,
    latinPosition: 0,

    utteranceReminder: "Tobis Mutter sagt:",

    situationQuestion: {
        question:
        "Ist das Sofa zu diesem Zeitpunkt vollgebröselt oder sauber?",

        options: [
        {
            id: "chips",
            text: "Vollgebröselt"
        },
        {
            id: "no_chips",
            text: "Sauber"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Tobi schaut fern und isst dabei Chips. Er ist auf den Fernseher fokussiert ` +
          `und merkt nicht, dass viele der Chips auf dem Sofa und auf dem Boden landen. ` +
          `Seine Mutter kommt herein und sagt: „Das Sofa sieht sehr sauber aus.“`,

        utterance: "Das Sofa sieht sehr sauber aus.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_sofa",
              text: "Tobi putzt das Sofa",
              correct: true
            },
            {
              id: "watch_tv",
              text: "Tobi schaut weiter fern",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "chips",
          whyTrigger: "chips"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Tobi schaut fern und isst dabei Chips. Beim Essen passt er gut darauf auf, ` +
          `dass keine Chips auf dem Sofa landen. Seine Mutter kommt herein und sagt: ` +
          `„Das Sofa sieht sehr sauber aus.“`,

        utterance: "Das Sofa sieht sehr sauber aus.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "watch_tv",
              text:
                "Tobi schaut weiter fern",
              correct: true
            },
            {
              id: "clean_sofa",
              text:
                "Tobi putzt das Sofa",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "no_chips",
          whyTrigger: "chips"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Tobi schaut fern und isst dabei Chips. Er ist auf den Fernseher fokussiert ` +
          `und merkt nicht, dass viele der Chips auf dem Sofa und auf dem Boden landen. ` +
          `Seine Mutter kommt herein und sagt: Du hast das ganze Sofa vollgebröselt!“`,

        utterance: "Du hast das ganze Sofa vollgebröselt!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_sofa",
              text: "Tobi putzt das Sofa",
              correct: true
            },
            {
              id: "watch_tv",
              text: "Tobi schaut weiter fern",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "chips",
          whyTrigger: "no_chips"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Tobi schaut fern und isst dabei Chips. Er ist auf den Fernseher fokussiert ` +
          `und merkt nicht, dass viele der Chips auf dem Sofa und auf dem Boden landen. ` +
          `Seine Mutter kommt herein und sagt: „Das macht nichts. Ich hole schnell den Staubsauger.“`,

        utterance:
          "Das macht nichts. Ich hole schnell den Staubsauger.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_sofa_together",
              text: "Tobi und seine Mutter putzen das Sofa",
              correct: true
            },
            {
              id: "watch_tv",
              text: "Tobi schaut weiter fern",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "chips",
          whyTrigger: "no_chips"
        }
      }
    }
  },
  {
    storyId: 10,
    level: 3,
    latinPosition: 1,

    utteranceReminder: "Annas Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Boden zu diesem Zeitpunkt trocken oder nass?",

        options: [
        {
            id: "dry",
            text: "Trocken"
        },
        {
            id: "wet",
            text: "Nass"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Anna will die Blumen auf der Fensterbank gießen. Die Gießkanne ist schwer ` +
          `und Anna verschüttet Wasser auf dem ganzen Boden. Ihre Mutter kommt herein ` +
          `und sagt: „Der Boden ist ja ganz trocken geblieben.“`,

        utterance: "Der Boden ist ja ganz trocken geblieben.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "dry_the_floor",
              text: "Anna wischt den Boden auf",
              correct: true
            },
            {
              id: "water_plants",
              text: "Anna gießt die Blumen",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "wet",
          whyTrigger: "wet"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Anna will die Blumen auf der Fensterbank gießen. Die Gießkanne ist schwer, ` +
          `aber Anna ist sehr vorsichtig, sodass kein einziger Tropfen Wasser auf dem ` +
          `Boden landet. Ihre Mutter kommt herein und sagt: „Der Boden ist ja ganz trocken geblieben.“`,

        utterance: "Der Boden ist ja ganz trocken geblieben.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "water_plants",
              text:
                "Anna gießt die Blumen",
              correct: true
            },
            {
              id: "dry_the_floor",
              text:
                "Anna wischt den Boden auf",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "dry",
          whyTrigger: "wet"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Anna will die Blumen auf der Fensterbank gießen. Die Gießkanne ist schwer ` +
          `und Anna verschüttet Wasser auf dem ganzen Boden. Ihre Mutter kommt herein ` +
          `und sagt: „Du hast den ganzen Boden nass gemacht!“`,

        utterance: "Du hast den ganzen Boden nass gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "dry_the_floor",
              text: "Anna wischt den Boden auf",
              correct: true
            },
            {
              id: "water_plants",
              text: "Anna gießt die Blumen",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "wet",
          whyTrigger: "dry"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Anna will die Blumen auf der Fensterbank gießen. Die Gießkanne ist schwer ` +
          `und Anna verschüttet Wasser auf dem ganzen Boden. Ihre Mutter kommt herein ` +
          `und sagt: „Die Gießkanne ist aber auch wirklich schwer. Ich hole schnell einen Lappen.“`,

        utterance:
          "Die Gießkanne ist aber auch wirklich schwer. Ich hole schnell einen Lappen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "dry_the_floor_together",
              text: "Anna und ihre Mutter wischen den Boden auf",
              correct: true
            },
            {
              id: "water_plants",
              text: "Anna gießt die Blumen",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "wet",
          whyTrigger: "dry"
        }
      }
    }
  },
  {
    storyId: 11,
    level: 3,
    latinPosition: 2,

    utteranceReminder: "Tobis Mutter sagt:",

    situationQuestion: {
        question:
        "Ist Tobis Platz zu diesem Zeitpunkt vollgekleckert oder sauber?",

        options: [
        {
            id: "mess",
            text: "Vollgekleckert"
        },
        {
            id: "no_mess",
            text: "Sauber"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Tobi und seine Mutter essen zum Abendessen Spaghetti mit Tomatensoße. ` +
          `Tobi isst sehr schnell. Dabei fallen viele Spaghetti auf den Boden ` +
          `und Soße landet neben seinem Teller. Seine Mutter sagt: ` +
          `„Du isst aber sehr ordentlich.“`,

        utterance: "Du isst aber sehr ordentlich.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_spot",
              text: "Tobi macht seinen Platz sauber",
              correct: true
            },
            {
              id: "eat",
              text: "Tobi isst weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "mess",
          whyTrigger: "mess"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Tobi und seine Mutter essen zum Abendessen Spaghetti mit Tomatensoße. ` +
          `Tobi isst sehr langsam und vorsichtig, so dass weder Spaghetti noch Soße ` +
          `neben seinem Teller landen. Seine Mutter sagt: ` +
          `„Du isst aber sehr ordentlich.“`,

        utterance: "Du isst aber sehr ordentlich.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "eat",
              text:
                "Tobi isst weiter",
              correct: true
            },
            {
              id: "clean_spot",
              text:
                "Tobi macht seinen Platz sauber",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "no_mess",
          whyTrigger: "mess"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Tobi und seine Mutter essen zum Abendessen Spaghetti mit Tomatensoße. ` +
          `Tobi isst sehr schnell. Dabei fallen viele Spaghetti auf den Boden ` +
          `und Soße landet neben seinem Teller. Seine Mutter sagt: ` +
          `„Du machst eine riesige Sauerei!“`,

        utterance: "Du machst eine riesige Sauerei!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_spot",
              text: "Tobi macht seinen Platz sauber",
              correct: true
            },
            {
              id: "eat",
              text: "Tobi isst weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "mess",
          whyTrigger: "no_mess"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Tobi und seine Mutter essen zum Abendessen Spaghetti mit Tomatensoße. ` +
          `Tobi isst sehr schnell. Dabei fallen viele Spaghetti auf den Boden ` +
          `und Soße landet neben seinem Teller. Seine Mutter sagt: ` +
          `„Die Spaghetti sind wirklich schwer zu essen. Ich hole schnell einen Lappen.“`,

        utterance:
          "Die Spaghetti sind wirklich schwer zu essen. Ich hole schnell einen Lappen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_spot_together",
              text: "Tobi und seine Mutter machen seinen Platz sauber",
              correct: true
            },
            {
              id: "eat",
              text: "Tobi isst weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "mess",
          whyTrigger: "no_mess"
        }
      }
    }
  },
  {
    storyId: 12,
    level: 3,
    latinPosition: 3,

    utteranceReminder: "Annas Mutter sagt:",

    situationQuestion: {
        question:
        "Fährt Anna zu diesem Zeitpunkt mit Helm oder ohne Helm Fahrrad?",

        options: [
        {
            id: "helmet",
            text: "Mit Helm"
        },
        {
            id: "no_helmet",
            text: "Ohne Helm"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Anna fährt vor dem Haus mit ihrem Fahrrad hin und her. Sie trägt keinen Helm. ` +
          `Ihre Mutter kommt nach draußen und Anna hält neben ihr an. ` +
          `Ihre Mutter sagt: „Du hast daran gedacht, deinen Helm aufzusetzen.“`,

        utterance: "Du hast daran gedacht, deinen Helm aufzusetzen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "get_helmet",
              text: "Anna holt einen Helm",
              correct: true
            },
            {
              id: "ride_bike",
              text: "Anna fährt ohne Helm weiter Fahrrad",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "no_helmet",
          whyTrigger: "no_helmet"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Anna fährt vor dem Haus mit ihrem Fahrrad hin und her. Sie trägt einen Helm. ` +
          `Ihre Mutter kommt nach draußen und Anna hält neben ihr an. ` +
          `Ihre Mutter sagt: „Du hast daran gedacht, deinen Helm aufzusetzen.“`,

        utterance: "Du hast daran gedacht, deinen Helm aufzusetzen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "ride_bike_helmet",
              text:
                "Anna fährt weiter Fahrrad",
              correct: true
            },
            {
              id: "get_another_helmet",
              text:
                "Anna holt einen weiteren Helm",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "helmet",
          whyTrigger: "no_helmet"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Anna fährt vor dem Haus mit ihrem Fahrrad hin und her. Sie trägt keinen Helm. ` +
          `Ihre Mutter kommt nach draußen und Anna hält neben ihr an. ` +
          `Ihre Mutter sagt: „Du hast keinen Helm auf!“`,

        utterance: "Du hast keinen Helm auf!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "get_helmet",
              text: "Anna holt einen Helm",
              correct: true
            },
            {
              id: "ride_bike",
              text: "Anna fährt ohne Helm weiter Fahrrad",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "no_helmet",
          whyTrigger: "helmet"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Anna fährt vor dem Haus mit ihrem Fahrrad hin und her. Sie trägt keinen Helm. ` +
          `Ihre Mutter kommt nach draußen und Anna hält neben ihr an. ` +
          `Ihre Mutter sagt: „Ich bringe dir noch schnell deinen Helm, dann kannst du weiterfahren.“`,

        utterance:
          "Ich bringe dir noch schnell deinen Helm, dann kannst du weiterfahren.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "get_helmet_mom",
              text: "Annas Mutter holt einen Helm für Anna",
              correct: true
            },
            {
              id: "ride_bike",
              text: "Anna fährt ohne Helm weiter Fahrrad",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "no_helmet",
          whyTrigger: "helmet"
        }
      }
    }
  },
  {
    storyId: 13,
    level: 4,
    latinPosition: 0,

    utteranceReminder: "Annas Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Tisch zu diesem Zeitpunkt abgeräumt oder voll mit Geschirr?",

        options: [
        {
            id: "no_dishes",
            text: "Abgeräumt"
        },
        {
            id: "dishes",
            text: "Voll mit Geschirr"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Anna und ihre Mutter haben zu Abend gegessen. Der ganze Tisch ist ` +
          `voll mit Geschirr. Annas Mutter fängt an, den Tisch abzuräumen. ` +
          `Anna holt ihr Tablet und spielt darauf, während ihre Mutter weiter aufräumt. ` + 
          `Annas Mutter sagt: „Wenn ich das nächste Mal Hilfe brauche, weiß ich jetzt, wen ich fragen kann.“`,

        utterance: "Wenn ich das nächste Mal Hilfe brauche, weiß ich jetzt, wen ich fragen kann.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clear_table",
              text: "Anna räumt den Tisch ab",
              correct: true
            },
            {
              id: "play_tablet",
              text: "Anna spielt weiter auf ihrem Tablet",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "dishes",
          whyTrigger: "dishes"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Anna und ihre Mutter haben zu Abend gegessen. Der ganze Tisch ist ` +
          `voll mit Geschirr. Anna fängt sofort von allein an, den Tisch abzuräumen. ` +
          `Sie trägt die Teller in die Küche. Dort angekommen, räumt sie sie sofort in die Spülmaschine ein. ` + 
          `Sie macht so weiter, bis der ganze Tisch abgeräumt ist. Annas Mutter sagt: ` +
          `„Wenn ich das nächste Mal Hilfe brauche, weiß ich jetzt, wen ich fragen kann.“`,

        utterance: "Wenn ich das nächste Mal Hilfe brauche, weiß ich jetzt, wen ich fragen kann.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "play_tablet",
              text:
                "Anna spielt weiter auf ihrem Tablet",
              correct: true
            },
            {
              id: "clear_table_more",
              text:
                "Anna räumt auch die Tischdeko ab",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "no_dishes",
          whyTrigger: "dishes"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Anna und ihre Mutter haben zu Abend gegessen. Der ganze Tisch ist` +
          `voll mit Geschirr. Annas Mutter fängt an, den Tisch abzuräumen. ` +
          `Anna holt ihr Tablet und spielt darauf, während ihre Mutter weiter aufräumt. ` + 
          `Annas Mutter sagt: „So werde ich wohl noch eine Weile beschäftigt sein.“`,

        utterance: "So werde ich wohl noch eine Weile beschäftigt sein.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clear_table",
              text: "Anna räumt den Tisch ab",
              correct: true
            },
            {
              id: "play_tablet",
              text: "Anna spielt weiter auf ihrem Tablet",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "dishes",
          whyTrigger: "no_dishes"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Anna und ihre Mutter haben zu Abend gegessen. Der ganze Tisch ist ` +
          `voll mit Geschirr. Annas Mutter fängt an, den Tisch abzuräumen. ` +
          `Anna holt ihr Tablet und spielt darauf, während ihre Mutter weiter aufräumt. ` + 
          `Annas Mutter sagt: „Wenn du mir kurz hilfst, sind wir ganz schnell fertig und du kannst sofort weiterspielen.“`,

        utterance:
          "Wenn du mir kurz hilfst, sind wir ganz schnell fertig und du kannst sofort weiterspielen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clear_table_together",
              text: "Anna und ihre Mutter räumen den Tisch ab",
              correct: true
            },
            {
              id: "play_tablet",
              text: "Anna spielt weiter auf ihrem Tablet",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "dishes",
          whyTrigger: "no_dishes"
        }
      }
    }
  },
  {
    storyId: 14,
    level: 4,
    latinPosition: 1,

    utteranceReminder: "Tobis Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Tisch zu diesem Zeitpunkt sauber oder voller Saft?",

        options: [
        {
            id: "no_juice",
            text: "Sauber"
        },
        {
            id: "juice",
            text: "Voller Saft"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Tobi möchte Orangensaft in sein Glas einschenken. Er ist abgelenkt und ` +
          `verschüttet viel Saft auf dem Tisch. Seine Mutter sagt: ` +
          `„Könntest du dich heute bitte um die Getränke für uns alle kümmern?“`,

        utterance: "Könntest du dich heute bitte um die Getränke für uns alle kümmern?",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe_table",
              text: "Tobi wischt den Tisch ab",
              correct: true
            },
            {
              id: "pour_juice",
              text: "Tobi schenkt weitere Gläser ein",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "juice",
          whyTrigger: "juice"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Tobi möchte Orangensaft in sein Glas einschenken. Er ist sehr vorsichtig, ` +
          `sodass kein einziger Tropfen neben dem Glas landet. Seine Mutter sagt: ` +
          `„Könntest du dich heute bitte um die Getränke für uns alle kümmern?“`,

        utterance: "Könntest du dich heute bitte um die Getränke für uns alle kümmern?",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "pour_juice",
              text:
                "Tobi schenkt weitere Gläser ein",
              correct: true
            },
            {
              id: "wipe_table",
              text:
                "Tobi wischt den Tisch ab",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "no_juice",
          whyTrigger: "juice"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Tobi möchte Orangensaft in sein Glas einschenken. Er ist abgelenkt und ` +
          `verschüttet viel Saft auf dem Tisch. Seine Mutter sagt: ` +
          `„Vielleicht solltest du das lieber jemand anderem überlassen.“`,

        utterance: "Vielleicht solltest du das lieber jemand anderem überlassen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe_table",
              text: "Tobi wischt den Tisch ab",
              correct: true
            },
            {
              id: "pour_juice",
              text: "Tobi schenkt weitere Gläser ein",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "juice",
          whyTrigger: "no_juice"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Tobi möchte Orangensaft in sein Glas einschenken. Er ist abgelenkt und ` +
          `verschüttet viel Saft auf dem Tisch. Seine Mutter sagt: ` +
          `„Das kann jedem Mal passieren. Ich hole schnell einen Lappen.“`,

        utterance:
          "Das kann jedem Mal passieren. Ich hole schnell einen Lappen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wipe_table_together",
              text: "Tobi und seine Mutter wischen den Tisch ab",
              correct: true
            },
            {
              id: "pour_juice",
              text: "Tobi schenkt weitere Gläser ein",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "juice",
          whyTrigger: "no_juice"
        }
      }
    }
  },
  {
    storyId: 15,
    level: 4,
    latinPosition: 2,

    utteranceReminder: "Annas Mutter sagt:",

    situationQuestion: {
        question:
        "Ist Annas Kleid zu diesem Zeitpunkt schmutzig oder sauber?",

        options: [
        {
            id: "no_stains",
            text: "Sauber"
        },
        {
            id: "stains",
            text: "Schmutzig"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Ihre Mutter wartet darauf, dass Anna sich für die Schule fertig macht. ` +
          `Endlich taucht Anna auf. Sie trägt ein Kleid, das voller Flecken ist. ` +
          `Annas Mutter sagt: „Da freue ich mich schon auf die Klassenfotos, die ihr heute macht.“`,

        utterance: "Da freue ich mich schon auf die Klassenfotos, die ihr heute macht.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "change_dress",
              text: "Anna zieht sich ein sauberes Kleid an",
              correct: true
            },
            {
              id: "go_to_school",
              text: "Anna geht mit dem schmutzigen Kleid in die Schule",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "stains",
          whyTrigger: "stains"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Ihre Mutter wartet darauf, dass Anna sich für die Schule fertig macht. ` +
          `Endlich taucht Anna auf. Sie trägt ein wunderschönes neues Kleid. ` +
          `Annas Mutter sagt: „Da freue ich mich schon auf die Klassenfotos, die ihr heute macht.“`,

        utterance: "Da freue ich mich schon auf die Klassenfotos, die ihr heute macht.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "go_to_school_new_dress",
              text:
                "Anna geht mit ihrem neuen Kleid in die Schule",
              correct: true
            },
            {
              id: "change_into_other_dress",
              text:
                "Anna zieht sich ein anderes Kleid an",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "no_stains",
          whyTrigger: "stains"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Ihre Mutter wartet darauf, dass Anna sich für die Schule fertig macht. ` +
          `Endlich taucht Anna auf. Sie trägt ein Kleid, das voller Flecken ist. ` +
          `Annas Mutter sagt: „Ich glaube, so wirst du mit den Klassenfotos heute nicht zufrieden sein.“`,

        utterance: "Ich glaube, so wirst du mit den Klassenfotos heute nicht zufrieden sein.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "change_dress",
              text: "Anna zieht sich ein sauberes Kleid an",
              correct: true
            },
            {
              id: "go_to_school",
              text: "Anna geht mit dem schmutzigen Kleid in die Schule",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "stains",
          whyTrigger: "no_stains"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Ihre Mutter wartet darauf, dass Anna sich für die Schule fertig macht. ` +
          `Endlich taucht Anna auf. Sie trägt ein Kleid, das voller Flecken ist. ` +
          `Annas Mutter sagt: „Komm, wir suchen dir ein sauberes Kleid für die Klassenfotos heute aus.“`,

        utterance:
          "Komm, wir suchen dir ein sauberes Kleid für die Klassenfotos heute aus.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "change_dress_together",
              text: "Annas Mutter sucht ein sauberes Kleid für Anna aus",
              correct: true
            },
            {
              id: "go_to_school",
              text: "Anna geht mit dem schmutzigen Kleid in die Schule",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "stains",
          whyTrigger: "no_stains"
        }
      }
    }
  },
  {
    storyId: 16,
    level: 4,
    latinPosition: 3,

    utteranceReminder: "Tobis Mutter sagt:",

    situationQuestion: {
        question:
        "Sind die Plätzchen zu diesem Zeitpunkt verbrannt oder gut geworden?",

        options: [
        {
            id: "burnt",
            text: "Verbrannt"
        },
        {
            id: "not_burnt",
            text: "Gut geworden"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Tobi backt zum ersten Mal allein Plätzchen. Alles läuft gut, doch dann ` +
          `lässt er sie zu lange im Ofen und die Plätzchen sind völlig verbrannt. ` +
          `Seine Mutter kommt herein und sagt: „Wir sollten dich direkt für den nächsten Backwettbewerb anmelden.“`,

        utterance: "Wir sollten dich direkt für den nächsten Backwettbewerb anmelden.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "bake_again",
              text: "Tobi wirft die Plätzchen weg und fängt nochmal von vorne an",
              correct: true
            },
            {
              id: "eat_burnt_cookies",
              text: "Tobi isst die verbrannten Plätzchen",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "burnt",
          whyTrigger: "burnt"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Tobi backt zum ersten Mal allein Plätzchen. Alles läuft gut ` +
          `und die Plätzchen werden wunderschön. Seine Mutter kommt herein und sagt: ` +
          `„Wir sollten dich direkt für den nächsten Backwettbewerb anmelden.“`,

        utterance: "Wir sollten dich direkt für den nächsten Backwettbewerb anmelden.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "eat_cookies",
              text:
                "Tobi isst die Plätzchen",
              correct: true
            },
            {
              id: "bake_again",
              text:
                "Tobi wirft die Plätzchen weg und fängt nochmal von vorne an",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "not_burnt",
          whyTrigger: "burnt"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Tobi backt zum ersten Mal allein Plätzchen. Alles läuft gut, doch dann ` +
          `lässt er sie zu lange im Ofen und die Plätzchen sind völlig verbrannt. ` +
          `Seine Mutter kommt herein und sagt: „Ich glaube, dich sollte ich noch nicht in der Küche allein lassen.“`,

        utterance: "Ich glaube, dich sollte ich noch nicht in der Küche allein lassen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "bake_again",
              text: "Tobi wirft die Plätzchen weg und fängt nochmal von vorne an",
              correct: true
            },
            {
              id: "eat_burnt_cookies",
              text: "Tobi isst die verbrannten Plätzchen",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "burnt",
          whyTrigger: "not_burnt"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Tobi backt zum ersten Mal allein Plätzchen. Alles läuft gut, doch dann ` +
          `lässt er sie zu lange im Ofen und die Plätzchen sind völlig verbrannt. ` +
          `Seine Mutter kommt herein und sagt: „Nicht so schlimm. Wir probieren es einfach nochmal.“`,

        utterance:
          "Nicht so schlimm. Wir probieren es einfach nochmal.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "bake_again_together",
              text: "Tobi und seine Mutter werfen die Plätzchen weg und fängen nochmal von vorne an",
              correct: true
            },
            {
              id: "eat_burnt_cookies",
              text: "Tobi isst die verbrannten Plätzchen",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "burnt",
          whyTrigger: "not_burnt"
        }
      }
    }
  },
  {
    storyId: 17,
    level: 5,
    latinPosition: 0,

    utteranceReminder: "Tobis Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Gang zu diesem Zeitpunkt sauber oder dreckig?",

        options: [
        {
            id: "clean_hallway",
            text: "Sauber"
        },
        {
            id: "dirty_hallway",
            text: "Dreckig"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Tobi hat draußen gespielt und seine Schuhe sind voller Matsch. Er läuft ` +
          `durch den Gang, ohne seine Schuhe auszuziehen. Beim Abendessen fragt die Mutter ` +
          `Tobi, wie sein Tag war. Tobi sagt: „Ich war mit meinen Freunden auf dem Spielplatz. ` +
          `Das hat so viel Spaß gemacht!“ Seine Mutter antwortet: „Toll! Und der Gang ist ganz sauber geblieben.“`,

        utterance: "Toll! Und der Gang ist ganz sauber geblieben.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_the_hallway",
              text: "Tobi wischt den Gang auf",
              correct: true
            },
            {
              id: "keep_eating",
              text: "Tobi isst weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "dirty_hallway",
          whyTrigger: "dirty_hallway"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Tobi hat draußen gespielt und seine Schuhe sind voller Matsch. Bevor er durch ` +
          `den Gang läuft, zieht er seine dreckigen Schuhe aus. Beim Abendessen fragt die Mutter ` +
          `Tobi, wie sein Tag war. Tobi sagt: „Ich war mit meinen Freunden auf dem Spielplatz. ` +
          `Das hat so viel Spaß gemacht!“ Seine Mutter antwortet: „Toll! Und der Gang ist ganz sauber geblieben.“`,

        utterance: "Toll! Und der Gang ist ganz sauber geblieben.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "keep_eating",
              text:
                "Tobi isst weiter",
              correct: true
            },
            {
              id: "clean_the_hallway",
              text:
                "Tobi wischt den Gang auf",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "clean_hallway",
          whyTrigger: "dirty_hallway"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Tobi hat draußen gespielt und seine Schuhe sind voller Matsch. Er läuft ` +
          `durch den Gang, ohne seine Schuhe auszuziehen. Beim Abendessen fragt die Mutter ` +
          `Tobi, wie sein Tag war. Tobi sagt: „Ich war mit meinen Freunden auf dem Spielplatz. ` +
          `Das hat so viel Spaß gemacht!“ Seine Mutter antwortet: „Toll! Aber du hast den Gang mit deinen Schuhen ganz dreckig gemacht!“`,

        utterance: "Toll! Aber du hast den Gang mit deinen Schuhen ganz dreckig gemacht!",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_the_hallway",
              text: "Tobi wischt den Gang auf",
              correct: true
            },
            {
              id: "keep_eating",
              text: "Tobi isst weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "dirty_hallway",
          whyTrigger: "clean_hallway"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Tobi hat draußen gespielt und seine Schuhe sind voller Matsch. Er läuft ` +
          `durch den Gang, ohne seine Schuhe auszuziehen. Beim Abendessen fragt die Mutter ` +
          `Tobi, wie sein Tag war. Tobi sagt: „Ich war mit meinen Freunden auf dem Spielplatz. ` +
          `Das hat so viel Spaß gemacht!“ Seine Mutter antwortet: „Toll! Komm, wir machen den Gang jetzt noch schnell zusammen sauber.“`,

        utterance:
          "Toll! Komm, wir machen den Gang jetzt noch schnell zusammen sauber.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_the_hallway_together",
              text: "Tobi und seine Mutter wischen den Gang auf",
              correct: true
            },
            {
              id: "keep_eating",
              text: "Tobi isst weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "dirty_hallway",
          whyTrigger: "clean_hallway"
        }
      }
    }
  },
  {
    storyId: 18,
    level: 5,
    latinPosition: 1,

    utteranceReminder: "Annas Mutter sagt:",

    situationQuestion: {
        question:
        "Ist die Küche zu diesem Zeitpunkt aufgeräumt oder unordentlich?",

        options: [
        {
            id: "messy_kitchen",
            text: "Unordentlich"
        },
        {
            id: "tidy_kitchen",
            text: "Aufgeräumt"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Anna backt einen Kuchen und richtet dabei in der Küche ein großes Chaos an. ` +
          `Bevor sie aufräumen kann, muss sie zu ihrem Tennistraining los. Ihre Mutter ` +
          `Mutter fährt sie mit dem Auto dorthin. Anna fragt: „Kann ich mich direkt nach dem ` +
          `Training mit einer Freundin treffen?“ Ihre Mutter antwortet: ` +
          `„Klar, schließlich hast du nach dem Backen alles aufgeräumt.“`,

        utterance: "Klar, schließlich hast du nach dem Backen alles aufgeräumt.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_kitchen",
              text: "Anna räumt die Küche auf",
              correct: true
            },
            {
              id: "meet_friend",
              text: "Anna trifft sich mit einer Freundin",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "messy_kitchen",
          whyTrigger: "messy_kitchen"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Anna backt einen Kuchen und richtet dabei in der Küche ein großes Chaos an. ` +
          `Bevor sie zum Tennistraining geht, räumt sie die ganze Küche auf. Ihre Mutter ` +
          `fährt sie mit dem Auto dorthin. Anna fragt: „Kann ich mich direkt nach dem ` +
          `Training mit einer Freundin treffen?“ Ihre Mutter antwortet: ` +
          `„Klar, schließlich hast du nach dem Backen alles aufgeräumt.“`,

        utterance: "Klar, schließlich hast du nach dem Backen alles aufgeräumt.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "meet_friend",
              text:
                "Anna trifft sich mit einer Freundin",
              correct: true
            },
            {
              id: "clean_kitchen",
              text:
                "Anna räumt die Küche auf",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "tidy_kitchen",
          whyTrigger: "messy_kitchen"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Anna backt einen Kuchen und richtet dabei in der Küche ein großes Chaos an. ` +
          `Bevor sie aufräumen kann, muss sie zu ihrem Tennistraining los. Ihre Mutter ` +
          `Mutter fährt sie mit dem Auto dorthin. Anna fragt: „Kann ich mich direkt nach dem ` +
          `Training mit einer Freundin treffen?“ Ihre Mutter antwortet: ` +
          `„Nein, du hast die Küche noch nicht aufgeräumt.“`,

        utterance: "Nein, du hast die Küche noch nicht aufgeräumt.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_kitchen",
              text: "Anna räumt die Küche auf",
              correct: true
            },
            {
              id: "meet_friend",
              text: "Anna trifft sich mit einer Freundin",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "messy_kitchen",
          whyTrigger: "tidy_kitchen"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Anna backt einen Kuchen und richtet dabei in der Küche ein großes Chaos an. ` +
          `Bevor sie aufräumen kann, muss sie zu ihrem Tennistraining los. Ihre Mutter ` +
          `Mutter fährt sie mit dem Auto dorthin. Anna fragt: „Kann ich mich direkt nach dem ` +
          `Training mit einer Freundin treffen?“ Ihre Mutter antwortet: ` +
          `„Wir räumen nach dem Training noch schnell die Küche auf und dann kannst du das gerne machen.“`,

        utterance:
          "Wir räumen nach dem Training noch schnell die Küche auf und dann kannst du das gerne machen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "clean_kitchen_together",
              text: "Anna und ihre Mutter räumen die Küche auf",
              correct: true
            },
            {
              id: "meet_friend",
              text: "Anna trifft sich mit einer Freundin",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "messy_kitchen",
          whyTrigger: "tidy_kitchen"
        }
      }
    }
  },
  {
    storyId: 19,
    level: 5,
    latinPosition: 2,

    utteranceReminder: "Tobis Mutter sagt:",

    situationQuestion: {
        question:
        "Sind die Bücher zu diesem Zeitpunkt im Regal oder auf dem Boden?",

        options: [
        {
            id: "on_the_shelf",
            text: "Im Regal"
        },
        {
            id: "on_the_floor",
            text: "Auf dem Boden"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Tobi holt ein Buch nach dem anderen aus dem Regal und liest darin. Am Ende ` +
          `lässt er die Bücher auf dem ganzen Boden verteilt liegen. Abends sitzen ` +
          `er und seine Mutter auf dem Sofa, und Tobi erzählt ihr: „Es hat heute den ganzen Tag geregnet ` +
          `und ich musste immer drinnen bleiben. Aber mir war trotzdem nicht langweilig.“ ` +
          `Seine Mama sagt: „Super! Und du hast auch alle Bücher wieder ins Regal geräumt.“`,

        utterance: "Super! Und du hast auch alle Bücher wieder ins Regal geräumt.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_away_books",
              text: "Tobi räumt die Bücher ins Regal",
              correct: true
            },
            {
              id: "keep_sitting",
              text: "Tobi bleibt auf dem Sofa sitzen",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "on_the_floor",
          whyTrigger: "on_the_floor"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Tobi holt ein Buch nach dem anderen aus dem Regal und liest darin. Am Ende ` +
          `räumt er die Bücher alle wieder ordentlich ins Regal. Abends sitzen ` +
          `er und seine Mutter auf dem Sofa, und Tobi erzählt ihr: „Es hat heute den ganzen Tag geregnet ` +
          `und ich musste immer drinnen bleiben. Aber mir war trotzdem nicht langweilig.“ ` +
          `Seine Mama sagt: „Super! Und du hast auch alle Bücher wieder ins Regal geräumt.“`,

        utterance: "Super! Und du hast auch alle Bücher wieder ins Regal geräumt.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "keep_sitting",
              text:
                "Tobi bleibt auf dem Sofa sitzen",
              correct: true
            },
            {
              id: "put_away_more_books",
              text:
                "Tobi holt weitere Bücher und räumt sie ins Regal",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "on_the_shelf",
          whyTrigger: "on_the_floor"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Tobi holt ein Buch nach dem anderen aus dem Regal und liest darin. Am Ende ` +
          `lässt er die Bücher auf dem ganzen Boden verteilt liegen. Abends sitzen ` +
          `er und seine Mutter auf dem Sofa, und Tobi erzählt ihr: „Es hat heute den ganzen Tag geregnet ` +
          `und ich musste immer drinnen bleiben. Aber mir war trotzdem nicht langweilig.“ ` +
          `Seine Mama sagt: „Super! Aber du hast die Bücher alle auf dem Boden liegen lassen.“`,

        utterance: "Super! Aber du hast die Bücher alle auf dem Boden liegen lassen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_away_books",
              text: "Tobi räumt die Bücher ins Regal",
              correct: true
            },
            {
              id: "keep_sitting",
              text: "Tobi bleibt auf dem Sofa sitzen",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "on_the_floor",
          whyTrigger: "on_the_shelf"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Tobi holt ein Buch nach dem anderen aus dem Regal und liest darin. Am Ende ` +
          `lässt er die Bücher auf dem ganzen Boden verteilt liegen. Abends sitzen ` +
          `er und seine Mutter auf dem Sofa, und Tobi erzählt ihr: „Es hat heute den ganzen Tag geregnet ` +
          `und ich musste immer drinnen bleiben. Aber mir war trotzdem nicht langweilig.“ ` +
          `Seine Mama sagt: „Super! Komm, wir räumen die Bücher wieder ins Regal und dabei kannst du mir von den Geschichten erzählen.“`,

        utterance:
          "Super! Komm, wir räumen die Bücher wieder ins Regal und dabei kannst du mir von den Geschichten erzählen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "put_away_books_together",
              text: "Tobi und seine Mutter räumen die Bücher ins Regal",
              correct: true
            },
            {
              id: "keep_sitting",
              text: "Tobi bleibt auf dem Sofa sitzen",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "on_the_floor",
          whyTrigger: "on_the_shelf"
        }
      }
    }
  },
  {
    storyId: 20,
    level: 5,
    latinPosition: 3,

    utteranceReminder: "Annas Mutter sagt:",

    situationQuestion: {
        question:
        "Ist die Tasche zu diesem Zeitpunkt ausgepackt oder voller Badesachen?",

        options: [
        {
            id: "empty_bag",
            text: "Ausgepackt"
        },
        {
            id: "full_bag",
            text: "Voller Badesachen"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Anna kommt vom Schwimmbad nach Hause und stellt ihre Tasche mit den nassen Badesachen ` +
          `direkt am Eingang ab. Dann geht sie direkt in die Küche und isst etwas. ` +
          `Ihre Mutter kommt in die Küche. Anna sagt: „Hallo, Mama! ` +
          `Ich hatte so viel Spaß im Schwimmbad mit meinen Freunden.“ Ihre Mutter antwortet: ` +
          `„Das freut mich! Und deine Tasche hast du auch direkt ausgepackt.“`,

        utterance: "Das freut mich! Und deine Tasche hast du auch direkt ausgepackt.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "empty_the_bag",
              text: "Anna packt ihre Tasche aus",
              correct: true
            },
            {
              id: "eats",
              text: "Anna isst weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "full_bag",
          whyTrigger: "full_bag"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Anna kommt vom Schwimmbad nach Hause und packt ihre Tasche mit den nassen Badesachen ` +
          `direkt aus. Dann geht sie in die Küche und isst etwas. ` +
          `Ihre Mutter kommt in die Küche. Anna sagt: „Hallo, Mama! ` +
          `Ich hatte so viel Spaß im Schwimmbad mit meinen Freunden.“ Ihre Mutter antwortet: ` +
          `„Das freut mich! Und deine Tasche hast du auch direkt ausgepackt.“`,

        utterance: "Das freut mich! Und deine Tasche hast du auch direkt ausgepackt.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "eats",
              text:
                "Anna isst weiter",
              correct: true
            },
            {
              id: "empty_the_bag_again",
              text:
                "Anna holt ihre bereits leere Tasche wieder hervor",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "empty_bag",
          whyTrigger: "full_bag"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Anna kommt vom Schwimmbad nach Hause und stellt ihre Tasche mit den nassen Badesachen ` +
          `direkt am Eingang ab. Dann geht sie direkt in die Küche und isst etwas. ` +
          `Ihre Mutter kommt in die Küche. Anna sagt: „Hallo, Mama! ` +
          `Ich hatte so viel Spaß im Schwimmbad mit meinen Freunden.“ Ihre Mutter antwortet: ` +
          `„Das freut mich! Aber du hast deine Tasche mit den nassen Badesachen nicht ausgepackt.“`,

        utterance: "Das freut mich! Aber du hast deine Tasche mit den nassen Badesachen nicht ausgepackt.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "empty_the_bag",
              text: "Anna packt ihre Tasche aus",
              correct: true
            },
            {
              id: "eats",
              text: "Anna isst weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "full_bag",
          whyTrigger: "empty_bag"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Anna kommt vom Schwimmbad nach Hause und stellt ihre Tasche mit den nassen Badesachen ` +
          `direkt am Eingang ab. Dann geht sie direkt in die Küche und isst etwas. ` +
          `Ihre Mutter kommt in die Küche. Anna sagt: „Hallo, Mama! ` +
          `Ich hatte so viel Spaß im Schwimmbad mit meinen Freunden.“ Ihre Mutter antwortet: ` +
          `„Das freut mich! Ich baue den Wäscheständer auf und dann können wir deine nassen Badesachen noch schnell aufhängen.“`,

        utterance:
          "Das freut mich! Ich baue den Wäscheständer auf und dann können wir deine nassen Badesachen noch schnell aufhängen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "empty_the_bag_together",
              text: "Anna und ihre Mutter packen ihre Tasche aus",
              correct: true
            },
            {
              id: "eats",
              text: "Anna isst weiter",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "full_bag",
          whyTrigger: "empty_bag"
        }
      }
    }
  },
  {
    storyId: 21,
    level: 6,
    latinPosition: 0,

    utteranceReminder: "Tobis Mutter sagt:",

    situationQuestion: {
        question:
        "Sind Tobis Hände zu diesem Zeitpunkt gewaschen oder ungewaschen?",

        options: [
        {
            id: "washed",
            text: "Gewaschen"
        },
        {
            id: "not_washed",
            text: "Ungewaschen"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Tobi spielt draußen mit dem Hund. Seine Mutter und seine Schwester Anna backen ` +
          `in der Küche Plätzchen. Aus dem Fenster kann Tobis Mutter sehen, wie er ausgiebig ` +
          `den Hund streichelt. Später kommt Tobi nach drinnen und läuft direkt in die Küche. ` +
          `Anna knetet gerade den Teig. Tobi geht zu ihr hin und sagt: „Mama, ich helfe Anna mit dem Teig.“ ` +
          `Seine Mutter antwortet: „Klar! Da können wir uns heute auf richtig leckere Plätzchen freuen.“`,

        utterance: "Klar! Da können wir uns heute auf richtig leckere Plätzchen freuen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wash_hands",
              text: "Tobi wäscht sich die Hände",
              correct: true
            },
            {
              id: "knead_dough",
              text: "Tobi knetet den Teig",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "not_washed",
          whyTrigger: "not_washed"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Tobi spielt draußen mit dem Hund. Seine Mutter und seine Schwester Anna backen ` +
          `in der Küche Plätzchen. Aus dem Fenster kann Tobis Mutter sehen, wie er ausgiebig ` +
          `den Hund streichelt. Später kommt Tobi nach drinnen und läuft direkt in die Küche. ` +
          `Anna knetet gerade den Teig. Tobi geht zum Waschbecken und wäscht sich die Hände. ` +
          `Dann geht er zu Anna hin und sagt: „Mama, ich helfe Anna mit dem Teig.“ ` +
          `Seine Mutter antwortet: „Klar! Da können wir uns heute auf richtig leckere Plätzchen freuen.“`,

        utterance: "Klar! Da können wir uns heute auf richtig leckere Plätzchen freuen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "knead_dough",
              text:
                "Tobi knetet den Teig",
              correct: true
            },
            {
              id: "wash_hands_again",
              text:
                "Tobi wäscht sich erneut die Hände",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "washed",
          whyTrigger: "not_washed"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Tobi spielt draußen mit dem Hund. Seine Mutter und seine Schwester Anna backen ` +
          `in der Küche Plätzchen. Aus dem Fenster kann Tobis Mutter sehen, wie er ausgiebig ` +
          `den Hund streichelt. Später kommt Tobi nach drinnen und läuft direkt in die Küche. ` +
          `Anna knetet gerade den Teig. Tobi geht zu ihr hin und sagt: „Mama, ich helfe Anna mit dem Teig.“ ` +
          `Seine Mutter antwortet: „Hast du nicht noch etwas vergessen, bevor du den Teig anfasst?“`,

        utterance: "Hast du nicht noch etwas vergessen, bevor du den Teig anfasst?",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wash_hands",
              text: "Tobi wäscht sich die Hände",
              correct: true
            },
            {
              id: "knead_dough",
              text: "Tobi knetet den Teig",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "not_washed",
          whyTrigger: "washed"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Tobi spielt draußen mit dem Hund. Seine Mutter und seine Schwester Anna backen ` +
          `in der Küche Plätzchen. Aus dem Fenster kann Tobis Mutter sehen, wie er ausgiebig ` +
          `den Hund streichelt. Später kommt Tobi nach drinnen und läuft direkt in die Küche. ` +
          `Anna knetet gerade den Teig. Tobi geht zu ihr hin und sagt: „Mama, ich helfe Anna mit dem Teig.“ ` +
          `Seine Mutter antwortet: „Schön, dass du uns helfen möchtest! Davor waschen wir dir noch schnell die Hände.“`,

        utterance:
          "Schön, dass du uns helfen möchtest! Davor waschen wir dir noch schnell die Hände.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "wash_hands_together",
              text: "Tobis Mutter hilft ihm beim Händewaschen",
              correct: true
            },
            {
              id: "knead_dough",
              text: "Tobi knetet den Teig",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "not_washed",
          whyTrigger: "washed"
        }
      }
    }
  },
  {
    storyId: 22,
    level: 6,
    latinPosition: 1,

    utteranceReminder: "Annas Mutter sagt:",

    situationQuestion: {
        question:
        "Ist Annas Zimmer zu diesem Zeitpunkt unordentlich oder aufgeräumt?",

        options: [
        {
            id: "messy_room",
            text: "Unordentlich"
        },
        {
            id: "tidy_room",
            text: "Aufgeräumt"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Annas Zimmer ist sehr unordentlich. Ihre Mutter kommt herein, um sie zum Abendessen ` +
          `zu holen. Nach dem Abendessen fragt Annas Bruder Tobi: „Darf ich jetzt fernsehen?“ ` +
          `Die Mutter sagt ja. Anna fragt: „Mama, darf ich auch fernsehen?“ Ihre Mutter antwortet: ` +
          `„Natürlich! Es wäre toll, wenn alle Zimmer so aussehen würden wie deins.“`,

        utterance: "Natürlich! Es wäre toll, wenn alle Zimmer so aussehen würden wie deins.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "tidy_the_room",
              text: "Anna räumt ihr Zimmer auf",
              correct: true
            },
            {
              id: "watch_television",
              text: "Anna schaut mit ihrem Bruder fern",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "messy_room",
          whyTrigger: "messy_room"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Annas Zimmer ist wie immer sehr ordentlich. Ihre Mutter kommt herein, um sie zum Abendessen ` +
          `zu holen. Nach dem Abendessen fragt Annas Bruder Tobi: „Darf ich jetzt fernsehen?“ ` +
          `Die Mutter sagt ja. Anna fragt: „Mama, darf ich auch fernsehen?“ Ihre Mutter antwortet: ` +
          `„Natürlich! Es wäre toll, wenn alle Zimmer so aussehen würden wie deins.“`,

        utterance: "Natürlich! Es wäre toll, wenn alle Zimmer so aussehen würden wie deins.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "watch_television",
              text:
                "Anna schaut mit ihrem Bruder fern",
              correct: true
            },
            {
              id: "tidy_the_room_more",
              text:
                "Anna räumt ihr Zimmer ordentliches Zimmer noch weiter auf",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "tidy_room",
          whyTrigger: "messy_room"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Annas Zimmer ist sehr unordentlich. Ihre Mutter kommt herein, um sie zum Abendessen ` +
          `zu holen. Nach dem Abendessen fragt Annas Bruder Tobi: „Darf ich jetzt fernsehen?“ ` +
          `Die Mutter sagt ja. Anna fragt: „Mama, darf ich auch fernsehen?“ Ihre Mutter antwortet: ` +
          `„Schau dir erstmal das Zimmer von deinem Bruder an.“`,

        utterance: "Schau dir erstmal das Zimmer von deinem Bruder an.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "tidy_the_room",
              text: "Anna räumt ihr Zimmer auf",
              correct: true
            },
            {
              id: "watch_television",
              text: "Anna schaut mit ihrem Bruder fern",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "messy_room",
          whyTrigger: "tidy_room"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Annas Zimmer ist sehr unordentlich. Ihre Mutter kommt herein, um sie zum Abendessen ` +
          `zu holen. Nach dem Abendessen fragt Annas Bruder Tobi: „Darf ich jetzt fernsehen?“ ` +
          `Die Mutter sagt ja. Anna fragt: „Mama, darf ich auch fernsehen?“ Ihre Mutter antwortet: ` +
          `„Komm, wir räumen erst dein Zimmer auf und dann können wir alle zusammen einen Film anschauen.“`,

        utterance:
          "Komm, wir räumen erst dein Zimmer auf und dann können wir alle zusammen einen Film anschauen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "tidy_the_room_together",
              text: "Anna und ihre Mutter räumen ihr Zimmer auf",
              correct: true
            },
            {
              id: "watch_television",
              text: "Anna schaut mit ihrem Bruder fern",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "messy_room",
          whyTrigger: "tidy_room"
        }
      }
    }
  },
  {
    storyId: 23,
    level: 6,
    latinPosition: 2,

    utteranceReminder: "Tobis Mutter sagt:",

    situationQuestion: {
        question:
        "Ist das Keyboard zu diesem Zeitpunkt laut oder leise?",

        options: [
        {
            id: "loud",
            text: "Laut"
        },
        {
            id: "quiet",
            text: "Leise"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Anna ist krank und geht deshalb früh ins Bett. Ihre Mutter und ihr Bruder Tobi sind im ` +
          `Wohnzimmer, direkt neben Annas Zimmer. Plötzlich fängt Tobi an, laut auf dem Keyboard ` +
          `zu spielen. Seine Mutter sagt: „Das merke ich mir für das nächste Mal, wenn jemand schlafen möchte.“` ,

        utterance: "Das merke ich mir für das nächste Mal, wenn jemand schlafen möchte.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "boardgame",
              text: "Tobi spielt mit seiner Mutter ein Brettspiel",
              correct: true
            },
            {
              id: "play_keyboard",
              text: "Tobi spielt weiter auf dem Keyboard",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "loud",
          whyTrigger: "loud"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Anna ist krank und geht deshalb früh ins Bett. Ihre Mutter und ihr Bruder Tobi sind im ` +
          `Wohnzimmer, direkt neben Annas Zimmer. Tobi setzt Kopfhörer auf und fängt an, auf dem Keyboard ` +
          `zu spielen. Seine Mutter sagt: „Das merke ich mir für das nächste Mal, wenn jemand schlafen möchte.“` ,

        utterance: "Das merke ich mir für das nächste Mal, wenn jemand schlafen möchte.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "play_keyboard_headphones",
              text:
                "Tobi spielt weiter mit Kopfhörern auf seinem Keyboard",
              correct: true
            },
            {
              id: "boardgame",
              text:
                "Tobi spielt mit seiner Mutter ein Brettspiel",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "quiet",
          whyTrigger: "loud"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Anna ist krank und geht deshalb früh ins Bett. Ihre Mutter und ihr Bruder Tobi sind im ` +
          `Wohnzimmer, direkt neben Annas Zimmer. Plötzlich fängt Tobi an, laut auf dem Keyboard ` +
          `zu spielen. Seine Mutter sagt: „Das ist nicht gerade die beste Idee, wenn jemand schlafen möchte.“` ,

        utterance: "Das ist nicht gerade die beste Idee, wenn jemand schlafen möchte.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "boardgame",
              text: "Tobi spielt mit seiner Mutter ein Brettspiel",
              correct: true
            },
            {
              id: "play_keyboard",
              text: "Tobi spielt weiter auf dem Keyboard",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "loud",
          whyTrigger: "quiet"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Anna ist krank und geht deshalb früh ins Bett. Ihre Mutter und ihr Bruder Tobi sind im ` +
          `Wohnzimmer, direkt neben Annas Zimmer. Plötzlich fängt Tobi an, laut auf dem Keyboard ` +
          `zu spielen. Seine Mutter sagt: „Schön, dass du üben möchtest, aber deine Schwester will schlafen. Komm, ich hole ein Brettspiel.“` ,

        utterance:
          "Schön, dass du üben möchtest, aber deine Schwester will schlafen. Komm, ich hole ein Brettspiel.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "boardgame",
              text: "Tobi spielt mit seiner Mutter ein Brettspiel",
              correct: true
            },
            {
              id: "play_keyboard",
              text: "Tobi spielt weiter auf dem Keyboard",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "loud",
          whyTrigger: "quiet"
        }
      }
    }
  },
  {
    storyId: 24,
    level: 6,
    latinPosition: 3,

    utteranceReminder: "Annas Mutter sagt:",

    situationQuestion: {
        question:
        "Ist der Boden im Gang zu diesem Zeitpunkt trocken oder nass?",

        options: [
        {
            id: "dry_floor",
            text: "Trocken"
        },
        {
            id: "wet_floor",
            text: "Nass"
        }
        ]
    },

    versions: {
      irony: {
        condition: "irony",

        storyText:
          `Draußen regnet es. Anna kommt klatschnass nach Hause und hinterlässt Wasserpfützen auf dem Boden. ` +
          `Ihre nasse Jacke lässt sie einfach auf den Boden fallen, bevor sie in ihr Zimmer geht. Später kommt ` +
          `in die Küche, wo ihre Mutter gerade kocht. Anna sagt: „Mama, Oma kommt doch bald, oder?“ Ihre Mutter ` +
          `antwortet: „Ja. Schön zu wissen, dass ich auf dich zählen kann, wenn wir Besuch bekommen.“`,

        utterance: "Ja. Schön zu wissen, dass ich auf dich zählen kann, wenn wir Besuch bekommen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "mop_floor",
              text: "Anna wischt den Boden im Gang auf",
              correct: true
            },
            {
              id: "sit_down",
              text: "Anna setzt sich an den Esstisch",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "wet_floor",
          whyTrigger: "wet_floor"
        }
      },

      praise: {
        condition: "praise",

        storyText:
          `Draußen regnet es. Anna kommt klatschnass nach Hause. Die nassen Schuhe lässt sie draußen stehen ` +
          `und die nasse Jacke hängt sie in der Dusche zum Trocknen auf. Danach wischt sie noch die kleinen ` +
          `Pfützen auf, die sie auf dem Boden hinterlassen hat, bevor sie in ihr Zimmer geht. Später kommt sie ` +
          `in die Küche, wo ihre Mutter gerade kocht. Anna sagt: „Mama, Oma kommt doch bald, oder?“ Ihre Mutter ` +
          `antwortet: „Ja. Schön zu wissen, dass ich auf dich zählen kann, wenn wir Besuch bekommen.“`,

        utterance: "Ja. Schön zu wissen, dass ich auf dich zählen kann, wenn wir Besuch bekommen.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "sit_down",
              text:
                "Anna setzt sich an den Esstisch",
              correct: true
            },
            {
              id: "mop_floor",
              text:
                "Anna wischt den Boden im Gang auf",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "dry_floor",
          whyTrigger: "wet_floor"
        }
      },

      criticism: {
        condition: "criticism",

        storyText:
          `Draußen regnet es. Anna kommt klatschnass nach Hause und hinterlässt Wasserpfützen auf dem Boden. ` +
          `Ihre nasse Jacke lässt sie einfach auf den Boden fallen, bevor sie in ihr Zimmer geht. Später kommt ` +
          `in die Küche, wo ihre Mutter gerade kocht. Anna sagt: „Mama, Oma kommt doch bald, oder?“ Ihre Mutter ` +
          `antwortet: „Ja. Und wegen dir gibt es davor noch einiges zu tun.“`,

        utterance: "Ja. Und wegen dir gibt es davor noch einiges zu tun.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "mop_floor",
              text: "Anna wischt den Boden im Gang auf",
              correct: true
            },
            {
              id: "sit_down",
              text: "Anna setzt sich an den Esstisch",
              correct: false
            }
          ]
        },

        correctEmotion: "angry",

        situationLogic: {
          correctAnswer: "wet_floor",
          whyTrigger: "dry_floor"
        }
      },

      control: {
        condition: "control",

        storyText:
          `Draußen regnet es. Anna kommt klatschnass nach Hause und hinterlässt Wasserpfützen auf dem Boden. ` +
          `Ihre nasse Jacke lässt sie einfach auf den Boden fallen, bevor sie in ihr Zimmer geht. Später kommt ` +
          `in die Küche, wo ihre Mutter gerade kocht. Anna sagt: „Mama, Oma kommt doch bald, oder?“ Ihre Mutter ` +
          `antwortet: „Ja. Lass uns davor noch den Boden trockenwischen, damit Oma nicht ausrutscht.“`,

        utterance:
          "Ja. Lass uns davor noch den Boden trockenwischen, damit Oma nicht ausrutscht.",

        nextQuestion: {
          question: "Was passiert als Nächstes?",
          options: [
            {
              id: "mop_floor_together",
              text: "Anna und ihre Mutter wischen den Boden im Gang auf",
              correct: true
            },
            {
              id: "sit_down",
              text: "Anna setzt sich an den Esstisch",
              correct: false
            }
          ]
        },

        correctEmotion: "happy",

        situationLogic: {
          correctAnswer: "wet_floor",
          whyTrigger: "dry_floor"
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