const app = new Vue({
    el: "#app",
    data: {
        nombre: "Pedro",
        apellidos: "El escamoso",
        direccion: "El canelo 845",
        telefono: "123456789",
        correo: "pedro@micorreo.cl",
        foto:"https://st.depositphotos.com/1158045/3239/i/450/depositphotos_32391649-stock-photo-businessman-outdoor-in-the-city.jpg",
        educacion: [
            {
                institucion: "Colegio San Fernando",
                anio: "1999-2006",
                descripcion: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum,vim ea mazim fierent detracto.Ea quis iuvaret expetendis his, te elit voluptua dignissimper, habeo iusto primis ea eam."
            },

            {
                institucion: "Colegio San Pedro Nolasco",
                anio: "2007-2011",
                descripcion: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum,vim ea mazim fierent detracto.Ea quis iuvaret expetendis his, te elit voluptua dignissimper, habeo iusto primis ea eam."},

        {
                    institucion: "Universidad de Deustro",
                    anio: "2012-2013",
                    descripcion: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum,vim ea mazim fierent detracto.Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."},

        {
                        institucion: "Universidad Federico Santa María",
                        anio: "2014-2018",
                        descripcion: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum,vim ea mazim fierent detracto.Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."},                
       ]
    }
})