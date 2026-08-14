<template>
  <Screen>
    <div class="instructions">
      <h2>{{ pages[page].title }}</h2>

      <div v-html="pages[page].text"></div>

      <div class="button-container">
        <button v-if="page > 0" @click="previousPage">
          Zurück
        </button>

        <button
          v-if="page < pages.length - 1"
          @click="pageForward"
        >
          Weiter
        </button>

        <button
          v-else
          @click="pageForward"
        >
          Weiter
        </button>
      </div>
    </div>
  </Screen>
</template>

<script>
export default {
  name: "InstructionsWithBack",
  data() {
    return {
      page: 0,
      pages: [
        {
          title: "Willkommen!",
          text: `
            <p>
              In dieser Studie wollen wir uns anschauen, wie sich das Sprachverständnis von Kindern entwickelt. Um geeignete Geschichten zu finden, führen wir die Studie zunächst mit Erwachsenen durch.
            </p>

            <p>
              Du wirst jeweils eine kurze Geschichte lesen. In allen Geschichten geht es um die beiden Geschwister Anna und Tobi. Am Ende jeder Geschichte trifft die Mutter der beiden eine Aussage über das Verhalten ihrer Kinder. 
            </p>

            <p>
              Deine Aufgabe ist es, einige Fragen zum Inhalt der Geschichte zu beantworten. Da die Studie für Kinder gedacht ist, werden dir einige Fragen vermutlich recht einfach erscheinen. Bitte gib dir trotzdem Mühe, sie korrekt zu beantworten.
            </p>

            <p>
              Die Fragen haben nicht immer eine eindeutige Antwort. Wähle einfach die Antwortmöglichkeit aus, die du im vorliegenden Kontext für wahrscheinlicher hältst. 
            </p>

            <p>
              Am Ende jeder Geschichte gibt es zudem zwei weitere Fragen, die die Kinder nicht sehen werden. Hier sollst du einschätzen, wie schwierig es für ein Kind ist, die Aussage der Mutter zu verstehen und wie wahrscheinlich es ist, dass ein Elternteil eine solche Aussage trifft. Gib hier einfach spontan deine persönliche Einschätzung ab.
            </p>

            <p>
              Klicke <strong>Weiter</strong>, um mit der ersten Geschichte zu starten.
            </p>

          `
        },
      ]
    };
  },

  methods: {

    previousPage() {
      this.page--;
    },

    pageForward() {
      if (this.page < this.pages.length - 1) {
        this.page++;
      } else {
        this.$magpie.nextScreen();
      }
    }
  },
};
</script>

<style scoped>
.instructions {
  width: 700px;
  max-width: 95vw;
  margin: 0 auto;
  text-align: justify;
}

.instructions h2 {
  text-align: center;
}

.instructions p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 12px;
}


.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.button-container button {
  width: auto;
  margin: 0 5px;
}

.instructions :deep(.instruction-images) {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  max-width: 1000px;
  margin: 24px auto;
}

.instructions :deep(.instruction-image) {
  flex: 1;
  min-width: 0;
  text-align: center;
}

.instructions :deep(.instruction-image img) {
  display: block;
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 0 auto;
}


</style>