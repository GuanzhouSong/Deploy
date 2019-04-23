import {get} from '../get'
import {post} from '../post'
import {deleteMethod} from '../delete'
import {host} from "../../constants/API";

export function postComment(id, comment, star) {
    let result = post(host+'api/comment/'+id, {
        text: comment,
        reviewScore: star
    });
    console.log(id,comment,star)
    return result
}


export function likeEvent(eid){
    let result = post(host+'api/like/event/'+eid, {
    });
    return result
}

export function unlikeEvent(eid){
    let result = deleteMethod(host+'api/like/event/'+eid, {
    });
    return result
}

export function inEvent(eid){
    let result = post(host+'api/in/event/'+eid, {
    });
    return result
}

export function uninEvent(eid){
    let result = deleteMethod(host+'api/in/event/'+eid, {
    });
    return result
}

export function isLiked(eid){
    let result = get(host+'api/event/isLiked/'+eid, {
    });
    return result
}

export function isIn(eid){
    let result = get(host+'api/event/isAttend/'+eid, {
    });
    return result
}

export function isLogin(){
    let result = get(host+'api/isLogin/', {
    });
    return result
}
