export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Dilemas éticos transversales en la globalización',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Impacto ético de la tecnología en el ámbito laboral y social  ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Economía global y su influencia en la equidad y la justicia social    ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Distribución desigual de la riqueza en la economía global',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Factores que influyen a la desigualdad económica ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'El rol de las instituciones gubernamentales en la regulación y justicia económica',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Perspectivas globales, desafíos futuros',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Responsabilidad Social Corporativa (RSC) y ética en las decisiones empresariales ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Definición y alcance de la Responsabilidad Social Corporativa (RSC)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Relación de la responsabilidad social corporativa y ética      ',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Ética en las decisiones empresariales     ',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Desafíos de la Responsabilidad Social Corporativa ',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        titulo: 'SINTESIS',
        desarrolloContenidos: true,
      },
      // {
      //   nombreRuta: 'sintesis',
      //   titulo: 'Síntesis',
      //   desarrolloContenidos: true,
      // },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Banco Mundial. (2021). Diagnóstico de pobreza y desigualdad en Colombia.',
    },
    {
      referencia:
        'Bancolombia. (2023). Informe de sostenibilidad. Recuperado de:',
      link:
        'https://www.bancolombia.com/acerca-de/informacion-corporativa/historias-que-transforman',
    },
    {
      referencia:
        'Departamento Nacional de Planeación (DNP). (2020). Ingreso Solidario en Colombia: Apoyo en tiempos de pandemia. DNP.',
    },
    {
      referencia:
        'Díaz, A., & Caballero, C. (2020). La estructura fiscal y la desigualdad en Colombia: Retos y perspectivas. Pontificia Universidad Javeriana.',
    },
    {
      referencia:
        'Echeverri, J. (2019). Desigualdad y crecimiento en Colombia: Un análisis desde la economía política. Banco de la República de Colombia',
    },
    {
      referencia:
        'Gamboa, J. (2020). El impacto de los acuerdos de libre comercio en la economía colombiana. Universidad de los Andes.',
    },
    {
      referencia:
        'García Peregrín, E. (2018). Bioética: temas para el debate. Vol. 2: ( ed.). Bubok Publishing S.L.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/51423',
    },
    {
      referencia:
        'Garza Grimaldo, J. G. & Valquí Cachi, C. (2017). Los valores en la dialéctica de la humanidad y la naturaleza en el siglo XXI: ( ed.). Ediciones y Gráficos Eón.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/41139',
    },
    {
      referencia: 'Grupo Éxito. (2023). Informe de sostenibilidad.',
      link: 'https://www.grupoexito.com.co/es/sostenibilidad',
    },
    {
      referencia:
        'Núñez de Castro, I. (2017). La bioética: un camino para el presente: ( ed.). ITESO - Instituto Tecnológico y de Estudios Superiores de Occidente.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40950',
    },
    {
      referencia: 'OECD. (2021). Revenue Statistics 2021. OECD Publishing',
    },
    {
      referencia:
        'ONU. (2019). Informe de los Objetivos de Desarrollo Sostenible 2019. Naciones Unidas.',
    },
    {
      referencia:
        'Pinilla Forero, J. (2022). Ética y bioética en la práctica profesional. Revista Colombiana de Ciencias Administrativas, 4 (1), 78-93: ( ed.). Fundación Universitaria San Mateo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/219184',
    },
    {
      referencia:
        'Prosperidad Social. (2024). Renta Ciudadana en Colombia: Componentes y objetivos.',
      link: 'https://www.prosperidadsocial.gov.co/',
    },
    {
      referencia:
        'Rodríguez Jover, A. (2019). Responsabilidad social corporativa (ed.). IC Editorial.',
      link:
        'https://elibro.net/es/creader/tecnologicadeloriente/124246?page=56',
    },
    {
      referencia:
        'Rodríguez Jover, A. (2019). Responsabilidad social corporativa. ADGG072PO: (ed.). Málaga, España, IC Editorial.',
      link:
        'https://elibro.net/es/creader/tecnologicadeloriente/124246?page=13',
    },
    {
      referencia:
        'Rodríguez Jover, A. (2019). Responsabilidad social corporativa. ADGG072PO: (ed.). Málaga, España, IC Editorial.',
      link:
        'https://elibro.net/es/creader/tecnologicadeloriente/124246?page=13',
    },
    {
      referencia:
        'Sen, A. (1999). Development as freedom. Oxford University Press.',
    },
  ],
  glosario: [
    {
      termino: 'Acceso Digital',
      significado:
        'capacidad de las personas y comunidades para acceder a las tecnologías de la información y la comunicación, lo que incluye la conectividad a Internet y la disponibilidad de dispositivos electrónicos.',
    },
    {
      termino: 'Automatización',
      significado:
        'uso de tecnología para realizar tareas que anteriormente requerían intervención humana.',
    },
    {
      termino: 'Desigualdad Social',
      significado:
        'desnivel en el acceso a recursos, oportunidades y derechos entre diferentes grupos sociales.',
    },
    {
      termino: 'Derechos Humanos',
      significado:
        'los derechos fundamentales que deben ser garantizados a todas las personas sin discriminación.',
    },
    {
      termino: 'Economía Global',
      significado:
        'sistema económico que integra mercados, empresas y naciones en un contexto internacional.',
    },
    {
      termino: 'Ética Empresarial',
      significado:
        'conjunto de principios y normas que guían el comportamiento de las empresas en sus operaciones y decisiones.',
    },
    {
      termino: 'Impacto Social',
      significado:
        'efectos que las decisiones y acciones de individuos o empresas tienen sobre las comunidades y sociedades',
    },
    {
      termino: 'Responsabilidad Social Corporativa (RSC)',
      significado:
        'compromiso de las empresas de actuar de manera ética y contribuir al bienestar social, ambiental y económico.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'capacidad de satisfacer las necesidades actuales sin comprometer la capacidad de las futuras generaciones para satisfacer sus propias necesidades.',
    },
    {
      termino: 'Tecnología',
      significado:
        'conjunto de herramientas y sistemas que permiten la creación, almacenamiento, intercambio y uso de información.',
    },
    {
      termino: 'Vulnerabilidad Social',
      significado:
        'riesgo de que ciertos grupos o individuos enfrenten desventajas económicas, sociales o políticas',
    },
  ],
}
