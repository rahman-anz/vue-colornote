<template>
  <section>
    <h2>{{ note.title }}</h2>
    <p>
      {{ note.description }}
    </p>
    <base-button radius="circle" class="icon-position">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="icon-delete"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
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
.icon-delete {
  width: 3rem;
}

section p {
  font-size: 1.8rem;
  margin-top: 3rem;
  line-height: 3.2rem;
}
/*SCROLLBAR*/

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #c4a46e;
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
