/**
 * TradingTerminalRN
 * @author CYF
 * @date 2017-08-13
 */

import * as types from './actionTypes';
import Util from '../util/utils';
import * as urls from '../util/constants_url';
import Toast from 'react-native-root-toast';

export let HttpLogin = (data,isLoading) => {

    let url = urls.LOGINURL;

    return dispatch => {
        dispatch({type: types.LOGINURL,isLoading: isLoading});
        return Util.postLogin(url, data,
            (Code, Message, Data) => {

                // let notrealaccount=Data
                dispatch({type: types.LOGINURLRECEIVED, Code: Code, Message: Message, Data: Data});

                //11010497   cks69t

                // if(status){
                //
                // }
            },
            (error) => {
                // console.log('Fetch banner list error: ' + error);
                dispatch({'type': types.ACTIONERROR,'isLoading': false});
                alert('Android要用外网地址');
            }
        );
    }

};
