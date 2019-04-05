<template>
  <section class="featured-posts">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      title="Lorem ipsum"
      previewText="loremlore mloremloremlo remloremlorem loremlorem lorem"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      title="Lorem ipsum"
      previewText="loresdgm loremloremlorem loremloreml oremloremloremlorem"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      title="Lorem ipsdfsum"
      previewText="loremlos hhsdhsre mloremlo remloremloreml oremloremlorem loremloremloshhsdhsr emloremloremloremloreml oremloremloremlorem"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
    />
  </section>
</template>

<script>
import PostPreview from "~/components/Posts/PostPreview";

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
