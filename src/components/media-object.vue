<template>
  <div class="media-object p2">
    <div class="media mr2">
      <img src="//placehold.it/150x150">
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
@function rem($px) {
  @return ($px / 16) + rem;
}

.media-object {
  background-color: #fefefe;
  border: rem(1) solid #d8d8d8;
  overflow: auto;
}

.media-object .media {
  float: left;
}

.media-object img {
  // Fix weird space under image
  display: block;
  max-width: 100%;
}

.media-object .content {
  overflow: hidden;
}

.p2 {
  padding: rem(20);
}

.px2 {
  padding-left: rem(20);
  padding-right: rem(20);
}

.mr2 {
  margin-right: rem(20);
}

p {
  margin-top: 0;
}

</style>
