<template>
  <section class="container">
    <div class="posts">
      <h1>Posts</h1>
      <div v-if="posts.length > 0" class="table-wrap">
        <div>
          <button class="btn mb-5">
            <router-link v-bind:to="{ name: 'NewPost' }" class=""
              >Add A Post</router-link
            >
          </button>
        </div>
        <table class="table table-striped">
          <tr>
            <th scope="col" width="230">Title</th>
            <th scope="col" width="500">Description</th>
            <th scope="col" width="150" align="center">Action</th>
          </tr>
          <tr v-for="post in posts" :key="post.title">
            <td>{{ post.title }}</td>
            <td>{{ post.description }}</td>
            <td align="center">
              <router-link
                v-bind:to="{ name: 'EditPost', params: { id: post._id } }"
                >Edit</router-link
              >
              |
              <a href="#" @click="deletePost(post._id)">Delete</a>
            </td>
          </tr>
        </table>
      </div>
      <div v-else>
        There are no posts.. Lets add one now <br /><br />
        <router-link v-bind:to="{ name: 'NewPost' }" class="add_post_link"
          >Add Post</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import PostsService from '@/services/PostsService';

export default {
  name: 'posts',
  components: {},
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await PostsService.fetchPosts();
      this.posts = response.data.posts;
    },
    async deletePost(id) {
      await PostsService.deletePost(id);
      this.$router.push({ name: 'Posts' });
    },
  },
};
</script>
<style type="text/css">
.posts {
  margin-top: 12rem;
  margin-bottom: 7.5rem;
}

.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th {
  text-align: center;
}
table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
