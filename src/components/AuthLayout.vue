<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full py-12 px-6">
      <div class="flex justify-center">
        <svg
          class="w-32 mb-2 mr-6"
          id="Livello_1"
          data-name="Livello 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 134.87 39.6"
        >
          <g id="Livello_2" data-name="Livello 2">
            <g id="Livello_1-2" data-name="Livello 1-2">
              <g id="Livello_2-2" data-name="Livello 2-2">
                <g id="Text">
                  <text
                    class="cls-1 text-gray-800"
                    transform="translate(42.78 34.96) scale(1.04 1)"
                  >
                    Jeed
                  </text>
                </g>
                <g id="Logo">
                  <path
                    class="cls-2"
                    d="M43.72,0A49.59,49.59,0,0,0,22.65,8.68l-.5,3.53-2.08-1.5A28.53,28.53,0,0,0,9.51,29a2.73,2.73,0,0,0,.68,1.16l22.34-20-20.17,21a7.11,7.11,0,0,0,2.06.06C36.55,24,40.9,14.06,40.9,14.06l-4.55-1,6.18-.64c.16-.35.32-.7.45-1C45.85,4.41,43.72,0,43.72,0Z"
                  />
                  <path
                    class="cls-2"
                    d="M10.2,30.11C8,32.24,2.51,37.05,0,39.6l3.05-1.06,9.3-7.42A4,4,0,0,1,10.2,30.11Z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <p class="mt-6 text-sm text-center text-gray-900">
        {{ title }}
      </p>
      <slot />
      <div class="mt-12 relative flex justify-center text-xs">
        <span class="px-2 bg-gray-100 text-gray-500"
          >Copyright © Jeed {{ new Date().getFullYear() }}.</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script><style scoped>
.cls-1 {
  isolation: isolate;
  font-size: 36.26px;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.cls-2 {
  fill: #65ef65;
}
</style>