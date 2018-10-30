import { observable, action, computed } from "mobx";

class Calculator {
    @observable value = 0;
    @observable operator = null;
    @observable currentOperand = 0;
    
    operators = [
        { op: '+', opFunction: (a,b) => a+b },
        { op: '-', opFunction: (a,b) => a-b },
        { op: '*', opFunction: (a,b) => a*b },
        { op: '/', opFunction: (a,b) => a/b }
    ]

    @computed get displayValue() {
        return this.operator ? `${this.value}${this.operator.op}${this.currentOperand}` : `${this.currentOperand}`
    }

    @action addNumber = (value) => this.currentOperand = this.currentOperand*10 + value;

    @action changeOperator = (value) => {
        if (value === 'AC') return this.clear(true);
        this.calcNewValue()
        if (value === '=') return this.clear(false);
        this.operator = this.operators.find(o => o.op === value)
    }

    @action calcNewValue = () => {
        if (this.operator) {
            this.value = this.operator.opFunction(this.value, this.currentOperand)
        }
        else this.value = this.currentOperand;
        this.currentOperand = 0;
    }

    @action clear = (clear) => {
        clear ? this.currentOperand = 0 : this.currentOperand = this.value;
        this.value = 0;
        this.operator = null;
    }
}

export default Calculator;