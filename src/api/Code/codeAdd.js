import qs from 'qs';
import {config} from '../globalConfig'
export const requestCodeAdd = (param , context) =>
{
    let url = config.website + 'code/add';
    return context.$http.post(url , qs.stringify(param))
};