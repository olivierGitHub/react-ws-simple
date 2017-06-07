import Reflux from 'reflux';
import $ from 'jquery';
import Actions from '../actions/CalculatorActions.js';

class CalculatorStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.state = {
            res:'0'
        };
        this.listenables = Actions;
    }

    onCalculate(val1, val2)
    {
        var ctx = this;
        $.ajax({
                type: "POST",
                url: "http://localhost:8080/calculate",
                data: JSON.stringify({"val1":val1, "val2":val2}),
                contentType: "application/json; charset=utf-8",
                crossDomain: true,
                dataType: "json",
                success: function(data){
                    ctx.setState({res:data});
                },
                failure: function(errMsg) {
                    alert(errMsg);
                }
          });

    }
}

export default CalculatorStore;
