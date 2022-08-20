import {Request, Response} from 'express'
import {createMenuObject} from '../helpers/createMenuObject'
import {Pet} from '../models/pet'

export const search = (req: Request, res: Response)=>{
    let query: string = req.query.q as string

    if(!query){  // Para que caso não tenha query (nada enviado)...
        res.redirect('/')  // ...redirecione para a página inicial
        return  // Para a execução da função caso não tenha query
    }

    let list = Pet.getFromName(query)

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    })
}


