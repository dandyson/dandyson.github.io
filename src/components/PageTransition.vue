<template>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <slot></slot>
    </transition>
  </template>
  
  <script>
  export default {
    methods: {
      beforeEnter(el) {
        el.style.transform = 'translateX(100%)';
      },
      enter(el, done) {
        el.offsetHeight; // trigger reflow
        el.style.transition = 'transform 0.5s ease';
        el.style.transform = 'translateX(0)';
        el.addEventListener('transitionend', done);
      },
      leave(el, done) {
        el.style.transition = 'transform 0.5s ease';
        el.style.transform = 'translateX(100%)';
        el.addEventListener('transitionend', done);
      },
    },
  };
  </script>
  
  <style>
  /* Add any necessary styles here */
  </style>
  