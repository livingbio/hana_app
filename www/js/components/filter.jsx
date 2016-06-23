var React = require('react');

export class Filter extends React.Component{
    render(){

        let { monthes, years, sbgs, onSubmitCallback, onCancelCallback } = this.props;


        return(
            <div id="filter" className="Background-orange Filter">
                <div className="container">

                    <div className="Nav-title">
                        篩選器
                    </div>

                    <form className="Filter-form">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="form-group Form-item">
                                    <label className="sr-only" htmlFor="queryYear">Year</label>

                                    <select className="form-control Filter-input selectpicker" name="year">
                                        {years.map((year, id)=>{
                                            return <option key={id} value="{year}">{year}</option>
                                        })}
                                    </select>

                                </div>
                            </div>

                            <div className="col-xs-6">
                                <div className="form-group Form-item">
                                    <label className="sr-only" htmlFor="queryMonth">Month</label>
                                    <select className="form-control Filter-input selectpicker" name="month">
                                        {monthes.map((month, id)=>{
                                            return <option key={id} value="{month}">{month}</option>
                                        })}
                                   </select>
                                </div>
                            </div>

                            <div className="col-xs-12">
                                <div className="form-group Form-item">
                                    <label className="sr-only" htmlFor="queryCompany">Company</label>
                                        <select className="form-control Filter-input selectpicker" name="sbg">
                                            {sbgs.map((sbg, id)=>{
                                                return <option key={id} value="{sbg}">{sbg}</option>
                                            })}
                                       </select>
                                </div>
                            </div>
                        </div>

                        <div className="row Filter-ButtonRow">
                            <div className="col-xs-6">
                                <button className="btn btn-default Filter-Button--cancel">取消</button>
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

