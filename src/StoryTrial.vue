<template>
  <div class="story-trial">

    <!-- =========================
         STORY
         ========================= -->
    <div class="story-box">
      <p>
        {{ trial.storyText }}
      </p>
    </div>


    <!-- =========================
         QUESTION 1
         ========================= -->
    <div class="question-block">
      <p class="question-text">
        {{ trial.nextQuestion.question }}
      </p>

      <div class="text-options">
        <button
          v-for="option in nextOptions"
          :key="option.id"
          type="button"
          class="choice-button"
          :class="{
            selected: nextResponse === option.id
          }"
          @click="selectNext(option.id)"
        >
          {{ option.text }}
        </button>
      </div>
    </div>


    <!-- =========================
         QUESTION 2: EMOTION
         appears after Q1
         ========================= -->
    <div
      v-if="showEmotionQuestion"
      class="question-block"
    >
      <p class="utterance-reminder">
        {{ trial.speaker }} sagt:
        „{{ trial.utterance }}“
      </p>

      <p class="question-text">
        {{ commonQuestions.emotion.question }}
      </p>

      <div class="emotion-options">
        <button
          v-for="option in emotionOptions"
          :key="option.id"
          type="button"
          class="emotion-button"
          :class="{
            selected: emotionResponse === option.id
          }"
          @click="selectEmotion(option.id)"
        >
          <img
            :src="option.image"
            :alt="option.alt || option.id"
            class="emotion-image"
          >
        </button>
      </div>
    </div>


    <!-- =========================
         QUESTION 3: SITUATION
         appears after Q2
         ========================= -->
    <div
      v-if="showSituationQuestion"
      class="question-block"
    >
      <p class="question-text">
        {{ trial.situationQuestion.question }}
      </p>

      <div class="text-options">
        <button
          v-for="option in situationOptions"
          :key="option.id"
          type="button"
          class="choice-button"
          :class="{
            selected: situationResponse === option.id
          }"
          @click="selectSituation(option.id)"
        >
          {{ option.text }}
        </button>
      </div>
    </div>


    <!-- =========================
         QUESTION 4: WHY
         only appears if triggered
         ========================= -->
    <div
      v-if="showWhyQuestion"
      class="question-block"
    >
      <p class="question-text">
        {{ commonQuestions.why.question }}
      </p>

      <textarea
        v-model="whyResponse"
        class="why-input"
        rows="5"
        placeholder="Bitte gib hier deine Antwort ein."
      />
    </div>


    <!-- =========================
         QUESTION 5: DIFFICULTY
         ========================= -->
    <div
      v-if="showDifficultyQuestion"
      class="question-block"
    >
      <p class="question-text">
        {{ commonQuestions.difficulty.question }}
      </p>

      <div class="slider-container">
        <input
          v-model.number="difficultyRating"
          type="range"
          :min="commonQuestions.difficulty.min"
          :max="commonQuestions.difficulty.max"
          class="slider"
          @input="difficultyTouched = true"
        >

        <div class="slider-labels">
          <span>
            {{ commonQuestions.difficulty.leftLabel }}
          </span>

          <span>
            {{ commonQuestions.difficulty.rightLabel }}
          </span>
        </div>
      </div>
    </div>


    <!-- =========================
         QUESTION 6: LIKELIHOOD
         appears after Q5 was used
         ========================= -->
    <div
      v-if="showLikelihoodQuestion"
      class="question-block"
    >
      <p class="question-text">
        {{ commonQuestions.likelihood.question }}
      </p>

      <div class="slider-container">
        <input
          v-model.number="likelihoodRating"
          type="range"
          :min="commonQuestions.likelihood.min"
          :max="commonQuestions.likelihood.max"
          class="slider"
          @input="likelihoodTouched = true"
        >

        <div class="slider-labels">
          <span>
            {{ commonQuestions.likelihood.leftLabel }}
          </span>

          <span>
            {{ commonQuestions.likelihood.rightLabel }}
          </span>
        </div>
      </div>
    </div>


    <!-- =========================
         CONTINUE
         ========================= -->
    <div
      v-if="showContinueButton"
      class="continue-container"
    >
      <button
        type="button"
        class="continue-button"
        @click="submitTrial"
      >
        Weiter
      </button>
    </div>

  </div>
</template>


<script>
import { commonQuestions } from "./trials.js";


function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
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


