<template>
  <div>
    <a class="btn mt-5">
      <span class="btn-text">{{ msg }}</span>
      <icon name="chevron-right" color="#fff" />
    </a>
  </div>
</template>

<script>
export default {
  name: "TheButton",
  props: {
    msg: String
  }
};
</script>

<style lang="css" scoped>
/* .hero-btn {
  opacity: 0;
  animation: fade-in-down ease-in 1.6s 1.6s forwards;
} */

.btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* display: inline-block !important; */
  position: relative;
  background-color: #79c039;
  color: #fff;
  width: 270px;
  font-family: var(--content-font);
  font-size: 1.75rem;
  font-weight: 500;
  border-radius: 0;
  border: none;
  padding: 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  transition: transform 0.75s cubic-bezier(0.3, 0, 0.3, 1),
    opacity 0.75s cubic-bezier(1, 0, 0.43, 1);
}

.btn-text {
  padding-left: 5rem;
}
.chevron-right {
  background: #55880d;
  width: 62px;
  height: 60px;
  padding: 16px;
  float: right;
  border-left: 2px solid #fff;
  cursor: pointer;
}

.btn:focus,
.btn:hover,
.chevron-right:focus,
.chevron-right:hover {
  background-color: #55880d;
  color: #fff;
}
</style>