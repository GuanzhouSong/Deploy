import {get} from '../get'
import {host} from '../../constants/API'

export function getInfoData(id) {
   const result = get(host + 'api/detail/info/' + id)
   return result
}

export function getCommentData(id) {
    const result = get(host+'api/comment/' + id)
    return result
}

