<template>
  <div class="display">
    <h2>Hello World</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iure
      architecto possimus molestias. Odit sit est pariatur obcaecati. Dicta
      saepe at consectetur doloribus repellendus aliquam praesentium veniam
      beatae id est, olor sit, amet consectetur adipisicing elit. Dolores iure
      architecto possimus molestias. Odit sit est pariatur obcaecati. Dicta
      saepe at consectetur doloribus repellendus aliquam praesentium veniam
      beatae id est.
    </p>
    <button class="btn btn-delete">
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
    </button>
  </div>
</template>

<style scoped>
.display {
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
.display h2 {
  text-align: center;
  margin-top: 2rem;
  font-size: 3rem;

  font-weight: 600;
}
.btn {
  /* width: 3.5rem; */

  padding: 1rem;
  border: none;
  background-color: #fdba45;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.btn:hover {
  scale: 110%;
  background-color: #e3a539;
}
.btn-delete {
  position: absolute;
  bottom: 10rem;
  right: 8rem;
  border: none;
}
.icon-delete {
  width: 3rem;
}

.display p {
  font-size: 1.8rem;
  margin-top: 3rem;
  line-height: 3.2rem;
}
</style>
