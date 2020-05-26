import React from 'react';
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import { PagingContainer,PreviousButton,NextButton,PageNumber,TotalNumOfPages,DivisionSymbol } from "./styleComponents";

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
        if(this.previousPage<this.props.productStore.totalNumOfPages){
            this.previousPage++;
            this.props.productStore.offSetValue+=3;
            this.props.productStore.getProductList();
        }
    }
    render(){
        return(
            <PagingContainer>
                <PreviousButton onClick={this.onClickPrevious} disabled={this.previousPage===1?true:false}>{'<'}</PreviousButton>
                <PageNumber>{this.previousPage}</PageNumber> 
                <DivisionSymbol>/</DivisionSymbol>
                <TotalNumOfPages>{this.props.productStore.totalNumOfPages}</TotalNumOfPages>
                <NextButton onClick={this.onClickNext} disabled={this.previousPage===this.totalNumOfPages?true:false}>{'>'}</NextButton>
            </PagingContainer>
        );
    }
}

export default Pagination;