export default {
  name: "StoryTrial",

  props: {
    trial: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      commonQuestions,

      // Randomize the position of the answer options.
      nextOptions: shuffleArray(
        this.trial.nextQuestion.options
      ),

      emotionOptions: shuffleArray(
        commonQuestions.emotion.options
      ),

      situationOptions: shuffleArray(
        this.trial.situationQuestion.options
      ),

      // Participant responses
      nextResponse: null,
      emotionResponse: null,
      situationResponse: null,
      whyResponse: "",

      // Sliders start visually in the middle.
      // "Touched" tells us whether the participant
      // actually interacted with them.
      difficultyRating: 50,
      difficultyTouched: false,

      likelihoodRating: 50,
      likelihoodTouched: false
    };
  },

  computed: {
    // Q2 appears after Q1.
    showEmotionQuestion() {
      return this.nextResponse !== null;
    },

    // Q3 appears after Q2.
    showSituationQuestion() {
      return this.emotionResponse !== null;
    },

    // Q4 appears only for the response specified
    // by this version's whyTrigger.
    showWhyQuestion() {
      return (
        this.situationResponse !== null &&
        this.situationResponse ===
          this.trial.situationLogic.whyTrigger
      );
    },

    // Q3 is complete if it has an answer and:
    // - no explanation is required, OR
    // - an explanation is required and has been entered.
    situationSectionComplete() {
      if (this.situationResponse === null) {
        return false;
      }

      if (!this.showWhyQuestion) {
        return true;
      }

      return this.whyResponse.trim().length > 0;
    },

    // Q5 appears after Q3 / Q4 are complete.
    showDifficultyQuestion() {
      return this.situationSectionComplete;
    },

    // Q6 appears only once Q5 has actually
    // been interacted with.
    showLikelihoodQuestion() {
      return this.difficultyTouched;
    },

    // Continue appears only once Q6 has
    // actually been interacted with.
    showContinueButton() {
      return this.likelihoodTouched;
    }
  },

  methods: {
    selectNext(optionId) {
      if (this.nextResponse !== optionId) {
        this.nextResponse = optionId;

        // Reset all later questions if Q1 is changed.
        this.emotionResponse = null;
        this.situationResponse = null;
        this.whyResponse = "";

        this.difficultyRating = 50;
        this.difficultyTouched = false;

        this.likelihoodRating = 50;
        this.likelihoodTouched = false;
      }
    },

    selectEmotion(optionId) {
      if (this.emotionResponse !== optionId) {
        this.emotionResponse = optionId;

        // Reset later questions if Q2 is changed.
        this.situationResponse = null;
        this.whyResponse = "";

        this.difficultyRating = 50;
        this.difficultyTouched = false;

        this.likelihoodRating = 50;
        this.likelihoodTouched = false;
      }
    },

    selectSituation(optionId) {
      if (this.situationResponse !== optionId) {
        this.situationResponse = optionId;

        // Reset later questions if Q3 is changed.
        this.whyResponse = "";

        this.difficultyRating = 50;
        this.difficultyTouched = false;

        this.likelihoodRating = 50;
        this.likelihoodTouched = false;
      }
    },

    submitTrial() {
      const selectedNextOption =
        this.trial.nextQuestion.options.find(
          option =>
            option.id === this.nextResponse
        );

      const results = {
        // Trial identity
        story_id: this.trial.storyId,
        level: this.trial.level,
        latin_position:
          this.trial.latinPosition,
        list: this.trial.list,
        condition: this.trial.condition,

        // Question 1
        next_response:
          this.nextResponse,

        next_correct:
          selectedNextOption
            ? selectedNextOption.correct
            : null,

        // Question 2
        emotion_response:
          this.emotionResponse,

        emotion_correct:
          this.emotionResponse ===
          this.trial.correctEmotion,

        // Question 3
        situation_response:
          this.situationResponse,

        situation_correct:
          this.situationResponse ===
          this.trial.situationLogic.correctAnswer,

        // Question 4
        why_triggered:
          this.showWhyQuestion,

        why_response:
          this.showWhyQuestion
            ? this.whyResponse.trim()
            : null,

        // Questions 5 and 6
        difficulty_rating:
          this.difficultyRating,

        likelihood_rating:
          this.likelihoodRating
      };

      // Let App.vue decide what happens next.
      this.$emit("complete", results);
    }
  }
};
</script>


<style scoped>
.story-trial {
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  margin: 30px auto 60px;
  padding: 0 30px;
  font-size: 18px;
  line-height: 1.6;
}

.story-box {
  margin-bottom: 35px;
  padding: 22px 26px;
  border: 1px solid #d0d0d0;
  border-radius: 6px;
}

.story-box p {
  margin: 0;
}

.question-block {
  margin-top: 35px;
  padding-top: 25px;
  border-top: 1px solid #dddddd;
}

.question-text {
  margin-bottom: 18px;
  font-weight: bold;
}

.utterance-reminder {
  margin-bottom: 18px;
  font-style: italic;
}

.text-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.choice-button {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #cccccc;
  border-radius: 6px;
  background: white;
  font-size: 17px;
  line-height: 1.4;
  text-align: left;
  cursor: pointer;
}

.choice-button:hover {
  border-color: #777777;
}

.choice-button.selected {
  border-color: #333333;
  background: #eeeeee;
}

.emotion-options {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
}

.emotion-button {
  padding: 10px;
  border: 3px solid transparent;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
}

.emotion-button.selected {
  border-color: #333333;
}

.emotion-image {
  display: block;
  width: 150px;
  max-width: 100%;
  height: auto;
}

.why-input {
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  border: 1px solid #aaaaaa;
  border-radius: 5px;
  font-family: inherit;
  font-size: 17px;
  line-height: 1.5;
  resize: vertical;
}

.slider-container {
  width: 100%;
  margin-top: 20px;
}

.slider {
  width: 100%;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 8px;
  font-size: 15px;
}

.slider-labels span:last-child {
  text-align: right;
}

.continue-container {
  margin-top: 40px;
  text-align: center;
}

.continue-button {
  padding: 12px 30px;
  font-size: 18px;
  cursor: pointer;
}

@media (max-width: 700px) {
  .story-trial {
    padding: 0 16px;
  }

  .emotion-options {
    gap: 20px;
  }

  .emotion-image {
    width: 120px;
  }
}
</style>