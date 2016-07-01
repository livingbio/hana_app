import React from 'react'
import {connect} from 'react-redux'
import * as filter_action from '../actions/filter_actions.js'
import * as navigation from '../actions/navigation.js'


export class Filter extends React.Component{
    render(){

        let { years, sbgs, selectedYear, selectedComparison, selectedSbg, onSubmitCallback, onCancelCallback } = this.props;

        let comparisons = [['year', "依照年"], ['month', "依照月份"]];

        let yearNode;
        let comparisonNode;
        let sbgNode;

        return(
            <div className="Background-orange Filter">
                <div className="container">

                    <div className="Nav-title">
                        篩選器
                    </div>

                    <form className="Filter-form" onSubmit={
                        (e) => {
                            e.preventDefault();

                            selectedYear = yearNode.value.trim();
                            selectedComparison = comparisonNode.value.trim();
                            selectedSbg = sbgNode.value.trim();


                            onSubmitCallback({
                                selectedYear,
                                selectedComparison,
                                selectedSbg
                            });

                            return false;
                        }
                    }>
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="form-group Form-item">
                                    <label className="sr-only" htmlFor="queryMonth">Month</label>
                                    <select className="form-control Filter-input selectpicker"

                                            defaultValue={selectedComparison}

                                            ref={ node => {
                                                comparisonNode = node
                                            }}
                                            name="month">
                                        {comparisons.map((comparison, id)=>{
                                            return (<option key={id} value={comparison[0]} >{comparison[1]}</option>)
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className="col-xs-6">
                                {
                                }
                                <div className="form-group Form-item">
                                    <label className="sr-only" htmlFor="queryYear">Year</label>

                                    <select className="form-control Filter-input selectpicker"
                                            defaultValue={selectedYear}
                                            ref={ node => {
                                                yearNode = node
                                            }}
                                            name="year">

                                            {years.map((year, id)=>{
                                                return (<option key={id} value={year}>{year}</option>)
                                            })}

                                    </select>

                                </div>
                            </div>


                            <div className="col-xs-12">
                                <div className="form-group Form-item">
                                    <label className="sr-only" htmlFor="queryCompany">Company</label>
                                        <select className="form-control Filter-input selectpicker"
                                                defaultValue={selectedSbg}
                                                ref={ node => {
                                                    sbgNode = node
                                                }}
                                                name="sbg">
                                            {sbgs.map((sbg, id)=>{
                                                return (<option key={id} value={sbg}>{sbg}</option>)
                                            })}
                                       </select>
                                </div>
                            </div>
                        </div>

                        <div className="row Filter-ButtonRow">
                            <div className="col-xs-6">
                                <a className="btn btn-default Filter-Button--cancel" onClick={
                                    () => {
                                        onCancelCallback();
                                    }
                                }>取消</a>
                            </div>

                            <div className="col-xs-6">
                                <button type="submit" className="btn btn-default Filter-Button">確定</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {

    let filter  = state.filter;

    return {
        ...filter
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitCallback: ({selectedYear, selectedComparison, selectedSbg}) => {

            dispatch(filter_action.updateSelectedFilter({selectedYear, selectedComparison, selectedSbg}));
        },
        onCancelCallback:() =>{
            dispatch(navigation.navigateToTrend())
        }
    };
};


export const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
