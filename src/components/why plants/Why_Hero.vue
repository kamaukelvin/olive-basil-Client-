<template>
  <div>
    <section class="why-hero">
      <div>
        <center>
          <h1 class="why-title">
            We're <span class="mx-3">Thrilled</span> to be part of<br />
            the Plant-Based Revolution
          </h1>
        </center>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.why-hero {
  background-image: url('../../assets/img/why-hero.png');
  overflow: hidden;
  width: 100%;
  height: 867px;
  background-repeat: no-repeat;
  background-size: cover cover;
  position: relative;
}

.why-title {
  margin-top: 9rem;
  font-family: var(--main-font);
  font-size: 5.5rem;
  font-weight: 500;
  line-height: 5.5rem;
  font-feature-settings: 'lnum';
  font-variant-numeric: lining-nums;
}

.why-title span {
  font-family: var(--curly-font);
  color: #e68618;
  font-size: 10rem;
}
</style>
