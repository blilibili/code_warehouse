import qs from 'qs';
import {config} from '../globalConfig'
export const requestCodeDel = (param , context) =>
{
    let url = config.website + 'code/del';
    return context.$http.post(url , qs.stringify(param))
};