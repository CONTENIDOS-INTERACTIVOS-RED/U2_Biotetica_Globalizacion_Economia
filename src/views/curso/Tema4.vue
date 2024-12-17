<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'SINTESIS'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 La Unidad 2: Dilemas éticos transversales en la globalización explora los retos éticos fundamentales que surgen en un mundo interconectado, donde la globalización y los avances tecnológicos impactan las dinámicas laborales, económicas y sociales. Esta unidad aborda temas clave como el impacto de la tecnología en el ámbito laboral, la influencia de la economía global en la equidad y la justicia social, y el papel de la responsabilidad social corporativa en la toma de decisiones empresariales.
      br
      br
      |A través de este enfoque, los estudiantes desarrollarán una comprensión crítica de los dilemas éticos globales y sus implicaciones, fortaleciendo su capacidad para analizar y proponer soluciones éticas en un contexto globalizado. Este conocimiento es esencial para su desarrollo profesional y para contribuir a la construcción de un mundo más justo y sostenible.
    img(src='@/assets/curso/temas/sintesis.svg', alt='')
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
