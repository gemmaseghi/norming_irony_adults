<template>
  <Experiment title="Ironie und Kommunikation">

    <!-- General information -->
    <GeneralInstructions />

    <!-- Task instructions -->
    <Instructions />

    <!-- 24 experimental stories -->
    <StoryTrial
      v-for="trial in participantTrials"
      :key="`${trial.storyId}-${trial.condition}`"
      :trial="trial"
    />

    <!-- Final information -->
    <EndExperiment />

    <!-- Submit data to the server -->
    <SubmitResultsScreen />

  </Experiment>
</template>


<script>
import GeneralInstructions from "./GeneralInstructions";
import Instructions from "./Instructions";
import storyTrial from "./storyTrial";
import EndExperiment from "./EndExperiment";

import {
  createParticipantTrials
} from "./trials";


export default {
  name: "App",

  components: {
    GeneralInstructions,
    Instructions,
    StoryTrial,
    EndExperiment
  },

  data() {
    return {
      listNumber: null,
      participantTrials: [],

      prolificPid: null,
      prolificStudyId: null,
      prolificSessionId: null
    };
  },

  created() {
    const params =
      new URLSearchParams(
        window.location.search
      );

    // -----------------------------------------
    // 1. Read Latin-square list from Taskflow
    // -----------------------------------------

    this.listNumber =
      Number(params.get("list"));

    if (
      this.listNumber < 1 ||
      this.listNumber > 4
    ) {
      throw new Error(
        "Invalid or missing Latin-square list."
      );
    }


    // -----------------------------------------
    // 2. Read Prolific identifiers
    // -----------------------------------------

    this.prolificPid =
      params.get("PROLIFIC_PID");

    this.prolificStudyId =
      params.get("STUDY_ID");

    this.prolificSessionId =
      params.get("SESSION_ID");


    // -----------------------------------------
    // 3. Create this participant's trials
    // -----------------------------------------

    this.participantTrials =
      createParticipantTrials(
        this.listNumber
      );
  },

  mounted() {
    // Save participant-level information
    // with the experiment data.
    this.$magpie.addExpData({
      latin_square_list:
        this.listNumber,

      prolific_pid:
        this.prolificPid,

      prolific_study_id:
        this.prolificStudyId,

      prolific_session_id:
        this.prolificSessionId
    });
  }
};
</script>