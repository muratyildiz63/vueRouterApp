<template>
  <div class="border cart p-2">
    <div class="form-group mb-3">
      <label for="title">Başlık</label>
      <input
        type="text"
        class="form-control"
        id="title"
        v-model="userData.title"
        placeholder="Balık Giriniz...."
      />
    </div>
    <div class="form-group mb-3">
      <label for="url">URL</label>
      <input
        type="text"
        class="form-control"
        id="url"
        v-model="userData.url"
        placeholder="https:://.."
      />
    </div>

    <div class="form-group mb-3">
      <label for="description">Açıklama</label>
      <textarea
        class="form-control"
        id="description"
        v-model="userData.description"
        placeholder="Açıklama Giriniz.."
        rows="3"
      ></textarea>
    </div>

    <div class="col-12 p-0 d-flex justify-content-between">
      <button
        class="btn btn-sm btn-secondary"
        @click="$router.push({ name: 'HomePage' })"
      >
        İptal
      </button>
      <button class="btn btn-sm btn-primary" @click="onSeve">Kaydet</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userData: {
        title: null,
        url: null,
        description: null,
      },
    };
  },
  methods: {
    onSeve() {
      this.$appAxios
        .post("/bookmarks", this.userData)
        .then((res) => {
          alert("Başarı ile eklendi", res);
          this.userReset();
          this.$router.push("/")
        });
    },
    userReset() {
      Object.keys(this.userData).forEach((key) => (this.userData[key] = null));
    },
  },
};
</script>