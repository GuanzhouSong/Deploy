import * as actionTypes from '../constants/store'
import {likeEvent,unlikeEvent} from "../fetch/user/orderlist";

export function update(data) {
    return {
        type: actionTypes.STORE_UPDATE,
        data
    }
}

export function rm(data) {
    unlikeEvent(data.id).then(
        res =>{
            if(res == "true"){
                data.success = true;
            }
            else{
                data.success = false;
            }
        }
    );
    return {
        type: actionTypes.STORE_RM,
        data
    }
}

export function add(data) {
    likeEvent(data.id).then(
        res =>{
            if(res=="true"){
                data.success = true;
                alert("success!");
            }
            else{
                data.success = false;
            }
        }
    );
    return {
        type: actionTypes.STORE_ADD,
        data
    }
}
