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
          title: "Willkommen zum ersten Experiment!",
          text: `
            <p>
              Das erste Experiment besteht aus einer Aufgabe, die wir mit einer Gruppe von Kindern durchführen. Wir brauchen auch Erwachsene, die als Kontrollgruppe an dem Experiment teilnehmen. Da die Aufgabe die gleiche für Kinder und Erwachsene ist, ist es ganz normal, wenn du sie sehr einfach findest.
            </p>

            <p>
              In diesem Experiment wirst du ein Kommunikationsspiel mit einem anderen Teilnehmenden spielen.
            </p>

            <p>
              Deine Aufgabe ist es, Objekte so zu beschreiben, dass ein anderer Teilnehmender sie korrekt identifizieren kann. Du kannst den Namen des Objekts verwenden.
            </p>

            <p>Hier ist ein Beispiel:</p>

            <figure>
              <img
                src="redundancy/instructions/example_instructions.png"
                alt="Beispielbild mit einem Dreieck"
              />

              <figcaption>
                In diesem Beispiel könntest du „das Dreieck“ sagen.
              </figcaption>
            </figure>

            <p>
              Klicke <strong>Weiter</strong> um zu erfahren, wie das Spiel funktioniert.
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