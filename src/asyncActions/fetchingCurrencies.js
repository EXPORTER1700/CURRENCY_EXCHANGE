import {addManyCurrenciesAction} from '../store/currencies';

export const fetchinCurrencies = () => {
    return dispatch => {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then(response => response.json())
            .then(data => dispatch(addManyCurrenciesAction(data)));
    }
}