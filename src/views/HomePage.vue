<template>
  <div class="col-12">
    <div class="pr-0 pb-2 pt-2 col-12 d-flex justify-content-end">
      <button
        class="btn btn-sm btn-primary"
        @click="$router.push({ name: 'newBookMark' })"
      >
        + Yeni Ekle
      </button>
    </div>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Başlık</th>
          <th scope="col">Url</th>

          <th scope="col">Sil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bm in bookmarks" :key="bm.id">
          <td>{{ bm.id }}</td>
          <td>{{ bm.title }}</td>
          <td>
            <a :href="bm.url"> {{ bm.url }}</a>
          </td>

          <td>
            <button class="btn btn-xs btn-danger" @click="DeleteUser(bm)">
              Sil
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bookmarks: [],
    };
  },
  created() {
    this.itemList();
  },
  methods: {
    DeleteUser(item) {
      this.$appAxios.delete(`/bookmarks/${item.id}`).then(() => {
        //  this.bookmarks = this.bookmarks.filter((i) => i != item);
       this.itemList();
      });
    },

    itemList() {
      this.$appAxios.get("/bookmarks").then((res) => {
        this.bookmarks = res.data || [];
      });
    },
  },
};
</script>