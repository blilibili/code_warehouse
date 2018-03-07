import {config} from '../globalConfig'
export const requestCodeGetAll = (param , context) =>
{
    let url = config.website + 'code/queryAll';
    return context.$http.get(url , param)
};