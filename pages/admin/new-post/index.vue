<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmit"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import axios from "axios";
export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  methods: {
    onSubmit(postData) {
      axios
        .post("https://nuxt-blog-a471c.firebaseio.com/posts.json", {
          ...postData,
          updatedDate: new Date()
        })
        .then(res => {console.log(res)})
        .catch(e => {console.log(e)});
    }
  }
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
