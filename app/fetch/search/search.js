import { get } from '../get'
import {host} from '../../constants/API'
export function getSearchData(page, cityName) {
    const url = host + "api/search/"+cityName+"/"+page
    const result = get(url)
    return result
}
