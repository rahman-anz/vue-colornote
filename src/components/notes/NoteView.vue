<template>
  <section>
    <h2>{{ note.title }}</h2>
    <p>
      {{ note.description }}
    </p>
    <base-button radius="circle" class="icon-position">
      <ion-icon size="large" name="trash-outline"></ion-icon>
    </base-button>
  </section>
</template>

<script>
import { useNoteStore } from "@/store/store";
import { computed } from "vue";
export default {
  props: ["id"],
  setup(props) {
    const store = useNoteStore();
    const note = computed(function () {
      if (props.id) return store.noteById(props.id);
      else return "";
    });
    return { note };
  },
};
</script>
<style scoped>
section {
  background: repeating-linear-gradient(
    to bottom,
    #ffd68d,
    #ffd68d 3rem,
    #f6ba52 3.1rem,
    #f6ba52 3.2rem
  );
  padding: 1rem 2rem;
  position: relative;
}
section h2 {
  text-align: center;
  margin-top: 2rem;
  font-size: 3rem;

  font-weight: 600;
}

.icon-position {
  position: absolute;
  bottom: 10rem;
  right: 8rem;
}

section p {
  font-size: 1.8rem;
  margin-top: 3rem;
  line-height: 3.2rem;
}
/*SCROLLBAR*/

/* width */
::-webkit-scrollbar {
  width: 1.2rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: #e1bf84;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #907648;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #645232;
}
</style>
