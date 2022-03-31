import Categoria from "../models/categoria.js"
const helperCategoria = {
    existeCategoriaById: async (id) => {
        const existe = await Categoria.findById(id)

        if (!existe) {
            throw new Error(`El id no existe ${id}`)
        }
    },
     
 

 }

const existeCategoriaByNombre = {
    existeCategoriaByNombre: async(nombre)=>{
        const existe = await Categoria.findOne({nombre})

        if(existe){
            throw new Error(`El nombre de la categoria ya existe ${nombre}`)
        }
    }
}

export default helperCategoria