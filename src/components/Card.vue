<script setup lang="ts">
interface Props {
  image: string;
  title: string;
  description: string;
  info: {
    value: string;
    date: string;
  };
  user: {
    avatar: string;
    name: string;
  };
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="flex flex-col gap-5">
    <div
      class="
        relative
        flex
        justify-center
        items-center
        rounded-lg
        overflow-hidden
        cursor-pointer
        group
      "
    >
      <img :src="image" alt="imagem" />
      <div
        class="
          hidden
          group-hover:block
          absolute
          z-10
          bg-[#02FDFC]
          w-full
          h-full
          opacity-50
        "
      ></div>
      <img
        class="hidden group-hover:block absolute z-10"
        :src="`./svg/icon-view.svg`"
        alt="icon view"
      />
    </div>
    <div class="text-white text-2xl cursor-pointer hover:text-[#02FDFC]">
      {{ title }}
    </div>
    <div class="text-[#8CACD9] font-normal text-lg mt-[2px] leading-6">
      {{ description }}
    </div>
    <div class="flex justify-between">
      <div class="flex gap-2 text-[#02FDFC]">
        <img
          class="h-5 self-center"
          :src="`./svg/icon-ethereum.svg`"
          alt="icon ethereum"
        />
        <span class="self-center">{{ info.value }}</span>
      </div>
      <div class="flex gap-2 text-[#8CACD9]">
        <img
          class="h-5 self-center"
          :src="`./svg/icon-clock.svg`"
          alt="icon clock"
        />
        <span class="self-center">{{ info.date }}</span>
      </div>
    </div>
    <div class="border-t border-t-[#2E4158]"></div>
    <div class="flex gap-[10px] pb-2">
      <img
        class="rounded-full w-9 h-9 border border-white self-center"
        :src="user.avatar"
        alt="imagem"
      />
      <div class="flex gap-2 self-center">
        <span class="flex text-[#9CAFCD]">Creation of</span>
        <span class="cursor-pointer text-white hover:text-[#02FDFC]">{{
          user.name
        }}</span>
      </div>
    </div>
  </div>
</template>