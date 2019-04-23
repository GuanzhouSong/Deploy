import { get } from '../get'
import {host} from '../../constants/API'
export function getInfoData(id) {
   const result = get(host + 'api/detail/info/' + id)
   return result
}

export function getCommentData(id) {
    const result = get(host+'api/comment/' + id)
    return result
}

export function getAllEvent() {
  const result = get('api/event').then(user => user.json())
  return result
}

export function deleteAEvent(id) {
  // const result = delete('/api/event')
  return id
}
