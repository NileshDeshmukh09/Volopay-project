<template>
    <div>
        <button @click="showDialog = true">Open Dialog</button>
        <div v-if="showDialog" class="bg-primary dialog-box" @close="showDialog = false">
            Dialog content goes here <i class="fa-solid fa-filter" @click="showDialog = false"></i>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'DialogBox',
    data() {
        return {
            showDialog: false,
        }
    },
    watch: {
    showDialog(newValue) {
      if (newValue) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    },
  },
}
</script>

<style>
.no-scroll {
  height: 100%;
  overflow: hidden;
}

.dialog-box {
    margin-left: -200px;
}
</style>
  