import React from 'react';
import { observable } from "mobx";
import { observer, inject } from "mobx-react";

@inject('productStore')
@observer
class Pagination extends React.Component{
    @observable previousPage=1;
    
    onClickPrevious = () =>{
        if(this.previousPage>1){
            this.previousPage--;
            this.props.productStore.offSetValue-=3;
            this.props.productStore.getProductList();
        }
    }

    onClickNext = () =>{
        if(this.previousPage<=this.props.productStore.totalNumOfPages){
            this.previousPage++;
            this.props.productStore.offSetValue+=3;
            this.props.productStore.getProductList();
        }
    }
    render(){
        return(
            <div>
                <button onClick={this.onClickPrevious}>Previous</button>
                <p><span>{this.previousPage}</span> <span>{this.props.productStore.totalNumOfPages}</span></p>
                <button onClick={this.onClickNext}>Next</button>
            </div>
        )
    }
}

export default Pagination;