import { observable, action, computed } from "mobx";

class Calculator {
    @observable value = 0;
    @observable operator = null;
    @observable currentOperand = '';
    
    @computed get displayValue() {
        return this.operator ? `${this.value}${this.operator}${this.currentOperand}` : `${this.value}`
    }

    @action addNumber = () => {

    }
}

export default Calculator;