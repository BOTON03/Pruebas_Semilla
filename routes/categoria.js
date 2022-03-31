import { query, Router } from "express";
import { check } from "express-validator";
import { categoriaGet, categoriaPost, categoriaGetQuery, categoriaGetById, categoriaPut, categoriaPutActivar, categoriaPutDesactivar, categoriaDelete } from "../controllers/categoria.js";
import helperCategoria from "../helpers/db-categorias.js";
import { validarCampos } from "../middlewares/validar-campos.js";

const router = Router()

router.get("/", categoriaGet)
router.get("/query",[
    check('query','Digite el parametro de busqueda').not().isEmpty(),
    check('nombre').custom(helperCategoria.existeCategoriaByNombre),
    
  validarCampos
], categoriaGetQuery)
router.get("/id:id/",[
 check('id','No es un mogoId valido').isMongoId(),
 check('id').custom(helperCategoria.existeCategoriaById),

 validarCampos
], categoriaGetById)

router.post("/", categoriaPost)
router.put("/" ,categoriaPut)
router.put("/activar/:id",[
    check('id','No es un mogoId valido').isMongoId(),
    validarCampos
   ], categoriaPutActivar)
router.put("/desactivar/:id",[
    check('id','No es un mogoId valido').isMongoId(),
    validarCampos
   ], categoriaPutDesactivar)

router.delete("/:id",[
    check('id','No es un mogoId valido').isMongoId(),
    validarCampos
   ],categoriaDelete)

export default router